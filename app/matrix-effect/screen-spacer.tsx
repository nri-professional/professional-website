import { ReactNode } from "react";

interface screenSpacerProps {
    children: ReactNode;
    percent_height: number;
}

export default function ScreenSpacer(props: screenSpacerProps) {
    return (
        <div className={`flex justify-center items-center`}
        style={{height: `${props.percent_height}%`}}>
            {props.children}
        </div>
    );
    
}