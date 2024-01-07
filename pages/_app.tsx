// pages/_app.tsx
import { AppProps } from 'next/app';
import RootLayout from '@/app/layout';
import Transition from '@/components/Transition';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <RootLayout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} initial='initial' animate='animate' exit='exit'>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </RootLayout>
  );
}

export default MyApp;
