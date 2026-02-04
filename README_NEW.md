# 🌍 World Time App

A modern React application that displays the current local time for major cities around the world. Built with React 19, TypeScript, Vite, and React Router.

## ✨ Features

- 🕐 Real-time clock display for 12 major cities worldwide
- 🌤️ Day/Night indicator (☀️ / 🌙) based on local time
- 📍 Detailed city information with full timezone data
- 🔄 Auto-refresh every 60 seconds with manual refresh button
- 🌙 Light and Dark mode toggle
- 📱 Fully responsive design (Mobile, Tablet, Desktop)
- ⚡ Fast and smooth with Vite and React 19
- 🛡️ Type-safe with TypeScript
- 🎨 Clean UI with CSS Grid and Flexbox

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.tsx        # Navigation and theme toggle
│   ├── Home.tsx          # Grid of cities
│   ├── CityCard.tsx      # Individual city card
│   ├── CityDetails.tsx   # Detailed city information
│   └── About.tsx         # About page
├── services/
│   └── timeApi.ts        # Timezone and time utilities
├── data/
│   └── cities.ts         # Cities database
├── styles/
│   ├── Header.css
│   ├── Home.css
│   ├── CityCard.css
│   ├── CityDetails.css
│   └── About.css
├── types.ts              # TypeScript interfaces
├── App.tsx               # Main app with routing
├── App.css               # App global styles
└── main.tsx              # Entry point
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd lesson30-test
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:5173/ in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## 🛣️ Routes

- `/` - Home page with grid of cities
- `/city/:cityName` - Detailed view for a specific city
- `/about` - Information about the app

## 📊 Data Source

This application uses JavaScript's native **Intl API** for accurate timezone conversion and time formatting. It supports all IANA timezone identifiers.

## 🎯 Technologies Used

- **React 19** - Modern UI framework with hooks (useState, useEffect)
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **React Router v7** - Client-side routing
- **CSS Grid & Flexbox** - Responsive design
- **Intl API** - Native timezone support

## 💡 Key Concepts

### Timezone Handling
The app uses JavaScript's `Intl.DateTimeFormat` API to display accurate local times for each city:

```typescript
new Intl.DateTimeFormat('en-US', { 
  timeZone: timezone,
  // ... format options
}).formatToParts(date)
```

### State Management
- `useState` for managing time data and loading states
- `useEffect` for fetching and auto-refreshing every 60 seconds

### Component Architecture
- Container components (Home, CityDetails) manage state
- Presentational components (CityCard, Header) render UI
- Separation of concerns with dedicated service and data modules

## 🌐 Supported Cities

1. Tel Aviv (Asia/Jerusalem)
2. London (Europe/London)
3. New York (America/New_York)
4. Tokyo (Asia/Tokyo)
5. Paris (Europe/Paris)
6. Sydney (Australia/Sydney)
7. Dubai (Asia/Dubai)
8. Singapore (Asia/Singapore)
9. Los Angeles (America/Los_Angeles)
10. Bangkok (Asia/Bangkok)
11. Berlin (Europe/Berlin)
12. Moscow (Europe/Moscow)

## 🎨 Themes

The app supports light and dark modes with smooth transitions. Click the theme toggle button in the header to switch between modes.

### Light Mode
- Clean white background with dark text
- Blue accent color (#007bff)

### Dark Mode
- Dark background (#1a1a1a) with light text
- Lighter blue accent (#4a9eff)

## 📱 Responsive Design

- **Desktop** (1024px+): 3-4 cities per row
- **Tablet** (768px-1024px): 2-3 cities per row
- **Mobile** (480px-768px): 2 cities per row
- **Small Mobile** (<480px): 1-2 cities per row

## ✅ Requirements Met

- ✅ React with Vite & TypeScript
- ✅ React Router (Home / City / About routes)
- ✅ fetch with async/await & try-catch error handling
- ✅ useState + useEffect hooks
- ✅ CSS Grid & Flexbox (no UI frameworks)
- ✅ Loading and error states
- ✅ Auto-refresh every 60 seconds
- ✅ Day/Night emoji indicators
- ✅ Manual refresh buttons
- ✅ Dark/Light mode toggle
- ✅ 12 major cities
- ✅ Clean, readable code
- ✅ Proper component structure
- ✅ Full error handling
- ✅ Fully responsive design

## 📝 License

This project is created as a learning exercise for John Bryce.

## 🤝 Contributing

This is a learning project. Feel free to modify and improve it!
