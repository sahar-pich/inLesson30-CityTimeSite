export interface City {
    name: string;
    timezone: string;
    coordinates: {
        latitude: number;
        longitude: number;
    };
}

export interface TimeData {
    datetime: string;
    timezone: string;
    date: string;
    time: string;
    weekday: string;
    utc_offset: string;
}
