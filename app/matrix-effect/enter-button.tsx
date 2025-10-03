'use client';

import { useState } from "react";

interface enterButtonProps {
    onClick: () => void;
}

export default function EnterButton(props: enterButtonProps) {
    // Model
    const [clicked, setClicked] = useState(false);

    // Controller
    const handleClick = () => {
        // Do internal visuals
        setClicked(true);
        // Call parent hook
        props.onClick();
    }

    // View
    return (
        <button className={[
        "font-mono text-3xl text-matrix-light-green",
        "border-2 px-4 py-2", 
        "cursor-pointer", 
        "ring-matrix-light-green",
        "hover:bg-matrix-light-green hover:text-black hover:ring-1",
        "transition-opacity ease-out duration-500",
        `${clicked ? "opacity-0 pointer-events-none" : "opacity-100"}`
        ].join(" ")}
        onClick={handleClick}
        disabled={clicked}>
            enter.
        </button>
    );
}