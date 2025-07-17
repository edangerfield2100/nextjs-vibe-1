# Ted's Pizzeria - Frontend

A groovy 1970s-themed NextJS application for Ted's Pizzeria, featuring a far-out design and seamless integration with the Spring Boot backend.

## Features

- **Welcome Page**: Retro-styled landing page with 1970s vibes
- **Menu Page**: Dynamic menu display with data fetched from the backend API
- **Responsive Design**: Mobile-friendly layout with Tailwind CSS
- **1970s Theme**: Authentic retro styling with groovy colors, fonts, and animations

## Tech Stack

- **NextJS 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling with custom 1970s theme
- **React Hooks**: State management and side effects

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Backend Spring Boot application running on localhost:8080

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up environment variables:

   ```bash
   # .env.local
   NEXT_PUBLIC_DOMAIN=localhost:8080
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Welcome page
│   ├── menu/
│   │   └── page.tsx        # Menu page with API integration
│   └── globals.css         # Global styles with 1970s theme
├── components/
│   └── Navigation.tsx      # Reusable navigation component
```

## API Integration

The menu page fetches data from the Spring Boot backend:

- **Endpoint**: `GET http://localhost:8080/api/menu/options`
- **Response**: Array of menu items with name, description, price, and type
- **Error Handling**: Graceful fallbacks for API failures

## Menu Categories

The menu page organizes items into groovy sections:

- 🥨 **Appetizers**
- 🍕 **Pizzas**
- 🍔 **Burgers**
- 🥗 **Salads**
- 🍰 **Desserts**
- 🥤 **Beverages**

## Styling

The application features an authentic 1970s aesthetic:

- **Colors**: Retro orange, yellow, brown, and cream palette
- **Fonts**: Righteous for headings, Comfortaa for body text
- **Animations**: Gradient shifts, hover effects, and groovy transitions
- **Layout**: Card-based design with retro borders and shadows

## Environment Variables

- `NEXT_PUBLIC_DOMAIN`: Backend domain (default: localhost:8080)

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## Features in Detail

### Welcome Page

- Eye-catching hero section with animated title
- Retro-styled call-to-action buttons
- Animated emoji elements
- Responsive design

### Menu Page

- Real-time data fetching from backend API
- Loading states with groovy animations
- Error handling with user-friendly messages
- Organized sections by food type
- Price display and availability status

### Navigation

- Consistent header across all pages
- Active page indicators
- Smooth hover animations
- Mobile-responsive design

---

_Keep on groovin'! ✌️🍕_
