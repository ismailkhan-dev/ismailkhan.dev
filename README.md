# Personal Portfolio Website

    This is the README file for my personal portfolio website, which is built using Next.js, Tailwind CSS, and Framer Motion. This README will provide an overview of the project, installation instructions, and other relevant information.

## Overview

This portfolio website serves as a showcase of my skills, projects, and experiences. It is designed to provide visitors with a clear understanding of my background, expertise, and the work I have done. The website is built with modern web technologies to ensure a smooth and engaging user experience.

### Key Features

-   **Next.js**: This project uses Next.js, a popular React framework, to build a fast and optimized web application.

-   **Tailwind CSS**: Tailwind CSS is used for styling, making it easy to maintain and customize the website's appearance.

-   **Framer Motion**: Framer Motion is employed for adding smooth animations and transitions to enhance the user interface.

## Installation

To set up this project locally, follow these steps:

1. **Clone the Repository**:

    ```
    git clone https://github.com/ismailkhan-dev/ismailkhan.dev.git
    cd ismailkhan.dev
    ```

2. **Install Dependencies**:

    ```
    npm install
    ```

3. **Configure Environment Variables**: This project uses environment variables. Create a `.env.local` file in the root directory and add any required variables.

    1. Add `RESEND_API_KEY` environment variable in `.env.local`
    2. In the send-email.ts action file, change the "to" email to your own email

4. **Start the Development Server**:

    ```
    npm run dev
    ```

5. **Open in Browser**: Visit `http://localhost:3000` in your web browser to see the website in action.

## Customization

You can customize this portfolio website to showcase your own skills, projects, and experiences. Here are some tips on how to do that:

-   **Update Content**: Modify the content in the `src/data` directory to reflect your own information. Update the `projects.js`, `skills.js`, and `experience.js` files to add your own projects, skills, and work experience.

-   **Styling**: Tailwind CSS makes it easy to customize the website's styling. You can modify the styles in the `styles` directory to match your personal branding.

-   **Animations**: Framer Motion animations can be found in the components in the `src/components` directory. Customize these animations to create a unique user experience.

## Deployment

To deploy your personal portfolio website, you can use popular hosting platforms like Vercel, Netlify, or GitHub Pages. Refer to their documentation for specific deployment instructions.

Thank you for visiting my portfolio website!
