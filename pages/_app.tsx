import { AppProps } from "next/app";
import RootLayout from "@/app/layout";
import Transition from "@/components/Transition";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoading = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    handlePageLoading();
  }, []);

  return (
    <RootLayout hideNavbar={isLoading}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader />
        ) : (
          <motion.div
            key={router.route}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        )}
      </AnimatePresence>
    </RootLayout>
  );
}

export default MyApp;
