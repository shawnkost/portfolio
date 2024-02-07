import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: "#F98126",
        secondary: "#11224F",
      },
      backgroundImage: {
        gradient: 'url("./assets/background-gradient.svg")',
      },
    },
  },
  plugins: [],
} satisfies Config;
