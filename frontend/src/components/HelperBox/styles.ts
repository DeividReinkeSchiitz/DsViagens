import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: absolute;
  bottom: 3rem;
  width: 100%;

  height: 230px;
  padding-left: 3rem;
  padding-right: 3rem;

  margin-top: -10px;

`;

export const Content = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
  background: var(--white);

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 0.5rem;

  padding-left: 3rem;
  padding-right: 3rem;
`;


export const WrapBox = styled.div<{ border?: boolean }>`
  display: flex;

  flex-direction: column;
  justify-content: space-around;

  border: ${props => props.border ? "var(--thin-stroke) 1px solid" : "none"};
  border-radius: 0.5rem;

  padding: 1rem;
  margin: 1rem;

  max-width: 400px;
  width: 100%;

  img {
    width: 100%;
    height: 100px;
  }
`;

export const Title = styled.h1`
  width: 100%;
  align-self: center;

  font-weight: 700;
  font-size: 2rem;
  font-family: inter;
  color: var(--yellow);

  margin-bottom: 1rem;
`;

export const SubTitle = styled.span`
  color: var(--text-gray);
  font-size: 1.5rem;
  font-family: inter;
`;


export const ImgSubtext = styled.span`
  display: flex;
  justify-content: center;

  font-weight: 700;
  font-size: 1.5rem;

  color: var(--yellow);
`;
