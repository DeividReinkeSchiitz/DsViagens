import React from 'react';

import back2 from '../../assets/back1.png';
import ScrollButton from '../../assets/ScrollButton.svg';

import {
    BackgroundImage,
    ButtonLeft,
    ButtonRight,
    Container,
    ImageFilter,
    SubTitle,
    TextWrap,
    Title,
    Wrap
} from './styles';

function Slider() {
    return (
        <Container>
            <ImageFilter/>
            <BackgroundImage src={back2}/>

            <Wrap>
                <ButtonLeft src={ScrollButton}/>
                <TextWrap>
                    <Title>
                        Hong Kong
                    </Title>

                    <SubTitle>
                        Os melhores preços você <br/> só encontra aqui!
                    </SubTitle>

                </TextWrap>
                <ButtonRight src={ScrollButton}/>
            </Wrap>


        </Container>
    );
}

export default Slider