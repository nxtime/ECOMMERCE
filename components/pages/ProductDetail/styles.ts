import styled, { css } from "styled-components";
import breakpoints from "@/design/mixins";

const StyledProductDetail = styled("div")`
    ${({ theme }) => css`
        .product-detail {
            display: flex;
            gap: 1rem;
            padding: 1rem;
            ${breakpoints.mobile.standard`
                flex-direction: column;

                & .product-detail__image {
                    max-width: 100%;

                    & > span {
                        max-width: 100%;
                    }
                }

                & .product-detail__form-multi {
                    flex-direction: column;
                    gap: 0.5rem;
                }
            `};

            &__image {
                position: relative;
                max-width: 20rem;
                width: 100%;
                height: 30rem;

                & > span {
                    max-width: 20rem;
                    max-height: 30rem;

                    & img {
                        height: 100%;
                        width: 100%;
                    }
                }
            }

            &__info {
                width: 100%;
                display: flex;
                flex-direction: column;

                & .product-detail-title {
                    font-size: 28pt;
                }

                & .product-detail-price {
                    color: ${theme.colors["text-primary-faint"]};
                    font-size: 18pt;
                }
                & .product-detail-description {
                    margin-block: 1rem;
                }
            }
            &__form {
                form {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                &-multi {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                }
            }
        }
    `}
`;

export default StyledProductDetail;
