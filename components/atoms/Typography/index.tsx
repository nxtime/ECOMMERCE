import { PropsWithChildren } from "react";
import StyledTypography from "./styles";

interface TypographyProps extends PropsWithChildren {
    type?: "title" | "subtitle" | "normal" | "span";
    children: any;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    color?: string;
}
const ComponentMap = {
    title: "h2",
    subtitle: "h3",
    normal: "p",
    span: "span"
} as const;

export default function Typography({ type = "normal", children, size = "sm", color, ...props }: TypographyProps) {
    const selectedComponent = ComponentMap[type];

    return (
        <StyledTypography as={selectedComponent} size={size} color={color} {...props}>
            {children}
        </StyledTypography>
    );
}
