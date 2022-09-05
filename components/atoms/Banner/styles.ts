import styled from "styled-components";

const StyledBanner = styled("div")`
    display: flex;
    flex-direction: column;
    max-height: 15rem;
    height: 15rem;
    cursor: pointer;

    & > span {
        height: 100% !important;

        & img {
            transition: all cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.5s;
        }
    }

    &:hover img {
        min-width: 120% !important;
        min-height: 120% !important;
    }
`;

export default StyledBanner;
