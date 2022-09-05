import { PropsWithChildren } from "react";
import StyledCard from "./styles";

export default function Card({ children }: PropsWithChildren) {
    return <StyledCard>{children}</StyledCard>;
}
