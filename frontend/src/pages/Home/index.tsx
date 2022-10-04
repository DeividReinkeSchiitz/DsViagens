import React from 'react';
import {Container} from './styles';
import Slider from "../../components/Slider";
import Header from "../../components/Header";
import HelperBox from "../../components/HelperBox";

interface HomeProps {
    id: string;
}

function App(props: HomeProps) {
    return (
        <Container id={props.id}>
            <HelperBox/>
            <Slider/>
            <Header/>
        </Container>
    );
}

export default App;