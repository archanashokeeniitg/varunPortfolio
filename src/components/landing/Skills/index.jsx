import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src= "https://media-exp1.licdn.com/dms/image/C4E03AQEmeAiHO-rCcQ/profile-displayphoto-shrink_800_800/0?e=1596672000&v=beta&t=KSHrH3B6teL9b6TpdV9BMQIacmXzVyJfYPliWD6QAdg" style = {{ borderRadius: "25px"}}  alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail>
      <Details>
        <h1>Hi There!</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
          standard dummy.
        </p>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
