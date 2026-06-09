// Match data for all leagues
const leaguesData = {
    premier: {
        name: 'English Premier League',
        color: '#3b82f6',
        totalMatches: 10,
        accessibleMatches: 2,
        matches: [
            { home: 'Manchester City', away: 'Liverpool', prediction: 'home', confidence: 82, time: '2026-06-10 15:00', accessible: true },
            { home: 'Chelsea', away: 'Arsenal', prediction: 'away', confidence: 76, time: '2026-06-10 17:30', accessible: true },
            { home: 'Manchester United', away: 'Tottenham', prediction: 'draw', confidence: 71, time: '2026-06-11 12:30', accessible: false },
            { home: 'Newcastle', away: 'Brighton', prediction: 'home', confidence: 68, time: '2026-06-11 15:00', accessible: false },
            { home: 'Aston Villa', away: 'West Ham', prediction: 'home', confidence: 74, time: '2026-06-11 17:30', accessible: false },
            { home: 'Brentford', away: 'Fulham', prediction: 'away', confidence: 65, time: '2026-06-12 12:00', accessible: false },
            { home: 'Everton', away: 'Ipswich', prediction: 'draw', confidence: 58, time: '2026-06-12 15:00', accessible: false },
            { home: 'Leicester', away: 'Crystal Palace', prediction: 'home', confidence: 72, time: '2026-06-12 17:30', accessible: false },
            { home: 'Bournemouth', away: 'Nottingham Forest', prediction: 'away', confidence: 69, time: '2026-06-13 12:30', accessible: false },
            { home: 'Southampton', away: 'Wolves', prediction: 'draw', confidence: 61, time: '2026-06-13 15:00', accessible: false }
        ]
    },
    laliga: {
        name: 'La Liga',
        color: '#ff8c42',
        totalMatches: 10,
        accessibleMatches: 0,
        matches: [
            { home: 'Real Madrid', away: 'Barcelona', prediction: 'home', confidence: 79, time: '2026-06-10 20:00', accessible: false },
            { home: 'Atlético Madrid', away: 'Valencia', prediction: 'home', confidence: 75, time: '2026-06-11 18:30', accessible: false },
            { home: 'Sevilla', away: 'Betis', prediction: 'away', confidence: 62, time: '2026-06-11 20:30', accessible: false },
            { home: 'Real Sociedad', away: 'Bilbao', prediction: 'draw', confidence: 64, time: '2026-06-12 18:00', accessible: false },
            { home: 'Villarreal', away: 'Mallorca', prediction: 'home', confidence: 70, time: '2026-06-12 20:30', accessible: false },
            { home: 'Girona', away: 'Celta Vigo', prediction: 'away', confidence: 68, time: '2026-06-13 16:00', accessible: false },
            { home: 'Almería', away: 'Osasuna', prediction: 'draw', confidence: 56, time: '2026-06-13 18:30', accessible: false },
            { home: 'Las Palmas', away: 'Real Valladolid', prediction: 'home', confidence: 63, time: '2026-06-14 16:00', accessible: false },
            { home: 'Getafe', away: 'Rayo Vallecano', prediction: 'away', confidence: 66, time: '2026-06-14 18:30', accessible: false },
            { home: 'Leganés', away: 'Alavés', prediction: 'draw', confidence: 59, time: '2026-06-15 12:00', accessible: false }
        ]
    },
    'serie-a': {
        name: 'Serie A',
        color: '#10b981',
        totalMatches: 10,
        accessibleMatches: 0,
        matches: [
            { home: 'Juventus', away: 'Napoli', prediction: 'away', confidence: 77, time: '2026-06-10 18:00', accessible: false },
            { home: 'Inter Milan', away: 'AC Milan', prediction: 'home', confidence: 73, time: '2026-06-11 20:45', accessible: false },
            { home: 'Roma', away: 'Lazio', prediction: 'draw', confidence: 67, time: '2026-06-12 18:00', accessible: false },
            { home: 'Fiorentina', away: 'Atalanta', prediction: 'away', confidence: 71, time: '2026-06-12 20:45', accessible: false },
            { home: 'Bologna', away: 'Torino', prediction: 'home', confidence: 65, time: '2026-06-13 15:00', accessible: false },
            { home: 'Genoa', away: 'Empoli', prediction: 'draw', confidence: 60, time: '2026-06-13 18:00', accessible: false },
            { home: 'Venice', away: 'Monza', prediction: 'away', confidence: 63, time: '2026-06-14 15:00', accessible: false },
            { home: 'Como', away: 'Lecce', prediction: 'home', confidence: 64, time: '2026-06-14 18:00', accessible: false },
            { home: 'Verona', away: 'Sassuolo', prediction: 'draw', confidence: 55, time: '2026-06-15 12:30', accessible: false },
            { home: 'Frosinone', away: 'Salernitana', prediction: 'away', confidence: 62, time: '2026-06-15 15:00', accessible: false }
        ]
    },
    bundesliga: {
        name: 'Bundesliga',
        color: '#6b7280',
        totalMatches: 9,
        accessibleMatches: 0,
        matches: [
            { home: 'Bayern Munich', away: 'Borussia Dortmund', prediction: 'home', confidence: 80, time: '2026-06-10 19:30', accessible: false },
            { home: 'Bayer Leverkusen', away: 'RB Leipzig', prediction: 'away', confidence: 72, time: '2026-06-11 19:30', accessible: false },
            { home: 'Stuttgart', away: 'Hamburg', prediction: 'home', confidence: 69, time: '2026-06-12 15:30', accessible: false },
            { home: 'Schalke', away: 'Cologne', prediction: 'draw', confidence: 61, time: '2026-06-12 19:30', accessible: false },
            { home: 'Eintracht Frankfurt', away: 'Wolfsburg', prediction: 'away', confidence: 68, time: '2026-06-13 15:30', accessible: false },
            { home: 'Hertha Berlin', away: 'Mainz', prediction: 'draw', confidence: 57, time: '2026-06-13 19:30', accessible: false },
            { home: 'Augsburg', away: 'Freiburg', prediction: 'home', confidence: 66, time: '2026-06-14 15:30', accessible: false },
            { home: 'Hoffenheim', away: 'Union Berlin', prediction: 'away', confidence: 64, time: '2026-06-14 19:30', accessible: false },
            { home: 'Borussia Mönchengladbach', away: 'Bochum', prediction: 'home', confidence: 70, time: '2026-06-15 15:00', accessible: false }
        ]
    },
    ligue1: {
        name: 'Ligue 1',
        color: '#3b82f6',
        totalMatches: 9,
        accessibleMatches: 0,
        matches: [
            { home: 'Paris Saint-Germain', away: 'Olympique Marseille', prediction: 'home', confidence: 81, time: '2026-06-10 21:00', accessible: false },
            { home: 'Monaco', away: 'Lyon', prediction: 'away', confidence: 74, time: '2026-06-11 19:00', accessible: false },
            { home: 'Toulouse', away: 'Nice', prediction: 'draw', confidence: 66, time: '2026-06-12 19:00', accessible: false },
            { home: 'Lens', away: 'Rennes', prediction: 'home', confidence: 68, time: '2026-06-13 19:00', accessible: false },
            { home: 'Nantes', away: 'Lille', prediction: 'away', confidence: 71, time: '2026-06-13 21:00', accessible: false },
            { home: 'Strasbourg', away: 'Montpellier', prediction: 'draw', confidence: 58, time: '2026-06-14 19:00', accessible: false },
            { home: 'Auxerre', away: 'Brest', prediction: 'away', confidence: 65, time: '2026-06-14 21:00', accessible: false },
            { home: 'Ajaccio', away: 'Lorient', prediction: 'home', confidence: 62, time: '2026-06-15 17:00', accessible: false },
            { home: 'Angers', away: 'Reims', prediction: 'draw', confidence: 60, time: '2026-06-15 19:00', accessible: false }
        ]
    },
    eredivisie: {
        name: 'Eredivisie',
        color: '#ff9500',
        totalMatches: 9,
        accessibleMatches: 2,
        matches: [
            { home: 'Ajax', away: 'PSV Eindhoven', prediction: 'away', confidence: 76, time: '2026-06-10 19:45', accessible: true },
            { home: 'Feyenoord', away: 'AZ Alkmaar', prediction: 'home', confidence: 72, time: '2026-06-11 19:45', accessible: true },
            { home: 'Utrecht', away: 'Vitesse', prediction: 'draw', confidence: 63, time: '2026-06-12 19:45', accessible: false },
            { home: 'Groningen', away: 'Twente', prediction: 'away', confidence: 69, time: '2026-06-13 19:45', accessible: false },
            { home: 'Go Ahead Eagles', away: 'Heerenveen', prediction: 'home', confidence: 65, time: '2026-06-14 17:15', accessible: false },
            { home: 'Excelsior', away: 'Sparta Rotterdam', prediction: 'draw', confidence: 56, time: '2026-06-14 19:45', accessible: false },
            { home: 'NEC Nijmegen', away: 'Volendam', prediction: 'away', confidence: 67, time: '2026-06-15 12:15', accessible: false },
            { home: 'Waalwijk', away: 'Zwolle', prediction: 'home', confidence: 64, time: '2026-06-15 17:15', accessible: false },
            { home: 'Cambuur', away: 'SC Heerenveen', prediction: 'draw', confidence: 59, time: '2026-06-15 19:45', accessible: false }
        ]
    }
};

// Export data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = leaguesData;
}
