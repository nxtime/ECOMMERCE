import styled from "styled-components";

const StyledModal = styled.div<{ pos: "right" | "left" }>`
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    top: 0;
    ${(e: any) => e.pos}: 0;
    z-index: 999;

    &:nth-child(1) {
        margin-top: 0rem !important;
    }

    &:nth-child(2) {
        margin-top: 8rem !important;
    }

    &:nth-child(3) {
        margin-top: 16rem !important;
    }

    &:nth-child(4) {
        margin-top: 24rem !important;
    }
`;

export default StyledModal;
