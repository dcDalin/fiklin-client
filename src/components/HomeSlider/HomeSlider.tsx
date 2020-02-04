import React from 'react';
import { Container, Header, Icon, Button } from 'semantic-ui-react';

const HomeSlider: React.FC = () => {
  return (
    <Container text>
      <Header as="h1" content="Imagine-a-Company" inverted />
      <Header as="h2" content="Do whatever you want when you want to." inverted />
      <Button primary size="huge">
        Get Started
        <Icon name="bars" />
      </Button>
    </Container>
  );
};

export default HomeSlider;
