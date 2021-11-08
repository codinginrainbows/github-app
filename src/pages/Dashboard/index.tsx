import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => { 
  return (
    <>
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input type="text" placeholder="digite o nome do perfil aqui" />
        <button>Pesquisar</button>
      </Form>
      <Repositories>
        <a href="iashruasudasuda,famif">
          <img src="https://isaojose.com.br/wp-content/uploads/2020/12/blank-profile-picture-mystery-man-avatar-973460.jpg" alt="123" />
          <div>
            <strong>perfil</strong>
            <p>repo</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="iashruasudasuda,famif">
          <img src="https://isaojose.com.br/wp-content/uploads/2020/12/blank-profile-picture-mystery-man-avatar-973460.jpg" alt="123" />
          <div>
            <strong>perfil</strong>
            <p>repo</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="iashruasudasuda,famif">
          <img src="https://isaojose.com.br/wp-content/uploads/2020/12/blank-profile-picture-mystery-man-avatar-973460.jpg" alt="123" />
          <div>
            <strong>perfil</strong>
            <p>repo</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}
export default Dashboard;