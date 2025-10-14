import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Web3Provider } from '@/contexts/Web3Context';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <Web3Provider>
            <Component {...pageProps} />
          </Web3Provider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

