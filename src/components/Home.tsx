import { useState, useEffect } from 'react';
import { CityCard } from './CityCard';
import { cities } from '../data/cities';
import type { TimeData } from '../types';
import { getTimeForTimezone } from '../services/timeApi';
import '../styles/Home.css';

export function Home() {
    const [timeDataMap, setTimeDataMap] = useState<Record<string, TimeData | null>>({});
    const [loadingMap, setLoadingMap] = useState<Record<string, boolean>>({});
    const [errorMap, setErrorMap] = useState<Record<string, string | null>>({});

    const fetchTimeForCities = async () => {
        const newLoadingMap: Record<string, boolean> = {};
        const newErrorMap: Record<string, string | null> = {};
        const newTimeDataMap: Record<string, TimeData | null> = {};

        // Initialize loading states
        cities.forEach(city => {
            newLoadingMap[city.name] = true;
            newErrorMap[city.name] = null;
        });

        setLoadingMap(newLoadingMap);
        setErrorMap(newErrorMap);

        // Fetch all cities in parallel
        const promises = cities.map(async (city) => {
            try {
                const data = await getTimeForTimezone(city.timezone);
                newTimeDataMap[city.name] = data;
                newErrorMap[city.name] = null;
            } catch (error) {
                console.error(`Error fetching time for ${city.name}:`, error);
                newErrorMap[city.name] = 'Failed to load';
                newTimeDataMap[city.name] = null;
            }
            newLoadingMap[city.name] = false;
        });

        await Promise.all(promises);

        setTimeDataMap(newTimeDataMap);
        setLoadingMap(newLoadingMap);
        setErrorMap(newErrorMap);
    };

    useEffect(() => {
        fetchTimeForCities();

        // Refresh every 60 seconds
        const interval = setInterval(fetchTimeForCities, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home">
            <div className="home-header">
                <h1>World Cities Time</h1>
                <p>Current local times in major cities around the world</p>
                <button className="refresh-btn" onClick={fetchTimeForCities}>
                    🔄 Refresh Now
                </button>
            </div>
            <div className="cities-grid">
                {cities.map((city) => (
                    <CityCard
                        key={city.name}
                        city={city}
                        timeData={timeDataMap[city.name] || null}
                        loading={loadingMap[city.name] || false}
                        error={errorMap[city.name] || null}
                    />
                ))}
            </div>
        </div>
    );
}
