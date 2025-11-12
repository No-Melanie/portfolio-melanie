import Image from "next/image"

    <section id="portfolio" className="portfolio">
        <div className="container">
            <div className="section-title fade-in">
                <h2>My Portfolio</h2>
            </div>
            <div className="portfolio-filters fade-in">
                <button className="filter-btn active" data-filter="all">All</button>
                <button className="filter-btn" data-filter="web">Web Design</button>
                <button className="filter-btn" data-filter="app">App Development</button>
                <button className="filter-btn" data-filter="ui">UI/UX</button>
            </div>
            <div className="portfolio-grid">
                <div className="portfolio-item fade-in" data-category="web">
                    <div className="portfolio-image">
                        <Image 
                        src="https://placehold.co/600x400"
                        width={600}
                        height={400} 
                        alt="Ocean E-commerce Platform"/>
                        <div className="portfolio-overlay">
                            <div className="portfolio-links">
                                <a href="#" className="portfolio-link"><i className="fas fa-search-plus"></i></a>
                                <a href="#" className="portfolio-link"><i className="fas fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-info">
                        <h3>Ocean E-commerce Platform</h3>
                        <p>A modern e-commerce solution with seamless user experience and advanced filtering capabilities.</p>
                        <div className="portfolio-tags">
                            <span className="tag">React</span>
                            <span className="tag">Node.js</span>
                            <span className="tag">MongoDB</span>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item fade-in" data-category="app">
                    <div className="portfolio-image">
                        <Image 
                        src="https://placehold.co/600x400" 
                        width={600}
                        height={400} 
                        alt="Cyan Weather App"/>
                        <div className="portfolio-overlay">
                            <div className="portfolio-links">
                                <a href="#" className="portfolio-link"><i className="fas fa-search-plus"></i></a>
                                <a href="#" className="portfolio-link"><i className="fas fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-info">
                        <h3>Cyan Weather App</h3>
                        <p>A beautiful weather application with real-time updates and intuitive interface design.</p>
                        <div className="portfolio-tags">
                            <span className="tag">Vue.js</span>
                            <span className="tag">API Integration</span>
                            <span className="tag">PWA</span>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item fade-in" data-category="ui">
                    <div className="portfolio-image">
                        <Image 
                        src="https://placehold.co/600x400" 
                        width={600}
                        height={400} 
                        alt="Ocean Banking Dashboard"/>
                        <div className="portfolio-overlay">
                            <div className="portfolio-links">
                                <a href="#" className="portfolio-link"><i className="fas fa-search-plus"></i></a>
                                <a href="#" className="portfolio-link"><i className="fas fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-info">
                        <h3>Ocean Banking Dashboard</h3>
                        <p>A comprehensive financial dashboard with data visualization and user-friendly interface.</p>
                        <div className="portfolio-tags">
                            <span className="tag">UI Design</span>
                            <span className="tag">Data Visualization</span>
                            <span className="tag">Figma</span>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item fade-in" data-category="web">
                    <div className="portfolio-image">
                        <Image 
                        src="https://placehold.co/600x400" 
                        width={600}
                        height={400} 
                        alt="Cyan Travel Agency"/>
                        <div className="portfolio-overlay">
                            <div className="portfolio-links">
                                <a href="#" className="portfolio-link"><i className="fas fa-search-plus"></i></a>
                                <a href="#" className="portfolio-link"><i className="fas fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-info">
                        <h3>Cyan Travel Agency</h3>
                        <p>A stunning travel website with booking system and interactive destination explorer.</p>
                        <div className="portfolio-tags">
                            <span className="tag">Next.js</span>
                            <span className="tag">Tailwind CSS</span>
                            <span className="tag">Booking System</span>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item fade-in" data-category="app">
                    <div className="portfolio-image">
                        <Image 
                        src="https://placehold.co/600x400" 
                        width={600}
                        height={400} 
                        alt="Ocean Fitness Tracker"/>
                        <div className="portfolio-overlay">
                            <div className="portfolio-links">
                                <a href="#" className="portfolio-link"><i className="fas fa-search-plus"></i></a>
                                <a href="#" className="portfolio-link"><i className="fas fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-info">
                        <h3>Ocean Fitness Tracker</h3>
                        <p>A comprehensive fitness application with workout plans and progress tracking features.</p>
                        <div className="portfolio-tags">
                            <span className="tag">React Native</span>
                            <span className="tag">Health API</span>
                            <span className="tag">Charts.js</span>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item fade-in" data-category="ui">
                    <div className="portfolio-image">
                        <Image 
                        src="https://placehold.co/600x400" 
                        width={600}
                        height={400} 
                        alt="Cyan Task Manager"/>
                        <div className="portfolio-overlay">
                            <div className="portfolio-links">
                                <a href="#" className="portfolio-link"><i className="fas fa-search-plus"></i></a>
                                <a href="#" className="portfolio-link"><i className="fas fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-info">
                        <h3>Cyan Task Manager</h3>
                        <p>A productivity app with intuitive task organization and team collaboration features.</p>
                        <div className="portfolio-tags">
                            <span className="tag">UI/UX</span>
                            <span className="tag">Prototyping</span>
                            <span className="tag">User Testing</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
