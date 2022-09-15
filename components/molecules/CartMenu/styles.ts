import styled, { css } from "styled-components";
import breakpoints from "@/design/mixins";

const StyledCartMenu = styled("div")`
    ${({ theme }) => css`
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${theme.sizing.sm};
        top: 4rem;
        right: 0;
        padding: 1rem;
        z-index: 20;
        background-color: ${theme.colors["primary-300"]};
        & > ul {
            max-height: 15rem;
            background-color: ${theme.colors["primary-500"]};
            overflow: auto;
            & > li {
                width: 100%;
                & .cart {
                    display: flex;
                    padding: 0.5rem;
                    align-items: center;
                    justify-content: space-between;
                    gap: ${theme.sizing.sm};
                    &:hover {
                        background-color: ${theme.colors["primary-700"]};
                        color: ${theme.colors["primary-100"]};
                    }
                    &__image {
                        width: 2.5rem;
                        height: 2.5rem;
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
                }
            }
        }
        ${breakpoints.mobile.standard`
        left: auto;
        right: unset;
        left: 50%;
        transform: translateX(-50%) !important;
        // width: fit-content;
        // margin-inline: auto;
        `}
    `}
`;

export default StyledCartMenu;
