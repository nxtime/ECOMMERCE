import styled, { css } from "styled-components";
import breakpoints from "@/design/mixins";

const StyledPerfil = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors["primary-100"]};

        .perfil {
            &__header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding-inline: 1rem;
                height: 10rem;
                background-color: ${theme.colors["primary-700"]};
                color: ${theme.colors["primary-100"]};
            }

            &__container {
                display: flex;
                width: 100%;
                height: 100%;
                ${breakpoints.mobile.standard`
                    flex-direction: column;

                    & aside {
                        width: 100%!important;
                    }
                `}

                & aside {
                    width: 15rem;

                    ul {
                        background-color: ${theme.colors["primary-300"]};

                        li {
                            padding: 1rem;
                            text-align: center;
                        }
                    }
                }

                &__option {
                    width: 100%;
                }
            }
        }
    `}
`;

export default StyledPerfil;
