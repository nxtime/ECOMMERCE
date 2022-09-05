import { css } from "styled-components";

const breakpoints = {
    mobile: {
        standard: (...args: any[]) => css`
            @media (max-width: 600px) {
                ${css`
                    ${args[0]}
                `}
            }
        `
    }
};

export default breakpoints;
