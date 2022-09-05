import styled, { css } from "styled-components";

const StyledAddress = styled.div`
    ${({ theme }) => css`
        & .address {
            display: flex;
            padding: 1rem;
            justify-content: space-between;
            align-items: center;
            background-color: ${theme.colors["neutral-100"]};

            & > div {
                display: flex;
                gap: 1rem;
                align-items: center;
            }

            &__actions {
            }
        }
    `}
`;

export default StyledAddress;
