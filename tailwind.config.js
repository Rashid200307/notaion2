/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Big-O complexity colors
        complexity: {
          constant: '#8884d8',
          logarithmic: '#82ca9d',
          linear: '#ffc658',
          linearithmic: '#ff7c7c',
          quadratic: '#8dd1e1',
          cubic: '#d084d0',
          exponential: '#ffb347'
        },
        // Custom color palette
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'mono': ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'SFMono-Regular']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'complexity-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.15)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.2)',
        'complexity': '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    // Custom plugin for complexity-specific utilities
    function({ addUtilities, theme }) {
      const complexityUtilities = {};
      const colors = theme('colors.complexity');
      
      Object.keys(colors).forEach(key => {
        complexityUtilities[`.text-complexity-${key}`] = {
          color: colors[key]
        };
        complexityUtilities[`.bg-complexity-${key}`] = {
          backgroundColor: colors[key]
        };
        complexityUtilities[`.border-complexity-${key}`] = {
          borderColor: colors[key]
        };
      });
      
      addUtilities(complexityUtilities);
    }
  ],
  // Dark mode configuration
  darkMode: 'class',
  
  // Safelist important classes that might be used dynamically
  safelist: [
    'text-complexity-constant',
    'text-complexity-logarithmic',
    'text-complexity-linear',
    'text-complexity-linearithmic',
    'text-complexity-quadratic',
    'text-complexity-cubic',
    'text-complexity-exponential',
    'bg-complexity-constant',
    'bg-complexity-logarithmic',
    'bg-complexity-linear',
    'bg-complexity-linearithmic',
    'bg-complexity-quadratic',
    'bg-complexity-cubic',
    'bg-complexity-exponential',
  ]
};
