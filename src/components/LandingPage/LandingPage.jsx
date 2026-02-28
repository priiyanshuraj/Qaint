import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import SEO from '../SEO/SEO';
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();
    const [stars, setStars] = useState(() => {
        const cached = localStorage.getItem('gh_stars');
        return cached ? parseInt(cached) : null;
    });

    const [activeFaq, setActiveFaq] = useState(null);

    useEffect(() => {
        const fetchStars = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/priiyanshuraj/Qaint');
                if (response.ok) {
                    const data = await response.json();
                    setStars(data.stargazers_count);
                    localStorage.setItem('gh_stars', data.stargazers_count);
                    localStorage.setItem('gh_stars_time', Date.now());
                }
            } catch (error) {
                console.error('Error fetching GitHub stars:', error);
            }
        };

        const cachedTime = localStorage.getItem('gh_stars_time');
        const isExpired = !cachedTime || (Date.now() - parseInt(cachedTime)) > 3600000 * 6; // 6 hours

        if (!stars || isExpired) {
            fetchStars();
        }
    }, [stars]);

    const faqs = [
    {
        q: "Is Qaint really free?",
        a: "Yes, completely. Qaint is open-source with no paywalls or hidden subscriptions. All core demo features - including 2K recording and local export - are available from day one."
    },
    {
        q: "Is there a recording limit?",
        a: "No artificial limits. Record as long as you need and create as many demos as you want. Your local storage is the only constraint."
    },
    {
        q: "Do I need to install anything?",
        a: "No installations required. Qaint runs directly in your browser using modern web APIs - no extensions, no downloads."
    },
    {
        q: "What quality and formats are supported?",
        a: "Record in 720p, 1080p, or high-quality 2K. Export in formats like MKV or WebM depending on your workflow."
    },
    {
        q: "How does privacy work?",
        a: "Qaint is local-first. Your recordings are saved directly to your machine unless you choose to upload them. Your demos remain fully under your control."
    }
];

    return (
        <div className="landing-container">
            <SEO
                title="Qaint | Secure Product Demo Lab"
                description="Privacy-first screen recording studio built for product teams. Record high-quality demos locally with camera bubble and 2K support."
            />
            {/* Mesh Gradient Background */}
            <div className="mesh-gradient"></div>

            {/* Navigation Bar */}
            <nav className="landing-nav">
                <div className="nav-logo">
                    <div className="logo-icon" style={{ color: 'white' }}>Q</div>
                    <span>Qaint</span>
                </div>
                <div className="nav-links">
                    <a href="#features">Features</a>
                    <a href="#comparison">Compare</a>
                    <a href="#faq">FAQ</a>
                    <a href="/blog" onClick={(e) => { e.preventDefault(); navigate('/blog'); }}>Blog</a>
                    <button className="btn btn-primary btn-sm" style={{ color: 'white' }} onClick={() => navigate('/recorder')}>Record a Demo</button>
                    <ThemeToggle />
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="pulse"></span>
                        A Secure Product Demo Lab 
                    </div>
                    <h1 className="hero-title">
                        The Smart <span className="text-gradient">Product Demo Studio</span> for Secure & Local Recording.
                    </h1>
                    <p className="hero-subtitle">
                        Qaint is a browser-based demo lab engineered for serious workflows. Design your canvas, overlay your camera, control your mic, and record high-resolution demos up to 2K ~ all running locally for maximum performance.
                    </p>
                    <div className="hero-actions">
                        <button className="btn btn-primary btn-glow btn-xl" onClick={() => navigate('/recorder')}>
                            Start Quant Lab 
                        </button>
                        <button className="btn btn-outline btn-xl btn-with-icon" onClick={() => window.open('https://github.com/priiyanshuraj/Qaint', '_blank')}>
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            <span>Open Source</span>
                        </button>
                    </div>
                    <div className="hero-social">
                        <div className="github-stars-badge" onClick={() => window.open('https://github.com/priiyanshuraj/Qaint', '_blank')}>
                            <div className="gh-avatars">
                                <span className="gh-icon">
                                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                </span>
                                <span className="star-symbol">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11zM8 11c1.657 0 3-1.567 3-3.5S9.657 4 8 4 5 5.567 5 7.5 6.343 11 8 11zm0 2c-2.67 0-8 1.337-8 4v3h16v-3c0-2.663-5.33-4-8-4zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.95 1.97 3.45v3h6v-3c0-2.663-5.33-4-8-4z"/>
                                    </svg>
                                </span>
                            </div>
                            <span className="badge-text">Help me make it better, Contribute to Qaint</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual-container">
                    <div className="floating-ui recorder-mockup">
                        <div className="mockup-header">
                            <div className="mac-controls"><span></span><span></span><span></span></div>
                            <div className="mockup-title">qaint.lab.app</div>
                        </div>
                        <div className="mockup-body">
                            <div className="mockup-canvas">
                                <div className="mockup-webcam"></div>
                                <div className="mockup-screen-layer"></div>
                            </div>
                            <div className="mockup-controls">
                                <div className="mockup-btn red"></div>
                                <div className="mockup-btn"></div>
                                <div className="mockup-btn"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Showcase */}
            <section id="features" className="features-grid-section">
                <div className="section-header">
                    <h2 className="section-title">Why <span className="text-gradient">Compromise</span> on Your <span className="text-gradient">Demos</span>?</h2>
                    <p className="section-subtitle">Run Qaint Lab in your browser with total ownership of your recordings.</p>
                </div>

                <div className="features-container">
                    <div className="feature-card-premium glass">
                        <div className="feature-icon-wrapper">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17 10.5V6a2 2 0 0 0-2-2H3v14h12a2 2 0 0 0 2-2v-4.5l4 3v-10l-4 3z"/>
                        </svg> 
                        </div> 
                            <h3>Built for Product Demos</h3>
                            <p>Camera overlays, live mic control, and seamless pause/resume workflows — optimized for structured product walkthroughs.</p>
                </div>

                <div className="feature-card-premium glass">
                    <div className="feature-icon-wrapper">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4 4h16v12H4zM2 18h20v2H2z"/>
                        </svg>
                    </div>
                        <h3>High-Resolution Capture</h3>
                        <p>Record in 720p, 1080p, or crisp 2K with smooth, high-frame-rate output that looks sharp across displays.</p>
                    </div>

                <div className="feature-card-premium glass">
                    <div className="feature-icon-wrapper">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 3v12" />
                            <path d="M8 11l4 4 4-4" />
                            <path d="M4 21h16" />
                        </svg>
                    </div>
                        <h3>Flexible Export Options</h3>
                        <p>Export recordings in MKV or WebM based on your workflow. Built for sharing across modern team tools.</p>
                    </div>

                <div className="feature-card-premium glass">
                    <div className="feature-icon-wrapper">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 1l9 4v6c0 5-3.8 9.7-9 11-5.2-1.3-9-6-9-11V5l9-4z"/>
                        </svg>
                    </div>
                        <h3>Local-First Privacy</h3>
                        <p>Your recordings stay on your machine. No forced uploads, no cloud dependency — complete data control.</p>
                </div>

                <div className="feature-card-premium glass">
                    <div className="feature-icon-wrapper">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13 2L3 14h7v8l10-12h-7z"/>
                        </svg>
                    </div>
                        <h3>No Installation Required</h3>
                        <p>Runs directly in your browser. No downloads, no extensions — open Qaint and start instantly.</p>
                </div>

                <div className="feature-card-premium glass">
                    <div className="feature-icon-wrapper">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 8c-2.2 0-4 1.8-4 4h2a2 2 0 1 1 2 2c-1.1 0-2 .9-2 2v2h2v-2a4 4 0 1 0 0-8z"/>
                        </svg>
                    </div>
                        <h3>All Features, No Paywalls</h3>
                        <p>Unlimited recordings, full resolution support, and zero tier restrictions, and Everything Absolutely Free</p>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section id="comparison" className="comparison-section">
                <div className="section-header">
                    <h2 className="section-title">Your <span className="text-gradient">Demo</span> Your Machine <span className="text-gradient">No Middleman</span></h2>
                    <p className="section-subtitle">Qaint replaces every other Tool in market with a free privacy-first alternative.</p>
                </div>

                <div className="comparison-table-wrapper glass">
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Popular Tools</th>
                                <th className="highlight">Qaint</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Monthly Cost</td>
                                <td>$12 - $15</td>
                                <td className="highlight">Free</td>
                            </tr>
                            <tr>
                                <td>Recording Limit</td>
                                <td>5-25 Mins (Free)</td>
                                <td className="highlight">Unlimited</td>
                            </tr>
                            <tr>
                                <td>Privacy</td>
                                <td>Cloud-First</td>
                                <td className="highlight">Local-First</td>
                            </tr>
                            <tr>
                                <td>Max Quality</td>
                                <td>Paid for 2K/4k</td>
                                <td className="highlight">Free 2K/4K</td>
                            </tr>
                            <tr>
                                <td>Installation</td>
                                <td>Required / Plugin</td>
                                <td className="highlight">No Install</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="faq-section">
                <div className="section-header">
                    <h2 className="section-title">Frequently Asked <span className="text-gradient">Questions</span></h2>
                </div>
                <div className="faq-accordion">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item glass ${activeFaq === index ? 'active' : ''}`}
                            onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.q}</h3>
                                <span className="faq-icon">{activeFaq === index ? '−' : '+'}</span>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Middle CTA */}
            <section className="oss-manifesto">
                <div className="manifesto-card glass">
                    <h2>
                        Runs Directly in Your Browser
                    </h2>
                    <p>Launch Qaint and click Record a Demo to begin. Unlimited duration, unlimited recordings, No Downloads, No Extensions.</p>
                    <div className="oss-actions">
                        <button className="btn btn-primary btn-xl" onClick={() => navigate('/recorder')}>Create Demo Now for Free</button>
                    </div>
                </div>
            </section>

            <footer className="studio-footer">
                <div className="footer-content">
                    <div className="footer-logo" style={{ color: 'var(--text-main)', background: 'var(--glass)' }}>Q</div>
                    <p>© 2026 Qaint. Secure, Local-First Free Demo Infrastructure.</p>
                    <div className="footer-links">
                        <a href="/privacy" onClick={(e) => { e.preventDefault(); navigate('/privacy'); }}>Privacy Policy</a>
                        <a href="/terms" onClick={(e) => { e.preventDefault(); navigate('/terms'); }}>Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
