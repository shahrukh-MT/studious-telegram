import styled from "styled-components";

export const StyledHeaderWrp = styled.div`
  position: fixed;
  top: 0;
  left: ${({ left }) => left};

  .clouds {
    width: 200vw;
    /* margin-top: -200px; */
  }
`;
