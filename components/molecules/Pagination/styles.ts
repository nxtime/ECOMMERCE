import styled, { css } from "styled-components";

const StyledPagination = styled("div")`
    ${() => css`
        .pagination-container {
            display: flex;
            gap: 0.25rem;
        }
        .pagination-info {
            margin: 0.5rem;
            text-align: center;
            pointer-events: none;
            user-select: none;
        }
    `}
`;

export default StyledPagination;
