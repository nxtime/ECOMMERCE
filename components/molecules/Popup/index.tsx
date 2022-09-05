import { PropsWithChildren, useEffect, useState } from "react";
import Card from "@/components/atoms/Card";
import Modal from "@/components/atoms/Modal";
import StyledPopup from "./styles";

interface PopupType extends PropsWithChildren {
    pos: "right" | "left";
}

const getPositionDirection = (pos: "right" | "left") => {
    switch (pos) {
        case "right":
            return "left";
        default:
            return "right";
    }
};

export default function Popup({ pos = "left", children }: PopupType) {
    const positionDirection = getPositionDirection(pos);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(true), 100);
        setTimeout(() => setLoading(false), 3400);
        setTimeout(() => setIsOpen(false), 3600);
    }, []);

    return (
        isOpen && (
            <Modal pos={pos}>
                <StyledPopup pos={positionDirection}>
                    <div className={loading ? "popup" : ""}>
                        <div className={`loading-bar ${loading ? "loading" : ""}`} />
                        <Card>{children}</Card>
                    </div>
                </StyledPopup>
            </Modal>
        )
    );
}
