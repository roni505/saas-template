import { ReactNode } from "react";

export type ButtonProps = {
    className?: string,
    children: ReactNode,
    varient: "secondary" | "primary"
}

const btnStyles = {
    primary: "bg-gradient-to-t from-[rgb(53,53,53)] to-[rgb(31,31,31)] px-5 py-3 rounded-[0.75rem] shadow-[0px_-2px_0px_0px_rgba(98,98,98)]",
    secondary: "bg-[#1A1A1A] px-5 py-3 rounded-[0.75rem]"
}

const Button = ({
    className,
    children,
    varient
}: ButtonProps ) => {
    return (
        <button 
        className={`${className} ${btnStyles[varient]}`}
        >
            {children}
        </button>
    )
}

export default Button;