import { Link } from 'react-router-dom';
import type { TimeData, City } from '../types';
import { getDayNightEmoji, getHourFromTime } from '../services/timeApi';
import '../styles/CityCard.css';

interface CityCardProps {
    city: City;
    timeData: TimeData | null;
    loading: boolean;
    error: string | null;
}

export function CityCard({ city, timeData, loading, error }: CityCardProps) {
    if (loading) {
        return (
            <div className="city-card loading">
                <div className="spinner"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="city-card error">
                <h3>{city.name}</h3>
                <p className="error-text">Failed to load time</p>
                <p className="timezone">{city.timezone}</p>
            </div>
        );
    }

    if (!timeData) {
        return (
            <div className="city-card">
                <h3>{city.name}</h3>
                <p>No data</p>
            </div>
        );
    }

    const hour = getHourFromTime(timeData.time);
    const emoji = getDayNightEmoji(hour);

    return (
        <Link to={`/city/${city.name}`} className="city-card-link">
            <div className="city-card">
                <div className="city-header">
                    <h3>{city.name}</h3>
                    <span className="day-night-emoji">{emoji}</span>
                </div>
                <div className="city-time">{timeData.time}</div>
                <div className="city-timezone">{timeData.utc_offset}</div>
            </div>
        </Link>
    );
}
