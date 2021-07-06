import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={'username'} to={'/brenobarbosa01'}>
          brenobarbosa01
        </Link>
        <span>/</span>
        <Link className={'reponame'} to={'/brenobarbosa/clone-github'}>
          clone-github
        </Link>
      </Breadcrumb>
      <p>Clonando a interface do github e consumindo sua api pública</p>
      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>
      <LinkButton href={'https://github.com/brenobarbosa01/clone-github'}>

        <GithubIcon />
        <span>see in Github</span>
      </LinkButton>

    </Container>

  );


};

export default Repo;