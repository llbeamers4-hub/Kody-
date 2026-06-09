// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    renderAllMatches();
    setupEventListeners();
    updateStats();
}

// Render matches for all leagues
function renderAllMatches() {
    Object.keys(leaguesData).forEach(leagueKey => {
        const leagueData = leaguesData[leagueKey];
        const matchesContainer = document.getElementById(`${leagueKey}-matches`);
        
        if (matchesContainer) {
            matchesContainer.innerHTML = leagueData.matches.map(match => 
                createMatchCard(match)
            ).join('');
        }
    });
}

// Create individual match card HTML
function createMatchCard(match) {
    const predictionType = match.prediction;
    const predictionText = getPredictionText(predictionType);
    const iconClass = match.accessible ? 'unlock-icon' : 'lock-icon';
    const icon = match.accessible ? '🔓' : '🔒';
    const lockedClass = match.accessible ? '' : 'locked';
    
    return `
        <div class="match-card ${lockedClass}">
            <div class="match-teams">
                <div class="teams">
                    <div class="team">${match.home}</div>
                    <div class="vs">vs</div>
                    <div class="team">${match.away}</div>
                </div>
                <div class="time-info">${formatTime(match.time)}</div>
            </div>
            <div class="match-prediction">
                <div class="prediction-badge ${predictionType}">
                    ${predictionText}
                </div>
                <div class="confidence">
                    Confidence: ${match.confidence}%
                </div>
            </div>
            <div class="${iconClass}">${icon}</div>
        </div>
    `;
}

// Get prediction text based on type
function getPredictionText(type) {
    const predictions = {
        home: '🏠 Home Win',
        away: '✈️ Away Win',
        draw: '🤝 Draw'
    };
    return predictions[type] || type;
}

// Format time string
function formatTime(timeString) {
    const date = new Date(timeString);
    const options = { 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
    };
    return date.toLocaleDateString('en-US', options);
}

// Setup event listeners for league buttons
function setupEventListeners() {
    const buttons = document.querySelectorAll('.league-btn');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            e.target.classList.add('active');
            
            // Hide all league content
            document.querySelectorAll('.league-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Show selected league content
            const leagueId = e.target.getAttribute('data-league');
            const leagueContent = document.getElementById(leagueId);
            if (leagueContent) {
                leagueContent.classList.add('active');
            }
        });
    });
}

// Update statistics
function updateStats() {
    let totalMatches = 0;
    let accessibleMatches = 0;
    
    Object.keys(leaguesData).forEach(leagueKey => {
        const leagueData = leaguesData[leagueKey];
        totalMatches += leagueData.totalMatches;
        accessibleMatches += leagueData.accessibleMatches;
    });
    
    // Calculate overall accuracy (average confidence across all matches)
    let totalConfidence = 0;
    let matchCount = 0;
    
    Object.keys(leaguesData).forEach(leagueKey => {
        const leagueData = leaguesData[leagueKey];
        leagueData.matches.forEach(match => {
            totalConfidence += match.confidence;
            matchCount++;
        });
    });
    
    const accuracyRate = Math.round(totalConfidence / matchCount);
    
    document.getElementById('total-matches').textContent = totalMatches;
    document.getElementById('accessible-count').textContent = accessibleMatches;
    document.getElementById('accuracy-rate').textContent = accuracyRate + '%';
}

// Filter matches by accessibility
function filterByAccessibility(accessible = true) {
    const allCards = document.querySelectorAll('.match-card');
    allCards.forEach(card => {
        if (accessible) {
            card.style.display = card.classList.contains('locked') ? 'none' : 'flex';
        } else {
            card.style.display = 'flex';
        }
    });
}

// Search matches
function searchMatches(query) {
    const allCards = document.querySelectorAll('.match-card');
    const lowerQuery = query.toLowerCase();
    
    allCards.forEach(card => {
        const teamText = card.querySelector('.teams').textContent.toLowerCase();
        card.style.display = teamText.includes(lowerQuery) ? 'flex' : 'none';
    });
}

// Export API for external use
window.SportsAI = {
    filterByAccessibility,
    searchMatches,
    getLeagueData: (leagueKey) => leaguesData[leagueKey],
    getAllLeagues: () => Object.keys(leaguesData),
    getMatch: (leagueKey, index) => leaguesData[leagueKey]?.matches[index]
};
