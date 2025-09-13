# KnotAPI Demo

A professional, mobile-friendly web application that demonstrates KnotAPI's transaction aggregation capabilities. This demo showcases how users can connect to various merchants and view their transaction history in a clean, intuitive interface.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/knotapi/knotapi-demo.git
cd knotapi-demo

# Start the development server
npm start
# or
python3 -m http.server 3000

# Open in browser
open http://localhost:3000/public/index.html
```

## 📁 Project Structure

```
knotapi-demo/
├── public/                 # Static HTML files
│   ├── index.html         # Merchants selection page
│   ├── login.html         # Merchant login page
│   └── transactions.html  # Transaction history page
├── src/                   # Source files
│   ├── css/
│   │   └── styles.css     # All styling and responsive design
│   ├── js/
│   │   └── script.js      # JavaScript functionality and data
│   └── images/
│       ├── knot-logo.png  # KnotAPI logo (800×800)
│       └── knot-logo.svg  # SVG version
├── docs/                  # Documentation
│   └── README.md         # This file
├── package.json          # Node.js dependencies and scripts
└── .gitignore           # Git ignore rules
```

## ✨ Features

### 🏪 Merchant Selection
- Interactive grid of popular merchants (Walmart, DoorDash, CVS, Amazon, Target, Starbucks)
- Professional card-based design with hover effects
- Responsive layout that works on all devices

### 🔐 Merchant Login
- Clean, professional login interface
- Merchant-specific branding and logos
- Demo-friendly (accepts any credentials)
- Loading states and smooth transitions

### 📊 Transaction History
- Comprehensive transaction list with detailed information
- Real-time summary statistics (total spent, transaction count, last purchase)
- Filtering options (All Time, This Week, This Month)
- Scrollable list with smooth animations
- Category-based icons and color coding

## 🎨 Design Features

- **Mobile-First Responsive Design** - Optimized for all screen sizes
- **Modern UI/UX** - Clean, professional interface with smooth animations
- **KnotAPI Branding** - Official colors, typography, and logo
- **Smooth Transitions** - Hover effects and page transitions
- **Accessibility** - Proper contrast ratios and keyboard navigation

## 🛠 Technology Stack

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Flexbox/Grid, animations, and responsive design
- **Vanilla JavaScript** - Interactive functionality and data management
- **Font Awesome** - Professional icons
- **Google Fonts** - Inter font family for clean typography

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🚀 Deployment

### Local Development
```bash
npm start
# Server runs on http://localhost:3000
```

### Production
Simply upload the `public/` directory to any web server or CDN.

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to `public/` directory

## 🔧 Customization

### Adding New Merchants
Update the `merchantData` object in `src/js/script.js`:

```javascript
const merchantData = {
    newmerchant: {
        name: 'New Merchant',
        icon: 'fas fa-icon',
        color: '#000000',
        transactions: [...]
    }
};
```

### Modifying Styling
Edit `src/css/styles.css` to customize:
- Colors and themes
- Typography
- Layout and spacing
- Animations and transitions

### Adding Features
Extend functionality in `src/js/script.js`:
- New page interactions
- Data processing
- API integrations
- Additional filtering options

## 📊 Demo Data

Each merchant includes realistic sample transactions with:
- Transaction titles and descriptions
- Realistic amounts and dates
- Category-based icons
- Proper formatting and sorting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [KnotAPI Website](https://www.knotapi.com)
- [Documentation](https://docs.knotapi.com)
- [Support](https://support.knotapi.com)

## 📞 Support

For support, email support@knotapi.com or join our Slack channel.

---

**Note**: This is a demonstration application. In a real implementation, you would integrate with actual merchant APIs and implement proper authentication and security measures.