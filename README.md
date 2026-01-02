# VBUV Cloud

A modern educational platform built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- Course browsing and filtering
- Video lessons with transcripts and notes
- Responsive design with modern UI components
- Built with shadcn/ui components

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI
- **Routing**: React Router DOM
- **State Management**: TanStack Query

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/venkateshkallu/vbuv-cloud.git
cd vbuv-cloud
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect the build settings from `vercel.json`
4. Your app will be deployed automatically

### Manual Deployment

```bash
# Build the project
npm run build

# Preview the build locally
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── courses/        # Course-related components
│   ├── lesson/         # Lesson-related components
│   └── ui/             # shadcn/ui components
├── data/               # Static data and mock data
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── pages/              # Page components
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
