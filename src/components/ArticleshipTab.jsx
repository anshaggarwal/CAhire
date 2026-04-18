import React, { useEffect, useState } from 'react'
import { fetchArticles, postArticle } from '../api'
import { articleshipTracks } from '../content'

const maskStipend = (value) => {
  const digits = String(Math.max(0, Number(value || 0)))
  if (digits.length <= 2) return '₹xx'
  return `₹${digits.slice(0, 2)}xxx`
}

export default function ArticleshipTab() {
  const [arts, setArts] = useState([])
  const [form, setForm] = useState({
    firm: '',
    location: '',
    durationMonths: 36,
    stipend: 10000,
    skillsToLearn: '',
    description: '',
  })

  useEffect(() => {
    load()
  }, [])

  async function load() {
    const data = await fetchArticles()
    setArts(data)
  }

  async function submit(event) {
    event.preventDefault()
    const payload = {
      ...form,
      skillsToLearn: form.skillsToLearn
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean),
    }
    const created = await postArticle(payload)
    setArts((current) => [created, ...current])
    setForm({
      firm: '',
      location: '',
      durationMonths: 36,
      stipend: 10000,
      skillsToLearn: '',
      description: '',
    })
  }

  return (
    <div className="tab-panel">
      <div className="search-row">
        <input placeholder="Search firms or exposure type" />
        <input placeholder="City or stipend preference" />
        <button type="button">Search</button>
      </div>

      <div className="preview-shell">
        <div className="workspace-grid content-preview">
        <aside className="workspace-sidebar">
          <section className="sidebar-card">
            <p className="section-label">About articleship</p>
            <h4>Practical CA training with real work exposure</h4>
            <p className="muted">
              Students usually look for stipend, mentorship, audit and tax exposure, and a clear
              learning environment during the 36-month articleship journey.
            </p>

            <div className="track-list">
              {articleshipTracks.map((track) => (
                <div key={track.title} className="track-card">
                  <strong>{track.title}</strong>
                  <p>{track.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="sidebar-card">
            <p className="section-label">Post articleship</p>
            <form onSubmit={submit} className="stack-form compact">
              <input
                placeholder="Firm name"
                value={form.firm}
                onChange={(event) => setForm({ ...form, firm: event.target.value })}
                required
              />
              <input
                placeholder="Location"
                value={form.location}
                onChange={(event) => setForm({ ...form, location: event.target.value })}
              />
              <div className="split-inputs">
                <input
                  placeholder="Duration"
                  type="number"
                  value={form.durationMonths}
                  onChange={(event) =>
                    setForm({ ...form, durationMonths: Number(event.target.value) })
                  }
                />
                <input
                  placeholder="Monthly stipend"
                  type="number"
                  value={form.stipend}
                  onChange={(event) => setForm({ ...form, stipend: Number(event.target.value) })}
                />
              </div>
              <input
                placeholder="Skills and exposure"
                value={form.skillsToLearn}
                onChange={(event) => setForm({ ...form, skillsToLearn: event.target.value })}
              />
              <textarea
                rows="4"
                placeholder="Describe the training environment"
                value={form.description}
                onChange={(event) => setForm({ ...form, description: event.target.value })}
              />
              <button type="submit">Post articleship</button>
            </form>
          </section>
        </aside>

        <section className="workspace-main">
          <div className="results-header">
            <div>
              <p className="section-label">Articleship openings</p>
              <h3>{arts.length} firms hiring students</h3>
            </div>
            <div className="insight-inline">
              <span>36 month track</span>
              <span>Mentorship focused</span>
              <span>Stipend clarity</span>
            </div>
          </div>

          <div className="listing-grid">
            {arts.map((article, index) => (
              <article
                key={article.id}
                className={`listing-card articleship-card ${index === 0 ? 'featured-card' : ''}`}
              >
                <div className="listing-topline">
                  <div className="brand-lockup">
                    <div className="logo-tile soft">{article.firm.slice(0, 1)}</div>
                    <div>
                      <h4>{article.firm}</h4>
                      <p className="company-line">
                        {article.location || 'India'} · {article.durationMonths} months
                      </p>
                    </div>
                  </div>
                  <span className="status-badge verified">Open</span>
                </div>

                <div className="badge-row">
                  <span className="mini-badge accent">{maskStipend(article.stipend)} / month</span>
                  <span className="mini-badge">Articleship</span>
                  <span className="mini-badge">Practical training</span>
                </div>

                <p className="listing-copy">{article.description}</p>

                <div className="tag-row">
                  {(article.skillsToLearn || []).map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="card-footer">
                  <div className="job-card-cta">
                    <span className="salary-focus">{maskStipend(article.stipend)} / month</span>
                    <span className="posted-line">Unlock membership to view full articleship details</span>
                  </div>
                  <button type="button" className="small">View Opening</button>
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
            <h4>Unlock Articleship Access</h4>
            <p className="paywall-copy">
              View full stipend details, firm information, and complete articleship opportunities.
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
