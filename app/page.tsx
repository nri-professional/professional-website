'use client'

import Screen from "./matrix-effect/screen";
import { useState } from "react";
import MatrixSplashScreen from "./matrix-effect/splash-screen";

export default function Home() {
  // Model
  // Whether we show splash or not
  const [showSplash, setShowSplash] = useState(true);

  // When the splash is done fading
  const handleSplashFade = () => {
      setShowSplash(false);
  }

  // View
  return (
    <main> 
        {/* Makes a screen size box of a given color */}
        <Screen color="black">
          {showSplash ? 
          (
            // Has no leaks, but is definitely not my proudest code ever.
            <MatrixSplashScreen handleSplashFade={handleSplashFade}></MatrixSplashScreen>
          ) : (
            <>
              <h1 className="text-center text-white ">404. portfolio not found</h1>
              <h2 className="text-center text-white ">(i'm working on it)</h2>
            </>
          )}
        </Screen>
    </main>
  );
}
