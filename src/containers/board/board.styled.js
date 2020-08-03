import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

export const Container = styled(Paper)`
  display: table;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-top: 30px;
  padding-bottom: 10px;
`;

export const Row = styled.div`
  display: flex;
  margin-top: -19px;
  margin-left: ${props => props.margin}px;
`;

export const Cell = styled.div`
  position: relative;
  cursor: pointer;
  min-width: 60px;
  max-width: 60px;
  min-height: 34.64px;
  max-height: 34.64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.col};
  margin: 17.32px 0;
  border-left: solid 1px #333333;
  border-right: solid 1px #333333;
  span {
    z-index: 3;
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    width: 42.43px;
    height: 42.43px;
    -webkit-transform: scaleY(0.5774) rotate(-45deg);
    -ms-transform: scaleY(0.5774) rotate(-45deg);
    transform: scaleY(0.5774) rotate(-45deg);
    background-color: inherit;
    left: 7.7868px;
  }
  &:before {
    top: -21.2132px;
    border-top: solid 1.4142px #333333;
    border-right: solid 1.4142px #333333;
  }
  &:after {
    bottom: -21.2132px;
    border-bottom: solid 1.4142px #333333;
    border-left: solid 1.4142px #333333;
  }
`;

export const NoCell = styled.div`
  width: 60px;
  height: 60px;
  text-align: center;
  box-sizing: border-box;
`;
