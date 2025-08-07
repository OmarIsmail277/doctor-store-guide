# Medical Guide Website

A clean and educational medical website that serves as a companion to DoctorStore.com, providing information about common medical conditions and devices.

## Features

- **Homepage**: Features a hero section with welcome message and two featured sections showing random diseases and devices
- **Diseases Page**: Complete list of 20 common medical conditions with descriptions
- **Devices Page**: Complete list of 20 medical devices with descriptions
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, medical-friendly design with soft colors
- **Bilingual Support**: Full English and Arabic translations with RTL layout support
- **Language Switcher**: Easy toggle between English and Arabic languages

## Design Style

- Soft, medical-friendly colors (light blue, white, gray)
- Minimalistic and modern design
- Card-based layout for easy scanning
- Focus on readability and user trust
- Educational rather than commercial approach

## Technology Stack

- React 19
- React Router for navigation
- Vite for build tooling
- CSS3 with modern features
- React Context for state management
- Localization with RTL support

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component
│   ├── DiseaseCard.jsx     # Disease card component
│   └── DeviceCard.jsx      # Device card component
├── pages/
│   ├── HomePage.jsx        # Homepage with featured content
│   ├── DiseasesPage.jsx    # All diseases listing
│   └── DevicesPage.jsx     # All devices listing
├── App.jsx                 # Main app with routing
└── index.css              # Global styles
```

## Data Sources

The website uses data from:
- `public/data/diseases.js` - 20 common medical conditions (English)
- `public/data/devices.js` - 20 medical devices (English)
- `public/data/diseases-ar.js` - 20 common medical conditions (Arabic)
- `public/data/devices-ar.js` - 20 medical devices (Arabic)

Each item includes:
- Name
- Description
- Image (with fallback to initials)

## Internationalization

The website supports:
- **English**: Default language with LTR layout
- **Arabic**: Full translation with RTL layout support
- **Language Persistence**: User's language choice is saved in localStorage
- **Automatic Layout**: RTL/LTR switching based on selected language

## Build for Production

```bash
npm run build
```

## License

This project is created as an educational companion website to DoctorStore.com.
