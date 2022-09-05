import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import StyledButton from "./styles";

interface ButtonType extends PropsWithChildren {
    color?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    onClick?(): void;
    className?: string;
    // type?: "contained" | "bordered";
}

export default function Button({
    className = "contained",
    color = "primary",
    size = "md",
    onClick,
    children,
    ...props
}: ButtonType & ButtonHTMLAttributes<any>) {
    return (
        <StyledButton color={color} size={size} onClick={onClick} className={`${className}`} {...props}>
            {children}
        </StyledButton>
    );
}
