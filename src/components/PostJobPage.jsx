import React from 'react';

export default function PostJobPage() {
  return (
    <div className="post-job-page" style={{ animation: 'fadeUp 650ms ease both' }}>
      <style>{`
        .pricing-card-premium {
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) !important;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.8) !important;
          backdrop-filter: blur(20px) !important;
          border: 1px solid rgba(255, 255, 255, 0.4) !important;
        }
        .pricing-card-premium:hover {
          transform: translateY(-16px) scale(1.02);
          box-shadow: 0 50px 100px rgba(15, 23, 42, 0.12) !important;
          border-color: rgba(255, 255, 255, 0.8) !important;
        }
        .concierge-card-premium {
          background: linear-gradient(165deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 253, 245, 0.9) 100%) !important;
          border: 2px solid #fcd34d !important;
          box-shadow: 0 40px 90px rgba(217, 119, 6, 0.12) !important;
        }
        .concierge-card-premium:hover {
          border-color: #f59e0b !important;
          box-shadow: 0 60px 120px rgba(217, 119, 6, 0.2) !important;
        }
        .premium-btn {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
          position: relative;
          overflow: hidden;
        }
        .premium-btn::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: rotate(45deg);
          transition: 0.6s;
          opacity: 0;
        }
        .premium-btn:hover::after {
          left: 100%;
          opacity: 1;
        }
        .premium-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15) !important;
        }
      `}</style>
      
      {/* SECTION 1: HERO */}
      <section className="hero-section" style={{ minHeight: 'auto', padding: '80px 0 40px' }}>
        <div className="bg-bubbles-container">
          <div className="bg-bubble bubble-1" style={{opacity: 0.04}}></div>
          <div className="bg-bubble bubble-3" style={{opacity: 0.04}}></div>
          <div className="bg-geometric shape-sq" style={{top: '15%', left: '10%', opacity: 0.03}}></div>
          <div className="bg-geometric shape-ci" style={{bottom: '20%', right: '15%', opacity: 0.03}}></div>
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
          <div className="bg-geometric shape-tr" style={{top: '25%', right: '10%', opacity: 0.03}}></div>
          <div className="bg-geometric shape-sq" style={{bottom: '30%', left: '10%', opacity: 0.03}}></div>
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
          <div className="bg-geometric shape-ci" style={{top: '10%', right: '20%', opacity: 0.03}}></div>
          <div className="bg-geometric shape-tr" style={{bottom: '15%', left: '5%', opacity: 0.03}}></div>
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

      {/* SECTION 3.5: THE RECRUITMENT REALITY */}
      <section className="reality-section visible" style={{ padding: '120px 0', background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle background graphics */}
        <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(239, 68, 68, 0.03) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '10%', left: '-5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(56, 126, 209, 0.03) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
        
        <div className="page-wrap">
          <div style={{ 
            background: '#fff', 
            borderRadius: '48px', 
            padding: '80px 60px', 
            boxShadow: '0 50px 120px rgba(15, 23, 42, 0.05)',
            border: '1px solid #eef2f6',
            textAlign: 'center',
            maxWidth: '1100px',
            margin: '0 auto',
            position: 'relative'
          }}>
            <p className="section-label" style={{ color: '#ef4444', letterSpacing: '0.4em', fontWeight: '900', textTransform: 'uppercase', marginBottom: '24px' }}>The Recruitment Reality</p>
            
            <h3 style={{ fontSize: '48px', fontWeight: '900', color: '#0f172a', marginBottom: '40px', letterSpacing: '-0.04em', lineHeight: '1.1' }}>
              Traditional hiring takes <span style={{ color: '#ef4444' }}>≈ 100 man-hours</span> <br/> 
              and costs <span style={{ color: '#ef4444' }}>₹2–3 lakh</span> per hire 🤯
            </h3>
            
            <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #e2e8f0, transparent)', width: '80%', margin: '0 auto 50px' }}></div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', textAlign: 'left', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontSize: '32px', fontWeight: '900', color: '#387ed1', marginBottom: '24px', letterSpacing: '-0.02em' }}>
                  Why <span style={{ color: '#d97706' }}>Concierge</span> is best?
                </h4>
                <p style={{ fontSize: '19px', color: '#475569', lineHeight: '1.7', fontWeight: '500', marginBottom: '32px' }}>
                  We handle the heavy lifting. No more filtering through 500+ resumes or conducting 15 preliminary rounds just to find one fit. 
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                   {[
                     { label: 'Zero Resume Fatigue', color: '#387ed1' },
                     { label: 'Technical Vetting Included', color: '#16a34a' },
                     { label: 'Only Top 3 Matches Delivered', color: '#d97706' }
                   ].map((item, i) => (
                     <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: `${item.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                        </div>
                        <span style={{ fontSize: '17px', fontWeight: '700', color: '#334155' }}>{item.label}</span>
                     </div>
                   ))}
                </div>
              </div>
              
              <div style={{ background: 'linear-gradient(145deg, #f8fafc 0%, #f1f5f9 100%)', padding: '48px', borderRadius: '32px', border: '1px solid #e2e8f0', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '20px', right: '20px', opacity: 0.1 }}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#387ed1" strokeWidth="1"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.6', fontWeight: '600', fontStyle: 'italic' }}>
                  "We saved over 80 hours of our management's time by switching to Concierge. The quality of candidates was significantly higher than our internal sourcing."
                </p>
                <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#387ed1', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '14px' }}>VP</div>
                  <div>
                    <p style={{ margin: 0, fontWeight: '800', fontSize: '15px', color: '#0f172a' }}>VP Finance</p>
                    <p style={{ margin: 0, fontSize: '13px', color: '#64748b', fontWeight: '600' }}>Fortune 500 Manufacturing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PAYMENT OPTIONS */}
      <section className="pricing-section visible" style={{ padding: '180px 0', background: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
        
        {/* ROYAL BACKGROUND ELEMENTS */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.4, background: 'radial-gradient(circle at 20% 30%, rgba(56, 126, 209, 0.03) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(217, 119, 6, 0.04) 0%, transparent 40%)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.03, backgroundImage: 'radial-gradient(#387ed1 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>
        
        {/* Animated Glows */}
        <div style={{ position: 'absolute', top: '10%', left: '10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(56, 126, 209, 0.08) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none', animation: 'float 20s infinite alternate' }}></div>
        <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(217, 119, 6, 0.1) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none', animation: 'float 25s infinite alternate-reverse' }}></div>

        <div className="page-wrap" style={{ position: 'relative', zIndex: 1 }}>
          {/* Refined Header */}
          <div style={{ textAlign: 'center', marginBottom: '120px' }}>
            <span style={{ 
              display: 'inline-block',
              padding: '12px 24px',
              background: 'rgba(56, 126, 209, 0.06)',
              borderRadius: '99px',
              color: '#387ed1',
              fontSize: '13px',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              marginBottom: '32px',
              border: '1px solid rgba(56, 126, 209, 0.1)'
            }}>
              Pricing & Plans
            </span>
            <h2 style={{ fontSize: '64px', fontWeight: '900', margin: '0 0 24px', color: '#0f172a', lineHeight: 1, letterSpacing: '-0.05em' }}>
              Choose your <span style={{ 
                background: 'linear-gradient(135deg, #387ed1 0%, #1d4ed8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>standard</span>.
            </h2>
            <p style={{ fontSize: '22px', color: '#64748b', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', fontWeight: '500' }}>
              Select a plan that reflects your commitment to quality. From high-volume article hiring to elite concierge services.
            </p>
          </div>
 
          {/* Centered Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '32px', 
            maxWidth: '1200px', 
            margin: '0 auto', 
            alignItems: 'stretch' 
          }}>
 
            {/* ARTICLES DELIGHT PLAN */}
            <article className="pricing-card-premium" style={{
              borderRadius: '40px',
              padding: '60px 40px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ width: '32px', height: '32px', background: '#ecfdf5', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6M23 11h-6"/></svg>
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#10b981', margin: 0 }}>Articles Delight</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <span style={{ fontSize: '64px', fontWeight: '900', color: '#0f172a', lineHeight: 1, letterSpacing: '-0.05em' }}>₹99</span>
                  <span style={{ fontSize: '16px', color: '#94a3b8', fontWeight: '600' }}>/mo</span>
                </div>
                <p style={{ fontSize: '15px', color: '#64748b', marginTop: '12px', fontWeight: '600' }}>Perfect for firms hiring articles</p>
              </div>
 
              <div style={{ flex: 1 }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['Post articleship vacancies', '30-day visibility', 'Access to CA Article profiles', 'Direct applications from students'].map((text, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '20px', fontSize: '15px', color: '#334155', lineHeight: '1.4', fontWeight: '500' }}>
                      <div style={{ marginTop: '3px', flexShrink: 0, width: '18px', height: '18px', borderRadius: '50%', background: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                      </div>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
 
              <button type="button" className="nav-button premium-btn" style={{ width: '100%', height: '60px', fontWeight: '900', borderRadius: '20px', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', fontSize: '17px', color: '#fff', border: 'none', marginTop: '40px', cursor: 'pointer' }}>
                Hire Articles
              </button>
            </article>
 
            {/* BUFFET PLAN */}
            <article className="pricing-card-premium" style={{
              borderRadius: '40px',
              padding: '60px 40px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ width: '32px', height: '32px', background: '#eff6ff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#387ed1" strokeWidth="2.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#387ed1', margin: 0 }}>Buffet</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <span style={{ fontSize: '64px', fontWeight: '900', color: '#0f172a', lineHeight: 1, letterSpacing: '-0.05em' }}>₹999</span>
                  <span style={{ fontSize: '16px', color: '#94a3b8', fontWeight: '600' }}>/mo</span>
                </div>
                <p style={{ fontSize: '15px', color: '#64748b', marginTop: '12px', fontWeight: '600' }}>Full control over your hiring</p>
              </div>
 
              <div style={{ flex: 1 }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['Unlimited job details for 30 days', 'Direct applications from verified CAs', 'Access to verified candidate profiles', 'Standard recruitment dashboard'].map((text, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '20px', fontSize: '15px', color: '#334155', lineHeight: '1.4', fontWeight: '500' }}>
                      <div style={{ marginTop: '3px', flexShrink: 0, width: '18px', height: '18px', borderRadius: '50%', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#387ed1" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                      </div>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
 
              <button type="button" className="nav-button premium-btn" style={{ width: '100%', height: '60px', fontWeight: '900', borderRadius: '20px', background: '#0f172a', fontSize: '17px', color: '#fff', border: 'none', marginTop: '40px', cursor: 'pointer' }}>
                Post Job Now
              </button>
            </article>
 
            {/* CONCIERGE PLAN */}
            <article className="pricing-card-premium concierge-card-premium" style={{
              borderRadius: '40px',
              padding: '60px 40px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'visible'
            }}>
              {/* Premium Badge */}
              <div style={{ 
                position: 'absolute', 
                top: '-20px', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', 
                color: '#fff', 
                padding: '10px 32px', 
                borderRadius: '99px', 
                fontSize: '12px', 
                fontWeight: '900', 
                letterSpacing: '0.2em', 
                textTransform: 'uppercase', 
                boxShadow: '0 15px 30px rgba(217, 119, 6, 0.25)', 
                whiteSpace: 'nowrap', 
                zIndex: 10,
                border: '2px solid rgba(255, 255, 255, 0.3)'
              }}>
                👑 Most Popular
              </div>
 
              <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ width: '32px', height: '32px', background: '#fffbeb', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#d97706', margin: 0 }}>Concierge</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <span style={{ fontSize: '64px', fontWeight: '900', color: '#451a03', lineHeight: 1, letterSpacing: '-0.05em' }}>₹25,000</span>
                  <span style={{ fontSize: '16px', color: '#b45309', fontWeight: '600' }}>/hire</span>
                </div>
                <p style={{ fontSize: '15px', color: '#b45309', marginTop: '12px', fontWeight: '600' }}>Elite white-glove recruitment</p>
              </div>
 
              <div style={{ flex: 1 }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['Discovery call with our expert team', 'We interview & vet every candidate', 'Top 3 matches delivered to you', 'End-to-end recruitment support'].map((text, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '18px', marginBottom: '20px', fontSize: '15px', color: '#451a03', lineHeight: '1.4', fontWeight: '600' }}>
                      <div style={{ marginTop: '3px', flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%', background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                      </div>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
 
              <button type="button" className="nav-button premium-btn" style={{ 
                width: '100%', 
                height: '60px', 
                fontWeight: '900', 
                borderRadius: '20px', 
                background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', 
                border: 'none', 
                fontSize: '17px', 
                color: '#fff', 
                marginTop: '40px', 
                cursor: 'pointer',
                boxShadow: '0 15px 30px rgba(30, 58, 138, 0.2)'
              }}>
                Start Hiring Now
              </button>
            </article>
 
          </div>
        </div>
      </section>

      {/* SECTION 5: BECOME AN INTERVIEWER */}
      <section className="interviewer-section" style={{ padding: '140px 0', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle dot-grid base */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.04, backgroundImage: 'radial-gradient(#387ed1 0.8px, transparent 0.8px)', backgroundSize: '32px 32px', pointerEvents: 'none' }}></div>
        
        {/* Geometric Background Decorations */}
        <div style={{ position: 'absolute', top: '15%', left: '5%', width: '200px', height: '200px', border: '1px solid rgba(56, 126, 209, 0.25)', borderRadius: '40px', transform: 'rotate(15deg)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', top: '18%', left: '7%', width: '200px', height: '200px', border: '1.5px solid rgba(56, 126, 209, 0.15)', borderRadius: '40px', transform: 'rotate(35deg)', pointerEvents: 'none' }}></div>
        
        <div style={{ position: 'absolute', bottom: '10%', right: '8%', width: '150px', height: '150px', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '50%', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '13%', right: '10%', width: '150px', height: '150px', border: '2px solid rgba(16, 185, 129, 0.12)', borderRadius: '50%', pointerEvents: 'none' }}></div>

        {/* Floating Diamonds */}
        <div style={{ position: 'absolute', top: '35%', right: '15%', width: '12px', height: '12px', background: 'rgba(56, 126, 209, 0.3)', transform: 'rotate(45deg)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '45%', left: '18%', width: '10px', height: '10px', background: 'rgba(217, 119, 6, 0.3)', transform: 'rotate(45deg)', pointerEvents: 'none' }}></div>

        {/* Large flowing radial glows */}
        <div style={{ position: 'absolute', top: '20%', right: '-10%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '10%', left: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(56, 126, 209, 0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>

        <div className="page-wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ 
            background: 'linear-gradient(145deg, #0f172a 0%, #1e293b 100%)', 
            borderRadius: '56px', 
            padding: '80px', 
            color: '#fff',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 50px 120px rgba(15, 23, 42, 0.25)',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}>
            {/* Internal Background Elements */}
            <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(56, 126, 209, 0.12) 0%, transparent 70%)', borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', bottom: '-80px', left: '-20px', width: '280px', height: '280px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)', borderRadius: '50%' }}></div>
            
            {/* Internal Geometric Accents */}
            <div style={{ position: 'absolute', top: '20%', left: '40%', width: '40px', height: '40px', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '10px', transform: 'rotate(25deg)' }}></div>
            <div style={{ position: 'absolute', bottom: '15%', right: '35%', width: '15px', height: '15px', background: 'rgba(255,255,255,0.02)', transform: 'rotate(45deg)' }}></div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
              <div>
                <p className="section-label" style={{ color: '#387ed1', letterSpacing: '0.4em', marginBottom: '24px', fontWeight: '900' }}>Expert Opportunities</p>
                <h2 style={{ color: '#fff', fontSize: '56px', fontWeight: '900', marginBottom: '28px', lineHeight: '1', letterSpacing: '-0.04em' }}>
                  Wanna make <br/><span style={{ color: '#16a34a' }}>extra income</span>?
                </h2>
                <p style={{ fontSize: '20px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '44px', fontWeight: '500', maxWidth: '500px' }}>
                  Join our elite panel of Chartered Accountants conducting mock interviews and 1-on-1 sessions. Help candidates sharpen their skills while you earn <span style={{color: '#fff'}}>upto ₹700 per session</span> from the comfort of your home.
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '44px' }}>
                   <div style={{ background: 'rgba(255,255,255,0.03)', padding: '28px', borderRadius: '28px', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', boxShadow: '0 25px 50px rgba(16, 185, 129, 0.15)' }}>
                      <p style={{ fontSize: '13px', color: '#64748b', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>Mock Interview</p>
                      <p style={{ fontSize: '32px', fontWeight: '900', color: '#16a34a', margin: '0 0 4px', letterSpacing: '-0.02em' }}>₹200</p>
                      <p style={{ fontSize: '15px', color: '#94a3b8', fontWeight: '600' }}>30 mins session</p>
                   </div>
                   <div style={{ background: 'rgba(255,255,255,0.03)', padding: '28px', borderRadius: '28px', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', boxShadow: '0 25px 50px rgba(56, 126, 209, 0.15)' }}>
                      <p style={{ fontSize: '13px', color: '#64748b', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>One-on-One</p>
                      <p style={{ fontSize: '32px', fontWeight: '900', color: '#387ed1', margin: '0 0 4px', letterSpacing: '-0.02em' }}>₹700</p>
                      <p style={{ fontSize: '15px', color: '#94a3b8', fontWeight: '600' }}>60 mins session</p>
                   </div>
                </div>
              </div>

              <div style={{ 
                background: 'rgba(255,255,255,0.04)', 
                padding: '56px', 
                borderRadius: '40px', 
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(20px)',
                position: 'relative'
              }}>
                <h4 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '36px', color: '#fff' }}>Why join our panel?</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'Flexible timings - you choose when',
                    'Empower the CA community',
                    'Build your brand as a mentor',
                    'Automated monthly payouts'
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '18px', marginBottom: '24px', fontSize: '18px', color: '#cbd5e1', fontWeight: '500' }}>
                      <div style={{ width: '28px', height: '28px', background: 'rgba(56, 126, 209, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#387ed1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <button type="button" className="nav-button premium-btn" style={{ 
                  width: '100%', 
                  height: '72px', 
                  background: 'linear-gradient(135deg, #387ed1 0%, #2563eb 100%)', 
                  color: '#fff', 
                  borderRadius: '20px', 
                  fontWeight: '900', 
                  fontSize: '19px', 
                  letterSpacing: '0.05em',
                  border: 'none', 
                  marginTop: '40px', 
                  cursor: 'pointer',
                  boxShadow: '0 20px 40px rgba(37, 99, 235, 0.25)'
                }}>
                  Apply to Panel
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
