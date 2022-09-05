import { PropsWithChildren, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import StyledModal from "./styles";

interface ModalType extends PropsWithChildren {
    pos?: "right" | "left";
}

export default function Modal({ children, pos = "right" }: ModalType) {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    if (isBrowser) {
        return ReactDOM.createPortal(<StyledModal pos={pos}>{children}</StyledModal>, document.querySelector("#modal-root")!);
    }
    return null;
}
