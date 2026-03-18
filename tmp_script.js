
        document.addEventListener('DOMContentLoaded', () => {
            const sidebarToggle = document.getElementById('dashboard-sidebar-toggle');
            const sidebar = document.querySelector('.sidebar');

            // Sidebar Toggle Logic
            if (sidebarToggle) {
                sidebarToggle.addEventListener('click', (e) => {
                    e.stopPropagation();
                    sidebar.classList.toggle('active');
                    sidebarToggle.classList.toggle('active');
                    document.body.classList.toggle('menu-open');
                });
            }

            // Close sidebar when clicking outside on mobile
            document.addEventListener('click', (e) => {
                if (window.innerWidth <= 1100 && sidebar.classList.contains('active')) {
                    if (!sidebar.contains(e.target) && e.target !== sidebarToggle) {
                        sidebar.classList.remove('active');
                        sidebarToggle.classList.remove('active');
                        document.body.classList.remove('menu-open');
                    }
                }
            });

            const urlParams = new URLSearchParams(window.location.search);
            const role = urlParams.get('role') || 'researcher';

            const portalTitle = document.getElementById('portal-title');
            const userName = document.getElementById('user-display-name');
            const userEmail = document.getElementById('user-display-email');
            const sidebarLinks = document.getElementById('sidebar-links');
            const contentView = document.getElementById('content-view-container');

            const roleConfigs = {
                researcher: {
                    portal: 'Researcher Portal',
                    user: 'Dr. John Researcher',
                    email: 'divyasowndappan1902@gmail.com',
                    links: [
                        { id: 'dashboard', icon: '🏠', label: 'Overview', active: true },
                        { id: 'projects', icon: '📁', label: 'Assigned Studies' },
                        { id: 'samples', icon: '🔬', label: 'Specimens' },
                        { id: 'ai-analysis', icon: '🧠', label: 'ML Insights' },
                        { id: 'sequencing', icon: '🧬', label: 'Genome Runs' },
                        { id: 'trials', icon: '📋', label: 'Study Cohorts' },
                        { id: 'settings', icon: '⚙️', label: 'Preferences' }
                    ]
                },
                administrator: {
                    portal: 'Admin Portal',
                    user: 'Dr. Sarah Admin',
                    email: 'admin.support@biotech.com',
                    links: [
                        { id: 'dashboard', icon: '🏠', label: 'Main Display', active: true },
                        { id: 'management', icon: '🏢', label: 'Facility Ops' },
                        { id: 'projects', icon: '📁', label: 'Global Initiatives' },
                        { id: 'ai-analysis', icon: '🧠', label: 'Network Processing' },
                        { id: 'sequencing', icon: '🧬', label: 'Gene Data Hub' },
                        { id: 'reports', icon: '📄', label: 'Analytics' },
                        { id: 'billing', icon: '💳', label: 'Invoices' },
                        { id: 'settings', icon: '⚙️', label: 'Configuration' }
                    ]
                },
                patient: {
                    portal: 'Patient Portal',
                    user: 'Patient Smith',
                    email: 'patient.smith@gmail.com',
                    links: [
                        { id: 'dashboard', icon: '🏠', label: 'Home Base', active: true },
                        { id: 'results', icon: '🧪', label: 'Diagnostics' },
                        { id: 'telemedicine', icon: '📞', label: 'Virtual Care' },
                        { id: 'trials', icon: '📋', label: 'Research Matches' },
                        { id: 'billing', icon: '💳', label: 'Payments' },
                        { id: 'settings', icon: '⚙️', label: 'Privacy & Account' }
                    ]
                }
            };

            const config = roleConfigs[role] || roleConfigs.researcher;
            portalTitle.innerText = config.portal;
            userName.innerText = config.user;
            userEmail.innerText = config.email;

            // Generate Sidebar Links
            sidebarLinks.innerHTML = config.links.map(link => `
                <li>
                    <a href="#" class="sidebar-link ${link.active ? 'active' : ''}" data-tab="${link.id}">
                        <span style="font-size: 1.2rem;">${link.icon}</span>
                        <span>${link.label}</span>
                    </a>
                </li>
            `).join('');

            // Define Content Views
            function showTab(tabId) {
                let html = '';

                if (role === 'researcher') {
                    switch (tabId) {
                        case 'dashboard':
                            html = `<div class="tab-content active">
                                <h2 style="font-size:2.2rem;margin-bottom:0.3rem;">🏠 Overview</h2>
                                <p style="color:var(--text-secondary);margin-bottom:2rem;">Welcome back, <strong>Dr. John Researcher</strong>. Here's your real-time research snapshot.</p>
                                <div class="admin-summary-grid" style="margin-bottom:1.5rem;">
                                    <div class="summary-card" style="border-top:3px solid var(--primary);"><div style="font-size:1.4rem;">🧪</div><p>Active Experiments</p><h3>14</h3></div>
                                    <div class="summary-card" style="border-top:3px solid var(--secondary);"><div style="font-size:1.4rem;">🧬</div><p>Gene Markers</p><h3>422</h3></div>
                                    <div class="summary-card" style="border-top:3px solid var(--accent-orange);"><div style="font-size:1.4rem;">🔬</div><p>Specimens</p><h3>87</h3></div>
                                    <div class="summary-card" style="border-top:3px solid var(--accent-purple);"><div style="font-size:1.4rem;">🧠</div><p>ML Jobs</p><h3>6 Running</h3></div>
                                </div>
                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1.2rem;">📈 Data Ingestion Trends</h4>
                                        <p style="font-size:0.8rem;color:#64748b;margin-bottom:0.5rem;">Ingestion Volume (Last 7 days)</p>
                                        <div class="trend-bar-container" style="height:44px;margin-bottom:1.2rem;">
                                            <div class="trend-bar" style="height:40%;background:var(--primary);opacity:0.6;"></div>
                                            <div class="trend-bar" style="height:65%;background:var(--primary);opacity:0.6;"></div>
                                            <div class="trend-bar" style="height:50%;background:var(--primary);opacity:0.7;"></div>
                                            <div class="trend-bar" style="height:85%;background:var(--primary);opacity:0.8;"></div>
                                            <div class="trend-bar" style="height:70%;background:var(--primary);opacity:0.9;"></div>
                                            <div class="trend-bar" style="height:90%;background:var(--primary);"></div>
                                            <div class="trend-bar" style="height:75%;background:var(--primary);"></div>
                                        </div>
                                        <p style="font-size:0.8rem;color:#64748b;margin-bottom:0.5rem;">Analysis Accuracy (%)</p>
                                        <div class="trend-bar-container" style="height:44px;">
                                            <div class="trend-bar" style="height:90%;background:var(--secondary);"></div>
                                            <div class="trend-bar" style="height:92%;background:var(--secondary);"></div>
                                            <div class="trend-bar" style="height:88%;background:var(--secondary);"></div>
                                            <div class="trend-bar" style="height:95%;background:var(--secondary);"></div>
                                            <div class="trend-bar" style="height:94%;background:var(--secondary);"></div>
                                            <div class="trend-bar" style="height:98%;background:var(--secondary);"></div>
                                            <div class="trend-bar" style="height:97%;background:var(--secondary);"></div>
                                        </div>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1.2rem;">🌡️ Lab Environment Inputs</h4>
                                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;margin-bottom:0.8rem;">
                                            <div><label style="font-size:0.75rem;color:#64748b;display:block;margin-bottom:3px;">Temp (°C)</label><input type="number" value="22.5" step="0.1" style="width:100%;padding:0.5rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"></div>
                                            <div><label style="font-size:0.75rem;color:#64748b;display:block;margin-bottom:3px;">pH Level</label><input type="number" value="7.4" step="0.1" style="width:100%;padding:0.5rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"></div>
                                        </div>
                                        <div style="margin-bottom:0.8rem;"><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Humidity (%)</label><input type="range" value="45" style="width:100%;height:6px;appearance:none;background:#e2e8f0;border-radius:3px;"></div>
                                        <div style="margin-bottom:1rem;"><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">CO₂ Level (ppm)</label><input type="number" value="385" style="width:100%;padding:0.5rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"></div>
                                        <button class="btn-primary" style="width:100%;padding:0.65rem;font-size:0.85rem;">🔄 Sync Environment</button>
                                    </div>
                                </div>
                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">⚡ Quick Access</h4>
                                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;">
                                            <div style="padding:1rem;background:#eff6ff;border-radius:12px;cursor:pointer;border:1px solid #bfdbfe;"><div style="font-size:1.3rem;">📁</div><p style="font-size:0.8rem;font-weight:700;color:var(--primary);margin:0.2rem 0;">Studies</p><p style="font-size:0.72rem;color:#94a3b8;margin:0;">4 Assigned</p></div>
                                            <div style="padding:1rem;background:#f0fdf4;border-radius:12px;cursor:pointer;border:1px solid #bbf7d0;"><div style="font-size:1.3rem;">🔬</div><p style="font-size:0.8rem;font-weight:700;color:var(--secondary);margin:0.2rem 0;">Specimens</p><p style="font-size:0.72rem;color:#94a3b8;margin:0;">87 Active</p></div>
                                            <div style="padding:1rem;background:#fdf2f8;border-radius:12px;cursor:pointer;border:1px solid #e9d5ff;"><div style="font-size:1.3rem;">🧠</div><p style="font-size:0.8rem;font-weight:700;color:var(--accent);margin:0.2rem 0;">ML Insights</p><p style="font-size:0.72rem;color:#94a3b8;margin:0;">6 Jobs</p></div>
                                            <div style="padding:1rem;background:#fef9f0;border-radius:12px;cursor:pointer;border:1px solid #fde68a;"><div style="font-size:1.3rem;">🧬</div><p style="font-size:0.8rem;font-weight:700;color:var(--accent-orange);margin:0.2rem 0;">Genome Runs</p><p style="font-size:0.72rem;color:#94a3b8;margin:0;">2 Active</p></div>
                                        </div>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">📅 Recent Activity</h4>
                                        <div style="display:flex;align-items:center;gap:0.8rem;padding:0.7rem;background:#f0fdf4;border-radius:10px;margin-bottom:0.6rem;border-left:3px solid var(--secondary);font-size:0.83rem;"><span>🟢</span><div><p style="margin:0;font-weight:700;">Genome Run #SH-992 — 48%</p><p style="margin:0;font-size:0.72rem;color:#94a3b8;">Short-read sequencing active</p></div></div>
                                        <div style="display:flex;align-items:center;gap:0.8rem;padding:0.7rem;background:#eff6ff;border-radius:10px;margin-bottom:0.6rem;border-left:3px solid var(--primary);font-size:0.83rem;"><span>🔵</span><div><p style="margin:0;font-weight:700;">ML Job: ProteinFold-X completed</p><p style="margin:0;font-size:0.72rem;color:#94a3b8;">94.2% prediction confidence</p></div></div>
                                        <div style="display:flex;align-items:center;gap:0.8rem;padding:0.7rem;background:#fef9f0;border-radius:10px;border-left:3px solid var(--accent-orange);font-size:0.83rem;"><span>🟡</span><div><p style="margin:0;font-weight:700;">SMP-1023 — Processing</p><p style="margin:0;font-size:0.72rem;color:#94a3b8;">Tissue culture specimen</p></div></div>
                                    </div>
                                </div>
                            </div>`;
                            break;

                        case 'projects':
                            html = `<div class="tab-content active">
                                <h2 style="font-size:2.2rem;margin-bottom:0.5rem;">📁 Assigned Studies</h2>
                                <p style="color:var(--text-secondary);margin-bottom:2rem;">All active and completed research studies assigned to your profile</p>
                                <div class="admin-summary-grid" style="margin-bottom:1.5rem;">
                                    <div class="summary-card"><div style="font-size:1.4rem;">📋</div><p>Total Assigned</p><h3>4</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">🔄</div><p>In Progress</p><h3>2</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">✅</div><p>Completed</p><h3>1</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">⏸️</div><p>On Hold</p><h3>1</h3></div>
                                </div>
                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">🧬 Genome Synthesis v4.2</h4>
                                        <p style="color:#64748b;font-size:0.85rem;margin-bottom:0.8rem;">Refining synthetic base pairs for improved molecular stability in CRISPR applications.</p>
                                        <div style="margin-bottom:0.8rem;"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>Progress</span><span style="font-weight:700;">62%</span></div><div class="progress-container"><div class="progress-fill" style="width:62%;background:var(--primary);"></div></div></div>
                                        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.8rem;"><span style="padding:0.25rem 0.6rem;background:#dbeafe;border-radius:20px;font-size:0.72rem;color:#1d4ed8;">CRISPR</span><span style="padding:0.25rem 0.6rem;background:#d1fae5;border-radius:20px;font-size:0.72rem;color:#15803d;">Base-Pair</span></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;"><span class="status status-blue">In Progress</span><button class="btn-primary" style="padding:0.4rem 0.9rem;font-size:0.78rem;">View Study</button></div>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">🧠 Neural Mesh Interface</h4>
                                        <p style="color:#64748b;font-size:0.85rem;margin-bottom:0.8rem;">Biocompatibility testing with organic semiconductors for neural prosthetics.</p>
                                        <div style="margin-bottom:0.8rem;"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>Progress</span><span style="font-weight:700;">88%</span></div><div class="progress-container"><div class="progress-fill" style="width:88%;background:var(--secondary);"></div></div></div>
                                        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.8rem;"><span style="padding:0.25rem 0.6rem;background:#ede9fe;border-radius:20px;font-size:0.72rem;color:#7e22ce;">Neural</span><span style="padding:0.25rem 0.6rem;background:#d1fae5;border-radius:20px;font-size:0.72rem;color:#15803d;">Biocompat</span></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;"><span class="status status-green">Testing</span><button class="btn-primary" style="padding:0.4rem 0.9rem;font-size:0.78rem;">View Study</button></div>
                                    </div>
                                </div>
                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">💊 Metabolic Drug Pathway</h4>
                                        <p style="color:#64748b;font-size:0.85rem;margin-bottom:0.8rem;">Mapping metabolic enzyme interactions for targeted drug delivery.</p>
                                        <div style="margin-bottom:0.8rem;"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>Progress</span><span style="font-weight:700;">100%</span></div><div class="progress-container"><div class="progress-fill" style="width:100%;background:#22c55e;"></div></div></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;"><span class="status status-green">Completed</span><button class="btn-primary" style="padding:0.4rem 0.9rem;font-size:0.78rem;">View Report</button></div>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">🌿 Agri-Gene Enhancement</h4>
                                        <p style="color:#64748b;font-size:0.85rem;margin-bottom:0.8rem;">Crop gene splicing for drought resilience — awaiting FAO approval.</p>
                                        <div style="margin-bottom:0.8rem;"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>Progress</span><span style="font-weight:700;">35%</span></div><div class="progress-container"><div class="progress-fill" style="width:35%;background:var(--accent-orange);"></div></div></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;"><span class="status status-orange">On Hold</span><button class="btn-primary" style="padding:0.4rem 0.9rem;font-size:0.78rem;">View Study</button></div>
                                    </div>
                                </div>
                            </div>`;
                            break;

                        case 'samples':
                            html = `<div class="tab-content active">
                                <h2 style="font-size:2.2rem;margin-bottom:0.5rem;">🔬 Specimens</h2>
                                <p style="color:var(--text-secondary);margin-bottom:2rem;">Laboratory specimen inventory, processing status and chain of custody</p>
                                <div class="admin-summary-grid" style="margin-bottom:1.5rem;">
                                    <div class="summary-card"><div style="font-size:1.4rem;">🧫</div><p>Total Specimens</p><h3>87</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">✅</div><p>Analyzed</p><h3>54</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">⏳</div><p>Processing</p><h3>21</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">📦</div><p>In Storage</p><h3>12</h3></div>
                                </div>
                                <div style="display:grid;grid-template-columns:1.5fr 1fr;gap:1.5rem;margin-bottom:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">📋 Specimen Ledger</h4>
                                        <table style="width:100%;border-collapse:collapse;font-size:0.83rem;">
                                            <tr style="color:#94a3b8;font-size:0.75rem;border-bottom:1px solid #f1f5f9;"><th style="padding:0.4rem 0;text-align:left;">ID</th><th>Type</th><th>Source</th><th>Date</th><th>Status</th></tr>
                                            <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:0.6rem 0;">SMP-1022</td><td>Blood Plasma</td><td>Study A</td><td>Mar 10</td><td><span class="status status-green">Analyzed</span></td></tr>
                                            <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:0.6rem 0;">SMP-1023</td><td>Tissue Culture</td><td>Study B</td><td>Mar 12</td><td><span class="status status-orange">Processing</span></td></tr>
                                            <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:0.6rem 0;">SMP-1024</td><td>Saliva Extract</td><td>Cohort C</td><td>Mar 14</td><td><span class="status status-green">Analyzed</span></td></tr>
                                            <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:0.6rem 0;">SMP-1025</td><td>Bone Marrow</td><td>Study A</td><td>Mar 15</td><td><span class="status status-blue">In Storage</span></td></tr>
                                            <tr><td style="padding:0.6rem 0;">SMP-1026</td><td>CSF Sample</td><td>Neuro Study</td><td>Mar 16</td><td><span class="status status-orange">Processing</span></td></tr>
                                        </table>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">📊 Type Breakdown</h4>
                                        <div style="margin-bottom:0.8rem;"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>🩸 Blood Plasma</span><span style="font-weight:700;">28</span></div><div class="progress-container"><div class="progress-fill" style="width:32%;background:var(--primary);"></div></div></div>
                                        <div style="margin-bottom:0.8rem;"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>🧫 Tissue Culture</span><span style="font-weight:700;">22</span></div><div class="progress-container"><div class="progress-fill" style="width:25%;background:var(--secondary);"></div></div></div>
                                        <div style="margin-bottom:0.8rem;"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>💧 Saliva Extract</span><span style="font-weight:700;">18</span></div><div class="progress-container"><div class="progress-fill" style="width:21%;background:var(--accent-blue);"></div></div></div>
                                        <div style="margin-bottom:0.8rem;"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>🦴 Bone Marrow</span><span style="font-weight:700;">11</span></div><div class="progress-container"><div class="progress-fill" style="width:13%;background:var(--accent-orange);"></div></div></div>
                                        <div><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>🧠 CSF Sample</span><span style="font-weight:700;">8</span></div><div class="progress-container"><div class="progress-fill" style="width:9%;background:var(--accent-purple);"></div></div></div>
                                    </div>
                                </div>
                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">🧊 Cold-Chain Storage Status</h4>
                                        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.8rem;">
                                            <div style="background:#f0fdf4;padding:0.9rem;border-radius:10px;text-align:center;"><p style="font-size:0.7rem;color:#15803d;margin:0;text-transform:uppercase;">Freezer A</p><h4 style="color:#15803d;margin:0.3rem 0;">-80°C</h4><p style="font-size:0.7rem;color:#94a3b8;margin:0;">✅ Stable</p></div>
                                            <div style="background:#eff6ff;padding:0.9rem;border-radius:10px;text-align:center;"><p style="font-size:0.7rem;color:#1d4ed8;margin:0;text-transform:uppercase;">Fridge B</p><h4 style="color:#1d4ed8;margin:0.3rem 0;">4°C</h4><p style="font-size:0.7rem;color:#94a3b8;margin:0;">✅ Stable</p></div>
                                            <div style="background:#fef9f0;padding:0.9rem;border-radius:10px;text-align:center;"><p style="font-size:0.7rem;color:#92400e;margin:0;text-transform:uppercase;">LN₂ Tank</p><h4 style="color:#92400e;margin:0.3rem 0;">-196°C</h4><p style="font-size:0.7rem;color:#94a3b8;margin:0;">⚠️ 72% full</p></div>
                                        </div>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">➕ Log New Specimen</h4>
                                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.7rem;margin-bottom:0.7rem;">
                                            <div><label style="font-size:0.75rem;color:#64748b;display:block;margin-bottom:2px;">Specimen ID</label><input type="text" placeholder="SMP-xxxx" style="width:100%;padding:0.45rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.82rem;"></div>
                                            <div><label style="font-size:0.75rem;color:#64748b;display:block;margin-bottom:2px;">Type</label><select style="width:100%;padding:0.45rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.82rem;"><option>Blood Plasma</option><option>Tissue Culture</option><option>Saliva</option><option>CSF</option></select></div>
                                        </div>
                                        <div style="margin-bottom:0.7rem;"><label style="font-size:0.75rem;color:#64748b;display:block;margin-bottom:2px;">Assigned Study</label><select style="width:100%;padding:0.45rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.82rem;"><option>Study A</option><option>Study B</option><option>Cohort C</option></select></div>
                                        <button class="btn-primary" style="width:100%;padding:0.6rem;font-size:0.83rem;">Log Specimen</button>
                                    </div>
                                </div>
                            </div>`;
                            break;

                        case 'ai-analysis':
                            html = `<div class="tab-content active">
                                <h2 style="font-size:2.2rem;margin-bottom:0.5rem;">🧠 ML Insights</h2>
                                <p style="color:var(--text-secondary);margin-bottom:2rem;">Machine learning model outputs, prediction scores and discovery analytics</p>
                                <div class="admin-summary-grid" style="margin-bottom:1.5rem;">
                                    <div class="summary-card"><div style="font-size:1.4rem;">🤖</div><p>Active Jobs</p><h3>6</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">🎯</div><p>Avg Accuracy</p><h3>94.8%</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">⚡</div><p>Avg Inference</p><h3>38ms</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">✅</div><p>Jobs Complete</p><h3>42</h3></div>
                                </div>
                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">📈 Model Performance Trends</h4>
                                        <p style="font-size:0.8rem;color:#64748b;margin-bottom:0.5rem;">Prediction Confidence (7-day)</p>
                                        <div class="trend-bar-container" style="height:48px;margin-bottom:1rem;">
                                            <div class="trend-bar" style="height:88%;background:var(--accent-purple);opacity:0.7;"></div>
                                            <div class="trend-bar" style="height:91%;background:var(--accent-purple);opacity:0.7;"></div>
                                            <div class="trend-bar" style="height:89%;background:var(--accent-purple);opacity:0.8;"></div>
                                            <div class="trend-bar" style="height:94%;background:var(--accent-purple);opacity:0.9;"></div>
                                            <div class="trend-bar" style="height:92%;background:var(--accent-purple);opacity:0.9;"></div>
                                            <div class="trend-bar" style="height:97%;background:var(--accent-purple);"></div>
                                            <div class="trend-bar" style="height:95%;background:var(--accent-purple);"></div>
                                        </div>
                                        <p style="font-size:0.8rem;color:#64748b;margin-bottom:0.5rem;">False Positive Rate (%)</p>
                                        <div class="trend-bar-container" style="height:48px;">
                                            <div class="trend-bar" style="height:18%;background:#ef4444;opacity:0.6;"></div>
                                            <div class="trend-bar" style="height:14%;background:#ef4444;opacity:0.6;"></div>
                                            <div class="trend-bar" style="height:16%;background:#ef4444;opacity:0.6;"></div>
                                            <div class="trend-bar" style="height:10%;background:#ef4444;opacity:0.6;"></div>
                                            <div class="trend-bar" style="height:12%;background:#ef4444;opacity:0.6;"></div>
                                            <div class="trend-bar" style="height:8%;background:#ef4444;opacity:0.6;"></div>
                                            <div class="trend-bar" style="height:7%;background:#ef4444;opacity:0.6;"></div>
                                        </div>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">🤖 Active ML Jobs</h4>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.75rem;background:#f0fdf4;border-radius:10px;margin-bottom:0.6rem;"><div><h5 style="margin:0;font-size:0.85rem;">GenomeMind v5.2</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">DNA Anomaly Detection • 98.1%</p></div><span class="status status-green">Live</span></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.75rem;background:#eff6ff;border-radius:10px;margin-bottom:0.6rem;"><div><h5 style="margin:0;font-size:0.85rem;">ProteinFold-X</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">Receptor XR-77 Docking • 94.2%</p></div><span class="status status-green">Live</span></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.75rem;background:#fef9f0;border-radius:10px;margin-bottom:0.6rem;"><div><h5 style="margin:0;font-size:0.85rem;">MetaCycleLM</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">Metabolic Pathway • Training</p></div><span class="status status-orange">Training</span></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.75rem;background:#fdf2f8;border-radius:10px;"><div><h5 style="margin:0;font-size:0.85rem;">NeuroSynapse-3</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">Neural Signal Mapping • Queue</p></div><span class="status status-blue">Queue</span></div>
                                    </div>
                                </div>
                                <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">🎯 Top Prediction Results</h4>
                                        <div style="margin-bottom:0.8rem;"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>Protein Ligand Docking (XR-77)</span><span style="font-weight:700;color:var(--secondary);">94.2%</span></div><div class="progress-container"><div class="progress-fill" style="width:94%;background:var(--secondary);"></div></div></div>
                                        <div style="margin-bottom:0.8rem;"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>DNA Mutation Risk Score</span><span style="font-weight:700;color:var(--primary);">88.7%</span></div><div class="progress-container"><div class="progress-fill" style="width:89%;background:var(--primary);"></div></div></div>
                                        <div style="margin-bottom:0.8rem;"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>Metabolic Enzyme Affinity</span><span style="font-weight:700;color:var(--accent-purple);">76.3%</span></div><div class="progress-container"><div class="progress-fill" style="width:76%;background:var(--accent-purple);"></div></div></div>
                                        <div><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>Cell Viability Prediction</span><span style="font-weight:700;color:var(--accent-orange);">91.5%</span></div><div class="progress-container"><div class="progress-fill" style="width:92%;background:var(--accent-orange);"></div></div></div>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">⚙️ Run New Job</h4>
                                        <div style="margin-bottom:0.8rem;"><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Model</label><select style="width:100%;padding:0.5rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"><option>GenomeMind v5.2</option><option>ProteinFold-X</option><option>MetaCycleLM</option><option>NeuroSynapse-3</option></select></div>
                                        <div style="margin-bottom:0.8rem;"><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Dataset</label><select style="width:100%;padding:0.5rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"><option>Study A — Cohort 1</option><option>Study B — All Specimens</option><option>Custom Upload</option></select></div>
                                        <div style="margin-bottom:1rem;"><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Priority</label><select style="width:100%;padding:0.5rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"><option>Normal</option><option>High</option><option>Critical</option></select></div>
                                        <button class="btn-primary" style="width:100%;padding:0.65rem;font-size:0.85rem;">🚀 Launch Job</button>
                                    </div>
                                </div>
                            </div>`;
                            break;

                        case 'sequencing':
                            html = `<div class="tab-content active">
                                <h2 style="font-size:2.2rem;margin-bottom:0.5rem;">🧬 Genome Runs</h2>
                                <p style="color:var(--text-secondary);margin-bottom:2rem;">Active sequencing jobs, run history and genomic pipeline status</p>
                                <div class="admin-summary-grid" style="margin-bottom:1.5rem;">
                                    <div class="summary-card"><div style="font-size:1.4rem;">🔄</div><p>Active Runs</p><h3>2</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">✅</div><p>Completed</p><h3>18</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">⏳</div><p>In Queue</p><h3>4</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">🧬</div><p>Avg Read Length</p><h3>148bp</h3></div>
                                </div>
                                <div style="display:grid;grid-template-columns:1.4fr 1fr;gap:1.5rem;margin-bottom:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">📋 Sequencing Run Log</h4>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.85rem;background:#eff6ff;border-radius:10px;margin-bottom:0.6rem;border-left:3px solid var(--primary);">
                                            <div><h5 style="margin:0;font-size:0.85rem;">Run #SH-992</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0.2rem 0 0;">Short-read Illumina • Genome Synthesis v4.2</p><div class="progress-container" style="margin-top:0.4rem;"><div class="progress-fill" style="width:48%;background:var(--primary);"></div></div><p style="font-size:0.7rem;color:#94a3b8;margin:0.2rem 0 0;">48% complete</p></div>
                                            <span class="status status-blue">Active</span>
                                        </div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.85rem;background:#f0fdf4;border-radius:10px;margin-bottom:0.6rem;border-left:3px solid var(--secondary);">
                                            <div><h5 style="margin:0;font-size:0.85rem;">Run #NP-044</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0.2rem 0 0;">Long-read Nanopore • Neural Mesh Study</p><div class="progress-container" style="margin-top:0.4rem;"><div class="progress-fill" style="width:81%;background:var(--secondary);"></div></div><p style="font-size:0.7rem;color:#94a3b8;margin:0.2rem 0 0;">81% complete</p></div>
                                            <span class="status status-green">Active</span>
                                        </div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.85rem;background:#fef9f0;border-radius:10px;margin-bottom:0.6rem;">
                                            <div><h5 style="margin:0;font-size:0.85rem;">Run #LN-001</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">Long-read Nanopore • Agri-Gene Study</p></div>
                                            <span class="status status-orange">Pending</span>
                                        </div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.85rem;background:#fafafa;border-radius:10px;">
                                            <div><h5 style="margin:0;font-size:0.85rem;">Run #WG-112</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">Whole Genome • Metabolic Pathway Study</p></div>
                                            <span class="status status-blue">Queue</span>
                                        </div>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">📊 Read Quality Metrics</h4>
                                        <div style="margin-bottom:0.8rem;"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>Q30 Score (SH-992)</span><span style="font-weight:700;color:var(--secondary);">93.4%</span></div><div class="progress-container"><div class="progress-fill" style="width:93%;background:var(--secondary);"></div></div></div>
                                        <div style="margin-bottom:0.8rem;"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>Mapping Rate</span><span style="font-weight:700;color:var(--primary);">97.8%</span></div><div class="progress-container"><div class="progress-fill" style="width:98%;background:var(--primary);"></div></div></div>
                                        <div style="margin-bottom:0.8rem;"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>Duplication Rate</span><span style="font-weight:700;color:var(--accent-orange);">8.2%</span></div><div class="progress-container"><div class="progress-fill" style="width:8%;background:var(--accent-orange);"></div></div></div>
                                        <div style="background:#f0fdf4;padding:1rem;border-radius:12px;margin-top:1rem;">
                                            <p style="font-size:0.78rem;color:#15803d;margin:0 0 0.3rem;">Coverage Depth</p>
                                            <h3 style="margin:0;color:#15803d;">42× avg</h3>
                                            <p style="font-size:0.72rem;color:#94a3b8;margin:0.3rem 0 0;">Across all active runs</p>
                                        </div>
                                    </div>
                                </div>
                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">🕒 Run History (Last 6 Completed)</h4>
                                        <table style="width:100%;border-collapse:collapse;font-size:0.82rem;">
                                            <tr style="color:#94a3b8;font-size:0.75rem;border-bottom:1px solid #f1f5f9;"><th style="text-align:left;padding:0.4rem 0;">Run ID</th><th>Method</th><th>Reads</th><th>Status</th></tr>
                                            <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:0.55rem 0;">SH-991</td><td>Illumina</td><td>42M</td><td><span class="status status-green">Done</span></td></tr>
                                            <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:0.55rem 0;">NP-043</td><td>Nanopore</td><td>18M</td><td><span class="status status-green">Done</span></td></tr>
                                            <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:0.55rem 0;">WG-111</td><td>Whole Genome</td><td>96M</td><td><span class="status status-green">Done</span></td></tr>
                                            <tr><td style="padding:0.55rem 0;">SH-990</td><td>Illumina</td><td>38M</td><td><span class="status status-green">Done</span></td></tr>
                                        </table>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">➕ Submit New Run</h4>
                                        <div style="margin-bottom:0.7rem;"><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Sequencing Method</label><select style="width:100%;padding:0.5rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"><option>Short-read Illumina</option><option>Long-read Nanopore</option><option>Whole Genome</option><option>Single Cell</option></select></div>
                                        <div style="margin-bottom:0.7rem;"><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Assign to Study</label><select style="width:100%;padding:0.5rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"><option>Genome Synthesis v4.2</option><option>Neural Mesh Interface</option><option>Agri-Gene Enhancement</option></select></div>
                                        <div style="margin-bottom:1rem;"><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Read Depth Target</label><select style="width:100%;padding:0.5rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"><option>30× (Standard)</option><option>60× (Deep)</option><option>100× (Ultra-deep)</option></select></div>
                                        <button class="btn-primary" style="width:100%;padding:0.65rem;font-size:0.85rem;">🚀 Submit Run</button>
                                    </div>
                                </div>
                            </div>`;
                            break;

                        case 'trials':
                            html = `<div class="tab-content active">
                                <h2 style="font-size:2.2rem;margin-bottom:0.5rem;">📋 Study Cohorts</h2>
                                <p style="color:var(--text-secondary);margin-bottom:2rem;">Participant groups, cohort demographics and enrollment tracking</p>
                                <div class="admin-summary-grid" style="margin-bottom:1.5rem;">
                                    <div class="summary-card"><div style="font-size:1.4rem;">👥</div><p>Total Participants</p><h3>1,240</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">✅</div><p>Active Cohorts</p><h3>5</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">📝</div><p>Enrolled This Month</p><h3>86</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">📊</div><p>Data Completion</p><h3>91%</h3></div>
                                </div>
                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">📋 Cohort Overview</h4>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#eff6ff;border-radius:10px;margin-bottom:0.6rem;">
                                            <div><h5 style="margin:0;font-size:0.85rem;">Cohort A — CRISPR Trial</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">320 participants • Ages 30-55</p></div>
                                            <div style="text-align:right;"><span class="status status-green">Active</span><p style="font-size:0.7rem;color:#94a3b8;margin:0.2rem 0 0;">94% complete</p></div>
                                        </div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#f0fdf4;border-radius:10px;margin-bottom:0.6rem;">
                                            <div><h5 style="margin:0;font-size:0.85rem;">Cohort B — Neural Prosthetics</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">210 participants • Ages 18-45</p></div>
                                            <div style="text-align:right;"><span class="status status-green">Active</span><p style="font-size:0.7rem;color:#94a3b8;margin:0.2rem 0 0;">78% complete</p></div>
                                        </div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#fef9f0;border-radius:10px;margin-bottom:0.6rem;">
                                            <div><h5 style="margin:0;font-size:0.85rem;">Cohort C — Agri Genomics</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">180 participants • Field Sites 4</p></div>
                                            <div style="text-align:right;"><span class="status status-orange">On Hold</span><p style="font-size:0.7rem;color:#94a3b8;margin:0.2rem 0 0;">35% complete</p></div>
                                        </div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#fdf2f8;border-radius:10px;">
                                            <div><h5 style="margin:0;font-size:0.85rem;">Cohort D — Metabolomics</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">530 participants • Multi-site</p></div>
                                            <div style="text-align:right;"><span class="status status-blue">Recruiting</span><p style="font-size:0.7rem;color:#94a3b8;margin:0.2rem 0 0;">62% enrolled</p></div>
                                        </div>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">📊 Demographics Snapshot</h4>
                                        <p style="font-size:0.8rem;color:#64748b;margin-bottom:0.5rem;">Age Distribution</p>
                                        <div class="trend-bar-container" style="height:48px;margin-bottom:1rem;">
                                            <div class="trend-bar" style="height:45%;background:var(--primary);opacity:0.7;"></div>
                                            <div class="trend-bar" style="height:75%;background:var(--primary);opacity:0.8;"></div>
                                            <div class="trend-bar" style="height:90%;background:var(--primary);"></div>
                                            <div class="trend-bar" style="height:80%;background:var(--primary);opacity:0.9;"></div>
                                            <div class="trend-bar" style="height:55%;background:var(--primary);opacity:0.7;"></div>
                                            <div class="trend-bar" style="height:30%;background:var(--primary);opacity:0.5;"></div>
                                        </div>
                                        <div style="margin-bottom:0.8rem;"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>Male</span><span style="font-weight:700;">48%</span></div><div class="progress-container"><div class="progress-fill" style="width:48%;background:var(--primary);"></div></div></div>
                                        <div style="margin-bottom:0.8rem;"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>Female</span><span style="font-weight:700;">49%</span></div><div class="progress-container"><div class="progress-fill" style="width:49%;background:var(--accent-purple);"></div></div></div>
                                        <div><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>Non-binary / Other</span><span style="font-weight:700;">3%</span></div><div class="progress-container"><div class="progress-fill" style="width:3%;background:var(--secondary);"></div></div></div>
                                    </div>
                                </div>
                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">📈 Enrollment Trend (6 months)</h4>
                                        <div class="trend-bar-container" style="height:52px;">
                                            <div class="trend-bar" style="height:40%;background:var(--secondary);opacity:0.6;"></div>
                                            <div class="trend-bar" style="height:55%;background:var(--secondary);opacity:0.7;"></div>
                                            <div class="trend-bar" style="height:70%;background:var(--secondary);opacity:0.8;"></div>
                                            <div class="trend-bar" style="height:65%;background:var(--secondary);opacity:0.85;"></div>
                                            <div class="trend-bar" style="height:80%;background:var(--secondary);opacity:0.9;"></div>
                                            <div class="trend-bar" style="height:92%;background:var(--secondary);"></div>
                                        </div>
                                        <p style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;text-align:center;">Oct — Mar 2026</p>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">➕ Add Participant</h4>
                                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.7rem;margin-bottom:0.7rem;">
                                            <div><label style="font-size:0.75rem;color:#64748b;display:block;margin-bottom:2px;">Participant ID</label><input type="text" placeholder="PRT-xxxx" style="width:100%;padding:0.45rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.82rem;"></div>
                                            <div><label style="font-size:0.75rem;color:#64748b;display:block;margin-bottom:2px;">Age</label><input type="number" placeholder="35" style="width:100%;padding:0.45rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.82rem;"></div>
                                        </div>
                                        <div style="margin-bottom:0.7rem;"><label style="font-size:0.75rem;color:#64748b;display:block;margin-bottom:2px;">Assign to Cohort</label><select style="width:100%;padding:0.45rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.82rem;"><option>Cohort A — CRISPR Trial</option><option>Cohort B — Neural Prosthetics</option><option>Cohort D — Metabolomics</option></select></div>
                                        <button class="btn-primary" style="width:100%;padding:0.6rem;font-size:0.83rem;">Add Participant</button>
                                    </div>
                                </div>
                            </div>`;
                            break;

                        case 'settings':
                            html = `<div class="tab-content active">
                                <h2 style="font-size:2.2rem;margin-bottom:0.5rem;">⚙️ Preferences</h2>
                                <p style="color:var(--text-secondary);margin-bottom:2rem;">Your researcher profile, notification settings and security preferences</p>
                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">👤 Researcher Profile</h4>
                                        <div style="display:grid;gap:0.8rem;">
                                            <div><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Full Name</label><input type="text" value="Dr. John Researcher" style="width:100%;padding:0.55rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"></div>
                                            <div><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Institutional Email</label><input type="email" value="divyasowndappan1902@gmail.com" style="width:100%;padding:0.55rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"></div>
                                            <div><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Department</label><select style="width:100%;padding:0.55rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"><option>Genomics & Sequencing</option><option>Computational Biology</option><option>Structural Biology</option><option>Neuroscience</option></select></div>
                                            <div><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">ORCID ID</label><input type="text" value="0000-0002-1825-0097" style="width:100%;padding:0.55rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"></div>
                                            <button class="btn-primary" style="width:100%;padding:0.65rem;font-size:0.85rem;">Save Profile</button>
                                        </div>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">🔐 Security & Access</h4>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#f0fdf4;border-radius:10px;margin-bottom:0.6rem;"><span style="font-size:0.85rem;">🛡️ Two-Factor Auth</span><span class="status status-green">Enabled</span></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#f0fdf4;border-radius:10px;margin-bottom:0.6rem;"><span style="font-size:0.85rem;">🔒 DNA-Encryption</span><span class="status status-green">Active</span></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#eff6ff;border-radius:10px;margin-bottom:0.6rem;"><span style="font-size:0.85rem;">👁️ Biometric Login</span><span class="status status-blue">Configured</span></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#fef9f0;border-radius:10px;margin-bottom:1rem;"><span style="font-size:0.85rem;">⏰ Session Timeout</span><span style="font-size:0.82rem;font-weight:700;">60 min</span></div>
                                        <button class="btn-primary" style="width:100%;padding:0.65rem;font-size:0.85rem;">🔑 Rotate Security Keys</button>
                                    </div>
                                </div>
                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">🔔 Notification Preferences</h4>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.7rem 0;border-bottom:1px solid #f1f5f9;font-size:0.85rem;"><span>🧬 Genome Run Completed</span><label><input type="checkbox" checked></label></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.7rem 0;border-bottom:1px solid #f1f5f9;font-size:0.85rem;"><span>🤖 ML Job Finished</span><label><input type="checkbox" checked></label></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.7rem 0;border-bottom:1px solid #f1f5f9;font-size:0.85rem;"><span>🔬 Specimen Status Change</span><label><input type="checkbox" checked></label></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.7rem 0;border-bottom:1px solid #f1f5f9;font-size:0.85rem;"><span>📋 New Cohort Enrollment</span><label><input type="checkbox"></label></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.7rem 0;font-size:0.85rem;"><span>📧 Weekly Summary Email</span><label><input type="checkbox" checked></label></div>
                                        <button class="btn-primary" style="width:100%;padding:0.65rem;font-size:0.85rem;margin-top:1rem;">Save Preferences</button>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">🖥️ Display & Data Preferences</h4>
                                        <div style="margin-bottom:0.8rem;"><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Default Dashboard View</label><select style="width:100%;padding:0.5rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"><option>Overview</option><option>Assigned Studies</option><option>ML Insights</option></select></div>
                                        <div style="margin-bottom:0.8rem;"><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Data Export Format</label><select style="width:100%;padding:0.5rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"><option>CSV</option><option>JSON</option><option>FASTA / FASTQ</option><option>VCF</option></select></div>
                                        <div style="margin-bottom:1rem;"><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Genome Reference</label><select style="width:100%;padding:0.5rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"><option>GRCh38 (hg38)</option><option>GRCh37 (hg19)</option><option>T2T-CHM13</option></select></div>
                                        <button class="btn-primary" style="width:100%;padding:0.65rem;font-size:0.85rem;">Apply Settings</button>
                                    </div>
                                </div>
                            </div>`;
                            break;

                        default:
                            html = `<div class="tab-content active"><div class="placeholder-view"><h3>Researcher ${tabId}</h3><p style="color: #666;">View clinical data for ${tabId}. Systems synchronized.</p></div></div>`;
                    }
                } else if (role === 'administrator') {

                    switch (tabId) {
                        case 'dashboard':
                            html = `<div class="tab-content active">
                                <h2 style="font-size:2.2rem;margin-bottom:0.3rem;">🖥️ Main Display</h2>
                                <p style="color:var(--text-secondary);margin-bottom:2rem;">Welcome, <strong>Dr. Sarah Admin</strong>. Full facility & infrastructure overview.</p>
                                <div class="admin-summary-grid" style="margin-bottom:1.5rem;">
                                    <div class="summary-card" style="border-top:3px solid var(--secondary);"><div style="font-size:1.4rem;">⚡</div><p>Facility Uptime</p><h3>99.98%</h3><div style="font-size:0.78rem;color:var(--secondary);">Tier-4 Compliant</div></div>
                                    <div class="summary-card" style="border-top:3px solid var(--primary);"><div style="font-size:1.4rem;">👥</div><p>Active Staff Nodes</p><h3>842</h3><div style="font-size:0.78rem;color:var(--primary);">↑ 5% this week</div></div>
                                    <div class="summary-card" style="border-top:3px solid var(--accent-orange);"><div style="font-size:1.4rem;">💰</div><p>Operational Budget</p><h3>$2.4M</h3><div style="font-size:0.78rem;color:var(--accent-orange);">Within Limits</div></div>
                                    <div class="summary-card" style="border-top:3px solid var(--accent-purple);"><div style="font-size:1.4rem;">🔔</div><p>Open Alerts</p><h3>3</h3><div style="font-size:0.78rem;color:var(--accent-purple);">2 Critical</div></div>
                                </div>
                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1.2rem;">📊 System Load & Efficiency</h4>
                                        <p style="font-size:0.8rem;color:#64748b;margin-bottom:0.5rem;">Node Utilization (%)</p>
                                        <div class="trend-bar-container" style="height:40px;margin-bottom:1.2rem;">
                                            <div class="trend-bar" style="height:30%;background:var(--secondary);opacity:0.5;"></div>
                                            <div class="trend-bar" style="height:45%;background:var(--secondary);opacity:0.5;"></div>
                                            <div class="trend-bar" style="height:75%;background:var(--secondary);opacity:0.5;"></div>
                                            <div class="trend-bar" style="height:80%;background:var(--secondary);opacity:0.5;"></div>
                                            <div class="trend-bar" style="height:60%;background:var(--secondary);opacity:0.5;"></div>
                                            <div class="trend-bar" style="height:85%;background:var(--secondary);opacity:0.5;"></div>
                                        </div>
                                        <p style="font-size:0.8rem;color:#64748b;margin-bottom:0.5rem;">Power Efficiency (kWh/Node)</p>
                                        <div class="trend-bar-container" style="height:40px;">
                                            <div class="trend-bar" style="height:90%;background:var(--primary);"></div>
                                            <div class="trend-bar" style="height:88%;background:var(--primary);"></div>
                                            <div class="trend-bar" style="height:92%;background:var(--primary);"></div>
                                            <div class="trend-bar" style="height:95%;background:var(--primary);"></div>
                                            <div class="trend-bar" style="height:91%;background:var(--primary);"></div>
                                            <div class="trend-bar" style="height:94%;background:var(--primary);"></div>
                                        </div>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1.2rem;">⚙️ Quick Management Inputs</h4>
                                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;margin-bottom:0.8rem;">
                                            <div><label style="font-size:0.75rem;color:#64748b;display:block;">Cooling Temp (°C)</label><input type="number" value="18.5" step="0.5" style="width:100%;padding:0.5rem;border:1px solid #e2e8f0;border-radius:6px;"></div>
                                            <div><label style="font-size:0.75rem;color:#64748b;display:block;">Backup Power (%)</label><input type="number" value="100" style="width:100%;padding:0.5rem;border:1px solid #e2e8f0;border-radius:6px;"></div>
                                        </div>
                                        <div style="margin-bottom:0.8rem;"><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Infrastructure Load Limit</label><input type="range" value="85" style="width:100%;height:6px;appearance:none;background:#e2e8f0;border-radius:3px;"></div>
                                        <div style="margin-bottom:1rem;"><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Maintenance Queue</label>
                                            <select style="width:100%;padding:0.5rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"><option>Scheduled (Weekly)</option><option>Urgent Fix</option><option>On Hold</option></select></div>
                                        <button class="btn-primary" style="width:100%;padding:0.65rem;font-size:0.85rem;background:var(--text-main);">Update Policy</button>
                                    </div>
                                </div>
                                <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">⚡ Quick Portal Access</h4>
                                        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.8rem;">
                                            <div style="padding:0.9rem;background:#f0fdf4;border-radius:12px;text-align:center;cursor:pointer;"><div style="font-size:1.3rem;">🏢</div><p style="font-size:0.72rem;font-weight:700;color:var(--secondary);margin:0.2rem 0;">Facility Ops</p></div>
                                            <div style="padding:0.9rem;background:#eff6ff;border-radius:12px;text-align:center;cursor:pointer;"><div style="font-size:1.3rem;">🌏</div><p style="font-size:0.72rem;font-weight:700;color:var(--primary);margin:0.2rem 0;">Initiatives</p></div>
                                            <div style="padding:0.9rem;background:#fdf2f8;border-radius:12px;text-align:center;cursor:pointer;"><div style="font-size:1.3rem;">🧠</div><p style="font-size:0.72rem;font-weight:700;color:var(--accent);margin:0.2rem 0;">Network AI</p></div>
                                            <div style="padding:0.9rem;background:#fef9f0;border-radius:12px;text-align:center;cursor:pointer;"><div style="font-size:1.3rem;">💳</div><p style="font-size:0.72rem;font-weight:700;color:var(--accent-orange);margin:0.2rem 0;">Invoices</p></div>
                                        </div>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">🔔 Recent Alerts</h4>
                                        <div style="display:flex;align-items:center;gap:0.8rem;padding:0.7rem;background:#fef2f2;border-radius:10px;margin-bottom:0.6rem;border-left:3px solid #ef4444;font-size:0.83rem;"><span>🔴</span><div><p style="margin:0;font-weight:700;">Node-04 Overload</p><p style="margin:0;font-size:0.72rem;color:#94a3b8;">CPU at 98% — 10 min ago</p></div></div>
                                        <div style="display:flex;align-items:center;gap:0.8rem;padding:0.7rem;background:#fef9f0;border-radius:10px;margin-bottom:0.6rem;border-left:3px solid var(--accent-orange);font-size:0.83rem;"><span>🟡</span><div><p style="margin:0;font-weight:700;">Backup Power Drain</p><p style="margin:0;font-size:0.72rem;color:#94a3b8;">Battery at 72% — 1 hr ago</p></div></div>
                                        <div style="display:flex;align-items:center;gap:0.8rem;padding:0.7rem;background:#f0fdf4;border-radius:10px;border-left:3px solid var(--secondary);font-size:0.83rem;"><span>🟢</span><div><p style="margin:0;font-weight:700;">Weekly Backup Complete</p><p style="margin:0;font-size:0.72rem;color:#94a3b8;">02:00 AM — Success</p></div></div>
                                    </div>
                                </div>
                            </div>`;
                            break;

                        case 'management':
                            html = `<div class="tab-content active">
                                <h2 style="font-size:2.2rem;margin-bottom:0.5rem;">🏢 Facility Ops</h2>
                                <p style="color:var(--text-secondary);margin-bottom:2rem;">Real-time field operations, equipment health and resource management</p>
                                <div class="admin-summary-grid" style="margin-bottom:1.5rem;">
                                    <div class="summary-card"><div style="font-size:1.4rem;">🧬</div><p>Sequencers Online</p><h3>8/10</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">🧊</div><p>Cryo Units</p><h3>-80°C ✅</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">🖥️</div><p>Server Load</p><h3>22%</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">👷</div><p>Field Staff</p><h3>34 Active</h3></div>
                                </div>
                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">🔧 Equipment Health Matrix</h4>
                                        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.8rem;">
                                            <div style="background:#f0fdf4;padding:1rem;border-radius:10px;text-align:center;"><p style="font-size:0.7rem;color:#15803d;margin:0;text-transform:uppercase;">Sequencers</p><h4 style="color:#15803d;margin:0.3rem 0;">8/10</h4><p style="font-size:0.7rem;color:#94a3b8;margin:0;">Online</p></div>
                                            <div style="background:#fffaf0;padding:1rem;border-radius:10px;text-align:center;"><p style="font-size:0.7rem;color:#c05621;margin:0;text-transform:uppercase;">Freezers</p><h4 style="color:#c05621;margin:0.3rem 0;">6/6</h4><p style="font-size:0.7rem;color:#94a3b8;margin:0;">Stable</p></div>
                                            <div style="background:#ebf8ff;padding:1rem;border-radius:10px;text-align:center;"><p style="font-size:0.7rem;color:#2b6cb0;margin:0;text-transform:uppercase;">PCR Units</p><h4 style="color:#2b6cb0;margin:0.3rem 0;">12/12</h4><p style="font-size:0.7rem;color:#94a3b8;margin:0;">Running</p></div>
                                            <div style="background:#fdf2f8;padding:1rem;border-radius:10px;text-align:center;"><p style="font-size:0.7rem;color:#7e22ce;margin:0;text-transform:uppercase;">Centrifuge</p><h4 style="color:#7e22ce;margin:0.3rem 0;">4/5</h4><p style="font-size:0.7rem;color:#94a3b8;margin:0;">1 Service</p></div>
                                            <div style="background:#fef9f0;padding:1rem;border-radius:10px;text-align:center;"><p style="font-size:0.7rem;color:#92400e;margin:0;text-transform:uppercase;">Incubators</p><h4 style="color:#92400e;margin:0.3rem 0;">8/8</h4><p style="font-size:0.7rem;color:#94a3b8;margin:0;">Optimal</p></div>
                                            <div style="background:#f0fdf4;padding:1rem;border-radius:10px;text-align:center;"><p style="font-size:0.7rem;color:#15803d;margin:0;text-transform:uppercase;">Autoclaves</p><h4 style="color:#15803d;margin:0.3rem 0;">3/3</h4><p style="font-size:0.7rem;color:#94a3b8;margin:0;">Ready</p></div>
                                        </div>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">📋 Maintenance Schedule</h4>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#fef2f2;border-radius:10px;margin-bottom:0.7rem;"><div><h5 style="margin:0;font-size:0.85rem;">Sequencer #9 — Calibration</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">Scheduled: Mar 18</p></div><span class="status status-orange">Urgent</span></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#fafafa;border-radius:10px;margin-bottom:0.7rem;"><div><h5 style="margin:0;font-size:0.85rem;">HVAC Filter Replacement</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">Scheduled: Mar 22</p></div><span class="status status-blue">Planned</span></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#fafafa;border-radius:10px;margin-bottom:0.7rem;"><div><h5 style="margin:0;font-size:0.85rem;">UPS Battery Check</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">Scheduled: Mar 29</p></div><span class="status status-blue">Planned</span></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#f0fdf4;border-radius:10px;"><div><h5 style="margin:0;font-size:0.85rem;">Server Room Inspection</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">Completed: Mar 12</p></div><span class="status status-green">Done</span></div>
                                    </div>
                                </div>
                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">🌡️ Environmental Monitoring</h4>
                                        <div style="margin-bottom:0.8rem;"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>Lab Temperature (22°C target)</span><span style="font-weight:700;color:var(--secondary);">21.8°C ✅</span></div><div class="progress-container"><div class="progress-fill" style="width:88%;background:var(--secondary);"></div></div></div>
                                        <div style="margin-bottom:0.8rem;"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>Humidity (45% target)</span><span style="font-weight:700;color:var(--primary);">47% ✅</span></div><div class="progress-container"><div class="progress-fill" style="width:47%;background:var(--primary);"></div></div></div>
                                        <div><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>CO₂ Level (400ppm limit)</span><span style="font-weight:700;color:var(--accent-orange);">382ppm</span></div><div class="progress-container"><div class="progress-fill" style="width:96%;background:var(--accent-orange);"></div></div></div>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">👷 Field Staff Assignments</h4>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.7rem 0;border-bottom:1px solid #f1f5f9;font-size:0.83rem;"><span>🔬 Lab A — Genomics</span><strong>8 Staff</strong></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.7rem 0;border-bottom:1px solid #f1f5f9;font-size:0.83rem;"><span>🧪 Lab B — Biochemistry</span><strong>6 Staff</strong></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.7rem 0;border-bottom:1px solid #f1f5f9;font-size:0.83rem;"><span>🖥️ Server Room</span><strong>4 Staff</strong></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.7rem 0;font-size:0.83rem;"><span>🏥 Patient Care Wing</span><strong>16 Staff</strong></div>
                                    </div>
                                </div>
                            </div>`;
                            break;

                        case 'projects':
                            html = `<div class="tab-content active">
                                <h2 style="font-size:2.2rem;margin-bottom:0.5rem;">🌏 Global Initiatives</h2>
                                <p style="color:var(--text-secondary);margin-bottom:2rem;">Worldwide research partnerships, impact metrics and active project portfolios</p>
                                <div class="admin-summary-grid" style="margin-bottom:1.5rem;">
                                    <div class="summary-card"><div style="font-size:1.4rem;">🌍</div><p>Active Regions</p><h3>7</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">🤝</div><p>Partner Orgs</p><h3>24</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">📁</div><p>Projects Running</p><h3>18</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">🏆</div><p>Completed</p><h3>42</h3></div>
                                </div>
                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">📊 Regional Performance</h4>
                                        <div style="margin-bottom:0.8rem;"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>🌍 Synthetic Bio (EMEA)</span><span style="font-weight:700;">92% Impact</span></div><div class="progress-container"><div class="progress-fill" style="width:92%;background:var(--secondary);"></div></div></div>
                                        <div style="margin-bottom:0.8rem;"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>🌏 Gene Editing (APAC)</span><span style="font-weight:700;">78% Impact</span></div><div class="progress-container"><div class="progress-fill" style="width:78%;background:var(--primary);"></div></div></div>
                                        <div style="margin-bottom:0.8rem;"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>🌎 Metabolic (Americas)</span><span style="font-weight:700;">85% Impact</span></div><div class="progress-container"><div class="progress-fill" style="width:85%;background:var(--accent-blue);"></div></div></div>
                                        <div><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>🌐 BioSec (MEA)</span><span style="font-weight:700;">67% Impact</span></div><div class="progress-container"><div class="progress-fill" style="width:67%;background:var(--accent-orange);"></div></div></div>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">📁 Featured Projects</h4>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#f0fdf4;border-radius:10px;margin-bottom:0.7rem;"><div><h5 style="margin:0;font-size:0.85rem;">Neuro-Synapse Initiative</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">MIT + UCL • Phase III</p></div><span class="status status-green">Active</span></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#eff6ff;border-radius:10px;margin-bottom:0.7rem;"><div><h5 style="margin:0;font-size:0.85rem;">CRISPR Agri-Pro</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">FAO Global • Phase II</p></div><span class="status status-blue">Ongoing</span></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#fef9f0;border-radius:10px;"><div><h5 style="margin:0;font-size:0.85rem;">Oceanic Microbial Mapping</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">NOAA • Data Collection</p></div><span class="status status-orange">Review</span></div>
                                    </div>
                                </div>
                                <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">📅 Upcoming Milestones</h4>
                                        <div style="display:flex;align-items:center;gap:1rem;padding:0.8rem;background:#eff6ff;border-radius:10px;margin-bottom:0.7rem;border-left:4px solid var(--primary);"><div style="min-width:36px;text-align:center;"><div style="font-size:0.65rem;color:#94a3b8;text-transform:uppercase;">Mar</div><div style="font-size:1.1rem;font-weight:800;color:var(--primary);">20</div></div><div><h5 style="margin:0;font-size:0.85rem;">Global Bio-Summit 2026</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">Geneva • Virtual Keynote</p></div><span class="status status-blue" style="margin-left:auto;">Prep</span></div>
                                        <div style="display:flex;align-items:center;gap:1rem;padding:0.8rem;background:#f0fdf4;border-radius:10px;margin-bottom:0.7rem;border-left:4px solid var(--secondary);"><div style="min-width:36px;text-align:center;"><div style="font-size:0.65rem;color:#94a3b8;text-transform:uppercase;">Apr</div><div style="font-size:1.1rem;font-weight:800;color:var(--secondary);">5</div></div><div><h5 style="margin:0;font-size:0.85rem;">Q1 Initiative Report</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">Board presentation</p></div><span class="status status-green" style="margin-left:auto;">On Track</span></div>
                                        <div style="display:flex;align-items:center;gap:1rem;padding:0.8rem;background:#fafafa;border-radius:10px;border-left:4px solid #e2e8f0;"><div style="min-width:36px;text-align:center;"><div style="font-size:0.65rem;color:#94a3b8;text-transform:uppercase;">Apr</div><div style="font-size:1.1rem;font-weight:800;color:#94a3b8;">15</div></div><div><h5 style="margin:0;font-size:0.85rem;">Phase III Enrollment Close</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">NeuroSynapse</p></div><span class="status status-orange" style="margin-left:auto;">Upcoming</span></div>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">🤝 Key Partners</h4>
                                        <div style="display:flex;align-items:center;gap:0.8rem;padding:0.7rem;background:#fafafa;border-radius:10px;margin-bottom:0.6rem;font-size:0.83rem;"><div style="width:36px;height:36px;background:#dbeafe;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:1rem;">🏛️</div><div><p style="margin:0;font-weight:700;">MIT BioLab</p><p style="margin:0;font-size:0.72rem;color:#94a3b8;">Cambridge, MA</p></div></div>
                                        <div style="display:flex;align-items:center;gap:0.8rem;padding:0.7rem;background:#fafafa;border-radius:10px;margin-bottom:0.6rem;font-size:0.83rem;"><div style="width:36px;height:36px;background:#d1fae5;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:1rem;">🧬</div><div><p style="margin:0;font-weight:700;">Genome Institute EU</p><p style="margin:0;font-size:0.72rem;color:#94a3b8;">Brussels, BE</p></div></div>
                                        <div style="display:flex;align-items:center;gap:0.8rem;padding:0.7rem;background:#fafafa;border-radius:10px;font-size:0.83rem;"><div style="width:36px;height:36px;background:#ede9fe;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:1rem;">🔬</div><div><p style="margin:0;font-weight:700;">BioNano Singapore</p><p style="margin:0;font-size:0.72rem;color:#94a3b8;">Singapore</p></div></div>
                                    </div>
                                </div>
                            </div>`;
                            break;

                        case 'ai-analysis':
                            html = `<div class="tab-content active">
                                <h2 style="font-size:2.2rem;margin-bottom:0.5rem;">🧠 Network Processing</h2>
                                <p style="color:var(--text-secondary);margin-bottom:2rem;">Central AI performance, neural node analytics and inference efficiency</p>
                                <div class="admin-summary-grid" style="margin-bottom:1.5rem;">
                                    <div class="summary-card"><div style="font-size:1.4rem;">⚡</div><p>AI Uptime</p><h3>99.9%</h3><div style="font-size:0.78rem;color:var(--secondary);">All Nodes</div></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">🔢</div><p>Active Models</p><h3>14</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">⏱️</div><p>Avg Inference</p><h3>42ms</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">📦</div><p>Daily Requests</p><h3>1.2M</h3></div>
                                </div>
                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">📈 Inference Load Trend</h4>
                                        <p style="font-size:0.8rem;color:#64748b;margin-bottom:0.5rem;">Requests/min (Last 7 days)</p>
                                        <div class="trend-bar-container" style="height:50px;margin-bottom:1rem;">
                                            <div class="trend-bar" style="height:60%;background:var(--accent-purple);opacity:0.6;"></div>
                                            <div class="trend-bar" style="height:75%;background:var(--accent-purple);opacity:0.6;"></div>
                                            <div class="trend-bar" style="height:55%;background:var(--accent-purple);opacity:0.6;"></div>
                                            <div class="trend-bar" style="height:90%;background:var(--accent-purple);opacity:0.8;"></div>
                                            <div class="trend-bar" style="height:80%;background:var(--accent-purple);opacity:0.8;"></div>
                                            <div class="trend-bar" style="height:95%;background:var(--accent-purple);opacity:0.8;"></div>
                                            <div class="trend-bar" style="height:85%;background:var(--accent-purple);opacity:0.8;"></div>
                                        </div>
                                        <p style="font-size:0.8rem;color:#64748b;margin-bottom:0.5rem;">Model Accuracy (%)</p>
                                        <div class="trend-bar-container" style="height:50px;">
                                            <div class="trend-bar" style="height:94%;background:var(--secondary);"></div>
                                            <div class="trend-bar" style="height:95%;background:var(--secondary);"></div>
                                            <div class="trend-bar" style="height:93%;background:var(--secondary);"></div>
                                            <div class="trend-bar" style="height:97%;background:var(--secondary);"></div>
                                            <div class="trend-bar" style="height:96%;background:var(--secondary);"></div>
                                            <div class="trend-bar" style="height:98%;background:var(--secondary);"></div>
                                            <div class="trend-bar" style="height:97%;background:var(--secondary);"></div>
                                        </div>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">🖥️ Active AI Models</h4>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.75rem;background:#f0fdf4;border-radius:10px;margin-bottom:0.6rem;"><div><h5 style="margin:0;font-size:0.85rem;">GenomeMind v5.2</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">DNA Prediction • 98.1% acc</p></div><span class="status status-green">Live</span></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.75rem;background:#eff6ff;border-radius:10px;margin-bottom:0.6rem;"><div><h5 style="margin:0;font-size:0.85rem;">ProteinFold-X</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">Protein Docking • 94.2% acc</p></div><span class="status status-green">Live</span></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.75rem;background:#fef9f0;border-radius:10px;margin-bottom:0.6rem;"><div><h5 style="margin:0;font-size:0.85rem;">MetaCycleLM</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">Metabolic Modelling • Training</p></div><span class="status status-orange">Training</span></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.75rem;background:#fdf2f8;border-radius:10px;"><div><h5 style="margin:0;font-size:0.85rem;">NeuralPharma-7</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">Drug Discovery • Queued</p></div><span class="status status-blue">Queue</span></div>
                                    </div>
                                </div>
                                <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">🌐 Node Status Map</h4>
                                        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.6rem;">
                                            <div style="padding:0.7rem;background:#f0fdf4;border-radius:8px;text-align:center;font-size:0.75rem;"><div style="font-weight:700;color:var(--secondary);">Node-01</div><div style="color:#94a3b8;">22%</div></div>
                                            <div style="padding:0.7rem;background:#f0fdf4;border-radius:8px;text-align:center;font-size:0.75rem;"><div style="font-weight:700;color:var(--secondary);">Node-02</div><div style="color:#94a3b8;">45%</div></div>
                                            <div style="padding:0.7rem;background:#f0fdf4;border-radius:8px;text-align:center;font-size:0.75rem;"><div style="font-weight:700;color:var(--secondary);">Node-03</div><div style="color:#94a3b8;">31%</div></div>
                                            <div style="padding:0.7rem;background:#fef2f2;border-radius:8px;text-align:center;font-size:0.75rem;"><div style="font-weight:700;color:#ef4444;">Node-04</div><div style="color:#94a3b8;">98% ⚠️</div></div>
                                            <div style="padding:0.7rem;background:#f0fdf4;border-radius:8px;text-align:center;font-size:0.75rem;"><div style="font-weight:700;color:var(--secondary);">Node-05</div><div style="color:#94a3b8;">60%</div></div>
                                            <div style="padding:0.7rem;background:#f0fdf4;border-radius:8px;text-align:center;font-size:0.75rem;"><div style="font-weight:700;color:var(--secondary);">Node-06</div><div style="color:#94a3b8;">55%</div></div>
                                            <div style="padding:0.7rem;background:#f0fdf4;border-radius:8px;text-align:center;font-size:0.75rem;"><div style="font-weight:700;color:var(--secondary);">Node-07</div><div style="color:#94a3b8;">72%</div></div>
                                            <div style="padding:0.7rem;background:#eff6ff;border-radius:8px;text-align:center;font-size:0.75rem;"><div style="font-weight:700;color:var(--primary);">Node-08</div><div style="color:#94a3b8;">84%</div></div>
                                        </div>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">⚙️ Resource Controls</h4>
                                        <div style="margin-bottom:0.8rem;"><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">GPU Allocation Limit (%)</label><input type="range" value="80" style="width:100%;height:6px;appearance:none;background:#e2e8f0;border-radius:3px;"></div>
                                        <div style="margin-bottom:0.8rem;"><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Priority Model</label>
                                        <select style="width:100%;padding:0.5rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"><option>GenomeMind v5.2</option><option>ProteinFold-X</option><option>MetaCycleLM</option></select></div>
                                        <div style="margin-bottom:1rem;"><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Cooling Mode</label>
                                        <select style="width:100%;padding:0.5rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"><option>Auto</option><option>Aggressive</option><option>Silent</option></select></div>
                                        <button class="btn-primary" style="width:100%;padding:0.65rem;font-size:0.85rem;">Apply Settings</button>
                                    </div>
                                </div>
                            </div>`;
                            break;
                        case 'reports':
                            html = `<div class="tab-content active">
                                <h2 style="font-size:2.2rem;margin-bottom:0.5rem;">📊 Analytics</h2>
                                <p style="color:var(--text-secondary);margin-bottom:2rem;">Facility-wide performance metrics, report library and audit logs</p>
                                <div class="admin-summary-grid" style="margin-bottom:1.5rem;">
                                    <div class="summary-card"><div style="font-size:1.4rem;">📄</div><p>Total Reports</p><h3>48</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">📑</div><p>Genetic Analysis</p><h3>14</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">🔬</div><p>Lab Reports</p><h3>22</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">⚙️</div><p>Processing</p><h3>3</h3></div>
                                </div>
                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">📈 Monthly Report Output</h4>
                                        <p style="font-size:0.8rem;color:#64748b;margin-bottom:0.5rem;">Reports Generated (Last 6 Months)</p>
                                        <div class="trend-bar-container" style="height:50px;margin-bottom:1rem;">
                                            <div class="trend-bar" style="height:55%;background:var(--primary);opacity:0.6;"></div>
                                            <div class="trend-bar" style="height:70%;background:var(--primary);opacity:0.6;"></div>
                                            <div class="trend-bar" style="height:60%;background:var(--primary);opacity:0.7;"></div>
                                            <div class="trend-bar" style="height:80%;background:var(--primary);opacity:0.8;"></div>
                                            <div class="trend-bar" style="height:75%;background:var(--primary);opacity:0.9;"></div>
                                            <div class="trend-bar" style="height:95%;background:var(--primary);"></div>
                                        </div>
                                        <p style="font-size:0.8rem;color:#64748b;margin-bottom:0.5rem;">Compliance Score (%)</p>
                                        <div class="trend-bar-container" style="height:50px;">
                                            <div class="trend-bar" style="height:88%;background:var(--secondary);"></div>
                                            <div class="trend-bar" style="height:90%;background:var(--secondary);"></div>
                                            <div class="trend-bar" style="height:92%;background:var(--secondary);"></div>
                                            <div class="trend-bar" style="height:95%;background:var(--secondary);"></div>
                                            <div class="trend-bar" style="height:94%;background:var(--secondary);"></div>
                                            <div class="trend-bar" style="height:98%;background:var(--secondary);"></div>
                                        </div>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">📂 Recent Reports</h4>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.75rem;background:#f0fdf4;border-radius:10px;margin-bottom:0.6rem;"><div><h5 style="margin:0;font-size:0.85rem;">Q1 Genomic Analysis</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">Mar 15, 2026 • 142 pages</p></div><span class="status status-green">Published</span></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.75rem;background:#eff6ff;border-radius:10px;margin-bottom:0.6rem;"><div><h5 style="margin:0;font-size:0.85rem;">Lab Safety Audit</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">Mar 10, 2026 • 58 pages</p></div><span class="status status-blue">Archived</span></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.75rem;background:#fef9f0;border-radius:10px;margin-bottom:0.6rem;"><div><h5 style="margin:0;font-size:0.85rem;">Budget Utilization</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">Processing...</p></div><span class="status status-orange">Pending</span></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.75rem;background:#fafafa;border-radius:10px;"><div><h5 style="margin:0;font-size:0.85rem;">Patient Outcome Study</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">Feb 28, 2026 • 210 pages</p></div><span class="status status-green">Published</span></div>
                                    </div>
                                </div>
                                <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">🖥️ System Audit Log</h4>
                                        <div style="font-family:monospace;font-size:0.78rem;background:#fafafa;border-radius:10px;padding:1rem;line-height:1.9;">
                                            <div style="display:flex;gap:0.8rem;"><span style="color:#94a3b8;">16:02</span><span style="color:var(--secondary);">✅</span><span>Weekly backup completed — Node cluster A</span></div>
                                            <div style="display:flex;gap:0.8rem;"><span style="color:#94a3b8;">15:44</span><span style="color:var(--primary);">ℹ️</span><span>Admin login — IP 192.168.1.45</span></div>
                                            <div style="display:flex;gap:0.8rem;"><span style="color:#94a3b8;">15:30</span><span style="color:#ef4444;">⚠️</span><span>Node-04 CPU spike to 98%</span></div>
                                            <div style="display:flex;gap:0.8rem;"><span style="color:#94a3b8;">14:15</span><span style="color:var(--secondary);">✅</span><span>Q1 Genomic Report published</span></div>
                                            <div style="display:flex;gap:0.8rem;"><span style="color:#94a3b8;">02:00</span><span style="color:var(--secondary);">✅</span><span>Scheduled maintenance completed</span></div>
                                        </div>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">⚙️ Export & Filter</h4>
                                        <div style="margin-bottom:0.8rem;"><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Report Type</label>
                                        <select style="width:100%;padding:0.5rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"><option>All Reports</option><option>Genetic Analysis</option><option>Lab Safety</option><option>Financial</option></select></div>
                                        <div style="margin-bottom:0.8rem;"><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Date Range</label>
                                        <input type="date" style="width:100%;padding:0.5rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"></div>
                                        <div style="margin-bottom:1rem;"><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Export Format</label>
                                        <select style="width:100%;padding:0.5rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"><option>PDF</option><option>Excel</option><option>CSV</option></select></div>
                                        <button class="btn-primary" style="width:100%;padding:0.65rem;font-size:0.85rem;">📥 Export Reports</button>
                                    </div>
                                </div>
                            </div>`;
                            break;

                        case 'billing':
                            html = `<div class="tab-content active">
                                <h2 style="font-size:2.2rem;margin-bottom:0.5rem;">🧾 Invoices</h2>
                                <p style="color:var(--text-secondary);margin-bottom:2rem;">Institutional billing, partner invoices and financial reconciliation</p>
                                <div class="admin-summary-grid" style="margin-bottom:1.5rem;">
                                    <div class="summary-card"><div style="font-size:1.4rem;">💰</div><p>Revenue (Q1)</p><h3 style="color:var(--secondary);">$2.1M</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">🧾</div><p>Invoices Issued</p><h3>38</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">⏳</div><p>Pending</p><h3 style="color:var(--accent-orange);">$142K</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">✅</div><p>Collected</p><h3 style="color:var(--primary);">94%</h3></div>
                                </div>
                                <div style="display:grid;grid-template-columns:1.4fr 1fr;gap:1.5rem;margin-bottom:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">📋 Invoice Ledger</h4>
                                        <table style="width:100%;border-collapse:collapse;font-size:0.83rem;">
                                            <tr style="color:#94a3b8;font-size:0.75rem;border-bottom:1px solid #f1f5f9;"><th style="padding:0.4rem 0;text-align:left;">ID</th><th>Organization</th><th>Amount</th><th>Due</th><th>Status</th></tr>
                                            <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:0.7rem 0;">#INV-201</td><td>HealthCorp Int.</td><td>$24,000</td><td>Mar 1</td><td><span class="status status-green">Paid</span></td></tr>
                                            <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:0.7rem 0;">#INV-202</td><td>BioNano Labs</td><td>$18,500</td><td>Mar 15</td><td><span class="status status-orange">Pending</span></td></tr>
                                            <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:0.7rem 0;">#INV-203</td><td>Genome Institute</td><td>$52,000</td><td>Mar 30</td><td><span class="status status-green">Paid</span></td></tr>
                                            <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:0.7rem 0;">#INV-204</td><td>NeuraTech APAC</td><td>$31,200</td><td>Apr 5</td><td><span class="status status-blue">Invoiced</span></td></tr>
                                            <tr><td style="padding:0.7rem 0;">#INV-205</td><td>PharmaSynth EU</td><td>$88,000</td><td>Apr 12</td><td><span class="status status-orange">Pending</span></td></tr>
                                        </table>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">💳 Payment Overview</h4>
                                        <div style="margin-bottom:0.8rem;"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>Collected Revenue</span><span style="font-weight:700;color:var(--secondary);">$1.97M</span></div><div class="progress-container"><div class="progress-fill" style="width:94%;background:var(--secondary);"></div></div></div>
                                        <div style="margin-bottom:0.8rem;"><div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>Outstanding</span><span style="font-weight:700;color:var(--accent-orange);">$142K</span></div><div class="progress-container"><div class="progress-fill" style="width:6%;background:var(--accent-orange);"></div></div></div>
                                        <div style="background:#f0fdf4;padding:1rem;border-radius:12px;margin-top:1rem;">
                                            <p style="font-size:0.78rem;color:#15803d;margin:0 0 0.3rem;">Next Scheduled Payment</p>
                                            <h4 style="margin:0;color:#15803d;">$31,200 — NeuraTech</h4>
                                            <p style="font-size:0.72rem;color:#94a3b8;margin:0.3rem 0 0;">Due: April 5, 2026</p>
                                        </div>
                                        <button class="btn-primary" style="width:100%;padding:0.65rem;font-size:0.85rem;margin-top:1rem;">Generate Invoice</button>
                                    </div>
                                </div>
                                <div class="content-card">
                                    <h4 style="margin-bottom:1rem;">📊 Revenue by Category (Q1 2026)</h4>
                                    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;">
                                        <div style="padding:1rem;background:#f0fdf4;border-radius:12px;text-align:center;"><p style="font-size:0.72rem;color:#15803d;margin:0;text-transform:uppercase;">Lab Services</p><h3 style="color:#15803d;margin:0.3rem 0;">$840K</h3></div>
                                        <div style="padding:1rem;background:#eff6ff;border-radius:12px;text-align:center;"><p style="font-size:0.72rem;color:#1d4ed8;margin:0;text-transform:uppercase;">Research Grants</p><h3 style="color:#1d4ed8;margin:0.3rem 0;">$620K</h3></div>
                                        <div style="padding:1rem;background:#fdf2f8;border-radius:12px;text-align:center;"><p style="font-size:0.72rem;color:#7e22ce;margin:0;text-transform:uppercase;">IP Licensing</p><h3 style="color:#7e22ce;margin:0.3rem 0;">$430K</h3></div>
                                        <div style="padding:1rem;background:#fef9f0;border-radius:12px;text-align:center;"><p style="font-size:0.72rem;color:#92400e;margin:0;text-transform:uppercase;">Consultancy</p><h3 style="color:#92400e;margin:0.3rem 0;">$210K</h3></div>
                                    </div>
                                </div>
                            </div>`;
                            break;

                        case 'settings':
                            html = `<div class="tab-content active">
                                <h2 style="font-size:2.2rem;margin-bottom:0.5rem;">⚙️ Configuration</h2>
                                <p style="color:var(--text-secondary);margin-bottom:2rem;">System access, security policies, role permissions and platform settings</p>
                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">👤 Administrator Profile</h4>
                                        <div style="display:grid;gap:0.8rem;">
                                            <div><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Full Name</label><input type="text" value="Dr. Sarah Admin" style="width:100%;padding:0.55rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"></div>
                                            <div><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Admin Email</label><input type="email" value="sarah.admin@biotech.com" style="width:100%;padding:0.55rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"></div>
                                            <div><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Access Level</label>
                                            <select style="width:100%;padding:0.55rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"><option>Super Admin</option><option>Regional Admin</option><option>Lab Admin</option></select></div>
                                            <button class="btn-primary" style="width:100%;padding:0.65rem;font-size:0.85rem;">Save Profile</button>
                                        </div>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">🔐 Security Policies</h4>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#f0fdf4;border-radius:10px;margin-bottom:0.6rem;"><span style="font-size:0.85rem;">🛡️ Two-Factor Auth</span><span class="status status-green">Enabled</span></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#f0fdf4;border-radius:10px;margin-bottom:0.6rem;"><span style="font-size:0.85rem;">🔒 256-bit Encryption</span><span class="status status-green">Active</span></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#eff6ff;border-radius:10px;margin-bottom:0.6rem;"><span style="font-size:0.85rem;">📋 Audit Trail Logging</span><span class="status status-blue">On</span></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#fef9f0;border-radius:10px;margin-bottom:1rem;"><span style="font-size:0.85rem;">⏰ Session Timeout</span><span style="font-size:0.82rem;font-weight:700;">30 min</span></div>
                                        <button class="btn-primary" style="width:100%;padding:0.65rem;font-size:0.85rem;background:#ef4444;">🚨 Emergency Lockdown</button>
                                    </div>
                                </div>
                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">👥 Role Permissions Matrix</h4>
                                        <table style="width:100%;border-collapse:collapse;font-size:0.82rem;">
                                            <tr style="color:#94a3b8;font-size:0.75rem;border-bottom:1px solid #f1f5f9;"><th style="text-align:left;padding:0.4rem 0;">Module</th><th>Admin</th><th>Researcher</th><th>Patient</th></tr>
                                            <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:0.6rem 0;">Analytics</td><td style="text-align:center;color:var(--secondary);">✅</td><td style="text-align:center;color:var(--secondary);">✅</td><td style="text-align:center;color:#ef4444;">❌</td></tr>
                                            <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:0.6rem 0;">Invoices</td><td style="text-align:center;color:var(--secondary);">✅</td><td style="text-align:center;color:#ef4444;">❌</td><td style="text-align:center;color:var(--accent-orange);">⚠️</td></tr>
                                            <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:0.6rem 0;">Gene Data</td><td style="text-align:center;color:var(--secondary);">✅</td><td style="text-align:center;color:var(--secondary);">✅</td><td style="text-align:center;color:var(--accent-orange);">⚠️</td></tr>
                                            <tr><td style="padding:0.6rem 0;">Config</td><td style="text-align:center;color:var(--secondary);">✅</td><td style="text-align:center;color:#ef4444;">❌</td><td style="text-align:center;color:#ef4444;">❌</td></tr>
                                        </table>
                                    </div>
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">🔔 System Notifications</h4>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.7rem 0;border-bottom:1px solid #f1f5f9;font-size:0.85rem;"><span>🔴 Critical Alerts</span><label><input type="checkbox" checked></label></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.7rem 0;border-bottom:1px solid #f1f5f9;font-size:0.85rem;"><span>📊 Daily Analytics Summary</span><label><input type="checkbox" checked></label></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.7rem 0;border-bottom:1px solid #f1f5f9;font-size:0.85rem;"><span>💳 Invoice Due Reminders</span><label><input type="checkbox" checked></label></div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.7rem 0;font-size:0.85rem;"><span>🔬 Lab Status Updates</span><label><input type="checkbox"></label></div>
                                        <button class="btn-primary" style="width:100%;padding:0.65rem;font-size:0.85rem;margin-top:1rem;">Save Settings</button>
                                    </div>
                                </div>
                            </div>`;
                            break;

                        default:
                            html = `<div class="tab-content active"><div class="placeholder-view"><h3>Admin ${tabId}</h3><p style="color: #666;">Administrative overview for system ${tabId}.</p></div></div>`;
                    }
                } else if (role === 'patient') {
                    switch (tabId) {
                        case 'dashboard':
                            html = `
                                <div class="tab-content active">
                                    <h2 style="font-size:2.2rem;margin-bottom:0.3rem;">🏠 Home Base</h2>
                                    <p style="color:var(--text-secondary);margin-bottom:2rem;">Welcome back, <strong>Patient Smith</strong>. Here's a complete snapshot of your health portal.</p>

                                    <!-- ROW 1: Summary Stats -->
                                    <div class="admin-summary-grid" style="margin-bottom:1.5rem;">
                                        <div class="summary-card" style="border-top:3px solid var(--primary);">
                                            <div style="font-size:1.5rem;">📅</div>
                                            <p>Next Appointment</p>
                                            <h3 style="font-size:1.4rem;">March 24</h3>
                                            <div style="font-size:0.78rem;color:var(--primary);">10:30 AM Tele-visit</div>
                                        </div>
                                        <div class="summary-card" style="border-top:3px solid var(--secondary);">
                                            <div style="font-size:1.5rem;">🧬</div>
                                            <p>Gene Resilience</p>
                                            <h3 style="font-size:1.4rem;">84/100</h3>
                                            <div style="font-size:0.78rem;color:var(--secondary);">Optimum Range</div>
                                        </div>
                                        <div class="summary-card" style="border-top:3px solid var(--accent-orange);">
                                            <div style="font-size:1.5rem;">💳</div>
                                            <p>Outstanding Bill</p>
                                            <h3 style="font-size:1.4rem;">$320</h3>
                                            <div style="font-size:0.78rem;color:var(--accent-orange);">Due Apr 5</div>
                                        </div>
                                        <div class="summary-card" style="border-top:3px solid var(--accent-purple);">
                                            <div style="font-size:1.5rem;">📋</div>
                                            <p>Trial Matches</p>
                                            <h3 style="font-size:1.4rem;">5 Found</h3>
                                            <div style="font-size:0.78rem;color:var(--accent-purple);">3 Open to Apply</div>
                                        </div>
                                    </div>

                                    <!-- ROW 2: Vital Trends + Daily Inputs -->
                                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1.5rem;">
                                        <div class="content-card">
                                            <h4 style="margin-bottom:1.2rem;">📈 Weekly Vital Trends</h4>
                                            <p style="font-size:0.8rem;color:#64748b;margin-bottom:0.5rem;">Metabolic Activity</p>
                                            <div class="trend-bar-container" style="height:40px;margin-bottom:1.2rem;">
                                                <div class="trend-bar" style="height:50%;background:var(--accent);opacity:0.5;"></div>
                                                <div class="trend-bar" style="height:55%;background:var(--accent);opacity:0.5;"></div>
                                                <div class="trend-bar" style="height:48%;background:var(--accent);opacity:0.5;"></div>
                                                <div class="trend-bar" style="height:70%;background:var(--accent);opacity:0.5;"></div>
                                                <div class="trend-bar" style="height:85%;background:var(--accent);opacity:0.5;"></div>
                                                <div class="trend-bar" style="height:92%;background:var(--accent);opacity:0.5;"></div>
                                            </div>
                                            <p style="font-size:0.8rem;color:#64748b;margin-bottom:0.5rem;">Sleep Efficiency Score</p>
                                            <div class="trend-bar-container" style="height:40px;">
                                                <div class="trend-bar" style="height:80%;background:var(--primary);"></div>
                                                <div class="trend-bar" style="height:85%;background:var(--primary);"></div>
                                                <div class="trend-bar" style="height:75%;background:var(--primary);"></div>
                                                <div class="trend-bar" style="height:90%;background:var(--primary);"></div>
                                                <div class="trend-bar" style="height:92%;background:var(--primary);"></div>
                                                <div class="trend-bar" style="height:88%;background:var(--primary);"></div>
                                            </div>
                                            <div style="display:flex;justify-content:space-between;margin-top:0.8rem;font-size:0.75rem;color:#94a3b8;">
                                                <span>Wk1</span><span>Wk2</span><span>Wk3</span><span>Wk4</span><span>Wk5</span><span>Wk6</span>
                                            </div>
                                        </div>

                                        <div class="content-card">
                                            <h4 style="margin-bottom:1.2rem;">🩺 Daily Health Inputs</h4>
                                            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;margin-bottom:0.8rem;">
                                                <div>
                                                    <label style="font-size:0.75rem;color:#64748b;display:block;margin-bottom:3px;">Weight (kg)</label>
                                                    <input type="number" value="72.5" step="0.5" style="width:100%;padding:0.5rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;">
                                                </div>
                                                <div>
                                                    <label style="font-size:0.75rem;color:#64748b;display:block;margin-bottom:3px;">Blood Pressure</label>
                                                    <input type="text" value="120/80" style="width:100%;padding:0.5rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;">
                                                </div>
                                            </div>
                                            <div style="margin-bottom:0.8rem;">
                                                <label style="font-size:0.75rem;color:#64748b;display:block;margin-bottom:3px;">Body Hydration (%)</label>
                                                <input type="range" value="78" style="width:100%;height:6px;appearance:none;background:#e2e8f0;border-radius:3px;outline:none;">
                                            </div>
                                            <div style="margin-bottom:1rem;">
                                                <label style="font-size:0.75rem;color:#64748b;display:block;margin-bottom:3px;">Sleep Quality</label>
                                                <select style="width:100%;padding:0.5rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;">
                                                    <option>Excellent</option><option>Good</option><option selected>Moderate</option><option>Poor</option>
                                                </select>
                                            </div>
                                            <button class="btn-primary" style="width:100%;padding:0.65rem;font-size:0.85rem;background:var(--accent);">🔄 Sync Bio-Data</button>
                                        </div>
                                    </div>

                                    <!-- ROW 3: Portal Quick Links + Upcoming Events -->
                                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1.5rem;">
                                        <div class="content-card">
                                            <h4 style="margin-bottom:1.2rem;">⚡ Quick Portal Links</h4>
                                            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;">
                                                <div onclick="showTab('results')" style="padding:1rem;background:#eff6ff;border-radius:12px;cursor:pointer;transition:all 0.2s ease;border:1px solid #bfdbfe;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                                                    <div style="font-size:1.4rem;margin-bottom:0.3rem;">🔬</div>
                                                    <p style="margin:0;font-size:0.82rem;font-weight:700;color:var(--primary);">Diagnostics</p>
                                                    <p style="margin:0;font-size:0.72rem;color:#94a3b8;">3 Pending</p>
                                                </div>
                                                <div onclick="showTab('telemedicine')" style="padding:1rem;background:#f0fdf4;border-radius:12px;cursor:pointer;transition:all 0.2s ease;border:1px solid #bbf7d0;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                                                    <div style="font-size:1.4rem;margin-bottom:0.3rem;">📞</div>
                                                    <p style="margin:0;font-size:0.82rem;font-weight:700;color:var(--secondary);">Virtual Care</p>
                                                    <p style="margin:0;font-size:0.72rem;color:#94a3b8;">Mar 18 Session</p>
                                                </div>
                                                <div onclick="showTab('trials')" style="padding:1rem;background:#fdf2f8;border-radius:12px;cursor:pointer;transition:all 0.2s ease;border:1px solid #e9d5ff;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                                                    <div style="font-size:1.4rem;margin-bottom:0.3rem;">📋</div>
                                                    <p style="margin:0;font-size:0.82rem;font-weight:700;color:var(--accent);">Research</p>
                                                    <p style="margin:0;font-size:0.72rem;color:#94a3b8;">5 Matches</p>
                                                </div>
                                                <div onclick="showTab('billing')" style="padding:1rem;background:#fef9f0;border-radius:12px;cursor:pointer;transition:all 0.2s ease;border:1px solid #fde68a;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                                                    <div style="font-size:1.4rem;margin-bottom:0.3rem;">💳</div>
                                                    <p style="margin:0;font-size:0.82rem;font-weight:700;color:var(--accent-orange);">Payments</p>
                                                    <p style="margin:0;font-size:0.72rem;color:#94a3b8;">$320 Due</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="content-card">
                                            <h4 style="margin-bottom:1.2rem;">📅 Upcoming Events</h4>
                                            <div style="display:flex;align-items:center;gap:1rem;padding:0.9rem;background:#eff6ff;border-radius:12px;margin-bottom:0.8rem;border-left:4px solid var(--primary);">
                                                <div style="text-align:center;min-width:40px;">
                                                    <div style="font-size:0.7rem;color:#94a3b8;text-transform:uppercase;">Mar</div>
                                                    <div style="font-size:1.3rem;font-weight:800;color:var(--primary);">18</div>
                                                </div>
                                                <div>
                                                    <h5 style="margin:0;font-size:0.88rem;">Virtual Consultation</h5>
                                                    <p style="font-size:0.75rem;color:#94a3b8;margin:0;">Dr. Aris Thorne • 10:30 AM</p>
                                                </div>
                                                <span class="status status-green" style="margin-left:auto;">Today+2</span>
                                            </div>
                                            <div style="display:flex;align-items:center;gap:1rem;padding:0.9rem;background:#fef9f0;border-radius:12px;margin-bottom:0.8rem;border-left:4px solid var(--accent-orange);">
                                                <div style="text-align:center;min-width:40px;">
                                                    <div style="font-size:0.7rem;color:#94a3b8;text-transform:uppercase;">Mar</div>
                                                    <div style="font-size:1.3rem;font-weight:800;color:var(--accent-orange);">24</div>
                                                </div>
                                                <div>
                                                    <h5 style="margin:0;font-size:0.88rem;">Follow-up Appointment</h5>
                                                    <p style="font-size:0.75rem;color:#94a3b8;margin:0;">General Health Review</p>
                                                </div>
                                                <span class="status status-orange" style="margin-left:auto;">Upcoming</span>
                                            </div>
                                            <div style="display:flex;align-items:center;gap:1rem;padding:0.9rem;background:#fafafa;border-radius:12px;border-left:4px solid #e2e8f0;">
                                                <div style="text-align:center;min-width:40px;">
                                                    <div style="font-size:0.7rem;color:#94a3b8;text-transform:uppercase;">Mar</div>
                                                    <div style="font-size:1.3rem;font-weight:800;color:#94a3b8;">28</div>
                                                </div>
                                                <div>
                                                    <h5 style="margin:0;font-size:0.88rem;">MRI — Brain & Spine</h5>
                                                    <p style="font-size:0.75rem;color:#94a3b8;margin:0;">Radiology Center, Block B</p>
                                                </div>
                                                <span class="status status-blue" style="margin-left:auto;">Booked</span>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- ROW 4: Today's Health Log + Diagnostics Snapshot -->
                                    <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:1.5rem;">
                                        <div class="content-card">
                                            <h4 style="margin-bottom:1.2rem;">📊 Today's Health Log</h4>
                                            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.8rem;margin-bottom:1rem;">
                                                <div style="background:#f0fdf4;padding:0.9rem;border-radius:12px;text-align:center;">
                                                    <p style="font-size:0.7rem;color:#15803d;margin:0;text-transform:uppercase;">Heart Rate</p>
                                                    <h3 style="margin:0.3rem 0;color:#15803d;font-size:1.5rem;">72</h3>
                                                    <p style="font-size:0.7rem;color:#94a3b8;margin:0;">bpm</p>
                                                </div>
                                                <div style="background:#eff6ff;padding:0.9rem;border-radius:12px;text-align:center;">
                                                    <p style="font-size:0.7rem;color:#1d4ed8;margin:0;text-transform:uppercase;">SpO2</p>
                                                    <h3 style="margin:0.3rem 0;color:#1d4ed8;font-size:1.5rem;">98%</h3>
                                                    <p style="font-size:0.7rem;color:#94a3b8;margin:0;">Oxygen</p>
                                                </div>
                                                <div style="background:#fdf2f8;padding:0.9rem;border-radius:12px;text-align:center;">
                                                    <p style="font-size:0.7rem;color:#7e22ce;margin:0;text-transform:uppercase;">Temp</p>
                                                    <h3 style="margin:0.3rem 0;color:#7e22ce;font-size:1.5rem;">36.8</h3>
                                                    <p style="font-size:0.7rem;color:#94a3b8;margin:0;">°C</p>
                                                </div>
                                            </div>
                                            <div style="margin-bottom:0.8rem;">
                                                <div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>Daily Steps Goal</span><span style="font-weight:700;">7,340 / 10,000</span></div>
                                                <div class="progress-container"><div class="progress-fill" style="width:73%;background:var(--secondary);"></div></div>
                                            </div>
                                            <div style="margin-bottom:0.8rem;">
                                                <div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>Caloric Intake</span><span style="font-weight:700;">1,820 / 2,200 kcal</span></div>
                                                <div class="progress-container"><div class="progress-fill" style="width:83%;background:var(--accent-orange);"></div></div>
                                            </div>
                                            <div>
                                                <div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;"><span>Water Intake</span><span style="font-weight:700;">1.8 / 2.5 L</span></div>
                                                <div class="progress-container"><div class="progress-fill" style="width:72%;background:var(--accent-blue);"></div></div>
                                            </div>
                                        </div>

                                        <div class="content-card">
                                            <h4 style="margin-bottom:1.2rem;">🧾 Recent Diagnostics</h4>
                                            <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#f0fdf4;border-radius:10px;margin-bottom:0.7rem;">
                                                <div><h5 style="margin:0;font-size:0.85rem;">Genetic Panel Report</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">March 10, 2026</p></div>
                                                <span class="status status-green">Complete</span>
                                            </div>
                                            <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#fef9f0;border-radius:10px;margin-bottom:0.7rem;">
                                                <div><h5 style="margin:0;font-size:0.85rem;">Blood Panel CBC</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">March 10, 2026</p></div>
                                                <span class="status status-orange">Review</span>
                                            </div>
                                            <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#fafafa;border-radius:10px;margin-bottom:0.7rem;">
                                                <div><h5 style="margin:0;font-size:0.85rem;">Hormonal Panel</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">Awaiting kit</p></div>
                                                <span class="status status-blue">Pending</span>
                                            </div>
                                            <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#fafafa;border-radius:10px;">
                                                <div><h5 style="margin:0;font-size:0.85rem;">MRI Brain & Spine</h5><p style="font-size:0.72rem;color:#94a3b8;margin:0;">Scheduled Mar 28</p></div>
                                                <span class="status status-blue">Upcoming</span>
                                            </div>
                                            <button class="btn-primary" style="width:100%;padding:0.6rem;font-size:0.82rem;margin-top:1rem;">View All Diagnostics →</button>
                                        </div>
                                    </div>
                                </div>`;
                            break;

                        case 'results':
                            html = `<div class="tab-content active">
                                <h2 style="font-size:2.2rem;margin-bottom:0.5rem;">🔬 Diagnostics</h2>
                                <p style="color:var(--text-secondary);margin-bottom:2rem;">Your latest lab results, biomarker reports & genetic health insights</p>

                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1.5rem;">
                                    <div class="content-card" style="border-left:5px solid var(--primary);">
                                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
                                            <h4 style="margin:0;">🧬 Genetic Panel Report</h4>
                                            <span class="status status-green">Complete</span>
                                        </div>
                                        <p style="color:#64748b;font-size:0.85rem;margin-bottom:1rem;">Full-spectrum genetic screening covering 1,200+ biomarkers. Gene resilience index: <strong>84/100</strong>.</p>
                                        <div style="margin-bottom:0.8rem;">
                                            <div style="display:flex;justify-content:space-between;font-size:0.8rem;margin-bottom:4px;"><span>Genomic Stability</span><span style="font-weight:700;">91%</span></div>
                                            <div class="progress-container"><div class="progress-fill" style="width:91%;background:var(--secondary);"></div></div>
                                        </div>
                                        <div>
                                            <div style="display:flex;justify-content:space-between;font-size:0.8rem;margin-bottom:4px;"><span>Metabolic Efficiency</span><span style="font-weight:700;">78%</span></div>
                                            <div class="progress-container"><div class="progress-fill" style="width:78%;background:var(--accent-blue);"></div></div>
                                        </div>
                                        <button class="btn-primary" style="margin-top:1.2rem;width:100%;padding:0.6rem;font-size:0.85rem;">Download Full Report</button>
                                    </div>

                                    <div class="content-card" style="border-left:5px solid var(--accent-orange);">
                                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
                                            <h4 style="margin:0;">🩸 Blood Panel Analysis</h4>
                                            <span class="status status-orange">Review</span>
                                        </div>
                                        <p style="color:#64748b;font-size:0.85rem;margin-bottom:1rem;">Comprehensive CBC & metabolic panel. Collected: <strong>March 10, 2026</strong>.</p>
                                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;font-size:0.82rem;">
                                            <div style="background:#fef9f0;padding:0.8rem;border-radius:10px;"><p style="margin:0;color:#92400e;">Hemoglobin</p><strong>14.2 g/dL</strong></div>
                                            <div style="background:#f0fdf4;padding:0.8rem;border-radius:10px;"><p style="margin:0;color:#166534;">Platelets</p><strong>230K/μL</strong></div>
                                            <div style="background:#eff6ff;padding:0.8rem;border-radius:10px;"><p style="margin:0;color:#1e40af;">Glucose</p><strong>98 mg/dL</strong></div>
                                            <div style="background:#fdf2f8;padding:0.8rem;border-radius:10px;"><p style="margin:0;color:#6b21a8;">Cholesterol</p><strong>182 mg/dL</strong></div>
                                        </div>
                                    </div>
                                </div>

                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">📈 Biomarker Trend (6-Month)</h4>
                                        <p style="font-size:0.8rem;color:#64748b;margin-bottom:0.5rem;">Inflammation Markers (CRP)</p>
                                        <div class="trend-bar-container" style="height:45px;margin-bottom:1rem;">
                                            <div class="trend-bar" style="height:70%;background:#f59e0b;opacity:0.6;"></div>
                                            <div class="trend-bar" style="height:65%;background:#f59e0b;opacity:0.6;"></div>
                                            <div class="trend-bar" style="height:60%;background:#f59e0b;opacity:0.6;"></div>
                                            <div class="trend-bar" style="height:50%;background:#f59e0b;opacity:0.6;"></div>
                                            <div class="trend-bar" style="height:40%;background:#10b981;opacity:0.7;"></div>
                                            <div class="trend-bar" style="height:30%;background:#10b981;opacity:0.7;"></div>
                                        </div>
                                        <p style="font-size:0.8rem;color:#64748b;margin-bottom:0.5rem;">Vitamin D Levels</p>
                                        <div class="trend-bar-container" style="height:45px;">
                                            <div class="trend-bar" style="height:40%;background:var(--primary);"></div>
                                            <div class="trend-bar" style="height:50%;background:var(--primary);"></div>
                                            <div class="trend-bar" style="height:65%;background:var(--primary);"></div>
                                            <div class="trend-bar" style="height:72%;background:var(--primary);"></div>
                                            <div class="trend-bar" style="height:80%;background:var(--primary);"></div>
                                            <div class="trend-bar" style="height:88%;background:var(--primary);"></div>
                                        </div>
                                    </div>

                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">📋 Pending Diagnostics</h4>
                                        <div style="display:flex;align-items:center;justify-content:space-between;padding:0.9rem;background:#fafafa;border-radius:10px;margin-bottom:0.8rem;">
                                            <div><h5 style="margin:0;font-size:0.9rem;">MRI — Brain & Spine</h5><p style="font-size:0.75rem;color:#94a3b8;margin:0;">Scheduled: March 28, 2026</p></div>
                                            <span class="status status-blue">Upcoming</span>
                                        </div>
                                        <div style="display:flex;align-items:center;justify-content:space-between;padding:0.9rem;background:#fafafa;border-radius:10px;margin-bottom:0.8rem;">
                                            <div><h5 style="margin:0;font-size:0.9rem;">Full Hormonal Panel</h5><p style="font-size:0.75rem;color:#94a3b8;margin:0;">Awaiting sample kit</p></div>
                                            <span class="status status-orange">Pending</span>
                                        </div>
                                        <div style="display:flex;align-items:center;justify-content:space-between;padding:0.9rem;background:#fafafa;border-radius:10px;">
                                            <div><h5 style="margin:0;font-size:0.9rem;">Cardiovascular Risk Score</h5><p style="font-size:0.75rem;color:#94a3b8;margin:0;">Processing lab data</p></div>
                                            <span class="status status-blue">Processing</span>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                            break;

                        case 'telemedicine':
                            html = `<div class="tab-content active">
                                <h2 style="font-size:2.2rem;margin-bottom:0.5rem;">📞 Virtual Care</h2>
                                <p style="color:var(--text-secondary);margin-bottom:2rem;">Schedule and attend secure video consultations with your care team</p>

                                <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:1.5rem;margin-bottom:1.5rem;">
                                    <div class="content-card" style="background:linear-gradient(135deg,#eff6ff,#f0fdf4);border:1px solid #bfdbfe;">
                                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
                                            <h4 style="margin:0;color:var(--primary);">🎥 Next Consultation</h4>
                                            <span class="status status-green">Confirmed</span>
                                        </div>
                                        <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.2rem;">
                                            <div style="width:52px;height:52px;border-radius:14px;background:#dbeafe;display:flex;align-items:center;justify-content:center;font-size:1.6rem;">👨‍⚕️</div>
                                            <div><h5 style="margin:0;">Dr. Aris Thorne</h5><p style="font-size:0.78rem;color:#64748b;margin:0;">Genomics & Precision Medicine</p></div>
                                        </div>
                                        <div style="background:#fff;border-radius:12px;padding:1rem;margin-bottom:1rem;">
                                            <div style="display:flex;justify-content:space-between;font-size:0.85rem;margin-bottom:0.4rem;"><span style="color:#64748b;">📅 Date</span><strong>Tuesday, March 18, 2026</strong></div>
                                            <div style="display:flex;justify-content:space-between;font-size:0.85rem;margin-bottom:0.4rem;"><span style="color:#64748b;">⏰ Time</span><strong>10:30 AM IST</strong></div>
                                            <div style="display:flex;justify-content:space-between;font-size:0.85rem;"><span style="color:#64748b;">🔐 Session</span><strong>TEL-099 (Encrypted)</strong></div>
                                        </div>
                                        <button class="btn-primary" style="width:100%;padding:0.75rem;background:var(--primary);font-size:0.9rem;">🎙️ Join Waiting Room</button>
                                    </div>

                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">📅 Book New Session</h4>
                                        <div style="margin-bottom:0.8rem;">
                                            <label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:4px;">Specialty</label>
                                            <select style="width:100%;padding:0.55rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;">
                                                <option>Genomics & DNA</option>
                                                <option>Metabolic Health</option>
                                                <option>Neurology</option>
                                                <option>Cardiology</option>
                                            </select>
                                        </div>
                                        <div style="margin-bottom:0.8rem;">
                                            <label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:4px;">Preferred Date</label>
                                            <input type="date" style="width:100%;padding:0.55rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;">
                                        </div>
                                        <div style="margin-bottom:1rem;">
                                            <label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:4px;">Session Type</label>
                                            <select style="width:100%;padding:0.55rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;">
                                                <option>Video Call</option>
                                                <option>Chat Consultation</option>
                                                <option>Report Review</option>
                                            </select>
                                        </div>
                                        <button class="btn-primary" style="width:100%;padding:0.65rem;font-size:0.85rem;">Request Appointment</button>
                                    </div>
                                </div>

                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">📁 Past Consultations</h4>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.9rem;background:#fafafa;border-radius:10px;margin-bottom:0.8rem;">
                                            <div><h5 style="margin:0;font-size:0.85rem;">Dr. Reena Kapoor</h5><p style="font-size:0.75rem;color:#94a3b8;margin:0;">Feb 22 • Genomics Follow-up</p></div>
                                            <button style="background:none;border:1px solid #e2e8f0;padding:0.3rem 0.7rem;border-radius:6px;font-size:0.75rem;cursor:pointer;">View Notes</button>
                                        </div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.9rem;background:#fafafa;border-radius:10px;margin-bottom:0.8rem;">
                                            <div><h5 style="margin:0;font-size:0.85rem;">Dr. Leo Mehra</h5><p style="font-size:0.75rem;color:#94a3b8;margin:0;">Jan 14 • Metabolic Plan</p></div>
                                            <button style="background:none;border:1px solid #e2e8f0;padding:0.3rem 0.7rem;border-radius:6px;font-size:0.75rem;cursor:pointer;">View Notes</button>
                                        </div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.9rem;background:#fafafa;border-radius:10px;">
                                            <div><h5 style="margin:0;font-size:0.85rem;">Dr. Aris Thorne</h5><p style="font-size:0.75rem;color:#94a3b8;margin:0;">Dec 3 • DNA Panel Review</p></div>
                                            <button style="background:none;border:1px solid #e2e8f0;padding:0.3rem 0.7rem;border-radius:6px;font-size:0.75rem;cursor:pointer;">View Notes</button>
                                        </div>
                                    </div>

                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">💬 Pre-Visit Checklist</h4>
                                        <div style="display:flex;align-items:center;gap:0.8rem;padding:0.7rem;background:#f0fdf4;border-radius:10px;margin-bottom:0.6rem;font-size:0.85rem;"><span style="color:#16a34a;font-size:1.1rem;">✅</span> Camera & microphone tested</div>
                                        <div style="display:flex;align-items:center;gap:0.8rem;padding:0.7rem;background:#f0fdf4;border-radius:10px;margin-bottom:0.6rem;font-size:0.85rem;"><span style="color:#16a34a;font-size:1.1rem;">✅</span> Latest labs uploaded to portal</div>
                                        <div style="display:flex;align-items:center;gap:0.8rem;padding:0.7rem;background:#fef9f0;border-radius:10px;margin-bottom:0.6rem;font-size:0.85rem;"><span style="color:#f59e0b;font-size:1.1rem;">⏳</span> Consent form e-signed</div>
                                        <div style="display:flex;align-items:center;gap:0.8rem;padding:0.7rem;background:#fef9f0;border-radius:10px;font-size:0.85rem;"><span style="color:#f59e0b;font-size:1.1rem;">⏳</span> Insurance details confirmed</div>
                                    </div>
                                </div>
                            </div>`;
                            break;

                        case 'trials':
                            html = `<div class="tab-content active">
                                <h2 style="font-size:2.2rem;margin-bottom:0.5rem;">📋 Research Matches</h2>
                                <p style="color:var(--text-secondary);margin-bottom:2rem;">Clinical trials matched to your genetic profile and health history</p>

                                <div class="admin-summary-grid" style="margin-bottom:1.5rem;">
                                    <div class="summary-card"><div style="font-size:1.5rem;margin-bottom:0.3rem;">🎯</div><p>Profile Matches</p><h3 style="color:var(--primary);">5</h3></div>
                                    <div class="summary-card"><div style="font-size:1.5rem;margin-bottom:0.3rem;">📝</div><p>Applications Open</p><h3 style="color:var(--secondary);">3</h3></div>
                                    <div class="summary-card"><div style="font-size:1.5rem;margin-bottom:0.3rem;">⏳</div><p>Pending Review</p><h3 style="color:var(--accent-orange);">1</h3></div>
                                    <div class="summary-card"><div style="font-size:1.5rem;margin-bottom:0.3rem;">✅</div><p>Enrolled</p><h3 style="color:var(--accent-pista-dark);">1</h3></div>
                                </div>

                                <div style="display:grid;gap:1.2rem;margin-bottom:1.5rem;">
                                    <div class="content-card" style="border-left:5px solid var(--secondary);">
                                        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:0.8rem;">
                                            <div><h4 style="margin:0;font-size:1.05rem;">Metabolic Optimizer-G</h4><p style="font-size:0.78rem;color:#94a3b8;margin:0.2rem 0;">University of Zurich • Phase III • Genome-based</p></div>
                                            <span class="status status-green">High Fit 96%</span>
                                        </div>
                                        <p style="color:#64748b;font-size:0.85rem;margin-bottom:1rem;">Testing a precision nutrition protocol based on individual gene expression. 24-week program with monthly check-ins.</p>
                                        <div style="display:flex;gap:0.8rem;align-items:center;">
                                            <button class="btn-primary" style="padding:0.55rem 1.2rem;font-size:0.82rem;">Apply Now</button>
                                            <span style="font-size:0.78rem;color:#94a3b8;">⏰ Closes April 10, 2026  •  12 spots left</span>
                                        </div>
                                    </div>

                                    <div class="content-card" style="border-left:5px solid var(--primary);">
                                        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:0.8rem;">
                                            <div><h4 style="margin:0;font-size:1.05rem;">NeuroBio Resilience Study</h4><p style="font-size:0.78rem;color:#94a3b8;margin:0.2rem 0;">MIT Biolab • Phase II • Neurological</p></div>
                                            <span class="status status-blue">Good Fit 82%</span>
                                        </div>
                                        <p style="color:#64748b;font-size:0.85rem;margin-bottom:1rem;">Examining cognitive resilience in patients with specific APOE gene variants. Digital cognitive tests every 2 weeks.</p>
                                        <div style="display:flex;gap:0.8rem;align-items:center;">
                                            <button class="btn-primary" style="padding:0.55rem 1.2rem;font-size:0.82rem;background:var(--primary);">Apply Now</button>
                                            <span style="font-size:0.78rem;color:#94a3b8;">⏰ Closes May 1, 2026  •  28 spots left</span>
                                        </div>
                                    </div>

                                    <div class="content-card" style="border-left:5px solid var(--accent-orange);">
                                        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:0.8rem;">
                                            <div><h4 style="margin:0;font-size:1.05rem;">Cardio-Gene Preventive Trial</h4><p style="font-size:0.78rem;color:#94a3b8;margin:0.2rem 0;">Johns Hopkins • Phase I • Cardiovascular</p></div>
                                            <span class="status status-orange">Under Review</span>
                                        </div>
                                        <p style="color:#64748b;font-size:0.85rem;margin-bottom:1rem;">Investigating preventive cardiac interventions for patients with elevated genetic cardiovascular risk profiles.</p>
                                        <div style="display:flex;gap:0.8rem;align-items:center;">
                                            <button style="padding:0.55rem 1.2rem;font-size:0.82rem;border:1px solid #e2e8f0;border-radius:8px;cursor:pointer;background:#fff;">View Details</button>
                                            <span style="font-size:0.78rem;color:#94a3b8;">🔔 Results in: 5–7 business days</span>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                            break;

                        case 'billing':
                            html = `<div class="tab-content active">
                                <h2 style="font-size:2.2rem;margin-bottom:0.5rem;">💳 Payments</h2>
                                <p style="color:var(--text-secondary);margin-bottom:2rem;">Manage invoices, insurance claims and payment methods</p>

                                <div class="admin-summary-grid" style="margin-bottom:1.5rem;">
                                    <div class="summary-card"><div style="font-size:1.4rem;">💰</div><p>Total Paid (2026)</p><h3 style="color:var(--secondary);">$1,240</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">🧾</div><p>Outstanding</p><h3 style="color:var(--accent-orange);">$320</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">🏥</div><p>Insurance Claims</p><h3 style="color:var(--primary);">2 Active</h3></div>
                                    <div class="summary-card"><div style="font-size:1.4rem;">📅</div><p>Next Due Date</p><h3>Apr 5</h3></div>
                                </div>

                                <div style="display:grid;grid-template-columns:1.4fr 1fr;gap:1.5rem;margin-bottom:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">🧾 Recent Invoices</h4>
                                        <table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
                                            <tr style="color:#94a3b8;font-size:0.78rem;border-bottom:1px solid #f1f5f9;"><th style="padding:0.5rem 0;text-align:left;">Invoice</th><th>Service</th><th>Amount</th><th>Status</th></tr>
                                            <tr style="border-bottom:1px solid #f1f5f9;">
                                                <td style="padding:0.8rem 0;">#INV-501</td>
                                                <td>Telemedicine – Feb</td>
                                                <td>$180</td>
                                                <td><span class="status status-green">Paid</span></td>
                                            </tr>
                                            <tr style="border-bottom:1px solid #f1f5f9;">
                                                <td style="padding:0.8rem 0;">#INV-502</td>
                                                <td>Genetic Panel Report</td>
                                                <td>$420</td>
                                                <td><span class="status status-green">Paid</span></td>
                                            </tr>
                                            <tr style="border-bottom:1px solid #f1f5f9;">
                                                <td style="padding:0.8rem 0;">#INV-503</td>
                                                <td>Blood Lab Panel</td>
                                                <td>$320</td>
                                                <td><span class="status status-orange">Pending</span></td>
                                            </tr>
                                            <tr>
                                                <td style="padding:0.8rem 0;">#INV-504</td>
                                                <td>MRI Booking Fee</td>
                                                <td>$640</td>
                                                <td><span class="status status-blue">Insurance</span></td>
                                            </tr>
                                        </table>
                                    </div>

                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">💳 Payment Methods</h4>
                                        <div style="display:flex;align-items:center;gap:0.8rem;padding:0.9rem;background:#eff6ff;border-radius:10px;margin-bottom:0.8rem;border:1px solid #bfdbfe;">
                                            <span style="font-size:1.4rem;">💳</span>
                                            <div><p style="margin:0;font-size:0.85rem;font-weight:700;">Visa •••• 4821</p><p style="margin:0;font-size:0.75rem;color:#94a3b8;">Default • Expires 09/27</p></div>
                                        </div>
                                        <div style="display:flex;align-items:center;gap:0.8rem;padding:0.9rem;background:#fafafa;border-radius:10px;margin-bottom:1rem;">
                                            <span style="font-size:1.4rem;">🏦</span>
                                            <div><p style="margin:0;font-size:0.85rem;font-weight:700;">HDFC Bank ACH</p><p style="margin:0;font-size:0.75rem;color:#94a3b8;">Linked • Active</p></div>
                                        </div>
                                        <button style="width:100%;padding:0.6rem;border:1px dashed #e2e8f0;border-radius:8px;background:none;cursor:pointer;font-size:0.85rem;color:var(--primary);">+ Add Payment Method</button>
                                        <button class="btn-primary" style="width:100%;padding:0.65rem;margin-top:0.8rem;font-size:0.85rem;">Pay Outstanding ($320)</button>
                                    </div>
                                </div>

                                <div class="content-card">
                                    <h4 style="margin-bottom:1rem;">🏥 Insurance Claims Tracker</h4>
                                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
                                        <div style="padding:1rem;background:#f0fdf4;border-radius:12px;">
                                            <div style="display:flex;justify-content:space-between;align-items:center;"><h5 style="margin:0;font-size:0.9rem;">Claim #CLM-882</h5><span class="status status-green">Approved</span></div>
                                            <p style="font-size:0.78rem;color:#64748b;margin:0.4rem 0;">MRI reimbursement — $640 covered at 80%</p>
                                        </div>
                                        <div style="padding:1rem;background:#fef9f0;border-radius:12px;">
                                            <div style="display:flex;justify-content:space-between;align-items:center;"><h5 style="margin:0;font-size:0.9rem;">Claim #CLM-883</h5><span class="status status-orange">Processing</span></div>
                                            <p style="font-size:0.78rem;color:#64748b;margin:0.4rem 0;">Genetic panel claim — Estimated 7–10 days</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                            break;

                        case 'settings':
                            html = `<div class="tab-content active">
                                <h2 style="font-size:2.2rem;margin-bottom:0.5rem;">🔒 Privacy & Account</h2>
                                <p style="color:var(--text-secondary);margin-bottom:2rem;">Control your data sovereignty, account preferences and security settings</p>

                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">👤 Profile Information</h4>
                                        <div style="display:grid;gap:0.8rem;">
                                            <div><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Full Name</label>
                                            <input type="text" value="Patient Smith" style="width:100%;padding:0.55rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"></div>
                                            <div><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Email Address</label>
                                            <input type="email" value="patient.smith@gmail.com" style="width:100%;padding:0.55rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"></div>
                                            <div><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Date of Birth</label>
                                            <input type="date" value="1988-07-14" style="width:100%;padding:0.55rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"></div>
                                            <div><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Phone Number</label>
                                            <input type="tel" value="+91 98765 43210" style="width:100%;padding:0.55rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"></div>
                                            <button class="btn-primary" style="width:100%;padding:0.65rem;font-size:0.85rem;margin-top:0.3rem;">Save Changes</button>
                                        </div>
                                    </div>

                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">🛡️ Data &amp; Privacy Controls</h4>
                                        <p style="font-size:0.85rem;color:#64748b;margin-bottom:1rem;">Control who can access your genetic data and medical records.</p>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#f0fdf4;border-radius:10px;margin-bottom:0.6rem;">
                                            <span style="font-size:0.85rem;">🧬 Share with Researchers</span>
                                            <label style="cursor:pointer;"><input type="checkbox" checked> Enabled</label>
                                        </div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#f0fdf4;border-radius:10px;margin-bottom:0.6rem;">
                                            <span style="font-size:0.85rem;">🏥 Hospital Access</span>
                                            <label style="cursor:pointer;"><input type="checkbox" checked> Enabled</label>
                                        </div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#fef2f2;border-radius:10px;margin-bottom:0.6rem;">
                                            <span style="font-size:0.85rem;">📊 Analytics Opt-in</span>
                                            <label style="cursor:pointer;"><input type="checkbox"> Disabled</label>
                                        </div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;background:#fef2f2;border-radius:10px;margin-bottom:1rem;">
                                            <span style="font-size:0.85rem;">📢 Marketing Emails</span>
                                            <label style="cursor:pointer;"><input type="checkbox"> Disabled</label>
                                        </div>
                                        <button class="btn-primary" style="width:100%;padding:0.65rem;font-size:0.85rem;background:#ef4444;">Request Data Deletion</button>
                                    </div>
                                </div>

                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;">
                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">🔑 Security Settings</h4>
                                        <div style="margin-bottom:0.8rem;"><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Current Password</label>
                                        <input type="password" placeholder="••••••••••" style="width:100%;padding:0.55rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"></div>
                                        <div style="margin-bottom:0.8rem;"><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">New Password</label>
                                        <input type="password" placeholder="••••••••••" style="width:100%;padding:0.55rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"></div>
                                        <div style="margin-bottom:1rem;"><label style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:3px;">Confirm New Password</label>
                                        <input type="password" placeholder="••••••••••" style="width:100%;padding:0.55rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.85rem;"></div>
                                        <button class="btn-primary" style="width:100%;padding:0.65rem;font-size:0.85rem;">Update Password</button>
                                    </div>

                                    <div class="content-card">
                                        <h4 style="margin-bottom:1rem;">🔔 Notification Preferences</h4>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.7rem 0;border-bottom:1px solid #f1f5f9;font-size:0.85rem;">
                                            <span>📅 Appointment Reminders</span>
                                            <label><input type="checkbox" checked></label>
                                        </div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.7rem 0;border-bottom:1px solid #f1f5f9;font-size:0.85rem;">
                                            <span>🧬 Lab Result Alerts</span>
                                            <label><input type="checkbox" checked></label>
                                        </div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.7rem 0;border-bottom:1px solid #f1f5f9;font-size:0.85rem;">
                                            <span>💳 Payment Alerts</span>
                                            <label><input type="checkbox" checked></label>
                                        </div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.7rem 0;border-bottom:1px solid #f1f5f9;font-size:0.85rem;">
                                            <span>📋 Trial Match Alerts</span>
                                            <label><input type="checkbox"></label>
                                        </div>
                                        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.7rem 0;font-size:0.85rem;">
                                            <span>🩺 Weekly Health Summary</span>
                                            <label><input type="checkbox" checked></label>
                                        </div>
                                        <button class="btn-primary" style="width:100%;padding:0.65rem;font-size:0.85rem;margin-top:1rem;">Save Preferences</button>
                                    </div>
                                </div>
                            </div>`;
                            break;
                        default:
                            html = `<div class="tab-content active"><div class="placeholder-view"><h3>Patient ${tabId}</h3><p style="color: #666;">Your personal ${tabId} details. Vault secured.</p></div></div>`;
                    }
                }

                contentView.innerHTML = html;
            }

            // Tab Switching Logic
            document.querySelectorAll('.sidebar-link').forEach(link => {
                link.addEventListener('click', (e) => {
                    const tabId = link.getAttribute('data-tab');
                    if (!tabId) return; // Allow normal navigation for links without data-tab (like Logout)

                    e.preventDefault();

                    // Update Sidebar Active state
                    document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
                    link.classList.add('active');

                    // Load related content
                    showTab(tabId);

                    // Close sidebar on mobile after selection
                    if (window.innerWidth <= 1100) {
                        sidebar.classList.remove('active');
                        sidebarToggle.classList.remove('active');
                        document.body.classList.remove('menu-open');
                    }
                });
            });

            // Initial load
            showTab('dashboard');
        });
    
