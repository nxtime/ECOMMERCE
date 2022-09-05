import Header from "@/components/organisms/Header";
import { PropsWithChildren } from "react";
import RootStyle from "./styles";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <RootStyle>
            <div className="interface">
                <Header />
                <main>{children}</main>
            </div>
        </RootStyle>
    );
}
