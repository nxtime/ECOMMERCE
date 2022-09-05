import { createGlobalStyle, css } from "styled-components";

export const DefaultTheme = {
    colors: {
        "primary-100": "#f6e4e4",
        "primary-300": "#ecc9c9",
        "primary-500": "#e3aeae",
        "primary-700": "#b38484",
        "primary-900": "#8f6a6a",
        "neutral-100": "#e9e9e9",
        "neutral-300": "#d4d4d4",
        "neutral-500": "#bebebe",
        "neutral-700": "#a5a5a5",
        "dark-100": "#373737",
        "dark-400": "#252525",
        "dark-700": "#121212",
        "text-primary": "#8f6a6a",
        "text-primary-faint": "#b38484",
        "text-primary-oposite": "#f6e4e4"
    },
    sizing: {
        default: "2.5rem",
        xs: ".25rem",
        sm: ".5rem",
        md: ".75rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "3rem"
    }
};

const GlobalStyle = createGlobalStyle`
    ${({ theme }: { theme: any }) => css`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: "Montserrat", "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
            color: ${theme.colors["text-primary"]};
        }

        ul {
            list-style: none;
        }

        img {
            max-width: 100%;
        }

        a {
            text-decoration: none;
            color: ${theme.colors["text-primary"]};
        }

        button,
        input {
            background-color: transparent;
            border: none;
            outline: none;
            color: ${theme.colors["text-primary"]};
            font-size: 12pt;
        }
    `}
`;

export default GlobalStyle;
