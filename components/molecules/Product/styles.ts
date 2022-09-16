import breakpoints from "@/design/mixins";
import styled, { css } from "styled-components";

const StyledProduct = styled("div")`
    ${({ theme }) => css`
        background-color: ${theme.colors["primary-300"]};
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        margin-inline: auto;
        overflow: hidden;

        .product {
            &__container {
                position: relative;

                & .product__actions {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    gap: ${theme.sizing.sm};
                    display: flex;
                    flex-direction: column;
                    z-index: 5;
                    opacity: 0.7;
                    visibility: hidden;
                    &:hover {
                        opacity: 1;
                    }
                    ${breakpoints.mobile.standard`
                        // bottom: 0;
                        visibility: visible;
                    `}
                }
                &:hover .product__actions {
                    visibility: visible;
                }
            }
            &__image {
                height: 15rem;
                display: flex;
                flex-direction: column;
                position: relative;
                cursor: pointer;
                min-width: 100%;
                background-color: ${theme.colors["primary-100"]};
                background-size: cover;
                background-position: center;
                overflow: hidden;

                &:hover {
                    background-position: left;
                    & > span:last-child {
                        filter: brightness(0.5);
                        transform: scale(1.25);
                    }
                }
                & > span:first-child {
                    position: absolute;
                    background-color: ${theme.colors.warning};
                    color: ${theme.colors.white};
                    padding: 1rem;
                    z-index: 1;
                    ${breakpoints.mobile.standard(`
                        // bottom: 0;
                        font-size: ${theme.sizing.sm};
                        `)}
                }
                & > span:last-child {
                    width: 100% !important;
                    transition: all ease 0.5s;

                    & > img {
                        /* display: none !important; */
                    }
                }
            }

            &__info {
                display: flex;
                flex-direction: column;
                height: 100%;
                padding-block: 1rem;
                justify-content: center;
                align-items: center;

                &__name {
                    font-size: 12pt;
                    cursor: pointer;

                    &:hover {
                        color: ${theme.colors["primary-700"]};
                    }
                }

                &__price {
                    display: flex;
                    gap: 0.5rem;
                    color: ${theme.colors["primary-700"]};
                    font-size: 10pt;
                    ${breakpoints.mobile.standard(`
                        // bottom: 0;
                        flex-direction: column;
                        gap: 0;
                        font-size: ${theme.sizing.sm};
                    `)}

                    & > span {
                        text-decoration: line-through;
                    }
                }
            }
        }
    `}
`;

export default StyledProduct;
