import React, { useState, useEffect } from 'react'
import EmployerTab from './components/EmployerTab'
import CATab from './components/CATab'
import ArticleshipTab from './components/ArticleshipTab'
import CompanyTab from './components/CompanyTab'
import AluminiTab from './components/AluminiTab'
import { hiringHighlights, platformStats } from './content'

const tabs = [
  { id: 'jobs', label: 'Jobs' },
  { id: 'company', label: 'Companies' },
  { id: 'articleship', label: 'Articleship' },
  { id: 'alumini', label: 'Alumini' },
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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.stat-section, .trust-section, .problem-section, .solution-section, .workspace-section, .mock-section, .meet-alumini-section, .pricing-section').forEach((el) => {
      observer.observe(el)
    })

    return () => {
      window.removeEventListener('resize', handleResize)
      observer.disconnect()
    }
  }, [mobileMenuOpen])

  return (
    <div className="app-shell">
      <div className="bg-bubbles-container" style={{position: 'fixed', zIndex: -2}}>
        <div className="bg-bubble bubble-1" style={{opacity: 0.03}}></div>
        <div className="bg-bubble bubble-3" style={{opacity: 0.03}}></div>
        <div className="bg-bubble bubble-5" style={{opacity: 0.03}}></div>
        <div className="bg-bubble bubble-7" style={{opacity: 0.03}}></div>
        <div className="bg-bubble bubble-2" style={{opacity: 0.03}}></div>
        <div className="bg-bubble bubble-4" style={{opacity: 0.03}}></div>
        <div className="bg-bubble bubble-6" style={{opacity: 0.03}}></div>
        <div className="bg-bubble bubble-8" style={{opacity: 0.03}}></div>
      </div>
      <header className="topbar">
        <div className="page-wrap topbar-inner">
          <div className="brand-block">
            <svg width="40" height="40" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" style={{borderRadius: '10px'}}>
              <rect width="42" height="42" rx="10" fill="#1e3a8a"/>
              <circle cx="14" cy="14" r="4" fill="white"/>
              <circle cx="28" cy="14" r="4" fill="white"/>
              <circle cx="14" cy="28" r="4" fill="white"/>
              <circle cx="28" cy="28" r="4" fill="white"/>
              <path d="M14 14L28 28M28 14L14 28" stroke="white" stroke-width="4" stroke-linecap="round"/>
            </svg>
            <div>
              <h1 style={{fontSize: '26px', fontWeight: '800', letterSpacing: '0.05em', color: '#1e3a8a'}}>CHARTER PRIME</h1>
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
            <button type="button" onClick={() => setTab('alumini')}>
              Alumini
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
                  <button onClick={() => { setTab('alumini'); setMobileMenuOpen(false) }}>Alumini</button>
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
            <h2>Hire and Get Hired in <span style={{color: '#16a34a'}}>Finance</span>.</h2>
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


          </div>
        </section>

        {/* mock interview section moved below workspace (render later) */}

        <section className="stat-section">
          <div className="bg-bubbles-container">
            <div className="bg-bubble bubble-1" style={{opacity: 0.04}}></div>
            <div className="bg-bubble bubble-3" style={{opacity: 0.04}}></div>
          </div>
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
          <div className="bg-bubbles-container">
            <div className="bg-bubble bubble-2" style={{opacity: 0.04}}></div>
            <div className="bg-bubble bubble-4" style={{opacity: 0.04}}></div>
          </div>
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
          <div className="bg-bubbles-container">
            <div className="bg-bubble bubble-1" style={{opacity: 0.04}}></div>
            <div className="bg-bubble bubble-2" style={{opacity: 0.04}}></div>
          </div>
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
          <div className="bg-bubbles-container">
            <div className="bg-bubble bubble-3" style={{opacity: 0.04}}></div>
            <div className="bg-bubble bubble-4" style={{opacity: 0.04}}></div>
          </div>
          <div className="page-wrap solution-grid">
            <div className="solution-visual">
              <div className="solution-panel">
                <p className="section-label">What changes here</p>
                <h3><span style={{color: '#387ed1'}}>Cleaner</span> discovery. Better matching. <span style={{color: '#16a34a'}}>Faster</span> hiring.</h3>
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
          <div className="bg-bubbles-container">
            <div className="bg-bubble bubble-1" style={{opacity: 0.04}}></div>
            <div className="bg-bubble bubble-4" style={{opacity: 0.04}}></div>
          </div>
          <div className="page-wrap">
            <div className="workspace-intro">
              <div>
                <p className="section-label">Workspace</p>
                <h3>
                    {tab === 'jobs' && (
                      <>
                        Your <span style={{color: '#f4b400'}}>Golden</span> <span style={{color: '#387ed1'}}>Ticket</span> to world of <span style={{color: '#0f9d58'}}>Finance</span>
                      </>
                    )}
                    {tab === 'company' && 'Post and manage company roles'}
                    {tab === 'alumini' && (
                      <>
                        Your <span style={{color: '#f4b400'}}>Golden</span> pass to world of <span style={{color: '#0f9d58'}}>Finance</span>
                      </>
                    )}
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
              {tab === 'alumini' && <AluminiTab />}
              {tab === 'articleship' && <ArticleshipTab />}
              {tab === 'cas' && <CATab />}
            </div>
          </div>
        </section>

            <section className="mock-section">
              <div className="bg-bubbles-container">
                <div className="bg-bubble bubble-2" style={{opacity: 0.04}}></div>
                <div className="bg-bubble bubble-3" style={{opacity: 0.04}}></div>
              </div>
              <div className="page-wrap">
                <div className="workspace-intro">
                  <div>
                    <p className="section-label">Mock Interviews</p>
                    <h3><span style={{color: '#ef4444'}}>Unsure</span> about your <span style={{color: '#387ed1'}}>skills</span>?</h3>
                    <p className="problem-text">Book a 30-minute mock interview with an experienced finance recruiter and receive a detailed scorecard highlighting strengths, improvement areas, and next steps.</p>
                  </div>
                </div>

                <div className="tab-shell">
                  <div className="mock-card">
                    <ul className="mock-benefits">
                      <li>30-minute live interview</li>
                      <li>Structured scorecard and written feedback</li>
                      <li>Actionable recommendations to improve</li>
                      <li>Email summary with suggested next steps</li>
                    </ul>

                    <form className="stack-form" onSubmit={(e) => e.preventDefault()}>
                      <div className="topic-list">
                        <label className="section-label">Select topics</label>
                        {['Audit', 'Tax Compliance', 'Financial Reporting', 'ERP/Systems', 'Excel & Modelling'].map((t) => (
                          <label key={t} className="checkline">
                            <input type="checkbox" name="topics" value={t} />
                            <span>{t}</span>
                          </label>
                        ))}
                      </div>

                      <div className="split-inputs">
                        <input placeholder="Your full name" name="mockName" />
                        <input placeholder="Email address" name="mockEmail" />
                      </div>

                      <div className="split-inputs">
                        <input type="date" name="mockDate" />
                        <input type="time" name="mockTime" />
                      </div>

                      <div className="mock-actions">
                        <button type="button" className="nav-button" onClick={() => {
                          const form = document.querySelector('.mock-card form')
                          const name = form.elements['mockName'].value.trim()
                          const email = form.elements['mockEmail'].value.trim()
                          const date = form.elements['mockDate'].value
                          const time = form.elements['mockTime'].value
                          const checked = Array.from(form.elements['topics'] || [])
                            .filter((el) => el.checked)
                            .map((el) => el.value)
                          if (!name || !email || !date || !time || checked.length === 0) {
                            alert('Please provide full name, email, select at least one topic, and pick a slot.')
                            return
                          }
                          const entry = { id: 'mock_' + Date.now(), name, email, date, time, topics: checked, price:250 }
                          const list = JSON.parse(localStorage.getItem('mock_interviews') || '[]')
                          list.push(entry)
                          localStorage.setItem('mock_interviews', JSON.stringify(list))
                          const conf = document.querySelector('.mock-confirmation')
                          if (conf) conf.remove()
                          const node = document.createElement('div')
                          node.className = 'mock-confirmation'
                          node.innerHTML = `<h4>Booking confirmed</h4><p>Interview for <strong>${name}</strong> scheduled on <strong>${date}</strong> at <strong>${time}</strong>.</p><p>Topics: ${checked.join(', ')}</p><p>Amount: ₹250 — payment pending at checkout.</p>`
                          document.querySelector('.mock-card').appendChild(node)
                          form.reset()
                        }}>
                          Schedule Mock Interview — ₹250
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>

        <section className="meet-alumini-section">
          <div className="bg-bubbles-container">
            <div className="bg-bubble bubble-1" style={{opacity: 0.06}}></div>
            <div className="bg-bubble bubble-3" style={{opacity: 0.06}}></div>
          </div>
          <div className="page-wrap">
            <div className="meet-inner">
              <div className="meet-copy">
                <p className="section-label">Community</p>
                <h3>Meet our <span style={{color: '#f4b400'}}>Alumini</span></h3>
                <p className="problem-text">Connect with former articled students and senior CAs — mentorship, stories, and hiring pathways.</p>
                <div className="meet-cta">
                  <button type="button" className="nav-button">Join the community</button>
                  <button type="button" className="nav-button ghost">Share a story</button>
                </div>
              </div>

              <div className="meet-cards">
                <article className="meet-card">
                  <h4>Alumni events</h4>
                  <p>Regional meetups and online panels with hiring managers and mentors.</p>
                </article>
                <article className="meet-card">
                  <h4>Mentor hours</h4>
                  <p>Book 1:1 sessions for CV review, interviews, and career advice.</p>
                </article>
                <article className="meet-card">
                  <h4>Stories & insights</h4>
                  <p>Read transition stories from articleship to leadership roles.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing-section">
          <div className="bg-bubbles-container">
            <div className="bg-bubble bubble-2" style={{opacity: 0.04}}></div>
            <div className="bg-bubble bubble-4" style={{opacity: 0.04}}></div>
          </div>
          <div className="page-wrap pricing-wrap">
            <div className="pricing-copy">
              <p className="section-label">Membership</p>
              <h3>Choose a <span style={{color: '#387ed1'}}>simple</span> membership plan.</h3>
              <p className="pricing-text">
                Choose a monthly or annual membership to access the full platform experience.
              </p>
            </div>

            <div className="pricing-grid">
              <article className="pricing-card student-tier">
                <p className="pricing-label">Article's Pack</p>
                <strong>₹250</strong>
                <span>per month</span>
                <ul className="pricing-points">
                  <li>Browse articleship</li>
                  <li>Apply to firms</li>
                  <li>Student community</li>
                </ul>
                <button type="button" className="nav-button">
                  Join Articles
                </button>
              </article>

              <article className="pricing-card">
                <p className="pricing-label">Monthly</p>
                <strong>₹500</strong>
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
                <strong>₹5,000</strong>
                <span>per year</span>
                <ul className="pricing-points">
                  <li>Everything in Monthly</li>
                  <li>First mock interview at just ₹50</li>
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
        <div className="bg-bubbles-container">
          <div className="bg-bubble bubble-1" style={{opacity: 0.03}}></div>
          <div className="bg-bubble bubble-4" style={{opacity: 0.03}}></div>
        </div>
        <div className="page-wrap footer-grid">
          <div className="footer-block">
            <div className="brand-block footer-brand">
              <svg width="32" height="32" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" style={{borderRadius: '8px'}}>
                <rect width="42" height="42" rx="10" fill="#1e3a8a"/>
                <circle cx="14" cy="14" r="4" fill="white"/>
                <circle cx="28" cy="14" r="4" fill="white"/>
                <circle cx="14" cy="28" r="4" fill="white"/>
                <circle cx="28" cy="28" r="4" fill="white"/>
                <path d="M14 14L28 28M28 14L14 28" stroke="white" stroke-width="4" stroke-linecap="round"/>
              </svg>
              <div>
                <h4 style={{fontSize: '20px', fontWeight: '800', letterSpacing: '0.05em', color: '#1e3a8a', margin: 0}}>CHARTER PRIME</h4>
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
