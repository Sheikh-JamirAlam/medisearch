import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./ui/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        outfit: ["var(--font-outfit)"],
      },
      backgroundImage: {
        logo: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmY2ZjZmMiIGQ9Im0xMCAxNi40bC00LTRMNy40IDExbDIuNiAyLjZMMTYuNiA3TDE4IDguNHoiLz48L3N2Zz4=')",
      },
      colors: {
        "primary-white": "#fcfcfc",
        "secondary-white": "#f7f7f7",
        "primary-black": "#121212",
        "secondary-black": "#222222",
        "primary-grey": "#787878",
        "primary-dark-grey": "#5c5c5c",
        "primary-light-grey": "#cccccc",
        "primary-blue": "#0276ff",
        "secondary-blue": "#4299ff",
        "primary-light-blue": "#e4effb",
        "primary-lighter-blue": "#f0f7ff",
        "secondary-light-blue": "#e1ecf7",
        "secondary-dark-blue": "#bacee3",
      },
      boxShadow: {
        input: "0 0 0 .25rem rgba(66,153,225,.5)",
      },
      keyframes: {
        load: {
          "0%": { transform: "translate(0px, 0px)" },
          "100%": { transform: "translate(100%, 0px)" },
        },
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeout: {
          "0%": { opacity: "1", display: "block" },
          "100%": { opacity: "0", display: "none" },
        },
        appearin: {
          "0%": { opacity: "0", transform: "translate(0px, 30px)" },
          "100%": { opacity: "1", transform: "translate(0px, 0px)" },
        },
        appearout: {
          "0%": { opacity: "1", display: "block", transform: "translate(0px, 0px)" },
          "100%": { opacity: "0", display: "none", transform: "translate(0px, 30px)" },
        },
        appear: {
          "0%": { opacity: "0", transform: "translate(0px, 30px)" },
          "100%": { opacity: "1", transform: "translate(0px, 0px)" },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
      },
      animation: {
        load: "load 10s linear forwards",
        typing: "typing 2.5s steps(30) forwards",
        "fade-in": "fadein .5s linear forwards",
        "fade-out": "fadeout .5s linear forwards",
        "appear-in": "appearin .25s linear forwards",
        "appear-out": "appearout .25s linear forwards",
        appear: "appear 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
