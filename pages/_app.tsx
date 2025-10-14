import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Web3Provider } from '@/contexts/Web3Context';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Web3Provider>
          <Component {...pageProps} />
        </Web3Provider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

