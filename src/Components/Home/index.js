import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <Jumbotron>
      <h1>Welcome!</h1>
      <p>This page allows you to look at our users on this site!</p>
      <p>
        <Button variant="primary" href="#/users">
          Go to users now!
        </Button>
      </p>
    </Jumbotron>
  );
};

export default Home;
