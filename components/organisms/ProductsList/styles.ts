import breakpoints from "@/design/mixins";
import styled, { css } from "styled-components";

const StyledProductsList = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        gap: 2rem;
        background-color: ${theme.colors["neutral-100"]};
        ${breakpoints.mobile.standard`
            padding: 2rem .25rem;
        `}

        .products-title {
            position: relative;

            &::after {
                content: "";
                position: absolute;
                width: 50%;
                left: 75%;
                height: 0.25rem;
                background-color: ${theme.colors["primary-500"]};
            }
        }

        .products-container {
            display: grid;
            width: 100%;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            ${breakpoints.mobile.standard`
                grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
                gap: .25rem;
            `}
        }
    `}
`;

export default StyledProductsList;
