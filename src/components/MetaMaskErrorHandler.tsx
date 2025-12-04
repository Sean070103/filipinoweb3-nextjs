"use client";

import { useEffect } from "react";

/**
 * MetaMaskErrorHandler - Prevents MetaMask connection errors from breaking the app
 * 
 * This component adds global error handlers to catch and suppress MetaMask connection
 * errors that occur when the MetaMask extension is installed but not properly connected.
 */
export default function MetaMaskErrorHandler() {
  useEffect(() => {
    // Handle unhandled promise rejections (common with MetaMask)
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const error = event.reason;
      const errorMessage = error?.message || String(error);
      const errorStack = error?.stack || "";

      // Check if this is a MetaMask connection error
      const isMetaMaskError =
        errorMessage?.includes("Failed to connect to MetaMask") ||
        errorMessage?.includes("MetaMask") ||
        errorStack?.includes("nkbihfbeogaeaoehlefnkodbefgpgknn") || // MetaMask extension ID
        errorStack?.includes("inpage.js");

      if (isMetaMaskError) {
        // Prevent the error from being logged to console and breaking the app
        event.preventDefault();
        console.warn("MetaMask connection error suppressed:", errorMessage);
        return;
      }
    };

    // Handle general errors
    const handleError = (event: ErrorEvent) => {
      const error = event.error;
      const errorMessage = error?.message || event.message || "";
      const errorStack = error?.stack || "";

      // Check if this is a MetaMask connection error
      const isMetaMaskError =
        errorMessage?.includes("Failed to connect to MetaMask") ||
        errorMessage?.includes("MetaMask") ||
        errorStack?.includes("nkbihfbeogaeaoehlefnkodbefgpgknn") ||
        errorStack?.includes("inpage.js");

      if (isMetaMaskError) {
        // Prevent the error from being logged
        event.preventDefault();
        console.warn("MetaMask connection error suppressed:", errorMessage);
        return;
      }
    };

    // Add event listeners
    window.addEventListener("unhandledrejection", handleUnhandledRejection);
    window.addEventListener("error", handleError);

    // Cleanup
    return () => {
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
      window.removeEventListener("error", handleError);
    };
  }, []);

  // Additional safeguard: Monitor for MetaMask provider issues
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if MetaMask is installed and handle potential issues
    const checkMetaMask = () => {
      interface EthereumProvider {
        on?: (event: string, handler: (error: Error) => void) => void;
      }
      
      interface WindowWithEthereum extends Window {
        ethereum?: EthereumProvider;
      }
      
      const ethereum = (window as WindowWithEthereum).ethereum;
      if (ethereum) {
        // Add error listener to ethereum provider if available
        if (ethereum.on && typeof ethereum.on === "function") {
          try {
            ethereum.on("error", (error: Error) => {
              // Suppress connection errors
              if (error?.message?.includes("Failed to connect") || 
                  error?.message?.includes("MetaMask")) {
                console.warn("MetaMask provider error suppressed:", error.message);
              }
            });
          } catch {
            // Silently fail if we can't add listener
          }
        }
      }
    };

    // Check immediately and also after a short delay (in case MetaMask loads later)
    checkMetaMask();
    const timeout = setTimeout(checkMetaMask, 1000);
    
    return () => clearTimeout(timeout);
  }, []);

  return null;
}

