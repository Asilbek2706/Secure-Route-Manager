# 🔐 Secure Route Manager

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.13.0-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![License](https://img.shields.io/badge/License-GPL--3.0-blue?style=for-the-badge)

**A modern React application with role-based authentication and protected routes**

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack) • [Contributing](#-contributing)

</div>

---

## 📋 Overview

**Secure Route Manager** is a modern, secure web application built with React and TypeScript that demonstrates best practices for implementing role-based access control (RBAC) and protected routes. It provides a clean, maintainable architecture for managing user authentication and authorization in React applications.

## ✨ Features

- 🔒 **Role-Based Access Control (RBAC)** - Granular permissions for admin and user roles
- 🛡️ **Protected Routes** - Secure route protection with automatic redirects
- 🔑 **Authentication System** - Complete login/logout functionality with persistent sessions
- 📱 **Responsive Design** - Mobile-friendly interface
- ⚡ **Fast Development** - Lightning-fast HMR with Vite
- 🎨 **Modern UI** - Clean and intuitive user interface
- 💾 **Persistent Auth** - Session persistence using localStorage
- 🔄 **Context API** - State management with React Context
- 🚀 **TypeScript** - Full type safety and better developer experience

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router DOM 7.13.0
- **State Management**: React Context API
- **Code Quality**: ESLint 9.39.1
- **Styling**: CSS3

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Asilbek2706/Secure-Route-Manager.git
   cd Secure-Route-Manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🚀 Usage

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint for code quality checks |
| `npm run preview` | Preview production build locally |

### User Roles

The application supports two user roles:

- **Admin**: Full access to all routes including the admin panel
- **User**: Access to profile and home pages only

### Routes

| Route | Access Level | Description |
|-------|-------------|-------------|
| `/` | Public | Home page |
| `/login` | Public | Login page |
| `/profile` | Admin, User | User profile page |
| `/admin` | Admin only | Admin dashboard |

## 📁 Project Structure

```
Secure-Route-Manager/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Admin.tsx       # Admin dashboard component
│   │   ├── Navbar.tsx      # Navigation bar
│   │   └── ProtectedRoute.tsx  # Route protection HOC
│   ├── contexts/           # React Context providers
│   │   └── auth/           # Authentication context
│   │       ├── AuthContext.ts    # Auth context definition
│   │       ├── AuthProvider.tsx  # Auth context provider
│   │       └── useAuth.ts        # Custom auth hook
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Home page
│   │   ├── Login.tsx       # Login page
│   │   └── Profile.tsx     # Profile page
│   ├── App.tsx             # Main app component
│   ├── App.css             # App styles
│   ├── main.tsx            # App entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── eslint.config.js       # ESLint configuration
```

## 🔐 Authentication Flow

1. **User Login**: User enters credentials on the login page
2. **Role Assignment**: System assigns either "admin" or "user" role
3. **Session Persistence**: User data and role stored in localStorage
4. **Route Protection**: ProtectedRoute component validates access
5. **Automatic Redirect**: Unauthorized users redirected to login page

## 🎯 Key Components

### ProtectedRoute

A higher-order component that protects routes based on user authentication and role:

```typescript
<ProtectedRoute isAllowed={["admin", "user"]}>
  <Profile />
</ProtectedRoute>
```

### AuthProvider

Context provider that manages authentication state throughout the application:
- `user`: Current user object
- `role`: User role ("admin" or "user")
- `login()`: Login function
- `logout()`: Logout function

### useAuth Hook

Custom hook for accessing authentication context:

```typescript
const { user, role, login, logout } = useAuth();
```

## 🌟 Features in Detail

### Role-Based Access Control

The application implements a flexible RBAC system where each protected route can specify which roles are allowed to access it. If a user doesn't have the required role, they see an access denied message.

### Protected Routes

Routes are protected using the `ProtectedRoute` component which:
- Checks if the user is authenticated
- Validates user role against allowed roles
- Redirects to login if not authenticated
- Shows access denied message if unauthorized

### Persistent Sessions

User sessions persist across browser refreshes using localStorage, providing a seamless user experience.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Code Style

- Follow TypeScript best practices
- Use ESLint for code quality
- Write clean, readable code
- Add comments for complex logic

## 📄 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Asilbek**
- GitHub: [@Asilbek2706](https://github.com/Asilbek2706)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing-fast build tool
- React Router team for the routing solution
- All contributors who help improve this project

---

<div align="center">

**If you find this project helpful, please consider giving it a ⭐️**

Made with ❤️ by [Asilbek2706](https://github.com/Asilbek2706)

</div>
