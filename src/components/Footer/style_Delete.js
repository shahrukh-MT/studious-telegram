import styled from "styled-components";

export const StyledFooterWrp = styled.div`
  position: absolute;
  bottom: -5px;
  width: 100%;

  .grass {
    width: 100%;
    bottom: -10px;
    /* object-fit: cover; */
    position: relative;
  }

  .flip {
    transform: scaleX(-1);
  }

  .land {
    /* left: -20px; */
    width: 100%;
    position: relative;
  }
`;
