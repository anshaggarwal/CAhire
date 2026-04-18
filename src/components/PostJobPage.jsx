import React from 'react';

export default function PostJobPage() {
  return (
    <div className="post-job-page" style={{ animation: 'fadeUp 650ms ease both' }}>
      <style>{`
        .pricing-card-premium {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
          cursor: pointer;
        }
        .pricing-card-premium:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 40px 100px rgba(15, 23, 42, 0.08) !important;
        }
        .pricing-card-premium:hover .card-border-glow {
          opacity: 1;
        }
        .premium-btn {
          transition: all 0.3s ease !important;
        }
        .premium-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
        }
        .concierge-card-premium:hover {
          border-color: #fcd34d !important;
          box-shadow: 0 40px 100px rgba(217, 119, 6, 0.15) !important;
        }
      `}</style>
      
      {/* SECTION 1: HERO */}
      <section className="hero-section" style={{ minHeight: 'auto', padding: '80px 0 40px' }}>
        <div className="bg-bubbles-container">
          <div className="bg-bubble bubble-1" style={{opacity: 0.04}}></div>
          <div className="bg-bubble bubble-3" style={{opacity: 0.04}}></div>
        </div>
        <div className="page-wrap hero-center">
          <p className="eyebrow">Elevate Your Hiring</p>
          <h2>Find the <span style={{color: '#16a34a'}}>Right Fit</span>, Faster.</h2>
          <p className="hero-text">Post a job yourself or let our Concierge Service do the heavy lifting.</p>
        </div>
      </section>

      {/* SECTION 2: WHY CONCIERGE IS GOOD (TRUST/PROBLEM STYLE) */}
      <section className="problem-section visible" style={{ padding: '60px 0' }}>
        <div className="bg-bubbles-container">
          <div className="bg-bubble bubble-2" style={{opacity: 0.04}}></div>
          <div className="bg-bubble bubble-4" style={{opacity: 0.04}}></div>
        </div>
        <div className="page-wrap problem-grid">
          <div className="problem-copy">
            <p className="section-label">Why Concierge?</p>
            <h3>
              <span className="ca-highlight">Stop wasting hours</span> filtering through unqualified resumes.
            </h3>
            <p className="problem-text">
              Finding the right Chartered Accountant is hard. Reviewing applications and conducting endless preliminary interviews drains your team's time. Our Concierge Service eliminates this friction completely.
            </p>
          </div>

          <div className="problem-points">
            <article className="problem-card">
              <span className="highlight-line">Save valuable time</span>
              <p>We handle the tedious top-of-funnel work, so your leadership can focus on business growth rather than filtering CVs.</p>
            </article>
            <article className="problem-card">
              <span className="highlight-line">Expert evaluation</span>
              <p>Our experienced finance recruiters know exactly what technical and cultural traits to look for in a top-tier CA.</p>
            </article>
            <article className="problem-card">
              <span className="highlight-line">Guaranteed quality</span>
              <p>You only spend your time interviewing the absolute best candidates who have already passed our rigorous vetting.</p>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW IT WORKS (SOLUTION STYLE) */}
      <section className="solution-section visible" style={{ padding: '60px 0' }}>
        <div className="bg-bubbles-container">
          <div className="bg-bubble bubble-1" style={{opacity: 0.04}}></div>
          <div className="bg-bubble bubble-3" style={{opacity: 0.04}}></div>
        </div>
        <div className="page-wrap solution-grid">
          <div className="solution-visual">
            <div className="solution-panel">
              <p className="section-label">How it works</p>
              <h3><span style={{color: '#387ed1'}}>Seamless</span> process. Expert matching. <span style={{color: '#16a34a'}}>Faster</span> closing.</h3>
            </div>
          </div>

          <div className="solution-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            <article className="solution-card">
              <span className="highlight-line accent-highlight">1. Initial Discovery Call</span>
              <p>We deep-dive into your requirements, company culture, and role expectations.</p>
            </article>
            <article className="solution-card">
              <span className="highlight-line accent-highlight">2. Expert Vetting</span>
              <p>Our finance recruiters source and conduct detailed preliminary interviews.</p>
            </article>
            <article className="solution-card">
              <span className="highlight-line accent-highlight">3. Shortlisting</span>
              <p>We filter through applications to find the perfect technical and cultural matches.</p>
            </article>
            <article className="solution-card" style={{ border: '1px solid var(--success)', background: 'rgba(22, 163, 74, 0.02)' }}>
              <span className="highlight-line" style={{ color: 'var(--success)' }}>4. Top 3 Candidates</span>
              <p>We present the absolute best 3 candidates for your final selection round.</p>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 4: PAYMENT OPTIONS */}
      <section className="pricing-section visible" style={{ padding: '160px 0', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
        
        {/* ENHANCED ROYAL GEOMETRICAL BACKGROUND */}
        {/* Subtle dot-grid base */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.04, backgroundImage: 'radial-gradient(#387ed1 0.8px, transparent 0.8px)', backgroundSize: '32px 32px', pointerEvents: 'none' }}></div>
        
        {/* Large flowing radial glows */}
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(56, 126, 209, 0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '-15%', right: '-5%', width: '900px', height: '900px', background: 'radial-gradient(circle, rgba(217, 119, 6, 0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
        
        {/* Floating Outline Shapes */}
        <div style={{ position: 'absolute', top: '15%', right: '12%', width: '180px', height: '180px', border: '1px solid rgba(217, 119, 6, 0.15)', borderRadius: '40px', transform: 'rotate(25deg)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', top: '20%', right: '14%', width: '180px', height: '180px', border: '1.5px solid rgba(217, 119, 6, 0.08)', borderRadius: '40px', transform: 'rotate(45deg)', pointerEvents: 'none' }}></div>
        
        <div style={{ position: 'absolute', bottom: '15%', left: '8%', width: '120px', height: '120px', border: '1px solid rgba(56, 126, 209, 0.15)', borderRadius: '50%', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '18%', left: '10%', width: '120px', height: '120px', border: '2px solid rgba(56, 126, 209, 0.05)', borderRadius: '50%', pointerEvents: 'none' }}></div>

        {/* Floating Diamonds */}
        <div style={{ position: 'absolute', top: '45%', left: '15%', width: '15px', height: '15px', background: 'rgba(56, 126, 209, 0.2)', transform: 'rotate(45deg)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', top: '55%', right: '18%', width: '12px', height: '12px', background: 'rgba(217, 119, 6, 0.2)', transform: 'rotate(45deg)', pointerEvents: 'none' }}></div>

        <div className="page-wrap" style={{ position: 'relative', zIndex: 1 }}>
          {/* Centered Header */}
          <div style={{ textAlign: 'center', marginBottom: '100px' }}>
            <p className="section-label" style={{ letterSpacing: '0.4em', marginBottom: '20px', color: '#387ed1', fontWeight: '900', textTransform: 'uppercase' }}>Royal Hiring Advantage</p>
            <h2 style={{ fontSize: '60px', fontWeight: '900', margin: '0 0 24px', color: '#0f172a', lineHeight: 1, letterSpacing: '-0.04em' }}>
              Choose your <span style={{ color: '#387ed1' }}>standard</span>.
            </h2>
            <div style={{ width: '80px', height: '5px', background: 'linear-gradient(90deg, #387ed1, #d97706)', margin: '0 auto 32px', borderRadius: '10px' }}></div>
            <p style={{ fontSize: '20px', color: '#64748b', maxWidth: '750px', margin: '0 auto', lineHeight: '1.6', fontWeight: '500' }}>
              Select a plan that reflects your commitment to quality. From self-managed posts to our elite concierge service.
            </p>
          </div>

          {/* Centered Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 440px))', gap: '48px', justifyContent: 'center', alignItems: 'stretch' }}>

            {/* BUFFET PLAN */}
            <article className="pricing-card-premium" style={{
              background: '#ffffff',
              border: '1px solid #eef2f6',
              borderRadius: '40px',
              padding: '72px 56px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}>
              <div style={{ marginBottom: '48px' }}>
                <p style={{ fontSize: '14px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.25em', color: '#94a3b8', marginBottom: '16px' }}>Buffet</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '72px', fontWeight: '900', color: '#0f172a', lineHeight: 1, letterSpacing: '-0.05em' }}>₹999</span>
                </div>
                <p style={{ fontSize: '17px', color: '#64748b', marginTop: '16px', fontWeight: '600' }}>per month · full control</p>
              </div>

              <div style={{ flex: 1 }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['Unlimited job details for 30 days', 'Direct applications from verified CAs', 'Access to verified candidate profiles', 'Standard recruitment dashboard'].map((text, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '28px', fontSize: '17px', color: '#334155', lineHeight: '1.5', fontWeight: '500' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ marginTop: '2px', flexShrink: 0 }}><circle cx="12" cy="12" r="12" fill="#f1f5f9"/><path d="M7 12l3 3 7-7" stroke="#387ed1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              <button type="button" className="nav-button premium-btn" style={{ width: '100%', height: '68px', fontWeight: '900', borderRadius: '20px', background: '#0f172a', fontSize: '18px', color: '#fff', border: 'none', marginTop: '56px', cursor: 'pointer' }}>
                Post Job Now
              </button>
            </article>

            {/* CONCIERGE PLAN */}
            <article className="pricing-card-premium concierge-card-premium" style={{
              background: 'linear-gradient(145deg, #ffffff 0%, #fffdf5 100%)',
              border: '2px solid #fcd34d',
              borderRadius: '40px',
              padding: '72px 56px',
              position: 'relative',
              boxShadow: '0 40px 80px rgba(217, 119, 6, 0.12)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Premium Badge */}
              <div style={{ position: 'absolute', top: '-22px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', color: '#fff', padding: '12px 32px', borderRadius: '99px', fontSize: '13px', fontWeight: '900', letterSpacing: '0.25em', textTransform: 'uppercase', boxShadow: '0 15px 35px rgba(217, 119, 6, 0.35)', whiteSpace: 'nowrap', zIndex: 10 }}>
                Most Popular
              </div>

              <div style={{ marginBottom: '48px' }}>
                <p style={{ fontSize: '14px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.25em', color: '#d97706', marginBottom: '16px' }}>Concierge</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '72px', fontWeight: '900', color: '#451a03', lineHeight: 1, letterSpacing: '-0.05em' }}>₹9,999</span>
                </div>
                <p style={{ fontSize: '17px', color: '#b45309', marginTop: '16px', fontWeight: '600' }}>per hire · white-glove service</p>
              </div>

              <div style={{ flex: 1 }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['Discovery call with our expert team', 'We interview & vet every candidate', 'Top 3 matches delivered to you', 'End-to-end recruitment support'].map((text, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '28px', fontSize: '17px', color: '#451a03', lineHeight: '1.5', fontWeight: '600' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ marginTop: '2px', flexShrink: 0 }}><circle cx="12" cy="12" r="12" fill="#fef3c7"/><path d="M7 12l3 3 7-7" stroke="#d97706" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              <button type="button" className="nav-button premium-btn concierge-btn" style={{ width: '100%', height: '68px', fontWeight: '900', borderRadius: '20px', background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)', border: 'none', fontSize: '18px', color: '#fff', marginTop: '56px', cursor: 'pointer', boxShadow: '0 20px 40px rgba(37, 99, 235, 0.35)' }}>
                Start Hiring Now
              </button>
            </article>

          </div>
        </div>
      </section>

    </div>
  );
}
