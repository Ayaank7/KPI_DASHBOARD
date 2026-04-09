# F&B KPI Dashboard

A frontend dashboard for tracking restaurant and hospitality KPIs across revenue, operations, menu performance, staffing, customer behavior, inventory, and ROI.

This project is built as a real-time simulation (no backend required) using React, Vite, Zustand, Recharts, and Tailwind CSS.

## What this app does

- Tracks 49 KPIs grouped into 7 business domains.
- Supports time windows: `Today`, `Week`, `Month`.
- Supports role context: `Manager` and `Owner`.
- Shows live-updating values with auto refresh + manual sync.
- Includes smart alerts with severity levels and dismiss persistence.
- Persists user preferences (`theme`, `role`, selected filters, dismissed alerts).
- Works in both light and dark theme modes.

## Domains covered

- Revenue
- Operations
- Orders & Menu
- Staff
- Customer
- Inventory
- ROI & Growth

## Tech stack

- React 18
- Vite
- Zustand (state + persistence)
- Recharts
- Tailwind CSS

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Run in development

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Project structure

```text
src/
	App.jsx                       # Main screen composition
	main.jsx                      # React bootstrap
	index.css                     # Global styles + theme rules
	data/
		mockData.js                 # Synthetic data engine + calculations
	hooks/
		useLiveUpdates.js           # Real-time pulse + manual sync trigger
	store/
		useDashboardStore.js        # Global state and localStorage persistence
	components/
		ui/                         # Reusable primitives (Button, Card, Badge, etc.)
		dashboard/                  # Header, Sidebar, KPI card, Alert panel
		charts/                     # Line/Bar/Donut/Scatter/Heatmap/Sparkline charts
```

## How data works

There is no API in this project. Data is generated in `src/data/mockData.js` and then transformed into a UI-ready view model.

At a high level:

1. Base KPI definitions are declared by domain.
2. Synthetic daily and hourly series are generated.
3. A live pulse updates values at runtime.
4. Time-window filtering (`Today/Week/Month`) chooses the active series.
5. KPI cards, chart datasets, and alerts are recalculated from that window.

If you want the full formula-level explanation, check:

- `PROJECT_DETAILED_DOCUMENTATION.md`

## State and persistence

Zustand stores:

- selected domain
- selected time filter
- role
- theme
- alert simulation toggle
- dismissed alert IDs

These are persisted to localStorage so the dashboard reopens in the same state.

## Theming

- Theme is stored in Zustand.
- `index.html` applies stored theme before React mounts (prevents flash on load).
- `App.jsx` keeps `html` class/data attributes in sync with theme state.

## Notes for contributors

- Keep components presentational where possible.
- Keep business logic in `mockData.js` and state logic in Zustand store.
- If you add KPI fields, wire them through:
	- domain definitions,
	- view-model calculations,
	- card/chart consumption.

## Scripts

- `npm run dev` - start dev server
- `npm run build` - production build
- `npm run preview` - preview build output

## License

This project is currently for internship/demo use.