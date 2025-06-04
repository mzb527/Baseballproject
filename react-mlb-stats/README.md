React MLB Stats Tracker
Overview
This project is a React-based MLB stats tracker, designed for player tracking and watchlist management. It integrates data from MLB’s Stats API and Lookup Service API, providing real-time player stats.
Features
✅ User Authentication → Secure login/logout functionality
✅ MLB API Integration → Fetch team rosters and individual player stats
✅ Watchlist Management → Add, remove, and clear player watchlists
✅ Sorting & Filtering → Sort players by name, position, team, or latest appearance
✅ Persistent Storage → Watchlist remains saved across sessions
✅ Testing Suite → Comprehensive Jest & React Testing Library tests
✅ State Management → Uses Redux & Zustand for efficient handling
Installation
Clone the repository:
git clone https://github.com/mzb527/react-mlb-stats.git
cd react-mlb-stats


Install dependencies:
npm install


Start the application:
npm start


Run tests:
npm test


Dependencies
This project uses the following libraries:
- UI & Styling
- @mui/material → UI components
- @mui/icons-material → Material UI icons
- styled-components → CSS-in-JS styling
- State Management
- redux → Centralized global state management
- react-redux → Connect Redux with React
- zustand → Lightweight state management
- Utilities & Helpers
- axios → API requests
- lodash → Utility functions
- moment → Date/time formatting
- jwt-decode → Decode JWT tokens
- Linting & Formatting
- eslint → Code linting
- prettier → Code formatting
- Testing
- jest → Testing framework
- @testing-library/react → Component testing
- @testing-library/user-event → Simulated user actions
- @testing-library/jest-dom → DOM assertions
Folder Structure
react-mlb-stats/
├── src/
│   ├── components/
│   │   ├── PlayerList.js
│   │   ├── WatchlistManager.js
│   │   ├── SortingControls.js
│   ├── context/
│   │   ├── AuthContext.js
│   │   ├── WatchlistContext.js
│   ├── pages/
│   │   ├── WatchlistPage.js
│   │   ├── LoginPage.js
│   ├── services/
│   │   ├── MLBApiService.js
│   ├── utils/
│   │   ├── SortingService.js
│   ├── tests/
│   │   ├── AuthContext.test.js
│   │   ├── WatchlistManager.test.js
│   │   ├── PlayerList.test.js


Contributing
Fork the repository and submit a pull request:
git checkout -b feature-new
git commit -m "Add new feature"
git push origin feature-new



