import React, { useState, useEffect } from 'react'
import EmployerTab from './components/EmployerTab'
import CATab from './components/CATab'
import ArticleshipTab from './components/ArticleshipTab'
import CompanyTab from './components/CompanyTab'
import { hiringHighlights, platformStats } from './content'

const tabs = [
  { id: 'jobs', label: 'Jobs' },
  { id: 'company', label: 'Companies' },
  { id: 'articleship', label: 'Articleship' },
  { id: 'cas', label: 'CA Profiles' },
]

export default function App() {
  const [tab, setTab] = useState('jobs')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // lock body scroll when drawer open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    function handleResize() {
      if (window.innerWidth > 640 && mobileMenuOpen) setMobileMenuOpen(false)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mobileMenuOpen])

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="page-wrap topbar-inner">
          <div className="brand-block">
            <div className="brand-mark" aria-hidden="true">
              <span className="brand-chip chip-top-left" />
              <span className="brand-chip chip-top-right" />
              <span className="brand-chip chip-bottom-left" />
              <span className="brand-chip chip-bottom-right" />
              <span className="brand-stem" />
            </div>
            <div>
              <h1>CharterPrime</h1>
              <p className="brand-sub">
                <span className="ca-highlight">Chartered Accountant</span> hiring platform
              </p>
            </div>
          </div>

          <nav className="topbar-nav" aria-label="Primary">
            <button type="button" onClick={() => setTab('jobs')}>
              Jobs
            </button>
            <button type="button" onClick={() => setTab('company')}>
              Companies
            </button>
            <button type="button" onClick={() => setTab('articleship')}>
              Articleship
            </button>
          </nav>

          <div className="topbar-actions">
            <button type="button" className="nav-button ghost">
              Sign in
            </button>
            <button type="button" className="nav-button" onClick={() => setTab('company')}>
              Post a job
            </button>
            <button
              type="button"
              className="hamburger"
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="mobile-drawer" role="dialog" aria-modal="true">
              <div className="drawer-backdrop" onClick={() => setMobileMenuOpen(false)} />
              <div className="drawer-panel">
                <div className="drawer-header">
                  <strong>CharterPrime</strong>
                  <button className="drawer-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">×</button>
                </div>
                <div className="drawer-links">
                  <button onClick={() => { setTab('jobs'); setMobileMenuOpen(false) }}>Jobs</button>
                  <button onClick={() => { setTab('company'); setMobileMenuOpen(false) }}>Companies</button>
                  <button onClick={() => { setTab('articleship'); setMobileMenuOpen(false) }}>Articleship</button>
                  <button onClick={() => { setTab('cas'); setMobileMenuOpen(false) }}>CA Profiles</button>
                </div>
                <div className="drawer-actions">
                  <button className="nav-button" onClick={() => { setTab('company'); setMobileMenuOpen(false) }}>
                    Post a job
                  </button>
                  <button className="nav-button ghost" onClick={() => setMobileMenuOpen(false)}>Sign in</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="page-wrap hero-center">
            <p className="eyebrow">Verified jobs, company hiring, and articleship</p>
            <h2>Hire and Get Hired in Finance.</h2>
            <p className="hero-text">Clear Roles. Transparent CTC. Better Decisions.</p>
            <p className="hero-tagline">
              A focused platform for <span className="ca-highlight">Chartered Accountants</span>,
              firms, and finance teams.
            </p>

            <div className="hero-actions centered">
              <button type="button" className="nav-button" onClick={() => setTab('jobs')}>
                Explore jobs
              </button>
              <button
                type="button"
                className="nav-button ghost"
                onClick={() => setTab('company')}
              >
                For companies
              </button>
            </div>

            <div className="metric-row">
              <span>Verified listings</span>
              <span>CA-focused roles</span>
              <span>Articleship opportunities</span>
            </div>

            <div className="hero-showcase" aria-hidden="true">
              <div className="showcase-card showcase-main">
                <div className="showcase-top">
                  <span className="showcase-badge">Verified role</span>
                  <span className="showcase-status">Live</span>
                </div>
                <strong>Finance Manager</strong>
                <p>Mumbai • ₹18-24 LPA • 5+ years</p>
              </div>
              {/* bubbles removed for a clean hero layout */}
              <div className="showcase-card showcase-side">
                <span>Companies</span>
                <strong>190+</strong>
              </div>
              <div className="showcase-card showcase-side alt">
                <span>Profiles</span>
                <strong>CA-ready</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="mock-section">
          <div className="page-wrap">
            <div className="workspace-intro">
              <div>
                <p className="section-label">Mock Interviews</p>
                <h3>Schedule a short mock interview — Know your skills</h3>
                <p className="problem-text">A 30-minute mock interview with feedback. Pick topics and a preferred slot. Cost: ₹500 (mock payment simulated).</p>
              </div>
            </div>

            <div className="tab-shell">
              <div className="mock-card">
                <form className="stack-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="topic-list">
                    <label className="section-label">Topics</label>
                    {['Audit', 'Tax Compliance', 'Financial Reporting', 'ERP/Systems', 'Excel & Modelling'].map((t) => (
                      <label key={t} className="checkline">
                        <input type="checkbox" name="topics" value={t} onChange={(ev) => {
                          const checked = ev.target.checked
                          const value = ev.target.value
                          const current = JSON.parse(localStorage.getItem('mock_topics') || '[]')
                          if (checked) current.push(value)
                          else {
                            const idx = current.indexOf(value)
                            if (idx >= 0) current.splice(idx, 1)
                          }
                          localStorage.setItem('mock_topics', JSON.stringify(current))
                        }} />
                        <span>{t}</span>
                      </label>
                    ))}
                  </div>

                  <div className="split-inputs">
                    <input placeholder="Your name" id="mock-name" />
                    <input placeholder="Email" id="mock-email" />
                  </div>

                  <div className="split-inputs">
                    <input type="date" id="mock-date" />
                    <input type="time" id="mock-time" />
                  </div>

                  <div className="mock-actions">
                    <button type="button" className="nav-button" onClick={() => {
                      const name = document.getElementById('mock-name').value.trim()
                      const email = document.getElementById('mock-email').value.trim()
                      const date = document.getElementById('mock-date').value
                      const time = document.getElementById('mock-time').value
                      const topics = JSON.parse(localStorage.getItem('mock_topics') || '[]')
                      if (!name || !email || !date || !time || topics.length === 0) {
                        alert('Please enter name, email, pick a slot, and choose at least one topic.')
                        return
                      }
                      const entry = { id: 'mock_' + Date.now(), name, email, date, time, topics, price:500 }
                      const list = JSON.parse(localStorage.getItem('mock_interviews') || '[]')
                      list.push(entry)
                      localStorage.setItem('mock_interviews', JSON.stringify(list))
                      localStorage.removeItem('mock_topics')
                      document.getElementById('mock-name').value = ''
                      document.getElementById('mock-email').value = ''
                      document.getElementById('mock-date').value = ''
                      document.getElementById('mock-time').value = ''
                      alert('Scheduled! We saved your mock interview (simulated) for ' + date + ' ' + time + '. Amount: ₹500')
                    }}>
                      Schedule Mock Interview — ₹500
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="stat-section">
          <div className="page-wrap stat-strip">
            {platformStats.map((stat) => (
              <article key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="trust-section">
          <div className="page-wrap trust-grid">
            <div className="trust-copy">
              <p className="section-label">Built with clarity</p>
              <h3>
                Built for <span className="ca-highlight">Chartered Accountant</span> hiring.
              </h3>
            </div>

            <div className="trust-cards">
              {hiringHighlights.map((item) => (
                <article key={item.title} className="micro-card">
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="problem-section">
          <div className="page-wrap problem-grid">
            <div className="problem-copy">
              <p className="section-label">The problem</p>
              <h3>
                <span className="ca-highlight">Chartered Accountant</span> hiring is still
                fragmented, slow, and difficult to trust.
              </h3>
              <p className="problem-text">
                Too many listings are vague, salary details are missing, and serious candidates
                struggle to tell which opportunities are worth their time.
              </p>
            </div>

            <div className="problem-points">
              <article className="problem-card">
                <span className="highlight-line">Unclear job descriptions</span>
                <p>Many roles do not explain the actual work, reporting line, or responsibilities.</p>
              </article>
              <article className="problem-card">
                <span className="highlight-line">Missing CTC visibility</span>
                <p>Candidates often apply without knowing the compensation range or level fit.</p>
              </article>
              <article className="problem-card">
                <span className="highlight-line">No CA-specific focus</span>
                <p>
                  General job portals rarely reflect how{' '}
                  <span className="ca-highlight inline">Chartered Accountant</span> careers
                  actually progress.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="solution-section">
          <div className="page-wrap solution-grid">
            <div className="solution-visual">
              <div className="solution-panel">
                <p className="section-label">What changes here</p>
                <h3>Cleaner discovery. Better matching. Faster hiring.</h3>
              </div>
            </div>

            <div className="solution-list">
              <article className="solution-card">
                <span className="highlight-line accent-highlight">Verified company roles</span>
                <p>Serious openings with clearer role context and stronger hiring signals.</p>
              </article>
              <article className="solution-card">
                <span className="highlight-line accent-highlight">Visible CTC and experience</span>
                <p>Less ambiguity, better filtering, and more relevant applications.</p>
              </article>
              <article className="solution-card">
                <span className="highlight-line accent-highlight">One platform for jobs and articleship</span>
                <p>Professionals and students both get a focused path built for finance careers.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="workspace-section">
          <div className="page-wrap">
            <div className="workspace-intro">
              <div>
                <p className="section-label">Workspace</p>
                <h3>
                  {tab === 'jobs' && 'Browse verified CA jobs'}
                  {tab === 'company' && 'Post and manage company roles'}
                  {tab === 'articleship' && 'Explore articleship openings'}
                  {tab === 'cas' && 'Review CA profiles'}
                </h3>
              </div>
            </div>

            <div className="tab-shell">
              <div className="tab-pills" aria-label="Section switcher">
                {tabs.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={tab === item.id ? 'active' : ''}
                    onClick={() => setTab(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {tab === 'jobs' && <EmployerTab />}
              {tab === 'company' && <CompanyTab />}
              {tab === 'articleship' && <ArticleshipTab />}
              {tab === 'cas' && <CATab />}
            </div>
          </div>
        </section>

        <section className="pricing-section">
          <div className="page-wrap pricing-wrap">
            <div className="pricing-copy">
              <p className="section-label">Membership</p>
              <h3>Choose a simple membership plan.</h3>
              <p className="pricing-text">
                Choose a monthly or annual membership to access the full platform experience.
              </p>
            </div>

            <div className="pricing-grid">
              <article className="pricing-card">
                <p className="pricing-label">Monthly</p>
                <strong>₹250</strong>
                <span>per month</span>
                <ul className="pricing-points">
                  <li>Access verified roles</li>
                  <li>Browse CA profiles</li>
                  <li>Apply across the platform</li>
                </ul>
                <button type="button" className="nav-button">
                  Join Monthly
                </button>
              </article>

              <article className="pricing-card featured-pricing best-value">
                <div className="best-badge">Best value</div>
                <p className="pricing-label">Annual</p>
                <strong>₹2,500</strong>
                <span>per year</span>
                <ul className="pricing-points">
                  <li>Everything in Monthly</li>
                  <li>Best value for long-term access</li>
                  <li>Priority membership plan</li>
                </ul>
                <button type="button" className="nav-button">
                  Join Annually
                </button>
              </article>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="page-wrap footer-grid">
          <div className="footer-block">
            <div className="brand-block footer-brand">
              <div className="brand-mark" aria-hidden="true">
                <span className="brand-chip chip-top-left" />
                <span className="brand-chip chip-top-right" />
                <span className="brand-chip chip-bottom-left" />
                <span className="brand-chip chip-bottom-right" />
                <span className="brand-stem" />
              </div>
              <div>
                <h4>CASE PLATFORMS</h4>
              </div>
            </div>

            <address className="footer-address">
              #51, 3rd Floor, Le Parc Richmonde, Richmond Road,
              <br /> Shanthala Nagar, Richmond Town, Bangalore - 560025
            </address>

            <div className="footer-social">
              <span>Find us on:</span>
              <div className="social-icons">
                <span className="social">f</span>
                <span className="social">t</span>
                <span className="social">▶</span>
                <span className="social">in</span>
                <span className="social">✳</span>
              </div>
            </div>

            <p className="footer-contact">Contact us on support@smallcase.com</p>
          </div>

          <div className="footer-links">
            <div>
              <strong>Company</strong>
              <ul>
                <li>Help & Support</li>
                <li>About</li>
                <li>Blog</li>
                <li>Press</li>
                <li>Careers</li>
              </ul>
            </div>

            <div>
              <strong>Resources</strong>
              <ul>
                <li>Calculators</li>
                <li>Search Stocks</li>
                <li>Investment Guides</li>
                <li>Popular Sectors</li>
                <li>Blog</li>
              </ul>
            </div>

            <div>
              <strong>Offerings</strong>
              <ul>
                <li>Publisher</li>
                <li>Gateway</li>
                <li>Brokers</li>
                <li>Tickertape</li>
                <li>Ecosystem</li>
              </ul>
            </div>

            <div>
              <strong>Fine Print</strong>
              <ul>
                <li>Disclosures</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Investment Tools</li>
                <li>Additional Disclosures</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
