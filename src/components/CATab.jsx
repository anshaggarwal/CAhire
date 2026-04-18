import React, { useEffect, useState } from 'react'
import { fetchCAs, postCA } from '../api'
import { candidateSignals } from '../content'

const maskCtc = (value) => {
  const digits = String(Math.max(0, Number(value || 0)))
  if (digits.length <= 2) return '₹xx'
  return `₹${digits.slice(0, 2)}xxxx`
}

export default function CATab() {
  const [cas, setCas] = useState([])
  const [form, setForm] = useState({
    name: '',
    qualification: '',
    experience: 0,
    skills: '',
    expectedCtc: 900000,
    location: '',
    profile: '',
  })

  useEffect(() => {
    load()
  }, [])

  async function load() {
    const data = await fetchCAs()
    setCas(data)
  }

  async function submit(event) {
    event.preventDefault()
    const payload = {
      ...form,
      skills: form.skills
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean),
    }
    const created = await postCA(payload)
    setCas((current) => [created, ...current])
    setForm({
      name: '',
      qualification: '',
      experience: 0,
      skills: '',
      expectedCtc: 900000,
      location: '',
      profile: '',
    })
  }

  return (
    <div className="tab-panel">
      <div className="search-row">
        <input placeholder="Search by name, skill, or domain" />
        <input placeholder="Preferred city or expected CTC" />
        <button type="button">Search</button>
      </div>

      <div className="preview-shell">
        <div className="workspace-grid content-preview">
        <aside className="workspace-sidebar">
          <section className="sidebar-card">
            <p className="section-label">Create profile</p>
            <form onSubmit={submit} className="stack-form compact">
              <input
                placeholder="Full name"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                required
              />
              <input
                placeholder="Qualification"
                value={form.qualification}
                onChange={(event) => setForm({ ...form, qualification: event.target.value })}
              />
              <div className="split-inputs">
                <input
                  placeholder="Experience"
                  type="number"
                  value={form.experience}
                  onChange={(event) => setForm({ ...form, experience: Number(event.target.value) })}
                />
                <input
                  placeholder="Expected CTC"
                  type="number"
                  value={form.expectedCtc}
                  onChange={(event) => setForm({ ...form, expectedCtc: Number(event.target.value) })}
                />
              </div>
              <input
                placeholder="Preferred location"
                value={form.location}
                onChange={(event) => setForm({ ...form, location: event.target.value })}
              />
              <input
                placeholder="Core skills"
                value={form.skills}
                onChange={(event) => setForm({ ...form, skills: event.target.value })}
              />
              <textarea
                rows="4"
                placeholder="Professional summary"
                value={form.profile}
                onChange={(event) => setForm({ ...form, profile: event.target.value })}
              />
              <button type="submit">Publish profile</button>
            </form>
          </section>

          <section className="sidebar-card">
            <p className="section-label">Popular skills</p>
            <div className="tag-cloud">
              {candidateSignals.map((signal) => (
                <span key={signal} className="tag">
                  {signal}
                </span>
              ))}
            </div>
          </section>
        </aside>

        <section className="workspace-main">
          <div className="results-header">
            <div>
              <p className="section-label">CA profiles</p>
              <h3>{cas.length} professionals listed</h3>
            </div>
            <div className="insight-inline">
              <span>Expected CTC visible</span>
              <span>Role-ready profiles</span>
            </div>
          </div>

          <div className="listing-grid">
            {cas.map((candidate) => (
              <article key={candidate.id} className="listing-card profile-card">
                <div className="listing-topline">
                  <div className="brand-lockup">
                    <div className="logo-tile">{candidate.name.slice(0, 1)}</div>
                    <div>
                      <h4>{candidate.name}</h4>
                      <p className="company-line">
                        {candidate.qualification || (
                          <span className="ca-highlight inline">Chartered Accountant</span>
                        )}{' '}
                        ·{' '}
                        {candidate.location || 'India'}
                      </p>
                    </div>
                  </div>
                  <span className="status-badge verified">Open</span>
                </div>

                <div className="badge-row">
                  <span className="mini-badge accent">{maskCtc(candidate.expectedCtc)}</span>
                  <span className="mini-badge">{candidate.experience}+ yrs</span>
                  <span className="mini-badge">CA Talent</span>
                </div>

                <p className="listing-copy">{candidate.profile}</p>

                <div className="tag-row">
                  {(candidate.skills || []).map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="card-footer">
                  <div className="job-card-cta">
                    <span className="salary-focus">{maskCtc(candidate.expectedCtc)} Expected CTC</span>
                    <span className="posted-line">Unlock membership to view full profiles</span>
                  </div>
                  <button type="button" className="small">Connect</button>
                </div>
              </article>
            ))}
          </div>
        </section>
        </div>

        <div className="content-paywall" aria-hidden="true">
          <div className="paywall-card">
                <div className="paywall-lock">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
            <p className="section-label">Members only</p>
            <h4>Unlock CA Profiles</h4>
            <p className="paywall-copy">
              View complete expected CTC, full profile details, and connect directly with candidates.
            </p>
            <div className="paywall-actions">
              <button type="button" className="nav-button">Join Monthly</button>
              <button type="button" className="nav-button ghost">Join Annually</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
