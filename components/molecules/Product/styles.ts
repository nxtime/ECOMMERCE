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
            &__image {
                height: 100%;
                display: flex;
                flex-direction: column;
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

                & > span {
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
                    color: ${theme.colors["primary-700"]};
                    font-size: 10pt;
                }
            }
        }
    `}
`;

export default StyledProduct;
