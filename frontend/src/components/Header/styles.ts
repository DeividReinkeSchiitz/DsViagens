import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  position: relative;

  scroll-behavior: smooth;

  z-index: 1;
`;

export const Logo = styled.img`
  weight: 150px;
  height: 150px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  max-width: 600px;

  margin-left: auto;
  margin-right: 50px;

`;

export const MenuItem = styled.a`
  text-decoration: none;
  position: relative;
  cursor: pointer;

  font-family: inter;
  color: var(--white);
  font-size: 2rem;

`;