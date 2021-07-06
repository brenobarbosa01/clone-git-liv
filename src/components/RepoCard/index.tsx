import React from 'react';
import { Link } from 'react-router-dom'
import {
  Container,
  Topside,
  RepoIcon,
  Botside,
  StarIcon,
  ForkIcon,
} from './styles';

interface Props {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;

}

const RepoCard: React.FC<Props> = ({
  username,
  reponame,
  description,
  language,
  stars,
  forks,

}) => {
  const languageClass = language ? language.toLowerCase() : 'other';

  return (

    <Container>
      <Topside className='Usertop'>

        <header>
          <Link to={`/${username}/${reponame}`}>{reponame}</Link>
        </header>
        <p>{description}</p>

      </Topside>
      <Botside>
        <ul>
          {language && (
            <li>
              <div className={`language ${languageClass}`} />
              <span>{language}</span>
            </li>
            )
          }
        </ul>

      </Botside>

    </Container>

  )
}

export default RepoCard;