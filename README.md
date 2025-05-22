# GoldenM Frontend

A modern, responsive web application built with React for GoldenM, featuring a multi-language support system and a sophisticated navigation interface.

## Features

- 🌐 Multi-language support (English and Portuguese)
- 🎨 Modern and responsive design
- 📱 Mobile-friendly navigation
- 🔍 Advanced dropdown menus
- 🏢 Comprehensive service categories
- 📄 Dynamic content management
- 🎯 SEO-friendly structure

## Tech Stack

- React 19.1.0
- React Router DOM 7.5.3
- React Icons 5.5.0
- Bootstrap 5.3.3
- React Bootstrap 2.10.9
- Framer Motion 12.6.3
- Testing Libraries (Jest, React Testing Library)

## Project Structure

```
src/
├── components/         # Reusable UI components
├── contexts/          # React context providers
├── images/           # Static images and assets
├── pages/            # Page components
├── translations/     # Language translation files
├── App.js           # Main application component
└── index.js         # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd front-end
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build files will be created in the `build/` directory.

## Key Features Implementation

### Multi-language Support
The application implements a language context system that allows seamless switching between English and Portuguese. Language files are stored in the `translations/` directory.

### Navigation System
The navigation system includes:
- Responsive mobile menu
- Dropdown menus for Services and Who We Are sections
- Dynamic service categories
- Smooth transitions and animations

### Service Categories
The application features three main service categories:
- Buildings
- Civil
- Industrial

Each category has its own set of services and descriptions, managed through the translation system.

## Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

### Code Style

The project follows modern React best practices and uses functional components with hooks. CSS modules are used for styling to ensure component isolation.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is proprietary and confidential. All rights reserved.

## Support

For support, please contact the development team or raise an issue in the repository.
