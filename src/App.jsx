import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1>Projects Portfolio</h1>
      </header>
      <section class="projects">
        <div class="project">
          <h2>We-Placed - Labor Workforce Hiring Platform</h2>
          <p>
            <strong>User:</strong>
            <a href="https://www.we-placed.com" target="_blank">
              Visit
            </a>{" "}
            |<strong>Admin:</strong>
            <a href="https://www.we-placed.com/admin" target="_blank">
              Admin Panel
            </a>
          </p>
          <p>
            <strong>Tech Stack:</strong> React, Redux, Node.js, MongoDB,
            Express, Docker, Nginx
          </p>
          <p>
            A platform that connects users with skilled laborers in Gulf
            countries. Users can post workforce requirements (e.g., plumbers,
            carpenters, mechanics), and the system suggests registered workers
            based on expertise and experience.
          </p>
          <h3>Key Features:</h3>
          <ul>
            <li>
              Easy Requirement Submission – Users specify labor needs
              effortlessly.
            </li>
            <li>
              AI-Powered Matching – Suggests workers with relevant skills and
              experience.
            </li>
            <li>Verified Worker Profiles – Ensures quality hiring.</li>
            <li>
              Efficient Process – Simplifies recruitment for businesses and
              individuals.
            </li>
          </ul>
        </div>

        <div class="project">
          <h2>RentRanzact - Rental Management Platform</h2>
          <p>
            <strong>User:</strong>
            <a href="https://www.rentranzact.com" target="_blank">
              Visit
            </a>{" "}
            |<strong>Admin:</strong>
            <a href="https://www.rentranzact.com/admin/login" target="_blank">
              Admin Panel
            </a>
          </p>
          <p>
            <strong>Tech Stack:</strong> React, Redux, Node.js, MongoDB,
            Express, Docker, Nginx
          </p>
          <p>
            RentRanzact is a rental management platform designed to streamline
            property leasing, rent collection, and tenant management.
          </p>
          <h3>Key Features:</h3>
          <ul>
            <li>
              Online Rent Collection – Secure and automated payment processing.
            </li>
            <li>
              Rental Agreements & Documentation – Digitally manage leases and
              contracts.
            </li>
            <li>
              Tenant & Property Management – Track tenants, maintenance, and
              property details.
            </li>
            <li>
              Data Insights & Reports – Get real-time analytics on rental income
              and expenses.
            </li>
          </ul>
        </div>

        <div class="project">
          <h2>Blockovia - Blockchain Solutions</h2>
          <p>
            <strong>User:</strong>
            <a href="https://blockovia.com" target="_blank">
              Visit
            </a>
          </p>
          <p>
            <strong>Tech Stack:</strong> Next.js, React, Redux, Blockchain
            (Ethereum, Polygon, BSC)
          </p>
          <p>
            Blockovia is a blockchain development and investment company
            specializing in EVM chains like Ethereum, Polygon, and Binance Smart
            Chain (BSC).
          </p>
          <h3>Key Features:</h3>
          <ul>
            <li>
              Blockchain Security – Ensures tamper-proof, encrypted
              transactions.
            </li>
            <li>
              Decentralized Applications (dApps) – Reduces reliance on central
              authorities.
            </li>
            <li>Smart Contract Audits – Enhances trust and security.</li>
            <li>
              Custom Blockchain Solutions – Tailored to industry-specific needs.
            </li>
          </ul>
        </div>

        <div class="project">
          <h2>247 Accessible Documents</h2>
          <p>
            <strong>User:</strong>
            <a href="https://portal.247accessibledocuments.com" target="_blank">
              Visit
            </a>
          </p>
          <p>
            <strong>Tech Stack:</strong> React, Redux, Laravel, Docker, Nginx
          </p>
          <p>
            The 247 Accessible Documents Portal helps users make documents
            accessible and compliant with standards like Section 508, ADA,
            PDF/UA, and WCAG 2.0 & 2.2.
          </p>
          <h3>Key Features:</h3>
          <ul>
            <li>
              Easy Document Upload – Users can upload files and get instant
              estimates.
            </li>
            <li>
              Multi-Format Support – Supports PDFs, Word, Excel, PowerPoint, and
              InDesign.
            </li>
            <li>
              Accessibility Compliance – Ensures documents meet legal
              accessibility standards.
            </li>
            <li>
              Secure Cloud Platform – Provides a safe environment for document
              processing.
            </li>
          </ul>
        </div>

        <div class="project">
          <h2>Quizlet - AI-powered Learning Platform</h2>
          <p>
            <strong>User:</strong>
            <a href="https://www.quizlet.com" target="_blank">
              Visit
            </a>
          </p>
          <p>
            <strong>Tech Stack:</strong> React, Node.js
          </p>
          <p>
            Quizlet is an online learning platform that helps students and
            educators study through flashcards, quizzes, and interactive
            learning tools.
          </p>
          <h3>Key Features:</h3>
          <ul>
            <li>
              Flashcards & Study Sets – Create, share, and use pre-made
              flashcards.
            </li>
            <li>
              AI-Powered Learning – Smart study modes like Learn, Test, and
              Write.
            </li>
            <li>
              Gamified Learning – Engage with interactive games like Match and
              Gravity.
            </li>
            <li>
              Audio & Image Support – Enhance learning with text-to-speech and
              visuals.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
