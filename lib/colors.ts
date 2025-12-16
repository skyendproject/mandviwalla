/**
 * Centralized Color Configuration
 * 
 * Primary Colors: #0A3D62, #1338BE, #F28500
 * Secondary Colors: #1E5F9C, #E67E22
 * Neutral/Supporting Colors: #2C3E50, #ECF0F1
 */

export const colors = {
    // Primary Colors
    primary: {
        darkBlue: '#0A3D62',      // Dark blue - hero section background, major headings
        blue: '#1338BE',          // Main blue - navigation bar, primary elements
        orange: '#F28500',        // Main orange - hover effects, highlights, icons
    },

    // Secondary Colors
    secondary: {
        lightBlue: '#1E5F9C',     // Light blue - section dividers, hover states, accent backgrounds
        warmOrange: '#E67E22',    // Warm orange - secondary buttons, product highlights
    },

    // Neutral / Supporting Colors
    neutral: {
        darkGray: '#2C3E50',      // Dark gray - text, borders, supporting elements
        lightGray: '#ECF0F1',     // Light gray - backgrounds, card backgrounds
    },

    // Additional Neutral Colors
    gray: {
        text: '#666666',          // Body text
        light: '#999999',         // Secondary text
        border: '#A7A7A7',       // Borders and dividers
        lightgraybg: '#F6F6F6',
        tagColor: '#333333'
    },

    white: '#FFFFFF',           // Card backgrounds, clean spacing

    // Legacy color mappings for backwards compatibility
    blue: {
        primary: '#0A3D62',       // Maps to primary.darkBlue
        light: '#1E5F9C',
        secondary: '#1338BE'        // Maps to secondary.lightBlue
    },

    orange: {
        dark: '#F28500',          // Kept for existing usage
        warm: '#E67E22',          // Maps to secondary.warmOrange
    },
} as const;

// CSS Variable names for easy integration
export const cssVars = {
    // Primary colors
    '--color-primary-dark-blue': colors.primary.darkBlue,
    '--color-primary-blue': colors.primary.blue,
    '--color-primary-orange': colors.primary.orange,

    // Secondary colors
    '--color-secondary-light-blue': colors.secondary.lightBlue,
    '--color-secondary-warm-orange': colors.secondary.warmOrange,

    // Neutral colors
    '--color-neutral-dark-gray': colors.neutral.darkGray,
    '--color-neutral-light-gray': colors.neutral.lightGray,

    // Legacy mappings
    '--color-blue-primary': colors.blue.primary,
    '--color-blue-light': colors.blue.light,
    '--color-orange-dark': colors.orange.dark,
    '--color-orange-warm': colors.orange.warm,
    '--color-gray-text': colors.gray.text,
    '--color-gray-light': colors.gray.light,
    '--color-gray-border': colors.gray.border,
    '--color-white': colors.white,
} as const;
