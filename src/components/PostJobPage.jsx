import React from 'react';

export default function PostJobPage() {
  return (
    <div className="post-job-page" style={{ animation: 'fadeUp 650ms ease both' }}>
      
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
      <section className="pricing-section visible" style={{ padding: '120px 0', background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle background geometry */}
        <div style={{ position: 'absolute', top: '10%', left: '-80px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.03) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '10%', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

        <div className="page-wrap">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p className="section-label" style={{ letterSpacing: '0.18em', marginBottom: '14px' }}>HIRING PLANS</p>
            <h2 style={{ fontSize: '44px', fontWeight: '800', letterSpacing: '-0.03em', margin: 0, color: '#0f172a', lineHeight: 1.15 }}>
              Choose the right <span style={{ color: '#387ed1' }}>hiring plan</span>.
            </h2>
            <p style={{ marginTop: '16px', fontSize: '17px', color: '#64748b', fontWeight: '400' }}>
              Transparent pricing for firms and finance teams.
            </p>
          </div>

          {/* Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 420px))', justifyContent: 'center', gap: '28px', alignItems: 'stretch' }}>

            {/* ─── BUFFET PLAN ─── */}
            <article style={{
              display: 'flex', flexDirection: 'column',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '28px',
              padding: '52px 44px',
              boxShadow: '0 2px 20px rgba(15,23,42,0.04)',
              transition: 'box-shadow 0.3s ease, transform 0.3s ease',
            }}>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#94a3b8' }}>Buffet</span>
              </div>

              <div style={{ marginBottom: '36px', paddingBottom: '36px', borderBottom: '1px solid #f1f5f9' }}>
                <div style={{ fontSize: '58px', fontWeight: '800', color: '#0f172a', lineHeight: 1, letterSpacing: '-0.02em' }}>₹999</div>
                <div style={{ fontSize: '15px', color: '#64748b', marginTop: '10px', fontWeight: '500' }}>per month · self-managed</div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 auto', flex: 1 }}>
                {[
                  ['Unlimited job details', 'posted for 30 days'],
                  ['Applications received', 'directly from qualified CAs'],
                  ['Verified candidate profiles', 'accessible on demand'],
                ].map(([bold, rest], i) => (
                  <li key={i} style={{ display: 'flex', flexDirection: 'column', marginBottom: '28px' }}>
                    <span style={{ fontSize: '15px', fontWeight: '700', color: '#1e293b', lineHeight: 1.4 }}>{bold}</span>
                    <span style={{ fontSize: '14px', color: '#64748b', marginTop: '3px', lineHeight: 1.5 }}>{rest}</span>
                  </li>
                ))}
              </ul>

              <button type="button" className="nav-button" style={{
                width: '100%', height: '54px', fontWeight: '700', borderRadius: '14px',
                background: '#0f172a', fontSize: '15px', color: '#fff',
                letterSpacing: '0.02em', marginTop: '40px', cursor: 'pointer',
                transition: 'opacity 0.2s ease',
              }}>
                Post Job Now
              </button>
            </article>

            {/* ─── CONCIERGE PLAN ─── */}
            <article style={{
              display: 'flex', flexDirection: 'column',
              background: 'linear-gradient(160deg, #fffdf5 0%, #fff8e1 60%, #fffbf0 100%)',
              border: '1.5px solid #fcd34d',
              borderRadius: '28px',
              padding: '52px 44px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(245,158,11,0.08), 0 2px 12px rgba(245,158,11,0.06)',
              transition: 'box-shadow 0.3s ease, transform 0.3s ease',
            }}>
              {/* Geometric decorations */}
              <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '180px', height: '180px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(251,191,36,0.12) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
              <div style={{ position: 'absolute', bottom: '60px', right: '-20px', width: '100px', height: '100px', border: '1.5px solid rgba(251,191,36,0.15)', borderRadius: '20px', transform: 'rotate(18deg)', pointerEvents: 'none' }}></div>
              <div style={{ position: 'absolute', top: '45%', left: '-18px', width: '60px', height: '60px', border: '1px solid rgba(251,191,36,0.12)', borderRadius: '50%', pointerEvents: 'none' }}></div>

              {/* Badge */}
              <div style={{
                position: 'absolute', top: '-14px', left: '44px',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                color: '#fff',
                padding: '5px 16px', borderRadius: '99px',
                fontSize: '11px', fontWeight: '800', letterSpacing: '0.08em',
                boxShadow: '0 4px 14px rgba(217,119,6,0.35)',
              }}>
                MOST POPULAR
              </div>

              <div style={{ marginBottom: '8px', marginTop: '6px' }}>
                <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#d97706' }}>Concierge</span>
              </div>

              <div style={{ marginBottom: '36px', paddingBottom: '36px', borderBottom: '1px solid rgba(251,191,36,0.25)' }}>
                <div style={{ fontSize: '58px', fontWeight: '800', color: '#451a03', lineHeight: 1, letterSpacing: '-0.02em' }}>₹9,999</div>
                <div style={{ fontSize: '15px', color: '#92400e', marginTop: '10px', fontWeight: '500' }}>per successful hire · fully managed</div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 auto', flex: 1 }}>
                {[
                  ['Discovery call', 'with our expert hiring team'],
                  ['We interview & vet', 'every candidate on your behalf'],
                  ['Top 3 matches presented', 'curated for your final decision'],
                  ['End-to-end support', 'dedicated recruitment specialist'],
                ].map(([bold, rest], i) => (
                  <li key={i} style={{ display: 'flex', flexDirection: 'column', marginBottom: '28px' }}>
                    <span style={{ fontSize: '15px', fontWeight: '700', color: '#451a03', lineHeight: 1.4 }}>{bold}</span>
                    <span style={{ fontSize: '14px', color: '#92400e', marginTop: '3px', lineHeight: 1.5, opacity: 0.85 }}>{rest}</span>
                  </li>
                ))}
              </ul>

              <button type="button" className="nav-button" style={{
                width: '100%', height: '54px', fontWeight: '700', borderRadius: '14px',
                background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
                border: 'none', fontSize: '15px', color: '#fff',
                letterSpacing: '0.02em', marginTop: '40px', cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(180,83,9,0.25)',
                transition: 'opacity 0.2s ease, box-shadow 0.2s ease',
              }}>
                Start Concierge Hiring
              </button>
            </article>

          </div>
        </div>
      </section>

    </div>
  );
}
