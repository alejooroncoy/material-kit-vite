import { useEffect } from "react";
import nProgress from "nprogress";

export function useNProgress() {
  useEffect(() => {
    const handleStart = () => nProgress.start();
    const handleDone = () => nProgress.done();
    window.addEventListener("DOMContentLoaded", handleStart);
    window.addEventListener("load", handleDone);
    return () => {
      window.removeEventListener("DOMContentLoaded", handleStart);
      window.removeEventListener("load", handleDone);
    };
  }, []);
}
