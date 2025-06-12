# Portfolio Dashboard - React & Redux

This is a responsive portfolio dashboard built as part of the OneVarsity internship assignment. The application is created using modern web technologies including React, Redux Toolkit for state management, and Tailwind CSS for styling. It features a collapsible sidebar, a theme toggle for light/dark mode, and mock content sections for a complete user interface.

## Screenshot

![alt text](/public/image.png)
![alt text](/public/image-1.png)


---

## Features

-   **Responsive Design**: Fully responsive layout that works on all screen sizes, from mobile to desktop.
-   **Collapsible Sidebar**: A functional sidebar that can be expanded or collapsed, with its state managed globally by Redux.
-   **Theme Toggling**: Switch between a light and a dark theme. The theme preference is managed by Redux and applied globally.
-   **Reusable Components**: Built with a component-driven architecture, featuring reusable `Button` and `Card` components with multiple variants.
-   **Content Sections**: Includes mock content for an Overview, Projects, and Contact section.
-   **Smooth Scrolling**: Clicking on sidebar navigation links smoothly scrolls the user to the corresponding content section.
-   **Modern Tooling**: Set up with Vite for a fast and efficient development experience.

---

## Tech Stack

-   **Framework**: [React.js](https://reactjs.org/) (v18+)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Language**: JavaScript + JSX

---

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Make sure you have the following installed:
-   [Node.js](https://nodejs.org/en/) (v16 or later recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/GuptaRav1/OneVarsity_Assignment1_Portfolio_Dashboard.git
    ```

2.  **Install the dependencies:**
    ```bash
    npm install
    ```
    or if you use yarn:
    ```bash
    yarn install
    ```

### Running the Application

Once the installation is complete, you can run the development server:

```bash
npm run dev
```

This will start the Vite development server. Open your browser and navigate to http://localhost:5173 (or the port shown in your terminal) to see the application running.

## Redux State Management
Redux Toolkit is used to manage the application's global state in a simple and predictable way.

- themeSlice.js: Manages the isDarkMode boolean state. The toggleTheme action flips this value, which is then used in the top-level App.jsx component to apply the 'dark' class to the root element.

- sidebarSlice.js: Manages the sidebar's visibility.

---

## License
This project is licensed under the MIT License.
