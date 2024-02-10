import { AppProps } from "next/app";
import RootLayout from "@/app/layout";
import Transition from "@/components/Transition";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { useState} from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);

  return (
    <RootLayout hideNavbar={isLoading}>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </RootLayout>
  );
}

export default MyApp;
