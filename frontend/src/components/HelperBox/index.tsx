import React from 'react';

import {Container, Content, ImgSubtext, SubTitle, Title, WrapBox} from "./styles";
import lowPrice from "../../assets/lowPrice.svg";
import quality from "../../assets/quality.svg";
import fastCheckIn from "../../assets/fastCheckIn.svg";

function HelperBox() {
    return (
        <Container>
            <Content>
                <WrapBox>
                    <Title>
                        Podemos te ajudar!
                    </Title>

                    <SubTitle>
                        Fale com um de nossos especialistas e descubra o melhor lugar para você e sua famila.
                    </SubTitle>
                </WrapBox>

                <WrapBox border>
                    <img src={lowPrice}/>
                    <ImgSubtext>
                        Preços Baixos
                    </ImgSubtext>
                </WrapBox>

                <WrapBox border>
                    <img src={quality}/>
                    <ImgSubtext>
                        Preços Baixos
                    </ImgSubtext>
                </WrapBox>

                <WrapBox border>
                    <img src={fastCheckIn}/>
                    <ImgSubtext>
                        Preços Baixos
                    </ImgSubtext>
                </WrapBox>
            </Content>
        </Container>
    );
}

export default HelperBox;
