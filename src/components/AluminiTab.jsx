import React from 'react'

export default function AluminiTab() {
  return (
    <div className="tab-panel">
      <div className="workspace-grid">
        <section className="workspace-main">
          <div className="results-header">
            <div>
              <p className="section-label">Alumini</p>
              <h3>Connect with alumni and mentors</h3>
            </div>
          </div>

          <div className="listing-grid">
            <article className="listing-card">
              <h4>Alumni Spotlight: Sneha R.</h4>
              <p className="listing-copy">Senior Finance Manager — tips on transitioning from articleship to leadership roles.</p>
            </article>

            <article className="listing-card">
              <h4>Alumni Spotlight: Rajiv K.</h4>
              <p className="listing-copy">Tax specialist sharing CV feedback and interview prep notes.</p>
            </article>

            <article className="listing-card">
              <h4>Alumni Forum</h4>
              <p className="listing-copy">Join discussions, post questions, and find mentors from CA firms and finance teams.</p>
            </article>
          </div>
        </section>
      </div>
    </div>
  )
}
