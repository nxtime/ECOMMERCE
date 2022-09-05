import Layout from "@/components/templates/Layout";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { DefaultTheme } from "@/styles/global";
import "@/styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={DefaultTheme}>
            <GlobalStyle />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}
export default MyApp;
