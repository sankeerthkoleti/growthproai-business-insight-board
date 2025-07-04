
# GrowthProAI Business Insights Dashboard

A modern, responsive dashboard that simulates local business insights with AI-powered SEO headlines and Google Business data visualization.

## 🚀 Features

- **Interactive Business Form**: Enter business name and location
- **Real-time Data Visualization**: Simulated Google ratings, reviews, and metrics
- **AI-Powered SEO Headlines**: Dynamic headline generation with regeneration capability
- **Responsive Design**: Works beautifully on desktop and mobile devices
- **Modern UI**: Clean, professional interface built with Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- React 18
- Tailwind CSS
- Shadcn/UI Components
- Modern ES6+ JavaScript

### Backend
- Node.js
- Express.js
- CORS enabled
- RESTful API design

## 📦 Installation & Setup

### Frontend Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Backend Setup
```bash
# Create a new directory for backend
mkdir backend && cd backend

# Copy server.js and package-backend.json to this directory
# Rename package-backend.json to package.json

# Install dependencies
npm install

# Start the server
npm start
# or for development with auto-reload
npm run dev
```

## 🔌 API Endpoints

### POST /business-data
Submit business information and receive simulated insights.

**Request:**
```json
{
  "name": "Cake & Co",
  "location": "Mumbai"
}
```

**Response:**
```json
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}
```

### GET /regenerate-headline
Generate a new SEO headline for the business.

**Request:**
```
GET /regenerate-headline?name=Cake%20&%20Co&location=Mumbai
```

**Response:**
```json
{
  "headline": "The Ultimate Guide to Cake & Co: Mumbai's Premier Destination"
}
```

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful blue to indigo gradients
- **Card-based Layout**: Clean, modern card components
- **Interactive Elements**: Hover effects and smooth transitions
- **Loading States**: Professional loading indicators
- **Form Validation**: Client-side validation with error messaging
- **Star Ratings**: Visual rating display with partial star support

## 🚀 Usage

1. **Start the Backend**: Run the Express server on `http://localhost:3001`
2. **Start the Frontend**: Run the React app on `http://localhost:8080`
3. **Enter Business Details**: Fill in business name and location
4. **View Insights**: See simulated Google Business data and AI headlines
5. **Regenerate Headlines**: Click the regenerate button for new SEO suggestions

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- Desktop computers (1024px+)
- Tablets (768px - 1023px)  
- Mobile phones (< 768px)

## 🔧 Configuration

The frontend expects the backend to run on `http://localhost:3001`. To change this, update the API endpoints in the `Index.jsx` file.

## 🎯 Future Enhancements

- Real Google My Business API integration
- User authentication and data persistence
- Advanced analytics and reporting
- Export functionality for insights
- Multi-language support

---

**Built with ❤️ for GrowthProAI Full Stack Intern Assignment**
