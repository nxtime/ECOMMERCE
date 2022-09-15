import breakpoints from "@/design/mixins";
import styled, { css } from "styled-components";

const StyledProduct = styled("div")<{ src: string }>`
    ${({ theme, src }) => css`
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
                height: 100%;
                display: flex;
                flex-direction: column;
                position: relative;
                cursor: pointer;
                min-width: 100%;
                background-image: url(${src});
                background-size: cover;
                background-position: center;
                transition: all ease 0.5s;

                &:hover {
                    filter: brightness(0.5);
                    background-position: left;
                }
                & > span:first-child {
                    position: absolute;
                    background-color: ${theme.colors.warning};
                    color: ${theme.colors.white};
                    padding: 1rem;
                    ${breakpoints.mobile.standard(`
                        // bottom: 0;
                        font-size: ${theme.sizing.sm};
                    `)}
                }

                & > span:last-child {
                    width: 100% !important;

                    & > img {
                        display: none !important;
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
