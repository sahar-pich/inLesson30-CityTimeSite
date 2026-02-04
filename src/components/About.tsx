import '../styles/About.css';

export function About() {
    return (
        <div className="about">
            <div className="about-container">
                <h1>About World Time</h1>

                <section className="about-section">
                    <h2>📱 What is this app?</h2>
                    <p>
                        World Time is a simple React application that displays the current local time
                        for major cities around the world. It helps you quickly check what time it is
                        in different parts of the globe, making it perfect for coordinating with
                        friends, colleagues, or business partners across different time zones.
                    </p>
                </section>

                <section className="about-section">
                    <h2>🌍 How it works</h2>
                    <ul>
                        <li><strong>Home Page:</strong> Browse a grid of 12 major cities with their current local times</li>
                        <li><strong>City Details:</strong> Click on any city to see detailed information including the full date, timezone, and day of the week</li>
                        <li><strong>Auto-Refresh:</strong> Times automatically refresh every 60 seconds</li>
                        <li><strong>Manual Refresh:</strong> Use the refresh button for immediate updates</li>
                        <li><strong>Theme Toggle:</strong> Switch between light and dark modes for comfortable viewing</li>
                    </ul>
                </section>

                <section className="about-section">
                    <h2>📊 Data Source</h2>
                    <p>
                        This application uses the <strong>TimeAPI.io</strong> service to fetch accurate
                        time and timezone information. The API provides reliable timezone data for every
                        location on Earth.
                    </p>
                    <p>
                        API Documentation: <a href="https://timeapi.io" target="_blank" rel="noopener noreferrer">
                            https://timeapi.io
                        </a>
                    </p>
                </section>

                <section className="about-section">
                    <h2>🛠️ Technologies Used</h2>
                    <ul>
                        <li><strong>React 19:</strong> Modern UI framework with hooks</li>
                        <li><strong>TypeScript:</strong> Type-safe development</li>
                        <li><strong>Vite:</strong> Fast build tool and development server</li>
                        <li><strong>React Router v7:</strong> Client-side routing</li>
                        <li><strong>CSS Grid & Flexbox:</strong> Responsive design</li>
                    </ul>
                </section>

                <section className="about-section">
                    <h2>✨ Features</h2>
                    <ul>
                        <li>Real-time clock display for 12 cities</li>
                        <li>Day/Night indicator (☀️ / 🌙) based on local time</li>
                        <li>Detailed city information with full timezone data</li>
                        <li>Responsive design that works on all devices</li>
                        <li>Light and Dark mode support</li>
                        <li>Error handling and loading states</li>
                        <li>Manual and automatic time refresh</li>
                    </ul>
                </section>

                <section className="about-section footer-section">
                    <p>Made with ❤️ using React</p>
                </section>
            </div>
        </div>
    );
}
