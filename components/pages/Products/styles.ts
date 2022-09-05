import styled, { css } from "styled-components";
import breakpoints from "@/design/mixins";

const StyledProducts = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors["neutral-100"]};
        display: flex;
        position: relative;

        aside {
            position: sticky;
            display: flex;
            overflow: auto;
            flex-direction: column;
            top: 5rem;
            gap: 1rem;
            width: 16rem;
            padding: 1rem;
            height: calc(100vh - 5rem);
            background-color: ${theme.colors["primary-300"]};
            transition: all ease-in-out 0.2s;
            ${breakpoints.mobile.standard`
                position: fixed;
                z-index: 20;
            `}

            &.closed {
                width: 0rem;
                padding: 0;
            }

            & > button {
                margin-left: auto;
            }
        }

        & > div {
            width: 100%;

            & > button {
                position: sticky;
                top: 5rem;
                z-index: 20;
                margin-bottom: -5rem;
            ${breakpoints.mobile.standard`
                margin-left: 16rem;
                position: fixed;
                z-index: 21;
                &.menu-opened {
                    margin-left: 0rem;
                }

            `}
    `}
`;

export default StyledProducts;
