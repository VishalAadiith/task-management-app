# Task Management & E-commerce Product Listing App

A collection of React.js applications demonstrating modern web development practices, featuring a comprehensive task management system and a responsive e-commerce product listing interface.

## 📋 Table of Contents
- [Overview](#overview)
- [Projects](#projects)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Responsive Design](#responsive-design)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This repository contains two distinct React.js applications that showcase different aspects of modern frontend development:

1. **Task Management App** - A productivity-focused application for managing daily tasks
2. **E-commerce Product Listing** - A clean interface for browsing products with real API integration

Both applications demonstrate responsive design principles, component-based architecture, and modern React patterns.

## 🚀 Projects

### 📝 Task Management App

A comprehensive task management solution designed to boost productivity and help users stay organized.

**Key Capabilities:**
- Create, edit, and delete tasks with detailed information
- Set due dates and priority levels
- Track completion status and progress
- Advanced filtering and search functionality
- Responsive design for all devices

### 🛒 E-commerce Product Listing

A modern product catalog interface that integrates with external APIs to display product information in an attractive, user-friendly format.

**Key Capabilities:**
- Real-time product data fetching from Fake Store API
- Grid-based responsive layout
- Interactive hover effects and animations
- Detailed product information display
- Mobile-optimized browsing experience

## ✨ Features

### Task Management Features
- **Task Creation**: Add new tasks with title, description, due date, and priority
- **Status Management**: Mark tasks as completed, pending, or in-progress
- **Task Editing**: Modify existing tasks with inline editing capabilities
- **Advanced Filtering**: Filter by status (completed/pending), priority level, or date range
- **Smart Search**: Search tasks by keywords in title or description
- **Responsive UI**: Seamless experience across desktop, tablet, and mobile devices
- **Data Persistence**: Local storage integration for task data retention
- **Drag & Drop**: Reorder tasks with intuitive drag-and-drop functionality

### E-commerce Features
- **API Integration**: Real-time data fetching from Fake Store API
- **Product Grid**: Clean, organized grid layout for product display
- **Product Details**: Comprehensive product information including:
  - High-quality product images
  - Pricing information
  - Detailed descriptions
  - Product ratings and reviews
- **Responsive Design**: Optimized layouts for all screen sizes
- **Modern UI**: Hover effects, smooth transitions, and contemporary styling
- **Performance Optimized**: Efficient API calls and image loading

## 🛠️ Tech Stack

### Frontend Technologies
- **React.js 18+** - Modern React with hooks and functional components
- **JavaScript ES6+** - Modern JavaScript features and syntax
- **HTML5** - Semantic markup and accessibility
- **CSS3** - Flexbox, Grid, animations, and responsive design
- **React Hooks** - useState, useEffect, useContext, and custom hooks

### Development Tools
- **Create React App** - Development environment and build tools
- **npm/yarn** - Package management
- **ESLint** - Code linting and formatting
- **React DevTools** - Debugging and profiling

### APIs & Services
- **Fake Store API** - Product data source for e-commerce features
- **Local Storage API** - Client-side data persistence
- **Fetch API** - HTTP requests and response handling

## 📦 Installation

### Prerequisites
- Node.js 16.0 or higher
- npm or yarn package manager
- Modern web browser

### Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/VishalAadiith/task-management-app.git
cd task-management-app
```

2. **Install dependencies**
```bash
# For Task Management App
cd task-management-app
npm install

# For E-commerce Product Listing
cd ../e-commerce-product-listing  
npm install
```

3. **Environment Setup** (if needed)
```bash
# Create .env file in each project directory
touch .env

# Add any necessary environment variables
REACT_APP_API_URL=https://fakestoreapi.com
```

## 🏃‍♂️ Usage

### Running Task Management App

```bash
cd task-management-app
npm start
```
The application will be available at `http://localhost:3000`

### Running E-commerce Product Listing

```bash
cd e-commerce-product-listing
npm start
```
The application will be available at `http://localhost:3000`

### Building for Production

```bash
# In either project directory
npm run build
```

This creates optimized production builds in the `build/` directory.

## 📁 Project Structure

```
task-management-app/
├── .vscode/                     # VS Code configuration
├── task-management-app/         # Task management application
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── TaskList.js
│   │   │   ├── TaskItem.js
│   │   │   ├── TaskForm.js
│   │   │   ├── FilterBar.js
│   │   │   └── SearchBox.js
│   │   ├── hooks/               # Custom React hooks
│   │   │   ├── useTasks.js
│   │   │   └── useLocalStorage.js
│   │   ├── utils/               # Utility functions
│   │   │   ├── dateUtils.js
│   │   │   └── taskUtils.js
│   │   ├── styles/              # CSS modules/styled components
│   │   │   ├── App.css
│   │   │   ├── TaskList.css
│   │   │   └── responsive.css
│   │   ├── App.js               # Main application component
│   │   └── index.js             # Application entry point
│   ├── package.json
│   └── README.md
├── e-commerce-product-listing/   # E-commerce application
│   ├── public/
│   ├── src/
│   │   ├── components/          # Product components
│   │   │   ├── ProductGrid.js
│   │   │   ├── ProductCard.js
│   │   │   ├── ProductModal.js
│   │   │   └── LoadingSpinner.js
│   │   ├── services/            # API services
│   │   │   └── productService.js
│   │   ├── hooks/               # Custom hooks for data fetching
│   │   │   └── useProducts.js
│   │   ├── styles/
│   │   │   ├── ProductGrid.css
│   │   │   ├── ProductCard.css
│   │   │   └── responsive.css
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
└── README.md                    # This file
```

## 🔌 API Integration

### Fake Store API Integration

The e-commerce component integrates with the Fake Store API to fetch real product data:

```javascript
// services/productService.js
const API_BASE_URL = 'https://fakestoreapi.com';

export const productService = {
  // Fetch all products
  getAllProducts: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/products`);
      if (!response.ok) throw new Error('Failed to fetch products');
      return await response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  },

  // Fetch single product by ID
  getProductById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`);
      if (!response.ok) throw new Error('Product not found');
      return await response.json();
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  },

  // Fetch products by category
  getProductsByCategory: async (category) => {
    try {
      const response = await fetch(`${API_BASE_URL}/products/category/${category}`);
      if (!response.ok) throw new Error('Category not found');
      return await response.json();
    } catch (error) {
      console.error('Error fetching category products:', error);
      return [];
    }
  }
};
```

### Custom Hooks for Data Management

```javascript
// hooks/useProducts.js
import { useState, useEffect } from 'react';
import { productService } from '../services/productService';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await productService.getAllProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
```

## 📱 Responsive Design

Both applications implement comprehensive responsive design:

### Breakpoint Strategy
```css
/* Mobile First Approach */
.container {
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
}

/* Large Desktop */
@media (min-width: 1440px) {
  .product-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### Flexible Grid Layouts
- **CSS Grid** for product listings with auto-fit columns
- **Flexbox** for task items and form layouts
- **Responsive images** with proper aspect ratios
- **Touch-friendly** interaction areas for mobile devices

## 🔧 Development Features

### Code Quality
- **ESLint** configuration for consistent code style
- **Prettier** integration for automatic formatting
- **PropTypes** for component prop validation
- **Error boundaries** for graceful error handling

### Performance Optimizations
- **React.memo** for component memoization
- **useCallback** and **useMemo** for expensive operations
- **Lazy loading** for images and components
- **Code splitting** for optimal bundle sizes

### Accessibility
- **ARIA labels** for screen reader compatibility
- **Keyboard navigation** support
- **High contrast** color schemes
- **Semantic HTML** structure

## 🧪 Testing

### Available Scripts
```bash
# Run development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject from Create React App (use with caution)
npm run eject
```

### Testing Strategy
- **Unit tests** for individual components
- **Integration tests** for API interactions
- **Accessibility testing** with automated tools
- **Cross-browser testing** for compatibility

## 🤝 Contributing

We welcome contributions to improve both applications!

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests for new functionality
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Contribution Guidelines
- Follow existing code style and patterns
- Add proper documentation for new features
- Include tests for bug fixes and new functionality
- Update README if adding new dependencies or features

### Areas for Contribution
- **UI/UX Improvements**: Enhanced styling and user experience
- **New Features**: Additional task management capabilities
- **Performance**: Optimization and code splitting improvements
- **Accessibility**: Enhanced a11y features
- **Testing**: Increased test coverage
- **Documentation**: Tutorials and code examples

## 🚀 Future Enhancements

### Task Management App
- [ ] **Backend Integration**: User authentication and cloud sync
- [ ] **Collaboration**: Team task sharing and assignment
- [ ] **Analytics**: Productivity tracking and insights
- [ ] **Mobile App**: React Native companion app
- [ ] **Notifications**: Due date reminders and alerts
- [ ] **Themes**: Dark mode and customizable themes

### E-commerce App
- [ ] **Shopping Cart**: Add to cart functionality
- [ ] **User Accounts**: Registration and login system
- [ ] **Payment Integration**: Stripe or PayPal integration
- [ ] **Product Reviews**: User review and rating system
- [ ] **Advanced Filtering**: Price range, brand filters
- [ ] **Wishlist**: Save favorite products

### Technical Improvements
- [ ] **TypeScript**: Migration to TypeScript for better type safety
- [ ] **GraphQL**: Replace REST API with GraphQL
- [ ] **PWA**: Progressive Web App features
- [ ] **State Management**: Redux or Zustand integration
- [ ] **Microservices**: Backend service architecture
- [ ] **CI/CD**: Automated testing and deployment pipelines

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Vishal Aadiith

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

## 📞 Contact

**Vishal Aadiith G**
- GitHub: [@VishalAadiith](https://github.com/VishalAadiith)
- Email: [gvishal20548@gmail.com](mailto:gvishal20548@gmail.com)
- LinkedIn: [Vishal Aadiith](https://linkedin.com/in/vishal-aadiith)

## 🙏 Acknowledgments

- **React.js Team** for the excellent framework
- **Fake Store API** for providing free product data
- **Create React App** for streamlined development setup
- **Open Source Community** for inspiration and resources

---

**Built with React.js and modern web technologies**

*If you find this project helpful, please consider giving it a star!*
