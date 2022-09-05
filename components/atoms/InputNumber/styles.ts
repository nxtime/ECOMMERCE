import styled, { css } from "styled-components";

const StyledInputNumber = styled.div`
    ${({ theme }) => css`
        display: flex;
        height: 3rem;
        
        .input__number {
            &-field {

                & input {
                    background-color: ${theme.colors["primary-300"]};
                    height: 100%;
                    max-width: 3rem;
                    text-indent: 0;
                    text-align: center;
                    -moz-appearance:textfield;

                    &::-webkit-outer-spin-button,
                    &::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                        appearance: none;
                    }
                }
            }

            &-actions {
                display: flex;
                flex-direction: column;
                width: 2.5rem;
                height: 100%;
                background-color: ${theme.colors["primary-900"]};
                color: ${theme.colors["primary-100"]};

                & > button {
                    display: flex;
                    /* flex: 1; */
                    justify-content: center;
                    padding: .5rem 1rem;
                    align-items: center;
                    max-height: 50%;
                    font-weight: bold;
                    user-select: none;
                    cursor: pointer;

                    & > span {
                        font-size: 8pt;
                        pointer-events: none;
                        transform: rotateZ(90deg);
                    }
            }
        }
    `}
`;

export default StyledInputNumber;
