import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Hi There!</h1>
        <h4>I’m Varun  and I’m a Cloud Technical Support Engineer!</h4>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
      <Thumbnail>
        <img src= "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/64777438_2617007594977321_1238105661162651648_n.jpg?_nc_cat=103&_nc_sid=174925&_nc_ohc=I5O0GwixNcEAX8MiC6Y&_nc_ht=scontent-sjc3-1.xx&oh=3c138ef3bd235931a66ddc53a2d68a5d&oe=5F00B919" style = {{ borderRadius: "25px"}} alt="I’m John and I’m a JAMStack engineer!" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
