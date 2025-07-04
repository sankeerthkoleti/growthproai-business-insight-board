
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Sample SEO headlines for random generation
const seoHeadlines = [
  "Why {name} is {location}'s Best Kept Secret in 2025",
  "The Ultimate Guide to {name}: {location}'s Premier Destination",
  "Discover Why Everyone in {location} is Talking About {name}",
  "{name}: Revolutionizing the {location} Experience Since Day One",
  "From Local Favorite to {location} Legend: The {name} Story",
  "5 Reasons Why {name} Dominates the {location} Scene",
  "Behind the Success: How {name} Became {location}'s Go-To Spot",
  "{name} Sets New Standards for Excellence in {location}",
  "The Secret Sauce: What Makes {name} {location}'s Crown Jewel",
  "Innovation Meets Tradition: {name}'s Impact on {location}",
  "Why {name} is the Future of {location}'s Business Landscape",
  "Local Experts Reveal: Why {name} Leads {location}'s Market"
];

// Helper function to generate random rating between 3.5 and 5.0
const generateRating = () => {
  return Math.round((Math.random() * 1.5 + 3.5) * 10) / 10;
};

// Helper function to generate random review count
const generateReviewCount = () => {
  return Math.floor(Math.random() * 500) + 50;
};

// Helper function to replace placeholders in headlines
const formatHeadline = (template, name, location) => {
  return template.replace(/{name}/g, name).replace(/{location}/g, location);
};

// Route: POST /business-data
app.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  
  if (!name || !location) {
    return res.status(400).json({ 
      error: 'Business name and location are required' 
    });
  }

  // Simulate some processing delay
  setTimeout(() => {
    const rating = generateRating();
    const reviews = generateReviewCount();
    const randomHeadline = seoHeadlines[Math.floor(Math.random() * seoHeadlines.length)];
    const headline = formatHeadline(randomHeadline, name, location);

    res.json({
      rating,
      reviews,
      headline
    });
  }, 1000);
});

// Route: GET /regenerate-headline
app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;
  
  if (!name || !location) {
    return res.status(400).json({ 
      error: 'Business name and location are required as query parameters' 
    });
  }

  // Simulate some processing delay
  setTimeout(() => {
    const randomHeadline = seoHeadlines[Math.floor(Math.random() * seoHeadlines.length)];
    const headline = formatHeadline(randomHeadline, name, location);

    res.json({
      headline
    });
  }, 800);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running successfully!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📊 Business Dashboard API is ready!`);
});
