# 🏨 Hotel Discovery

A modern, responsive hotel discovery web app built with React. Browse, search, and filter through a curated collection of 100+ hotels across India.

**[Live Demo](https://hotel-discovery-gamma.vercel.app/)**


## Features

- **Search** — Find hotels by name or city with real-time filtering
- **Sort** — Sort results by price (low to high / high to low)
- **Filter by Rating** — View hotels above a minimum rating (3+, 3.5+, 4+, 4.5+)
- **Filter by Price Range** — Budget-friendly categories from under ₹1,500 to ₹8,000+
- **Hotel Details** — Detailed view with description, amenities, and booking
- **Responsive Design** — Optimized for desktop, tablet, and mobile
- **Book Now** — Simulated booking with toast confirmation

## Tech Stack

| Layer       | Technology                  |
| ----------- | --------------------------- |
| Framework   | React 19                    |
| Routing     | React Router DOM 7          |
| Styling     | CSS3 (custom, no libraries) |
| Build Tool  | Create React App            |
| Deployment  | Vercel                      |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/hotel-finder.git
cd hotel-finder
npm install
```

### Run Locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

## Project Structure

```
hotel-finder/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Filter.js         # Sort, rating, and price filter controls
│   │   ├── HotelCard.js      # Hotel card with image, info, and link
│   │   └── SearchBar.js      # Search input component
│   ├── data/
│   │   └── hotels.js         # Static dataset of 100+ Indian hotels
│   ├── pages/
│   │   ├── Home.js           # Home page with search, filters, and grid
│   │   └── HotelDetails.js   # Individual hotel detail page
│   ├── App.js                # Root component with routing
│   ├── index.css             # Global styles
│   └── index.js              # Entry point
├── package.json
└── README.md
```

## Screenshots

| Home Page | Hotel Details |
| --------- | ------------- |
| Search, filter, and browse hotels in a responsive grid | View amenities, description, and book your stay |

## Deployment

This app is deployed on **Vercel**. Any push to the `main` branch triggers an automatic deployment.

**Live URL:** [https://hotel-discovery-gamma.vercel.app/](https://hotel-discovery-gamma.vercel.app/)


