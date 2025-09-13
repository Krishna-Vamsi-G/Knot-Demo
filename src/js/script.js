// Merchant data with logos and sample transactions
const merchantData = {
    walmart: {
        name: 'Walmart',
        icon: 'fas fa-shopping-cart',
        color: '#0071dc',
        transactions: [
            {
                id: 1,
                title: 'Grocery Shopping',
                description: 'Fresh produce, dairy, and household items',
                amount: -127.45,
                date: '2025-01-15',
                category: 'groceries'
            },
            {
                id: 2,
                title: 'Electronics',
                description: 'Wireless headphones and phone case',
                amount: -89.99,
                date: '2025-01-12',
                category: 'electronics'
            },
            {
                id: 3,
                title: 'Clothing',
                description: 'Winter jackets and accessories',
                amount: -156.78,
                date: '2025-01-08',
                category: 'clothing'
            },
            {
                id: 4,
                title: 'Home & Garden',
                description: 'Cleaning supplies and tools',
                amount: -45.32,
                date: '2025-01-05',
                category: 'home'
            },
            {
                id: 5,
                title: 'Health & Beauty',
                description: 'Vitamins and personal care items',
                amount: -23.67,
                date: '2025-01-02',
                category: 'health'
            }
        ]
    },
    doordash: {
        name: 'DoorDash',
        icon: 'fas fa-utensils',
        color: '#ff3008',
        transactions: [
            {
                id: 1,
                title: 'Pizza Palace',
                description: 'Large pepperoni pizza and garlic bread',
                amount: -28.50,
                date: '2025-01-14',
                category: 'food'
            },
            {
                id: 2,
                title: 'Sushi Express',
                description: 'California rolls and miso soup',
                amount: -42.75,
                date: '2025-01-11',
                category: 'food'
            },
            {
                id: 3,
                title: 'Burger King',
                description: 'Whopper meal with fries and drink',
                amount: -15.99,
                date: '2025-01-09',
                category: 'food'
            },
            {
                id: 4,
                title: 'Starbucks Coffee',
                description: 'Caramel macchiato and pastry',
                amount: -12.45,
                date: '2025-01-07',
                category: 'food'
            },
            {
                id: 5,
                title: 'Thai Garden',
                description: 'Pad thai and spring rolls',
                amount: -35.20,
                date: '2025-01-04',
                category: 'food'
            }
        ]
    },
    spotify: {
        name: 'Spotify',
        icon: 'fab fa-spotify',
        color: '#1db954',
        transactions: [
            {
                id: 1,
                title: 'Premium Subscription',
                description: 'Spotify Premium - Monthly billing',
                amount: -9.99,
                date: '2025-01-15',
                category: 'subscription'
            },
            {
                id: 2,
                title: 'Podcast Premium',
                description: 'The Joe Rogan Experience - Premium episode',
                amount: -2.99,
                date: '2025-01-14',
                category: 'podcast'
            },
            {
                id: 3,
                title: 'Music Streaming',
                description: 'Listened to 47 songs this week',
                amount: -0.00,
                date: '2025-01-14',
                category: 'music'
            },
            {
                id: 4,
                title: 'Podcast Episode',
                description: 'Serial - Episode 3 (45m)',
                amount: -0.00,
                date: '2025-01-13',
                category: 'podcast'
            },
            {
                id: 5,
                title: 'Playlist Creation',
                description: 'Created "Workout Mix" - 23 songs',
                amount: -0.00,
                date: '2025-01-12',
                category: 'playlist'
            },
            {
                id: 6,
                title: 'Album Purchase',
                description: 'Taylor Swift - Midnights (Digital)',
                amount: -12.99,
                date: '2025-01-11',
                category: 'music'
            },
            {
                id: 7,
                title: 'Podcast Subscription',
                description: 'NPR News - Monthly premium',
                amount: -4.99,
                date: '2025-01-10',
                category: 'podcast'
            },
            {
                id: 8,
                title: 'Daily Mix',
                description: 'Daily Mix 1 - 2h 15m listening',
                amount: -0.00,
                date: '2025-01-09',
                category: 'music'
            },
            {
                id: 9,
                title: 'Discover Weekly',
                description: '30 new songs discovered',
                amount: -0.00,
                date: '2025-01-08',
                category: 'discovery'
            },
            {
                id: 10,
                title: 'Sleep Sounds',
                description: 'Rain Sounds - 8h 30m',
                amount: -0.00,
                date: '2025-01-07',
                category: 'ambient'
            },
            {
                id: 11,
                title: 'Podcast Donation',
                description: 'This American Life - Listener support',
                amount: -5.00,
                date: '2025-01-06',
                category: 'podcast'
            },
            {
                id: 12,
                title: 'Music Video',
                description: 'Premium music video access',
                amount: -1.99,
                date: '2025-01-05',
                category: 'music'
            }
        ]
    },
    cvs: {
        name: 'CVS',
        icon: 'fas fa-pills',
        color: '#cc0000',
        transactions: [
            {
                id: 1,
                title: 'Prescription',
                description: 'Blood pressure medication refill',
                amount: -15.99,
                date: '2025-01-13',
                category: 'pharmacy'
            },
            {
                id: 2,
                title: 'Over-the-Counter',
                description: 'Pain relievers and vitamins',
                amount: -24.50,
                date: '2025-01-10',
                category: 'pharmacy'
            },
            {
                id: 3,
                title: 'Beauty Products',
                description: 'Skincare and makeup items',
                amount: -67.89,
                date: '2025-01-06',
                category: 'beauty'
            },
            {
                id: 4,
                title: 'First Aid',
                description: 'Bandages and antiseptic',
                amount: -12.34,
                date: '2025-01-03',
                category: 'health'
            }
        ]
    },
    amazon: {
        name: 'Amazon',
        icon: 'fab fa-amazon',
        color: '#ff9900',
        transactions: [
            {
                id: 1,
                title: 'Prime Membership',
                description: 'Annual Prime subscription renewal',
                amount: -139.00,
                date: '2025-01-14',
                category: 'subscription'
            },
            {
                id: 2,
                title: 'Books',
                description: 'Programming and business books',
                amount: -45.67,
                date: '2025-01-12',
                category: 'books'
            },
            {
                id: 3,
                title: 'Electronics',
                description: 'USB cables and adapters',
                amount: -23.45,
                date: '2025-01-09',
                category: 'electronics'
            },
            {
                id: 4,
                title: 'Home & Kitchen',
                description: 'Coffee maker and kitchen gadgets',
                amount: -89.99,
                date: '2025-01-07',
                category: 'home'
            },
            {
                id: 5,
                title: 'Clothing',
                description: 'T-shirts and casual wear',
                amount: -34.50,
                date: '2025-01-05',
                category: 'clothing'
            },
            {
                id: 6,
                title: 'Garden Tools',
                description: 'Planting supplies and tools',
                amount: -56.78,
                date: '2025-01-02',
                category: 'garden'
            }
        ]
    },
    target: {
        name: 'Target',
        icon: 'fas fa-bullseye',
        color: '#cc0000',
        transactions: [
            {
                id: 1,
                title: 'Home Decor',
                description: 'Throw pillows and wall art',
                amount: -78.90,
                date: '2025-01-13',
                category: 'home'
            },
            {
                id: 2,
                title: 'Kids Clothing',
                description: 'School clothes and shoes',
                amount: -123.45,
                date: '2025-01-10',
                category: 'clothing'
            },
            {
                id: 3,
                title: 'Toys & Games',
                description: 'Educational toys and board games',
                amount: -67.89,
                date: '2025-01-08',
                category: 'toys'
            },
            {
                id: 4,
                title: 'Beauty',
                description: 'Makeup and skincare products',
                amount: -45.67,
                date: '2025-01-05',
                category: 'beauty'
            }
        ]
    },
    starbucks: {
        name: 'Starbucks',
        icon: 'fas fa-coffee',
        color: '#00704a',
        transactions: [
            {
                id: 1,
                title: 'Morning Coffee',
                description: 'Grande latte and croissant',
                amount: -8.45,
                date: '2025-01-15',
                category: 'food'
            },
            {
                id: 2,
                title: 'Afternoon Break',
                description: 'Iced coffee and cookie',
                amount: -6.75,
                date: '2025-01-14',
                category: 'food'
            },
            {
                id: 3,
                title: 'Coffee Meeting',
                description: 'Two lattes and pastries',
                amount: -18.90,
                date: '2025-01-12',
                category: 'food'
            },
            {
                id: 4,
                title: 'Gift Card',
                description: 'Starbucks gift card purchase',
                amount: -25.00,
                date: '2025-01-09',
                category: 'gift'
            },
            {
                id: 5,
                title: 'Weekly Coffee',
                description: 'Regular morning coffee',
                amount: -5.25,
                date: '2025-01-08',
                category: 'food'
            }
        ]
    }
};

// Navigation functions
function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = 'index.html';
    }
}

// Merchant selection
document.addEventListener('DOMContentLoaded', function() {
    const merchantCards = document.querySelectorAll('.merchant-card');
    
    merchantCards.forEach(card => {
        card.addEventListener('click', function() {
            const merchant = this.getAttribute('data-merchant');
            localStorage.setItem('selectedMerchant', merchant);
            window.location.href = 'login.html';
        });
    });

    // Handle login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleLogin();
        });
    }

    // Load merchant data on login page
    loadMerchantData();
    
    // Load transactions on transactions page
    loadTransactions();
});

function loadMerchantData() {
    const selectedMerchant = localStorage.getItem('selectedMerchant');
    if (selectedMerchant && merchantData[selectedMerchant]) {
        const merchant = merchantData[selectedMerchant];
        
        // Update merchant logo and name
        const merchantLogo = document.getElementById('merchantLogo');
        const merchantName = document.getElementById('merchantName');
        const merchantLogoSmall = document.getElementById('merchantLogoSmall');
        const merchantNameSmall = document.getElementById('merchantNameSmall');
        
        if (merchantLogo) {
            merchantLogo.innerHTML = `<i class="${merchant.icon}"></i>`;
            merchantLogo.style.background = `linear-gradient(135deg, ${merchant.color}, #764ba2)`;
        }
        
        if (merchantName) {
            merchantName.textContent = merchant.name;
        }
        
        if (merchantLogoSmall) {
            merchantLogoSmall.innerHTML = `<i class="${merchant.icon}"></i>`;
            merchantLogoSmall.style.background = `linear-gradient(135deg, ${merchant.color}, #764ba2)`;
        }
        
        if (merchantNameSmall) {
            merchantNameSmall.textContent = merchant.name;
        }
    }
}

function handleLogin() {
    const loginBtn = document.querySelector('.login-btn');
    const btnText = document.querySelector('.btn-text');
    const btnLoader = document.querySelector('.btn-loader');
    
    // Show loading state
    loginBtn.classList.add('loading');
    btnText.style.display = 'none';
    btnLoader.style.display = 'block';
    
    // Simulate login process
    setTimeout(() => {
        // Hide loading state
        loginBtn.classList.remove('loading');
        btnText.style.display = 'block';
        btnLoader.style.display = 'none';
        
        // Redirect to transactions page
        window.location.href = 'transactions.html';
    }, 1500);
}

function loadTransactions() {
    const selectedMerchant = localStorage.getItem('selectedMerchant');
    if (selectedMerchant && merchantData[selectedMerchant]) {
        const merchant = merchantData[selectedMerchant];
        const transactions = merchant.transactions;
        
        // Update summary
        updateSummary(transactions);
        
        // Render transactions
        renderTransactions(transactions);
    }
}

function updateSummary(transactions) {
    const selectedMerchant = localStorage.getItem('selectedMerchant');
    const totalAmount = transactions.reduce((sum, transaction) => sum + Math.abs(transaction.amount), 0);
    const transactionCount = transactions.length;
    const lastPurchase = transactions.length > 0 ? formatDate(transactions[0].date) : '-';
    
    // Special handling for Spotify
    if (selectedMerchant === 'spotify') {
        const totalSongs = transactions.filter(t => t.category === 'music' && t.amount === 0).length;
        const totalPodcasts = transactions.filter(t => t.category === 'podcast' && t.amount === 0).length;
        const totalSpent = transactions.filter(t => t.amount < 0).reduce((sum, t) => sum + Math.abs(t.amount), 0);
        
        // Update labels for Spotify
        document.querySelector('.summary-card:nth-child(1) h3').textContent = 'Total Spent';
        document.querySelector('.summary-card:nth-child(2) h3').textContent = 'Songs Listened';
        document.querySelector('.summary-card:nth-child(3) h3').textContent = 'Podcasts';
        
        document.getElementById('totalAmount').textContent = `$${totalSpent.toFixed(2)}`;
        document.getElementById('transactionCount').textContent = `${totalSongs} songs`;
        document.getElementById('lastPurchase').textContent = `${totalPodcasts} episodes`;
    } else {
        // Reset labels for other merchants
        document.querySelector('.summary-card:nth-child(1) h3').textContent = 'Total Spent';
        document.querySelector('.summary-card:nth-child(2) h3').textContent = 'Transactions';
        document.querySelector('.summary-card:nth-child(3) h3').textContent = 'Last Purchase';
        
        document.getElementById('totalAmount').textContent = `$${totalAmount.toFixed(2)}`;
        document.getElementById('transactionCount').textContent = transactionCount;
        document.getElementById('lastPurchase').textContent = lastPurchase;
    }
}

function renderTransactions(transactions) {
    const transactionsList = document.getElementById('transactionsList');
    const selectedMerchant = localStorage.getItem('selectedMerchant');
    
    if (transactions.length === 0) {
        transactionsList.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #718096;">
                <i class="fas fa-receipt" style="font-size: 48px; margin-bottom: 16px; opacity: 0.5;"></i>
                <p>No transactions found</p>
            </div>
        `;
        return;
    }
    
    transactionsList.innerHTML = transactions.map(transaction => {
        // Special handling for Spotify - show spending or listening metrics
        let amountDisplay = '';
        if (selectedMerchant === 'spotify') {
            if (transaction.amount < 0) {
                // Show actual spending
                amountDisplay = `-$${Math.abs(transaction.amount).toFixed(2)}`;
            } else {
                // Show listening activity
                if (transaction.category === 'music') {
                    amountDisplay = '🎵 Free';
                } else if (transaction.category === 'podcast') {
                    amountDisplay = '🎧 Free';
                } else if (transaction.category === 'playlist') {
                    amountDisplay = '📝 Free';
                } else if (transaction.category === 'discovery') {
                    amountDisplay = '🔍 Free';
                } else if (transaction.category === 'ambient') {
                    amountDisplay = '🌙 Free';
                } else {
                    amountDisplay = '🎵 Free';
                }
            }
        } else {
            amountDisplay = `${transaction.amount < 0 ? '-' : '+'}$${Math.abs(transaction.amount).toFixed(2)}`;
        }
        
        return `
            <div class="transaction-item">
                <div class="transaction-icon">
                    <i class="fas fa-${getCategoryIcon(transaction.category)}"></i>
                </div>
                <div class="transaction-details">
                    <div class="transaction-title">${transaction.title}</div>
                    <div class="transaction-description">${transaction.description}</div>
                    <div class="transaction-date">${formatDate(transaction.date)}</div>
                </div>
                <div class="transaction-amount ${selectedMerchant === 'spotify' ? 'positive' : (transaction.amount < 0 ? 'negative' : 'positive')}">
                    ${amountDisplay}
                </div>
            </div>
        `;
    }).join('');
}

function getCategoryIcon(category) {
    const icons = {
        groceries: 'shopping-cart',
        electronics: 'laptop',
        clothing: 'tshirt',
        home: 'home',
        health: 'heart',
        food: 'utensils',
        pharmacy: 'pills',
        beauty: 'spa',
        subscription: 'crown',
        books: 'book',
        garden: 'seedling',
        toys: 'gamepad',
        gift: 'gift',
        music: 'music',
        podcast: 'podcast',
        playlist: 'list',
        discovery: 'search',
        ambient: 'moon'
    };
    return icons[category] || 'receipt';
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function refreshTransactions() {
    const refreshBtn = document.querySelector('.refresh-btn');
    refreshBtn.style.transform = 'rotate(360deg)';
    
    setTimeout(() => {
        refreshBtn.style.transform = 'rotate(0deg)';
        loadTransactions();
    }, 1000);
}

function filterTransactions() {
    const timeFilter = document.getElementById('timeFilter').value;
    const selectedMerchant = localStorage.getItem('selectedMerchant');
    
    if (selectedMerchant && merchantData[selectedMerchant]) {
        let transactions = merchantData[selectedMerchant].transactions;
        
        if (timeFilter !== 'all') {
            const now = new Date();
            const filterDate = new Date();
            
            switch (timeFilter) {
                case 'week':
                    filterDate.setDate(now.getDate() - 7);
                    break;
                case 'month':
                    filterDate.setMonth(now.getMonth() - 1);
                    break;
            }
            
            transactions = transactions.filter(transaction => 
                new Date(transaction.date) >= filterDate
            );
        }
        
        updateSummary(transactions);
        renderTransactions(transactions);
    }
}

// Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add loading animation for page transitions
    window.addEventListener('beforeunload', function() {
        document.body.style.opacity = '0.8';
    });
});
