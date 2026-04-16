import React, { useEffect, useState } from 'react'
import { fetchJobs, postJob, verifyJob } from '../api'

const maskCtc = (value) => {
  const digits = String(Math.max(0, Number(value || 0)))
  if (digits.length <= 2) return '₹xx'
  return `₹${digits.slice(0, 2)}xxxx`
}

const hiringSteps = [
  'Post role with CTC and skills',
  'Verify company requirement',
  'Review CA profiles faster',
]

export default function CompanyTab() {
  const [jobs, setJobs] = useState([])
  const [form, setForm] = useState({
    title: '',
    company: '',
    location: '',
    ctc: 1200000,
    experience: 2,
    skills: '',
    description: '',
  })

  useEffect(() => {
    load()
  }, [])

  async function load() {
    const data = await fetchJobs()
    setJobs(data)
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
    const created = await postJob(payload)
    setJobs((current) => [created, ...current])
    setForm({
      title: '',
      company: '',
      location: '',
      ctc: 1200000,
      experience: 2,
      skills: '',
      description: '',
    })
  }

  async function handleVerify(id) {
    await verifyJob(id)
    load()
  }

  return (
    <div className="tab-panel">
      <div className="company-hero">
        <div>
          <p className="section-label">Company desk</p>
          <h3>Post CA jobs with more structure.</h3>
          <p className="company-subline">CTC, skills, experience, location, and role clarity.</p>
        </div>
        <div className="insight-inline">
          {hiringSteps.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="preview-shell">
        <div className="workspace-grid content-preview">
        <aside className="workspace-sidebar">
          <section className="sidebar-card">
            <p className="section-label">Post a company role</p>
            <form onSubmit={submit} className="stack-form compact">
              <input
                placeholder="Role title"
                value={form.title}
                onChange={(event) => setForm({ ...form, title: event.target.value })}
                required
              />
              <input
                placeholder="Company name"
                value={form.company}
                onChange={(event) => setForm({ ...form, company: event.target.value })}
                required
              />
              <input
                placeholder="Location"
                value={form.location}
                onChange={(event) => setForm({ ...form, location: event.target.value })}
              />
              <div className="split-inputs">
                <input
                  placeholder="CTC"
                  type="number"
                  value={form.ctc}
                  onChange={(event) => setForm({ ...form, ctc: Number(event.target.value) })}
                />
                <input
                  placeholder="Experience"
                  type="number"
                  value={form.experience}
                  onChange={(event) => setForm({ ...form, experience: Number(event.target.value) })}
                />
              </div>
              <input
                placeholder="Skills required"
                value={form.skills}
                onChange={(event) => setForm({ ...form, skills: event.target.value })}
              />
              <textarea
                rows="4"
                placeholder="Role summary"
                value={form.description}
                onChange={(event) => setForm({ ...form, description: event.target.value })}
              />
              <button type="submit">Publish company job</button>
            </form>
          </section>

          <section className="sidebar-card">
            <p className="section-label">What to include</p>
            <div className="track-list">
              <div className="track-card">
                <strong>Compensation</strong>
                <p>Add a real CTC band.</p>
              </div>
              <div className="track-card">
                <strong>Skills</strong>
                <p>List audit, tax, reporting, ERP, or finance tools.</p>
              </div>
              <div className="track-card">
                <strong>Context</strong>
                <p>Tell candidates what the role actually owns.</p>
              </div>
            </div>
          </section>
        </aside>

        <section className="workspace-main">
          <div className="results-header">
            <div>
              <p className="section-label">Recent company postings</p>
              <h3>{jobs.length} roles on the platform</h3>
            </div>
            <div className="insight-inline">
              <span>Company workflow</span>
              <span>Verification ready</span>
              <span>CA-focused</span>
            </div>
          </div>

          <div className="listing-grid">
            {jobs.map((job) => (
              <article key={job.id} className="listing-card company-card">
                <div className="listing-topline">
                  <div className="brand-lockup">
                    <div className="logo-tile green">{job.company.slice(0, 1)}</div>
                    <div>
                      <h4>{job.title}</h4>
                      <p className="company-line">
                        {job.company} · {job.location || 'India'}
                      </p>
                    </div>
                  </div>
                  <span className={`status-badge ${job.verified ? 'verified' : 'pending'}`}>
                    {job.verified ? 'Verified' : 'Pending'}
                  </span>
                </div>

                <div className="badge-row">
                  <span className="mini-badge accent">{maskCtc(job.ctc)}</span>
                  <span className="mini-badge">{job.experience}+ yrs</span>
                  <span className="mini-badge">Company post</span>
                </div>

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
                    <span className="posted-line">Unlock membership to manage company hiring tools</span>
                  </div>
                  {!job.verified && (
                    <button type="button" className="ghost small" onClick={() => handleVerify(job.id)}>
                      Verify
                    </button>
                  )}
                  {job.verified && <button type="button" className="small">Manage</button>}
                </div>
              </article>
            ))}
          </div>
        </section>
        </div>

        <div className="content-paywall" aria-hidden="true">
          <div className="paywall-card">
            <div className="paywall-lock">LOCK</div>
            <p className="section-label">Members only</p>
            <h4>Unlock the Company Desk</h4>
            <p className="paywall-copy">
              Publish roles, manage postings, view full CTC details, and unlock the company workflow.
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
