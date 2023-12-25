import React from 'react';

import './App.css';
import { Card } from './components/Card.styled';
import { BodySpace } from './components/BodySpace.styled';
import { Content } from './components/Content.styled';
import { Headline } from './components/Headline.styled';
import { Text } from './components/Text.styled';
import { ButtonSpace, StyledBtn } from './components/Button.styled';

function App() {
  return (
    <div className="App">
      <Card>
        <Content />
        <BodySpace>
          <Headline>Headline</Headline>
          <Text>Faucibus. Faucibus. Sit sit sapien sit <br /> tempusrisu ut. Sit molestie ornare in venen.</Text>
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
