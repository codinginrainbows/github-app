import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi'
import api from '../../services/api';

import { Title, Form, Repositories, Error } from './styles';

import logoImg from '../../assets/GithubLogo.svg';

interface Repository {
  full_name: string,
  description: string,
  html_url: string,
  owner: {
    login: string,
    avatar_url: string,
  }
}

const Dashboard: React.FC = () => { 
  const [newRepo, setNewRepo] = useState('');
  const [repos, setRepos] = useState<Repository[]>([]);
  const [inputError, setInputError] = useState('');
  
  async function handleAddRepo(event: FormEvent) {
    event.preventDefault();
    
    if(!newRepo) {
      setInputError('Digite nome/autor do repositório.');
      return;
    }
    
    try {
      const response = await api.get(`repos/${newRepo}`);

      const repository = response.data;

      setRepos([...repos, repository]);

      setNewRepo('');
      setInputError('');
    } catch (Err) {
      setInputError('Repositório não encontrado.');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepo}>
        <input 
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="digite o nome do perfil aqui" 
        />
        <button>Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repos.map(repo => (
          // eslint-disable-next-line react/jsx-no-target-blank
          <a key={repo.full_name} href={repo.html_url} target="_blank">
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
              <div>
                <strong>{repo.owner.login}</strong>
                <p>{repo.description}</p>
              </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard;