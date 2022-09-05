import { PropsWithChildren } from "react";
import Button from "@/components/atoms/Button";
import { Icon } from "@iconify/react";
import StyledIconButton from "./styles";

interface IconButtonType extends PropsWithChildren {
    icon: string;
    pos?: "top" | "left" | "right" | "bottom";
    text?: string;
    onClick?(): void;
    color?: "primary" | "secondary";
}

const iconPosition = (pos: "top" | "left" | "right" | "bottom") => {
    switch (pos) {
        case "top":
            return "column";
        case "bottom":
            return "column-reverse";
        case "right":
            return "row-reverse";
        default:
            return "row";
    }
};

export default function IconButton({
    icon,
    pos = "left",
    onClick,
    children,
    color = "primary",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    text
}: IconButtonType) {
    const position = iconPosition(pos);

    return (
        <Button onClick={onClick} color={color}>
            <StyledIconButton pos={position}>
                <Icon icon={icon} />
                {children && <p>{children}</p>}
            </StyledIconButton>
        </Button>
    );
}
