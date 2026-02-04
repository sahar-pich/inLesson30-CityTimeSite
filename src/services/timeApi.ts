import type { TimeData } from '../types';

export async function getTimeForTimezone(timezone: string): Promise<TimeData> {
    try {
        // Use JavaScript's native Intl API to get timezone-aware dates
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            weekday: 'long'
        });

        const parts = formatter.formatToParts(now);
        const partsMap = parts.reduce((acc, part) => {
            acc[part.type] = part.value;
            return acc;
        }, {} as Record<string, string>);

        const date = `${partsMap.month}/${partsMap.day}/${partsMap.year}`;
        const time = `${partsMap.hour}:${partsMap.minute}:${partsMap.second}`;
        const weekday = partsMap.weekday;
        const utc_offset = calculateUtcOffset(now, timezone);

        return {
            datetime: now.toISOString(),
            timezone: timezone,
            date: date,
            time: time,
            weekday: weekday,
            utc_offset: utc_offset
        };
    } catch (error) {
        console.error(`Error fetching time for ${timezone}:`, error);
        throw new Error(`Failed to get time for timezone: ${timezone}`);
    }
}

export function getHourFromTime(time: string): number {
    const hour = parseInt(time.split(':')[0], 10);
    return hour;
}

export function getDayNightEmoji(hour: number): string {
    if (hour >= 6 && hour < 18) {
        return '☀️';
    }
    return '🌙';
}

export function getTimeDisplay(time: string): string {
    return time;
}

function calculateUtcOffset(date: Date, timezone: string): string {
    try {
        // Format the date in UTC and in the target timezone
        const utcFormatter = new Intl.DateTimeFormat('en-US', {
            timeZone: 'UTC',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });

        const tzFormatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });

        const utcParts = utcFormatter.formatToParts(date);
        const tzParts = tzFormatter.formatToParts(date);

        const utcHour = parseInt(utcParts.find(p => p.type === 'hour')?.value || '0', 10);
        const tzHour = parseInt(tzParts.find(p => p.type === 'hour')?.value || '0', 10);
        const utcMinute = parseInt(utcParts.find(p => p.type === 'minute')?.value || '0', 10);
        const tzMinute = parseInt(tzParts.find(p => p.type === 'minute')?.value || '0', 10);

        let offsetHours = tzHour - utcHour;
        let offsetMinutes = tzMinute - utcMinute;

        // Handle day boundary crossing
        if (offsetHours > 12) {
            offsetHours -= 24;
        } else if (offsetHours < -12) {
            offsetHours += 24;
        }

        const sign = offsetHours >= 0 ? '+' : '';
        const paddedHours = Math.abs(offsetHours).toString().padStart(2, '0');
        const paddedMinutes = Math.abs(offsetMinutes).toString().padStart(2, '0');

        return `UTC${sign}${paddedHours}:${paddedMinutes}`;
    } catch (error) {
        console.error('Error calculating UTC offset:', error);
        return 'UTC';
    }
}

