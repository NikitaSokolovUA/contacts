import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;

export const Link = styled(NavLink)`
  font-weight: 700;
  font-size: 26px;
  line-height: 1.19;
  margin-left: 40px;
  color: black;
  padding-top: 10px;
  padding-bottom: 10px;
  &.active {
    color: #2196f3;
  }
`;