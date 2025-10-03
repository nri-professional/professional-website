import { ReactNode, useRef } from "react";

interface screenWrapperProps {
    children: ReactNode;
    animationDone: boolean;
    onFadeDone: () => void;
}

export default function ScreenWrapper(props: screenWrapperProps) {
    // Model
    // Ref to be specific
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Controller
    const handleFadeEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
        if (e.propertyName === "opacity" && e.target === wrapperRef.current) {
            // console.log("This fade is done.");
            props.onFadeDone();
        }
    }

    // View
    return (
        <>
        <div
            ref={wrapperRef}
            className={[`w-full h-full`,
            `transition-opacity duration-500 ease-out ${props.animationDone ? "opacity-0" : "opacity-100"}`
            ].join(" ")}
            onTransitionEnd={handleFadeEnd}
        >
            {props.children}
        </div>
        </>
    );
}