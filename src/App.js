import React from 'react';
import Header from './components/Header/Header';
import SocialMedias from './components/SocialMedias/SocialMedias';
import './index.css'

const App = () => {
  return (
    <>
      <Header name = 'Matheus' sobrenome = 'Pano'/>
      <SocialMedias />
    </>
  );
}

export default App;
