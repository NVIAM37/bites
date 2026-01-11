# Bites: Premium Restaurant Platform
**Your AI-Powered Fine Dining Experience.**

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg) ![Status](https://img.shields.io/badge/status-production_ready-success.svg) ![AI](https://img.shields.io/badge/AI-Gemini_2.5-purple.svg) ![License](https://img.shields.io/badge/license-MIT-green.svg)

**Bites** is a premium restaurant platform that combines an elegant dining website with an intelligent AI concierge. The AI helps customers explore our menu, make reservations, and discover the perfect dishes—all powered by Gemini API and our sophisticated 3D workspace orchestration system.

---

## 📂 Project Structure
Here is how the project is organized. Each folder has a specific job.

```text
bites/
├── src/
│   ├── components/              # React Components
│   │   ├── AIAgent.tsx          # AI Concierge Chat Widget
│   │   ├── NavLink.tsx          # Navigation Components
│   │   ├── 3d/                  # 3D Visualization
│   │   │   ├── FoodModel.tsx    # 3D Food Models
│   │   │   └── Scene3D.tsx      # 3D Scene Renderer
│   │   ├── ai/                  # AI Components
│   │   │   └── AIChatOrb.tsx    # Chat Interface
│   │   ├── cards/               # Card Components
│   │   │   └── ProductCard.tsx  # Product Display Cards
│   │   ├── layout/              # Layout Components
│   │   │   ├── Footer.tsx       # Footer Section
│   │   │   └── Navbar.tsx       # Navigation Bar
│   │   ├── sections/            # Page Sections
│   │   │   ├── CategorySection.tsx
│   │   │   ├── ExpertsSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   ├── FeaturedSection.tsx
│   │   │   ├── FoodQualitySection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   └── ReviewsSection.tsx
│   │   └── ui/                  # UI Components Library
│   │
│   ├── data/                    # Data & Configuration
│   │   ├── menuData.ts          # Menu Items & Categories
│   │   └── restaurantData.ts    # Restaurant Knowledge Base
│   │
│   ├── pages/                   # Page Components
│   │   ├── Index.tsx            # Home Page
│   │   ├── Menu.tsx             # Menu Page
│   │   ├── About.tsx            # About Page
│   │   ├── Booking.tsx          # Reservations
│   │   ├── Cart.tsx             # Shopping Cart
│   │   ├── Checkout.tsx         # Payment
│   │   └── ProductDetail.tsx    # Item Details
│   │
│   ├── App.tsx                  # Main App Component
│   ├── main.tsx                 # Entry Point
│   └── index.css                # Global Styles
│
├── public/                      # Static Assets
├── vite.config.ts               # Vite Configuration
├── tsconfig.json                # TypeScript Configuration
├── tailwind.config.ts           # Tailwind CSS Config
├── package.json                 # Dependencies
├── .env                         # Environment Variables
└── README.md                    # This File
```

---

## 🔄 How It Works (The Customer Journey)

This is the step-by-step experience of using Bites:

### 1. Discovery (The Welcome)
*   Customer lands on the **Bites website** and is greeted with a stunning visual experience of our restaurant, menu categories, and featured dishes.
*   The **AI Chat Concierge** appears in the bottom right corner with a warm welcome: *"Welcome to Bites Restaurant. How may I assist you today?"*

### 2. Exploration (The Menu)
*   Customer can browse **6 main categories**: Burgers, Pizza, Sushi, Salads, Desserts, Drinks.
*   Each category shows beautifully rendered images with 3D effects.
*   Customer clicks on a category to see the full menu with **50+ dishes**, descriptions, prices, ratings, and customer reviews.

### 3. AI Assistance (The Smart Helper)
*   Customer asks the **AI Concierge**: *"What's your best dish?"*
*   The AI responds with our **bestsellers**: Classic Smash Burger ($14.99), BBQ Bacon Beast ($18.99), or recommends premium options.
*   Customer asks: *"Do you have vegan options?"*
*   AI immediately lists our **vegan dishes** with prices and details.
*   Customer asks: *"How do I make a reservation?"*
*   AI provides: **Phone: +1 (555) 123-4567 | Hours: Mon-Thu 11AM-11PM**

### 4. Selection (The Cart)
*   Customer selects dishes and adds them to the cart.
*   Cart shows **real-time totals**, dietary info, and calorie counts.
*   Customer can adjust quantities or remove items.

### 5. Ordering (The Choice)
*   Customer chooses between **Dine-In**, **Takeout**, or **Delivery**.
*   For **reservations**, the system integrates with booking confirmation.
*   Customer completes checkout with payment options: **Card, Apple Pay, Google Pay, etc.**

### 6. Confirmation (The Receipt)
*   Customer receives **Order Confirmation** page with order number, estimated time, and status.
*   Customer can **track their order** in real-time.

---

## 🚀 Core Features

### 🤖 AI Concierge (Powered by Gemini 2.5)
An intelligent conversational assistant that:
- Answers questions about the menu, prices, and ingredients
- Provides restaurant hours, location, and contact information
- Helps with reservations and catering inquiries
- Understands dietary restrictions (vegan, vegetarian, gluten-free)
- Learns from user preferences for personalized recommendations
- Operates 24/7 with natural language understanding

**Tech**: Gemini 2.5 Flash API + Fallback to Groq/Llama for redundancy.

### 🍽️ Dynamic Menu System
- **50+ Dishes** across 6 categories
- **Real-time Filtering**: by price, rating, dietary type
- **Rich Data**: descriptions, calories, reviews, images
- **Responsive Design**: works seamlessly on mobile and desktop

### 🎨 3D Visual Experience
- **3D Food Models**: Interactive 3D rendering of dishes
- **Parallax Effects**: Smooth animations and depth perception
- **Glassmorphic UI**: Modern, elegant design with blur effects
- **Responsive Cards**: Beautiful product displays with hover effects

### 🛒 Shopping & Checkout
- **Shopping Cart**: Add/remove items, adjust quantities
- **Order Customization**: Special instructions, preferences
- **Multiple Payment Methods**: Cards, Digital Wallets, Cash
- **Order Tracking**: Real-time status updates

### 📍 Reservation System
- **Online Booking**: Reserve tables for any date/time
- **Group Bookings**: Specify party size and preferences
- **Private Dining**: Special event arrangements
- **Catering Services**: Custom menus for corporate events

### 📱 Mobile-First Design
- Fully responsive on all devices
- Touch-optimized interface
- Fast loading times (Vite optimization)
- Offline support for menu browsing

---

## ⚡ Quick Start Guide

### 1. Installation
Run this command to install dependencies:
```bash
npm install
```

### 2. Setup Environment Variables
Create a `.env` file with:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
VITE_GROQ_API_KEY=your_groq_api_key_here
```

**Get Keys:**
- [Google Gemini API](https://aistudio.google.com)
- [Groq API](https://console.groq.com)

### 3. Start Development Server
```bash
npm run dev
```
App runs at **http://localhost:5173**

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🛠️ Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend Framework** | React 18 + TypeScript |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS |
| **UI Components** | shadcn-ui |
| **Animations** | Framer Motion |
| **3D Graphics** | Three.js + React Three Fiber |
| **State Management** | React Hooks |
| **Routing** | React Router v6 |
| **AI API** | Google Gemini 2.5 Flash |
| **Backup AI** | Groq Llama 3.3 |

---

## 📋 API Endpoints (AI Concierge)

### Primary: Gemini 2.5 Flash
```
POST https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent
```

### Fallback: Groq Llama
```
POST https://api.groq.com/openai/v1/chat/completions
```

---

## 🔐 Security & Privacy

- ✅ API keys stored securely in `.env` (never exposed in code)
- ✅ No user data stored on servers (stateless)
- ✅ HTTPS only for production
- ✅ Content Security Policy (CSP) enabled
- ✅ Regular security audits

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add your feature"`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

---


**Built with ❤️ by [NVIAM](https://nviam.io)**  
**Powered by Gemini AI & Modern Web Technologies**

```bash
npm run preview
```

## Project Structure (high level)

- `src/` — Application source code (components, pages, styles)
- `public/` — Static assets
- `package.json` — Scripts and dependencies


## Contributing

If you'd like to contribute:

1. Fork the repo and create a topic branch.
2. Make changes and add tests or documentation as needed.
3. Open a pull request with a clear description of your changes.



Thank you — this README was updated to make `NVIAM Maker` official and clear.

