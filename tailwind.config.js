/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Enterprise Light Theme (Stripe/Plaid/Bloomberg)
        bg: {
          DEFAULT: "#f8fafc", // slate-50 (Page Background)
          surface: "#ffffff", // white (Card Background)
          panel: "#e2e8f0",   // slate-200 (Borders/Dividers)
          subtle: "#f1f5f9",  // slate-100 (Secondary BG)
        },
        primary: {
          DEFAULT: "#2563eb", // blue-600 (Main Action)
          hover: "#1d4ed8",   // blue-700
          subtle: "#eff6ff",  // blue-50
          text: "#1e40af",    // blue-800
        },
        risk: {
          safe: "#10b981",    // emerald-500
          safeBg: "#ecfdf5",  // emerald-50
          warning: "#f59e0b", // amber-500
          warningBg: "#fffbeb", // amber-50
          critical: "#ef4444",// red-500
          criticalBg: "#fef2f2",// red-50
        },
        text: {
          primary: "#0f172a", // slate-900 (Headings)
          secondary: "#64748b", // slate-500 (Labels/Body)
          tertiary: "#94a3b8",  // slate-400 (Muted)
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      },
      fontSize: {
        'xxs': '0.65rem',
      }
    },
  },
  plugins: [],
}
