import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, GithubLogo, SearchForm } from './styles';
// import { Container } from './styles';

const Header: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event: any) {

    if (event.key === 'Enter') {
      event.preventDefault();
      navigate('/' + search.toLowerCase().trim());
    }


  }
  return (
    <Container>
      <div className='LogoGit'>
      <span >GitHub</span>
      </div>
      <SearchForm onSubmit={handleSubmit}>
        <input onKeyPress={handleSubmit}
  
          placeholder="Search or Jump ..."
          value={search}
          onChange={e => setSearch(e.currentTarget.value)}

        />
      </SearchForm>
    </Container>
  );
};

export default Header;