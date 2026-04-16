import React, { useEffect, useState } from 'react'
import { fetchJobs } from '../api'
import { defaultJobFilters, employerInsights } from '../content'

const maskCtc = (value) => {
  const digits = String(Math.max(0, Number(value || 0)))
  if (digits.length <= 2) return '₹xx'
  return `₹${digits.slice(0, 2)}xxxx`
}

export default function EmployerTab() {
  const [jobs, setJobs] = useState([])
  const [filter, setFilter] = useState(defaultJobFilters)

  async function load(activeFilter = filter) {
    const q = []
    if (activeFilter.q) q.push(`q=${encodeURIComponent(activeFilter.q)}`)
    if (activeFilter.skills) q.push(`skills=${encodeURIComponent(activeFilter.skills)}`)
    if (activeFilter.minCtc) q.push(`minCtc=${encodeURIComponent(activeFilter.minCtc)}`)
    if (activeFilter.experience) q.push(`experience=${encodeURIComponent(activeFilter.experience)}`)
    if (activeFilter.verifiedOnly) q.push('verified=true')
    const arr = await fetchJobs(q.join('&'))
    setJobs(arr)
  }

  useEffect(() => {
    load(defaultJobFilters)
  }, [])

  return (
    <div className="tab-panel">
      <div className="search-row">
        <input
          placeholder="Search by role, company, or skill"
          value={filter.q}
          onChange={(event) => setFilter({ ...filter, q: event.target.value })}
        />
        <input
          placeholder="Skills"
          value={filter.skills}
          onChange={(event) => setFilter({ ...filter, skills: event.target.value })}
        />
        <button type="button" onClick={() => load()}>
          Search
        </button>
      </div>

      <div className="workspace-grid">
        <aside className="workspace-sidebar">
          <section className="sidebar-card">
            <p className="section-label">Filters</p>
            <div className="filter-group">
              <label className="checkline">
                <input
                  type="checkbox"
                  checked={filter.verifiedOnly}
                  onChange={(event) =>
                    setFilter({ ...filter, verifiedOnly: event.target.checked })
                  }
                />
                <span>Verified jobs only</span>
              </label>
            </div>
            <div className="filter-group">
              <label>Minimum CTC</label>
              <input
                placeholder="e.g. 1200000"
                type="number"
                value={filter.minCtc}
                onChange={(event) => setFilter({ ...filter, minCtc: event.target.value })}
              />
            </div>
            <div className="filter-group">
              <label>Minimum experience</label>
              <input
                placeholder="e.g. 3"
                type="number"
                value={filter.experience}
                onChange={(event) => setFilter({ ...filter, experience: event.target.value })}
              />
            </div>
          </section>

          <section className="sidebar-card">
            <p className="section-label">CA job feed</p>
            <div className="track-list">
              <div className="track-card">
                <strong>CTC visible</strong>
                <p>Compare compensation quickly.</p>
              </div>
              <div className="track-card">
                <strong>Skills upfront</strong>
                <p>See audit, tax, reporting, and ERP fit.</p>
              </div>
              <div className="track-card">
                <strong>Company tab</strong>
                <p>Use the Companies section to post roles.</p>
              </div>
            </div>
          </section>
        </aside>

        <section className="workspace-main">
          <div className="results-header">
            <div>
              <p className="section-label">Verified CA jobs</p>
              <h3>{jobs.length} opportunities</h3>
            </div>
            <div className="insight-inline">
              {employerInsights.map((item) => (
                <span key={item.label}>{item.metric}</span>
              ))}
            </div>
          </div>

          <div className="jobs-paywall-shell">
            <div className="listing-grid jobs-preview">
              {jobs.map((job, index) => (
                <article
                  key={job.id}
                  className={`listing-card job-card ${index === 0 ? 'featured-card' : ''}`}
                >
                  <div className="listing-topline">
                    <div className="brand-lockup">
                      <div className="logo-tile">{job.company.slice(0, 1)}</div>
                      <div>
                        <h4>{job.title}</h4>
                        <p className="company-line">
                          {job.company} · {job.location || 'India'}
                        </p>
                      </div>
                    </div>
                    <span className={`status-badge ${job.verified ? 'verified' : 'pending'}`}>
                      {job.verified ? 'Verified' : 'Review'}
                    </span>
                  </div>

                  <div className="badge-row">
                    <span className="mini-badge">{job.experience}+ yrs</span>
                    <span className="mini-badge">Full-time</span>
                    {index === 0 && <span className="mini-badge dark">Featured</span>}
                  </div>

                  <p className="listing-copy">{job.description}</p>

                  <div className="tag-row">
                    {(job.skills || []).map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="card-footer">
                    <div className="job-card-cta">
                      <span className="salary-focus">{maskCtc(job.ctc)} CTC</span>
                      <span className="posted-line">Unlock membership to view full salary</span>
                    </div>
                    <button type="button" className="small">Apply Now</button>
                  </div>
                </article>
              ))}
            </div>

            <div className="jobs-paywall" aria-hidden="true">
              <div className="paywall-card">
                <div className="paywall-lock">LOCK</div>
                <p className="section-label">Members only</p>
                <h4>Unlock Full Job Access</h4>
                <p className="paywall-copy">
                  View complete salaries, open full job details, and apply across the platform.
                </p>
                <div className="paywall-actions">
                  <button type="button" className="nav-button">Join Monthly</button>
                  <button type="button" className="nav-button ghost">Join Annually</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
