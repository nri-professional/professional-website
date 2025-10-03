import { ReactNode } from "react";

interface screenProps  {
    children: ReactNode;
    color: string;
}

export default function Screen(props: screenProps) {
    return (
        <div className={`bg-${props.color} h-screen`}>
            {props.children}
        </div>
    );
    
}