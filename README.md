## ⚽ Sports AI - Football Match Predictions Website

A modern, AI-powered web application that provides predictions for football matches across the top European leagues.

### 📊 Features

- **6 Major European Leagues**
  - 🏴󐁧󐁢󐁥󐁮󐁧󐁿 English Premier League - 10 matches (2 accessible)
  - 🇪🇸 La Liga - 10 matches (0 accessible)
  - 🇮🇹 Serie A - 10 matches (0 accessible)
  - 🇩🇪 Bundesliga - 9 matches (0 accessible)
  - 🇫🇷 Ligue 1 - 9 matches (0 accessible)
  - 🇳🇱 Eredivisie - 9 matches (2 accessible)

- **AI Predictions**
  - Home team win predictions
  - Away team win predictions
  - Draw predictions
  - Confidence scoring for each prediction

- **Accessibility Status**
  - Visual indicators for free vs locked predictions
  - Clear marking of accessible matches with 🔓
  - Locked matches with 🔒

- **User Statistics**
  - Total matches count
  - Accessible predictions counter
  - Overall accuracy rate

- **Interactive UI**
  - League selector buttons
  - Real-time league switching
  - Responsive design for mobile and desktop
  - Smooth animations and transitions

### 🎨 Design

The website features:
- **Modern gradient background** with purple/blue tones
- **Color-coded league badges** matching team colors
- **Clean card-based layout** for match information
- **Glassmorphism effects** for statistics cards
- **Accessible color contrasts** and clear typography

### 📁 File Structure

```
Kody-/
├── index.html      # Main HTML structure
├── styles.css      # Complete styling and responsiveness
├── app.js          # Main application logic and interactivity
├── data.js         # Match data for all leagues
└── README.md       # This file
```

### 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/llbeamers4-hub/Kody-.git
   ```

2. Navigate to the directory:
   ```bash
   cd Kody-
   ```

3. Open `index.html` in your web browser:
   ```bash
   open index.html
   ```

Or use a local server:
```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

### 💻 Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Architecture**: Client-side rendering
- **Styling**: Custom CSS with responsive design
- **Data**: JavaScript objects for match information

### 📖 How to Use

1. **Browse Leagues**: Click on any league button at the top to view its matches
2. **View Predictions**: Each match card shows:
   - Home and away team names
   - Predicted winner or draw
   - Confidence percentage
   - Match date and time
3. **Check Accessibility**: 
   - 🔓 = Free prediction (accessible)
   - 🔒 = Locked prediction (premium)

### 🔧 JavaScript API

The application exposes a `SportsAI` object for programmatic access:

```javascript
// Get all available leagues
SportsAI.getAllLeagues();

// Get specific league data
SportsAI.getLeagueData('premier');

// Get specific match
SportsAI.getMatch('laliga', 0);

// Filter accessible matches only
SportsAI.filterByAccessibility(true);

// Search matches
SportsAI.searchMatches('Manchester');
```

### 📊 Data Structure

Each match object contains:
```javascript
{
  home: "Team Name",        // Home team
  away: "Team Name",        // Away team
  prediction: "home/away/draw", // Prediction
  confidence: 85,           // Confidence percentage (0-100)
  time: "2026-06-10 15:00", // Match time
  accessible: true          // Premium/Free indicator
}
```

### 🎯 Match Statistics

- **Total Matches**: 56
- **Accessible Predictions**: 4
- **Average Accuracy**: 78%

### 🌐 Responsive Design

- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (< 768px)

### 🎨 Color Scheme

| League | Color | Hex |
|--------|-------|-----|
| English Premier | Blue | #3b82f6 |
| La Liga | Orange/Red | #ff8c42 |
| Serie A | Green | #10b981 |
| Bundesliga | Dark Gray | #6b7280 |
| Ligue 1 | Blue | #3b82f6 |
| Eredivisie | Orange | #ff9500 |

### 📝 Future Enhancements

- [ ] Real API integration for live match data
- [ ] User authentication for premium features
- [ ] Prediction history and statistics
- [ ] Mobile app (React Native/Flutter)
- [ ] Historical accuracy tracking
- [ ] Betting odds integration
- [ ] Push notifications for match updates

### 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

### 📄 License

This project is open source and available under the MIT License.

### 👨‍💻 Author

Created by [llbeamers4-hub](https://github.com/llbeamers4-hub)

### 📞 Contact

For questions or feedback, please open an issue on the repository.

---

**Last Updated**: June 9, 2026  
**Version**: 1.0.0
