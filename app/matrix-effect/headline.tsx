'use client'

import { useEffect, useRef } from "react";
import partialReplace from "./headline-helpers";

interface headlineProps {
    animation_trigger: number;
    onAnimationComplete: () => void;
    consumeAnimationTrigger: () => void;
    fade_done: boolean;
}

export default function Headline(props: headlineProps) {
    // Model
    // Get the heading
    const ref = useRef<HTMLHeadingElement>(null);
    const obfusCharacters = "Loading...";
    // Interval to eventually stop
    const intervalRef = useRef<number | null>(null);
    
    // Controller
    // Partial Replace imported

    // Obfuscates text
    function obfuscate(content: HTMLHeadingElement) {
        const textToObfuscate = content.textContent;
        let i = 1;
        const characters = textToObfuscate.length;
        const allowedRepetitionCount = 2;
        const direction = true;

        intervalRef.current = window.setInterval(() => {
            let obfuscated: string;
            const numRepetitions = (i - characters) / obfusCharacters.length;

            if (i >= characters) {
                // At this point, there are no original characters, we don't want to stay here long.
                obfuscated = partialReplace(textToObfuscate, characters, obfusCharacters, i, direction);

                if(numRepetitions >= allowedRepetitionCount) {
                    clearInterval(intervalRef.current!);
                    intervalRef.current = null;
                    // Animation complete
                    props.onAnimationComplete();
                }
                
            } else {
                obfuscated = partialReplace(textToObfuscate, i, obfusCharacters, i, direction);
            }

            content.textContent = obfuscated;
            i++;
        }, 50);
        
        
    }

    // Triggers once the animation trigger is set, which is when a button is pressed.
    useEffect(() => {
        // Once it's time for the animation to trigger
        if(props.animation_trigger === 1 && ref.current) {
            console.log("Perform animation now.");
            props.consumeAnimationTrigger();
            obfuscate(ref.current);
        }
    });
    
    // View
    return (
        <h1 ref={ref} 
        className="
        font-mono 
        text-[clamp(1rem,5vw,4rem)]
        text-matrix-light-green
        text-center
        whitespace-nowrap
        overflow-hidden
        max-w-full
        ">
            NICHOLAS RICKETTS&apos portfolio
        </h1>
    );
}