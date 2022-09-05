import styled, { css } from "styled-components";
import breakpoints from "@/design/mixins";

const StyledHeader = styled("header")`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        height: 5rem;
        padding-inline: 1rem;
        background-color: ${theme.colors["primary-300"]};
        color: ${theme.colors["primary-900"]};
        z-index: 99;
        
        & .header {
            max-width: 1000px;
            margin-inline: auto;
            display: flex;
            height: 100%;
            left: 0;
            align-items: center;
            width: 100%;
            position: relative;
            background-color: ${theme.colors["primary-300"]};
            ${breakpoints.mobile.standard(`
                & .header__submenu {
                    & > div {
                        top: 16rem;
                    }
                }
            `)};
            
            &__logo {
                width: fit-content;
                cursor: pointer;
                
                & h2 {
                    font-size: 20pt;
                    font-weight: 700;
                }
            }

            &__action {
                display: none;
                margin-left: auto;
                ${breakpoints.mobile.standard`display: block;`}
            }

            &__nav-items {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                gap: 1rem;
                flex: 1;
                ${breakpoints.mobile.standard(`
                    position: absolute;
                    width: 100%;
                    flex-direction: column;
                    align-items: center;
                    top: 5rem;
                    z-index: -1;
                    padding-block: 1rem;
                    background-color: ${theme.colors["primary-100"]};

                    &.menu-closed {
                        display: none;
                    }
                `)}

                & .nav-item {
                    a {
                        transition: all ease .3s;
                    }

                    &:hover a {
                        color: ${theme.colors["primary-700"]}
                    }

                    &.perfil {
                        background-color: ${theme.colors["primary-500"]};
                        display: flex;
                        align-items: center;
                        
                        & .perfil__img {
                            /* width: 2rem; */
                            padding: 1.5rem;
                            /* height: 100%; */
                            background-color: red;
                        }

                        a {
                            padding-inline: .5rem;
                        }
                    }
                }
            }

            &__submenu {
            }
    `}
`;

export default StyledHeader;
