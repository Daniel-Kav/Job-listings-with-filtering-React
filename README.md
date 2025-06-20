# Job Listings with Filtering

A responsive web application that displays job listings with filtering capabilities. Built with React, TypeScript, and Tailwind CSS.

![Screenshot of Job Listings App](https://via.placeholder.com/800x600/5CA5A5/FFFFFF?text=Job+Listings+App)

## Features

- View job listings with company details, position, and requirements
- Filter jobs by multiple criteria including role, level, languages, and tools
- Responsive design that works on mobile, tablet, and desktop
- Clean and modern UI with smooth animations
- Built with TypeScript for type safety
- Styled with Tailwind CSS for rapid UI development

## Technologies Used

- React 19
- TypeScript
- Tailwind CSS
- Vite (build tool)
- React Hooks for state management
- Mobile-first responsive design

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or pnpm (recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/job-listings-with-filtering-react.git
   cd job-listings-with-filtering-react
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

- Browse through the job listings
- Click on any filter button to filter jobs by that criteria
- Multiple filters can be applied simultaneously
- Click the "Clear" button to remove all filters
- Click the "×" button next to a filter to remove that specific filter

## Project Structure

```
src/
├── assets/            # Static assets like images
├── components/         # Reusable React components
│   ├── Filter.tsx     # Filter bar component
│   └── JobCard.tsx    # Job listing card component
├── hooks/              # Custom React hooks
│   └── UseJobList.tsx  # Job list and filtering logic
├── types/              # TypeScript type definitions
│   └── job.type.ts     # Job type definitions and data conversion
├── data/               # Application data
│   └── data.json       # Job listings data
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm lint` - Run ESLint for code quality checks
- `pnpm preview` - Preview the production build locally

## Customization

### Adding New Job Listings

Edit the `src/data/data.json` file to add or modify job listings. The application will automatically pick up the changes when you save the file.

### Styling

This project uses Tailwind CSS for styling. You can customize the design by modifying the Tailwind configuration in `tailwind.config.js`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Frontend Mentor](https://www.frontendmentor.io/) for the design challenge
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
