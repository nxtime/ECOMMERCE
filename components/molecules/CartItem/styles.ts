import styled, { css } from "styled-components";
import breakpoints from "@/design/mixins";

const StyledCartItem = styled("li")`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${theme.sizing.sm};
        margin-inline: auto;
        & .cart {
            display: flex;
            padding: 0.5rem;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            /* gap: ${theme.sizing.sm}; */
            &:hover {
                background-color: ${theme.colors["primary-100"]};
                /* color: ${theme.colors["primary-100"]}; */
            }
            &__image {
                width: 5rem;
                height: 5rem;
                cursor: pointer;
                &:hover {
                    opacity: 0.7;
                }
                & a > span {
                    width: 100% !important;
                    height: 100% !important;
                }
            }
            &__price-content,
            &__price-total {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            &__actions {
                display: flex;
                gap: 1rem;
            }
        }
        ${breakpoints.mobile.standard`
            width: fit-content;
            // margin-inline: auto;
        `}
    `}
`;

export default StyledCartItem;
