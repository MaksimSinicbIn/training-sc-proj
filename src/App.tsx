import React from 'react';

import './App.css';
import { Card } from './components/Card.styled';
import { BodySpace } from './components/BodySpace.styled';
import { Title } from './components/Headline.styled';
import { Text } from './components/Text.styled';
import { ButtonSpace, StyledBtn } from './components/Button.styled';
import { Image } from './components/Content.styled';
import img from './assets/images/Dune.png'

function App() {
  return (
    <div className="App">
      <Card>
        <Image src={img} alt=""/>
        <BodySpace>
          <Title>Headline</Title>
          <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
          <ButtonSpace>
            <StyledBtn>See more</StyledBtn>
            <StyledBtn>Save</StyledBtn>
          </ButtonSpace>
        </BodySpace>
      </Card>
    </div>
  );
}

export default App;
