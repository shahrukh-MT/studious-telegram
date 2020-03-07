import styled from "styled-components";

export const StyledFooterWrp = styled.div`
  position: absolute;
  bottom: 0;

  .grass {
    bottom: -15px;
    width: 200vw;
    height: 150px;
    object-fit: cover;
    position: relative;
  }

  .flip {
    transform: scaleX(-1);
  }

  .land {
    bottom: -5px;
    position: relative;

    width: 400vw;
    height: auto;
  }
`;
