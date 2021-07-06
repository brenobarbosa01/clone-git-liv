import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, Tab, } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard'
import RandomCalendar from '../../components/RandomCalendar';
import { APIUser, APIRepo } from '../../@types';


interface Data {
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

const Profile: React.FC = () => {
  const { username = 'camunda' } = useParams()
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
      fetch(`https://api.github.com/users/${username}/packages`)
    ]).then(async (responses) => {
      const [userResponse, reposResponse] = responses;

      if (userResponse.status == 404) {
        setData({ error: 'Usuário não encontrado' })
        return;
      }
      const user = await userResponse.json();
      const repos = await reposResponse.json();

      const shuffledRepos = repos.sort(() => 0.50 - Math.random());
      const slicedRepos = shuffledRepos.slice(0, 6);

      setData({
        user,
        repos: slicedRepos
      });

    })
  }, [username]);

  if (data?.error) {
    return <h1>{data.error}</h1>
  }
  if (!data?.user || !data?.repos) {
    return <h1>Loading...</h1>
  }

  const TabOver = () => (
    <div className="content">
      <span className="label"><a href='https://github.com/orgs/camunda/people'>{"Overview"}</a></span>

    </div>
  )
  const TabRepo = () => (
    <div className="content">
      <span className="label"><a href='https://github.com/camunda'>{"Repositories"}</a></span>

    </div>
  )
  const TabPack = () => (
    <div className="content">
      <span className="label"><a href='https://github.com/orgs/camunda/packages'>{"Packages"}</a></span>

    </div>
  )
  const TabProj = () => (
    <div className="content">
      <span className="label"><a href='https://github.com/orgs/camunda/projects'>{"Projects"}</a></span>


    </div>
  )



  return (
    <Container>

      <Main>
        <LeftSide>
          <ProfileData
            user={data.user}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabOver />
            <TabRepo />
            <TabPack />
            <TabProj />

            <span className="line"></span>

          </Tab>

          <Repos>
            <Tab className="desktop">
              <div className="wrapper">
                <span className="offset"></span>
                <TabOver />
                <TabRepo />
                <TabPack />
                <TabProj />
              </div>



            </Tab>
            <h2>Popular Repositories</h2>

            <div>


              {data.repos.map((item) => (
                <RepoCard
                  key={item.name}
                  username={item.owner.login}
                  reponame={item.name}
                  description={item.description}
                  language={item.language}
                  stars={item.stargazers_count}
                  forks={item.forks}
                />
              ))}
            </div>


          </Repos>
          <CalendarHeading>
            Contributions in the last year (não condiz com o calendário real)

          </CalendarHeading>

          <RandomCalendar />

        </RightSide>
      </Main>
    </Container>

  );
}

export default Profile;