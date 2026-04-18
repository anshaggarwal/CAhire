import React from 'react'

export default function AlumniTab() {
  return (
    <div className="tab-panel">
      <div className="preview-shell">
        <div className="workspace-grid content-preview">
          <aside className="workspace-sidebar">
            <div className="sidebar-card">
              <h4>Filters</h4>
              <div className="filter-group">
                <label className="section-label">Alumni type</label>
                <label className="checkline">
                  <input type="checkbox" defaultChecked />
                  <span>Mentors</span>
                </label>
                <label className="checkline">
                  <input type="checkbox" defaultChecked />
                  <span>Hiring Managers</span>
                </label>
                <label className="checkline">
                  <input type="checkbox" />
                  <span>Recently transitioned</span>
                </label>
              </div>

              <div className="filter-group">
                <label className="section-label">Industry</label>
                <input placeholder="Search industry..." />
              </div>
            </div>

            <div className="sidebar-card">
              <span className="section-label">Top Mentors</span>
              <div className="track-list compact">
                <div className="track-card">
                  <strong>Anil S.</strong>
                  <span>Tax Partner</span>
                </div>
                <div className="track-card">
                  <strong>Megha V.</strong>
                  <span>CFO • Fintech</span>
                </div>
              </div>
            </div>
          </aside>

          <section className="workspace-main">
            <div className="results-header">
              <div>
                <p className="section-label">Alumni Network</p>
                <h3>Connect with alumni and mentors</h3>
              </div>
            </div>

            <div className="listing-grid">
              <article className="listing-card">
                <div className="listing-topline">
                  <div className="brand-lockup">
                    <div className="logo-tile">S</div>
                    <div>
                      <h4>Alumni Spotlight: Sneha R.</h4>
                      <p className="company-line">Senior Finance Manager</p>
                    </div>
                  </div>
                  <span className="status-badge verified">Verified</span>
                </div>
                <p className="listing-copy">Tips on transitioning from articleship to leadership roles.</p>
                <div className="card-footer">
                  <div className="job-card-cta">
                    <span className="posted-line">Unlock membership to view contact & full profile</span>
                  </div>
                  <button type="button" className="small">View profile</button>
                </div>
              </article>

              <article className="listing-card">
                <div className="listing-topline">
                  <div className="brand-lockup">
                    <div className="logo-tile">R</div>
                    <div>
                      <h4>Alumni Spotlight: Rajiv K.</h4>
                      <p className="company-line">Tax specialist</p>
                    </div>
                  </div>
                  <span className="status-badge">Member</span>
                </div>
                <p className="listing-copy">Sharing CV feedback and interview prep notes.</p>
                <div className="card-footer">
                  <div className="job-card-cta">
                    <span className="posted-line">Unlock membership to view contact & full profile</span>
                  </div>
                  <button type="button" className="small">View profile</button>
                </div>
              </article>

              <article className="listing-card">
                <div className="listing-topline">
                  <div className="brand-lockup">
                    <div className="logo-tile">F</div>
                    <div>
                      <h4>Alumni Forum</h4>
                      <p className="company-line">Community discussions & mentorship</p>
                    </div>
                  </div>
                </div>
                <p className="listing-copy">Join discussions, post questions, and find mentors from CA firms and finance teams.</p>
                <div className="card-footer">
                  <div className="job-card-cta">
                    <span className="posted-line">Unlock membership to access forum threads</span>
                  </div>
                  <button type="button" className="small">Open</button>
                </div>
              </article>
            </div>
          </section>
        </div>

        <div className="content-paywall" aria-hidden="true">
          <div className="paywall-card">
                <div className="paywall-lock">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
            <p className="section-label">Members only</p>
            <h4>Unlock full alumni profiles</h4>
            <p className="paywall-copy">View contact details, full career history, and message alumni directly.</p>
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
