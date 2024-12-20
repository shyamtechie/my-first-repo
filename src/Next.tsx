const express = require('express');
const app = express();
const port = 3000;

const wonders = [
  { 
    name: "Great Wall of China", 
    location: "China",
    image: "https://example.com/images/great-wall-of-china.jpg" 
  },
  { 
    name: "Petra", 
    location: "Jordan",
    image: "https://example.com/images/petra.jpg" 
  },
  { 
    name: "Christ the Redeemer", 
    location: "Brazil",
    image: "https://example.com/images/christ-the-redeemer.jpg" 
  },
  { 
    name: "Machu Picchu", 
    location: "Peru",
    image: "https://example.com/images/machu-picchu.jpg" 
  },
  { 
    name: "Chichen Itza", 
    location: "Mexico",
    image: "https://example.com/images/chichen-itza.jpg" 
  },
  { 
    name: "Roman Colosseum", 
    location: "Italy",
    image: "https://example.com/images/roman-colosseum.jpg" 
  },
  { 
    name: "Taj Mahal", 
    location: "India",
    image: "https://example.com/images/taj-mahal.jpg" 
  }
];

app.get('/wonders', (req, res) => {
  res.json(wonders);
});

app.listen(port, () => {
  console.log(`Seven Wonders API is running at http://localhost:${port}`);
});