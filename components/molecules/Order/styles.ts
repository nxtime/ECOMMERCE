import styled, { css } from "styled-components";

const StyledOrder = styled.div`
    ${({ theme }) => css`
        max-width: 100vw;
        /* overflow: hidden; */
        & .order {
            background-color: ${theme.colors["neutral-100"]};
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            max-width: 100%;
            padding: 1rem;

            h3 {
                font-size: 10pt;
            }
            h5 {
                font-size: 8pt;
            }
            & img {
                width: 4rem;
                height: 4rem;
            }

            &__info {
                text-align: center;
            }

            &__uuid {
            }
        }
    `}
`;

export default StyledOrder;
