import styled, { css } from "styled-components";

const StyledRadio = styled("div")`
    ${({ theme }) => css`
        display: flex;
        gap: 0.5rem;
        align-items: center;
        transition: all ease 0.3s;

        &:hover {
            filter: brightness(0.8);
            transform: scale(1.1);
        }

        & label {
            cursor: pointer;
        }

        & input[type="radio"] {
            position: relative;
            appearance: none;
            width: 1rem;
            height: 1rem;
            background-color: ${theme.colors["primary-300"]};
            cursor: pointer;

            &::after {
                content: "";
                position: absolute;
                top: 0.25rem;
                left: 0.25rem;
                width: 0.5rem;
                height: 0.5rem;
                background-color: transparent;
            }

            &:checked::after {
                background-color: ${theme.colors["primary-900"]};
            }
        }
    `}
`;

export default StyledRadio;
