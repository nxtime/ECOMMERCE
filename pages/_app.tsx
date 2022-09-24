import Layout from "@/components/templates/Layout";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { DefaultTheme } from "@/styles/global";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/styles/index.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={DefaultTheme}>
                <GlobalStyle />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </QueryClientProvider>
    );
}
export default MyApp;
