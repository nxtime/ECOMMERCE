/* eslint-disable max-len */
import styled, { css } from "styled-components";

const StyledButton = styled.button<{ color: string; size: "sm" | "md" | "lg"; nopad: boolean; customProps: any }>`
    ${({
        theme,
        color,
        nopad,
        customProps,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        size
    }) => {
        const isPrimaryColor =
            color === "primary"
                ? [theme.colors["text-primary"], theme.colors["text-primary-oposite"]]
                : [theme.colors["text-primary-oposite"], theme.colors["text-primary"]];

        const isPrimaryBgColor =
            color === "primary" ? [theme.colors["primary-300"], theme.colors["primary-700"]] : [theme.colors["primary-700"], theme.colors["primary-300"]];

        const defaultColorOption = (isPrimary: boolean) => (isPrimary ? isPrimaryColor[0] : isPrimaryColor[1]);

        const defaultBgColorOption = (isPrimary: boolean) => (isPrimary ? isPrimaryBgColor[0] : isPrimaryBgColor[1]);

        return css`
            padding: ${!nopad ? "1rem" : 0};
            max-height: 4rem;
            width: fit-content;
            cursor: pointer;
            color: ${defaultColorOption(true)};
            transition: all ease .3s;
            ${customProps};
            
            &:hover {
                color: ${defaultColorOption(false)};
                transform: scale(1.1);
            }

            &:active {
                transform: scale(.9);
            }

            &.contained {
                background-color: ${defaultBgColorOption(true)};
                
                &:hover {
                    background-color: ${defaultBgColorOption(false)};
                }

                &.active {
                    background-color: transparent;
                    border: 2px solid  ${defaultBgColorOption(true)}};
                }
            }
            
            &.bordered {
                border: 2px solid ${defaultBgColorOption(true)};
                
                &:hover {
                    border: 2px solid  ${defaultBgColorOption(false)};
                    color: ${defaultBgColorOption(false)};
                }

                &.active {
                    background-color: ${defaultBgColorOption(true)};
                }
            }
        `;
    }}
`;

export default StyledButton;
