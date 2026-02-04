import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { cities } from '../data/cities';
import type { TimeData } from '../types';
import { getTimeForTimezone, getDayNightEmoji, getHourFromTime } from '../services/timeApi';
import '../styles/CityDetails.css';

export function CityDetails() {
    const { cityName } = useParams<{ cityName: string }>();
    const [timeData, setTimeData] = useState<TimeData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const city = cities.find(c => c.name === cityName);

    const fetchTime = async () => {
        if (!city) {
            setError('City not found');
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const data = await getTimeForTimezone(city.timezone);
            setTimeData(data);
        } catch (err) {
            console.error('Error fetching time:', err);
            setError('Failed to load time data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTime();

        // Refresh every 60 seconds
        const interval = setInterval(fetchTime, 60000);

        return () => clearInterval(interval);
    }, [city]);

    if (!city) {
        return (
            <div className="city-details">
                <Link to="/" className="back-btn">← Back to Home</Link>
                <div className="error-container">
                    <p>City not found</p>
                </div>
            </div>
        );
    }

    if (loading && !timeData) {
        return (
            <div className="city-details">
                <Link to="/" className="back-btn">← Back to Home</Link>
                <div className="loading-container">
                    <div className="spinner"></div>
                    <p>Loading time information...</p>
                </div>
            </div>
        );
    }

    if (error && !timeData) {
        return (
            <div className="city-details">
                <Link to="/" className="back-btn">← Back to Home</Link>
                <div className="error-container">
                    <p>{error}</p>
                    <button onClick={fetchTime} className="retry-btn">Retry</button>
                </div>
            </div>
        );
    }

    const hour = timeData ? getHourFromTime(timeData.time) : 0;
    const emoji = getDayNightEmoji(hour);

    return (
        <div className="city-details">
            <Link to="/" className="back-btn">← Back to Home</Link>

            <div className="city-details-container">
                <div className="city-details-header">
                    <h1>
                        <span>{city.name}</span>
                        <span className="emoji">{emoji}</span>
                    </h1>
                </div>

                {timeData && (
                    <div className="city-info">
                        <div className="time-display">
                            <div className="time-large">{timeData.time}</div>
                            <div className="time-label">Local Time</div>
                        </div>

                        <div className="details-grid">
                            <div className="detail-item">
                                <label>Date</label>
                                <div className="detail-value">{timeData.date}</div>
                            </div>
                            <div className="detail-item">
                                <label>Day</label>
                                <div className="detail-value">{timeData.weekday}</div>
                            </div>
                            <div className="detail-item">
                                <label>Timezone (IANA)</label>
                                <div className="detail-value">{city.timezone}</div>
                            </div>
                            <div className="detail-item">
                                <label>Full Timezone</label>
                                <div className="detail-value">{timeData.timezone}</div>
                            </div>
                        </div>

                        <div className="refresh-section">
                            <button onClick={fetchTime} className="refresh-btn manual">
                                🔄 Refresh
                            </button>
                            <p className="auto-refresh-info">Auto-refreshes every 60 seconds</p>
                        </div>
                    </div>
                )}

                {error && (
                    <div className="error-container">
                        <p>{error}</p>
                        <button onClick={fetchTime} className="retry-btn">Retry</button>
                    </div>
                )}
            </div>
        </div>
    );
}
