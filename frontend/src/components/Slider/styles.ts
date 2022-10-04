import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  position: absolute;
  display: flex;

  justify-content: center;
  align-items: center;
  overflow: hidden;
`;


export const ImageFilter = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
  opacity: 1;
  position: absolute;
  z-index: -1;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 900px;

  position: relative;

  z-index: -2;


  // liner gradient
`;

export const Wrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
`;

export const ButtonLeft = styled.img`
  position: relative;
  padding-left: 2rem;
  left: 0;
`;


export const ButtonRight = styled.img`
  right: 0;
  position: relative;
  padding-left: 2rem;

  rotate: 180deg;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 10rem;
  margin-bottom: 20rem;

  align-items: flex-end;
`;

export const Title = styled.p`
  position: relative;
  display: inline-block;

  font-size: 8rem;
  font-family: Inter;
  font-weight: Bold;

  color: var(--white);
  //after content
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background: var(--white);
    bottom: -1rem;
    right: 0;
  }
`;

export const SubTitle = styled.p`
  font-size: 3rem;
  padding-top: 3rem;
  font-family: Cabian;
  color: var(--white);

  text-align: right;
`;
