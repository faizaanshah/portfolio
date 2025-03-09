# Faizan's Portfolio 🚀

A sleek and modern personal portfolio for **Faizan**, built with **Vite** and **Tailwind CSS** to ensure fast performance and a responsive design.

## 🎨 Figma Design

Check out the Figma design for this portfolio:  
👉 **[View Design in Figma](https://www.figma.com/design/TnpEHOr1B5Jghr9c1PXL7c/Untitled?node-id=0-1&t=OX4Px6psebrMLgEe-1)** 🎨

## 📌 Project Overview

This portfolio serves as a showcase for Faizan's work, projects, and skills. It is built with modern web technologies for optimal performance and maintainability.

### 🔥 Tech Stack
- **[Vite](https://vitejs.dev/)** - A super-fast front-end tooling
- **[React](https://react.dev/)** - Modern front-end framework
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development

## ⚡ Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/awaissaddiqui/Faizan_Portfolio.git
cd faizan-portfolio
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Development Server
```sh
npm run dev
```

The app should now be running at `http://localhost:5173`.

## 🎨 Customization

This portfolio is designed to be fully customizable, allowing you to update content, styles, and components easily.

### 📝 Updating Personal Information

Modify src/components/HeroSection.jsx to update your name, tagline, and profile image.
Update src/component/WorkExperiance.jsx to add your new work experiance with description.

### Update Images 

Replace the images in the `src/assets` folder with your own. Make sure to update the paths in the components.
e.g Replace `src/assets/faizan.png` with your own profile image and update the path in `src/components/HeroSection.jsx`.

### 🎨 Styling Customization

Tailwind CSS makes it easy to change colors, fonts, and layouts. Modify App.css to adjust theme settings.


### 🔗 Social Media & Links

Modify src/components/Footer.jsx to update your social media links.
Update the SEO metadata in public/index.html to reflect your own portfolio.

### 🖼️ Adding New Sections

Create a new component in src/components/ and import it into App.jsx to add additional sections like testimonials etc.


### 📦 Building for Production
- First push your changes to the repository ` main branch`.
- Run the following command to build the project:
```sh
npm run deploy # to deploy
```

Then, deploy the `dist/` folder using **GitHub Actions**.




