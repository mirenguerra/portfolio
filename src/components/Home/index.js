import React from 'react';
import './styles.scss';
import Menu from '../Menu/index';
import AboutMe from '../AboutMe/index';

function Home() {
  return (
    <div className="Home">
      <h1>Home</h1>
     <Menu />
     <AboutMe />
    </div>
  );
}

export default Home;
