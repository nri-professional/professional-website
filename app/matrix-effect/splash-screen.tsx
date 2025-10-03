import { useState } from "react";
import ScreenWrapper from "../general-components/screen-wrapper";
import EnterButton from "./enter-button";
import Headline from "./headline";
import ScreenSpacer from "./screen-spacer";

interface MatrixSplashScreenProps {
    handleSplashFade: () => void;
}

export default function MatrixSplashScreen(props: MatrixSplashScreenProps) {
    // Model
    // 0 = not yet, 1 = time to do it
    const [animationTrigger, setAnimationTrigger] = useState(0);
    // 0 = not done, 1 = done
    const [animationDone, setAnimationDone] = useState(false);
    
    // Controller
    // When enter button clicked
    const handleEnterClick = () => {
        setAnimationTrigger(1);
    }

    // Makes sure animation doesn't repeat.
    const consumeAnimationTrigger = () => {
        setAnimationTrigger(0);
    }

    // When text animation is complete
    const handleAnimationComplete = () => {
    console.log("animation complete!");
        setAnimationDone(true);
    }
    
    // View
    return (
        <>
            {/* Wrapper to fade */}
            <ScreenWrapper animationDone={animationDone} onFadeDone={props.handleSplashFade}>
                {/* Gives a percentage height */}
                <ScreenSpacer percent_height={40}>
                {/* Portfolio headline */}
                <Headline animation_trigger={animationTrigger} onAnimationComplete={handleAnimationComplete} consumeAnimationTrigger={consumeAnimationTrigger}
                fade_done={animationDone}></Headline>
                </ScreenSpacer>
                <ScreenSpacer percent_height={60}>
                {/* Button to enter */}
                <EnterButton onClick={handleEnterClick}></EnterButton>
                </ScreenSpacer>
            </ScreenWrapper>
        </>
    );
}