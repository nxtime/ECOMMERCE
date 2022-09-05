import styled, { css } from "styled-components";

const RootStyle = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors["primary-100"]};

        .interface {
            main {
                max-width: 1000px;
                margin-top: 5rem;
                margin-inline: auto;
                min-height: calc(100vh - 5rem);
            }
        }
    `}
`;

export default RootStyle;
