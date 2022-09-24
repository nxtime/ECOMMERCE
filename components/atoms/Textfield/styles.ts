import styled, { css } from "styled-components";

const StyledTextfield = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;

        .input__actions {
            display: flex;
            align-items: center;

            & input {
                padding: 0.75rem 1rem;
                /* width: 16rem;
                max-width: 100%; */
                background-color: ${theme.colors["neutral-100"]};
                transition: color ease 0.2s;
            }
            &.disabled {
                & input {
                    color: ${theme.colors["primary-500"]};
                }
            }
        }
    `}
`;

export default StyledTextfield;
