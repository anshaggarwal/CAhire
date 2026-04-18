import React, { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import HomePage from './components/HomePage'
import PostJobPage from './components/PostJobPage'

export default function App() {
  const [tab, setTab] = useState('jobs')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0)
    
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
  }, [mobileMenuOpen, location.pathname])

  const navigateToHomeTab = (tabId) => {
    setTab(tabId)
    navigate('/')
    setMobileMenuOpen(false)
  }

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
            <Link to="/" className="brand-block" style={{textDecoration: 'none'}}>
              <svg width="40" height="40" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" style={{borderRadius: '10px'}}>
                <rect width="42" height="42" rx="10" fill="#1e3a8a"/>
                <circle cx="14" cy="14" r="4" fill="white"/>
                <circle cx="28" cy="14" r="4" fill="white"/>
                <circle cx="14" cy="28" r="4" fill="white"/>
                <circle cx="28" cy="28" r="4" fill="white"/>
                <path d="M14 14L28 28M28 14L14 28" stroke="white" strokeWidth="4" strokeLinecap="round"/>
              </svg>
              <div>
                <h1 style={{fontSize: '26px', fontWeight: '800', letterSpacing: '0.05em', color: '#1e3a8a'}}>CHARTER PRIME</h1>
              </div>
            </Link>

          <nav className="topbar-nav" aria-label="Primary">
            <button type="button" onClick={() => navigateToHomeTab('jobs')}>Jobs</button>
            <button type="button" onClick={() => navigateToHomeTab('company')}>Companies</button>
            <button type="button" onClick={() => navigateToHomeTab('articleship')}>Articleship</button>
            <button type="button" onClick={() => navigateToHomeTab('alumini')}>Alumni</button>
          </nav>

          <div className="topbar-actions">
            <button type="button" className="nav-button ghost">Sign in</button>
            <Link to="/post-job" className="nav-button" style={{textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              Post a job
            </Link>
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
                  <button onClick={() => navigateToHomeTab('jobs')}>Jobs</button>
                  <button onClick={() => navigateToHomeTab('company')}>Companies</button>
                  <button onClick={() => navigateToHomeTab('articleship')}>Articleship</button>
                  <button onClick={() => navigateToHomeTab('alumini')}>Alumni</button>
                  <button onClick={() => navigateToHomeTab('cas')}>CA Profiles</button>
                </div>
                <div className="drawer-actions">
                  <button className="nav-button" onClick={() => { navigate('/post-job'); setMobileMenuOpen(false) }}>
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
        <Routes>
          <Route path="/" element={<HomePage tab={tab} setTab={setTab} />} />
          <Route path="/post-job" element={<PostJobPage />} />
        </Routes>
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
                <path d="M14 14L28 28M28 14L14 28" stroke="white" strokeWidth="4" strokeLinecap="round"/>
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
