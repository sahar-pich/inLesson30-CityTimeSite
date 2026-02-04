import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

interface HeaderProps {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
}

export function Header({ darkMode, setDarkMode }: HeaderProps) {
    const location = useLocation();

    return (
        <header className="header">
            <div className="header-content">
                <Link to="/" className="logo">
                    🌍 World Time
                </Link>
                <nav className="nav">
                    <Link
                        to="/"
                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                    >
                        About
                    </Link>
                </nav>
                <button
                    className="theme-toggle"
                    onClick={() => setDarkMode(!darkMode)}
                    aria-label="Toggle dark mode"
                >
                    {darkMode ? '☀️' : '🌙'}
                </button>
            </div>
        </header>
    );
}
