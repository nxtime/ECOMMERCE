import styled, { css } from "styled-components";

const StyledTypography = styled.div<{ size: any; color: any }>`
    ${({ theme, size, color = "primary-900" }) => css`
        font-size: ${theme.font[size]};
        color: ${theme.colors[color]};
    `}
`;

export default StyledTypography;
