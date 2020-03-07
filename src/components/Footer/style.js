import styled from "styled-components";

export const StyledFooterWrp = styled.div`
  position: absolute;
  bottom: -5px;

  img {
    width: 200vw;
    height: 150px;
    object-fit: cover;
  }

  .flip {
    transform: scaleX(-1);
  }
`;
