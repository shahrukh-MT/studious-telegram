import styled, { css } from "styled-components";

const getStyleByLevel = ({ level = 1, height = "50vh" }) => {
  switch (level) {
    case 1:
      return css`
        width: 130px;
        background: #4195b9;
        height: ${height};
      `;

    case 2:
      return css`
        background: #7bbbd6;
        width: 90px;
        height: ${height};
      `;

    default:
      return css`
        width: 60px;
        background: #99d2e9;
        height: ${height};
      `;
  }
};

export const StyledBuilding = styled.div`
  bottom: 0;
  left: ${({ left }) => left};
  position: absolute;
  border-radius: 20px 20px 0 0;
  ${props => getStyleByLevel(props)};
`;

export const StyledLeveledWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: ${({ left }) => left};
`;
