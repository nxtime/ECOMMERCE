import styled, { css } from "styled-components";

const StyledIconButton = styled.div<{ pos: string }>`
    ${({ pos }) => css`
        display: flex;
        flex-direction: ${pos};
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    `}
`;

export default StyledIconButton;
