# Synapse Bin Store OS

## Project Overview
A high-performance, headless e-commerce engine designed for the **Chaotically Organized AI - Digital Bin Store Division**. This platform automates the standard liquidation bin store model—descending prices, early access memberships, and mystery box fulfillment—while optimizing logistics via real-time cubic shipping data.

## Tech Stack
- **Frontend**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4.0 + Framer Motion (Glassmorphism / Neon Aesthetic)
- **State Management**: Zustand
- **Icons**: Lucide React
- **Logic**: Custom 7-day inventory cycle engine

## Core Modules
### 1. Elastic Pricing Engine (`src/lib/types.ts`)
Calculates individual item prices based on the current day of the week:
- **Wednesday**: $10.00 (Drop Day)
- **Thursday**: $8.00 (Markdown Day)
- **Friday-Tuesday**: Moved to Mystery Pool

### 2. Hyper-Cubic Shipping (`src/lib/store.ts`)
Calculates shipping costs based on member tier and volume. 
- **Basic**: $3.99 flat (vs $6.99 guest)
- **Premium**: Free shipping threshold lowered to $30.

### 3. Inventory Sweeper & Mystery Box Pool
Unsold curated items are automatically tagged and "swept" into the mystery box pool every Friday at 12:01 AM.

## Getting Started
1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Run Dev Server**:
   ```bash
   npm run dev
   ```
3. **Demo Mode**: Use the day-switcher in the Navbar to simulate the weekly cycle and witness the price shifts.

## Future Roadmap (God Level)
- [ ] **Medusa.js Integration**: Transition from mock state to full Postgres-backed commerce.
- [ ] **Python Price Engine**: Use the `scripts/price_engine.py` to scrape market floor prices.
- [ ] **3D Bin Packing**: Integrate a library to calculate the exact USPS Cubic tier before labels are printed.
