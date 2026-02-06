# 🛡️ RiskOS: AI-Augmented Credit Risk Engine

![Version](https://img.shields.io/badge/Version-2.4.1-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge)
![AI-Powered](https://img.shields.io/badge/AI-OpenAI%20GPT--4o-purple?style=for-the-badge)
![Tech](https://img.shields.io/badge/Tech-React%20%7C%20Vite%20%7C%20Tailwind-teal?style=for-the-badge)

**RiskOS** is a next-generation **Loan Origination & Decisioning System** used by Tier-1 financial institutions. It combines deterministic credit scoring models with **Generative AI** and **Statistical Simulations** to provide a 360-degree view of borrower risk.

---

## 🌟 Key Features

### 🧠 1. Hybrid Decision Engine
The core of RiskOS is a "Glass-Box" expert system that ensures compliance and explainability.
-   **Deterministic Scoring**: Rule-based penalties and bonuses based on income volatility, buffer months, and credit history.
-   **Scorecard Waterfall**: A transparent visual breakdown showing exactly *how* the score was calculated (e.g., `-15pts High Utilization`, `+20pts Strong Reserves`).

### 🤖 2. AI Underwriter (Powered by OpenAI)
Instead of relying solely on numbers, RiskOS employs an **AI Senior Risk Officer** (GPT-4o) to review the "story" behind the application.
-   **Qualitative Analysis**: Detects timeline mismatches (e.g., 1-month tenure).
-   **Practicality Checks**: Flags logical inconsistencies that pure math misses.
-   **Strict Alignment**: The AI is prompted to obey strict financial covenants (FOIR > 50% = Reject).

### 🎲 3. Monte Carlo Simulation (Robustness)
We don't just give you a single probability. We simulate the loan **500 times** against market volatility.
-   **Confidence Interval**: Visualizes the range of possible outcomes (P5 to P95).
-   **Volatility Stress**: Automatically applies Gaussian noise to income and expenses to test borrower resilience.

### 🧪 4. Sensitivity Sandbox
A live "What-If" environment for Credit Officers.
-   **Interactive Sliders**: Instantly see how changing `Income` (-50%) or `Tenure` (+2 Years) affects the Probability of Default (PD).
-   **Real-Time Recalculation**: No page reloads; pure math running in the browser.

---

## 🛠️ Technology Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | React 19 + Vite | Blazing fast rendering and HMR. |
| **Styling** | Tailwind CSS v4 | Enterprise-grade design system (Light Mode). |
| **Visuals** | Lucide React | Modern, clean iconography. |
| **AI Engine** | OpenAI API | GPT-4o-mini for logical reasoning. |
| **Deployment** | Vercel | Instant global edge deployment. |

---

## 🚀 Getting Started

### Prerequisites
-   Node.js v18+
-   OpenAI API Key

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/risk-os-platform.git
    cd risk-os-platform
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment**
    Create a `.env` file in the root directory:
    ```env
    VITE_OPENAI_API_KEY=sk-proj-YourKeyHere...
    ```

4.  **Run Locally**
    ```bash
    npm run dev
    ```
    Visit `http://localhost:5173` to access the platform.

---

## 📸 Screenshots

> *Add your screenshots here (e.g. Dashboard, AI Analysis Card, Sensitivity Sandbox)*

---

## 🔒 Security & Compliance
*   **Zero-Server Architecture**: Logic runs, client-side. No PII is stored in our servers.
*   **Audit Trail**: All decision factors are logged in the `Scorecard Waterfall` for regulatory review.

---

### © 2026 RiskOS Financial Systems
*Built for the Future of Lending.*
