
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Hacker theme colors
				cyber: {
					background: '#121212',
					darker: '#0a0a0a',
					dark: '#1a1a1a',
					text: '#f0f0f0',
					'neon-green': '#00ff41',
					'neon-blue': '#0073e6',
					'neon-purple': '#9b30ff',
					gray: '#888888',
				}
			},
			fontFamily: {
				mono: ['Roboto Mono', 'monospace'],
				sans: ['Inter', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'typing': {
					from: { width: '0' },
					to: { width: '100%' }
				},
				'blink': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' }
				},
				'glitch': {
					'0%': { 
						transform: 'translateX(0)',
						textShadow: '2px 0 #00ff41, -2px 0 #0073e6'
					},
					'25%': { 
						transform: 'translateX(2px)',
						textShadow: '-2px 0 #00ff41, 2px 0 #0073e6'
					},
					'50%': { 
						transform: 'translateX(-2px)',
						textShadow: '2px 0 #00ff41, -2px 0 #0073e6'
					},
					'100%': { 
						transform: 'translateX(0)',
						textShadow: '2px 0 #00ff41, -2px 0 #0073e6'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 15px #00ff41'
					},
					'50%': {
						boxShadow: '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'cursor-blink': 'blink 1s step-end infinite',
				'typing': 'typing 3.5s steps(40, end)',
				'glitch': 'glitch 0.3s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'pulse-glow': 'pulse-glow 1.5s infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
