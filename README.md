# Jo Joe's Life Kitchen

A modern, professional website for Nancy Jo Spear's culinary content creation brand, featuring social media video catalogs and an integrated Etsy shop.

**Live Website**: [https://jojoeslifekitchen.com](https://jojoeslifekitchen.com)

**Deployed**: July 26, 2025 - Public Access Enabled

## 🌟 Features

- **Video Catalog**: Browse all TikTok and Instagram reels with search and filtering
- **Etsy Shop Integration**: Showcase and link to handcrafted products
- **Responsive Design**: Beautiful on all devices
- **Animated UI**: Smooth transitions with Framer Motion
- **Database Ready**: Prisma ORM with Vercel Postgres support

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Database**: Vercel Postgres with Prisma ORM
- **Animations**: Framer Motion
- **Deployment**: Vercel
- **Language**: TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Vercel account (for deployment)
- PostgreSQL database (Vercel Postgres recommended)

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd jojo-life-kitchen
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Create `.env.local` with your API credentials:
```
# Database
DATABASE_URL="your-vercel-postgres-url"

# Instagram API (Instagram Basic Display API)
INSTAGRAM_ACCESS_TOKEN="your_instagram_access_token"
INSTAGRAM_USER_ID="your_instagram_user_id"

# Optional: TikTok API (requires third-party service)
TIKTOK_API_KEY="your_tiktok_api_key"
```

### Social Media API Setup

#### Instagram Setup:
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app and enable Instagram Basic Display
3. Get your User Access Token and User ID
4. Add to `.env.local`

#### TikTok Setup:
Note: TikTok doesn't have a public API. Options include:
- Third-party services (RapidAPI, etc.)
- Web scraping (complex, may violate TOS)
- Manual content curation (recommended for now)

5. Run database migrations:
```bash
npx prisma generate
npx prisma db push
```

6. (Optional) Seed the database with sample data:
```bash
npm run prisma:seed
```

7. Start the development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to see the website.

## 📂 Project Structure

```
jojo-life-kitchen/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Home page
│   ├── catalog/           # Video catalog page
│   ├── shop/              # Etsy products page
│   ├── about/             # About Nancy Jo
│   └── contact/           # Contact information
├── components/            # Reusable components
│   ├── cards/            # VideoCard, ProductCard
│   ├── layout/           # Navigation, Footer
│   └── ui/               # Hero, other UI components
├── lib/                   # Utilities and data
├── prisma/               # Database schema and migrations
└── public/               # Static assets
```

## 🎨 Design System

### Colors
- **Cream**: #FAF5EF (Background)
- **Tomato**: #FF6A5A (Primary accent)
- **Charcoal**: #222222 (Text)
- **Warm Gray**: #B7B7B7 (Secondary text)

### Typography
- **Headings**: Playfair Display
- **Body**: Inter
- **Alternative**: Lato

## 🔧 Development

### Adding New Videos/Products

Currently using sample data in `lib/data.ts`. To add real data:

1. Set up API integrations (TikTok/Instagram/Etsy)
2. Update Prisma schema if needed
3. Create API routes in `app/api/`
4. Replace sample data calls with API calls

### Database Management

```bash
# Generate Prisma client
npx prisma generate

# Push schema changes to database
npx prisma db push

# Run migrations
npx prisma migrate dev

# Open Prisma Studio
npx prisma studio
```

## 🚀 Deployment

1. Push to GitHub
2. Import project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## 📝 TODO

- [ ] Integrate TikTok API for automatic video fetching
- [ ] Connect Instagram Graph API
- [ ] Set up Etsy API for real-time product updates
- [ ] Add newsletter signup (Flodesk/ConvertKit)
- [ ] Implement admin dashboard for content management
- [ ] Add analytics tracking

## 👩‍💻 Author

Built with ❤️ for Nancy Jo Spear by [Your Name]

## 📄 License

This project is private and proprietary to Jo Joe's Life Kitchen Studios.
