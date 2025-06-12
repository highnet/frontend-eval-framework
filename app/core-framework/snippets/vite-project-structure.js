export default `# Create new Vite React project
npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
npm install

# Basic SPA project structure
my-react-app/
├── public/
├── src/
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css
├── index.html               # Single HTML file
├── package.json
├── tsconfig.json
└── vite.config.ts

# Start development server
npm run dev`;
