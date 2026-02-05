# Todo List Application

A modern, fully-featured todo list application built with React, TypeScript, and Vite. This project showcases best practices for building performant, scalable frontend applications with a focus on code quality and user experience.

## 🚀 Features

- **Create, Read, Update, Delete (CRUD)** - Full todo management functionality
- **Real-time State Management** - Powered by TanStack Query for efficient data fetching and caching
- **Responsive Design** - Mobile-first UI built with Tailwind CSS
- **Type-Safe** - Full TypeScript support for better developer experience
- **Modern Tooling** - Vite for lightning-fast development and optimized builds
- **Component Library** - Custom UI components built with Radix UI and shadcn/ui
- **Code Quality** - ESLint configuration for consistent code standards

## 🛠 Tech Stack

| Technology         | Purpose                                           |
| ------------------ | ------------------------------------------------- |
| **React 19**       | Modern UI library with latest features            |
| **TypeScript**     | Type-safe JavaScript for better code quality      |
| **Vite**           | Next-generation build tool for fast development   |
| **Tailwind CSS**   | Utility-first CSS framework for responsive design |
| **Shadcn/UI**      | High-quality, accessible UI components            |
| **TanStack Query** | Powerful data synchronization for React           |
| **Lucide React**   | Beautiful icon library                            |

## 📋 Project Structure

```
src/
├── api/                 # API integration and requests
│   └── todo.api.ts     # Todo API endpoints
├── components/         # Reusable React components
│   ├── todo/           # Todo-specific components
│   │   ├── TodoContainer.tsx
│   │   ├── TodoForm.tsx
│   │   ├── TodoItem.tsx
│   │   └── TodoList.tsx
│   └── ui/             # UI component library
│       ├── button.tsx
│       ├── card.tsx
│       ├── checkbox.tsx
│       ├── input.tsx
│       ├── skeleton.tsx
│       └── textarea.tsx
├── hooks/              # Custom React hooks
│   └── useTodo.ts      # Todo management hook with TanStack Query
├── pages/              # Page components
│   └── Home.tsx        # Main home page
├── types/              # TypeScript type definitions
│   └── todo.ts         # Todo type definitions
├── lib/                # Utility functions and helpers
│   └── utils.ts        # Common utilities
├── App.tsx             # Root application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone or navigate to the project directory**

   ```bash
   cd todo-list
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application running.

## 💡 Key Features Explained

### Todo Management

- **Create**: Add new todos with a descriptive title and optional description
- **Update**: Modify existing todos and mark them as complete
- **Delete**: Remove todos from the list
- **Read**: Fetch and display all todos with smart caching

### Data Fetching with TanStack Query

The `useTodo` hook leverages TanStack Query to:

- Cache todo data efficiently
- Automatically refresh data when mutations occur
- Handle loading and error states
- Provide a clean API for components

### Component Architecture

- **TodoContainer**: Main container managing the todo application
- **TodoForm**: Form for creating and editing todos
- **TodoList**: Displays all todos in a list
- **TodoItem**: Individual todo item with actions
- **UI Components**: Reusable, accessible components from Radix UI

## 🎨 Styling

This project uses **Tailwind CSS** for styling with a utility-first approach. The configuration includes:

- Custom color schemes
- Responsive breakpoints
- Animation utilities
- Dark mode support (ready to implement)

## 📚 Best Practices Implemented

✅ Type-safe components with TypeScript  
✅ Custom hooks for logic reusability  
✅ Proper separation of concerns  
✅ Accessible UI components (Radix UI)  
✅ Efficient data fetching with caching  
✅ Responsive design patterns  
✅ ESLint configuration for code consistency  
✅ Modular component structure

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TanStack Query](https://tanstack.com/query/latest)
