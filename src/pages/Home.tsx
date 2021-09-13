import React, { FC } from 'react';
import AccordionContainer from '../components/accordion/AccordionContainer';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import JumbotronContainer from '../components/jumbotron/JumbotronContainer';

interface Props {}

const Home: FC<Props> = () => {
  return (
    <>
      <Header />
      <JumbotronContainer />
      <AccordionContainer />
      <Footer />
    </>
  );
};

export default Home;
