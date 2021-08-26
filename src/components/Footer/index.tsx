import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

import { Container, Contact } from './styles';

export const Footer: React.FC = () => {
  return (
    <Container>
      <Contact>
        <h4>Samuel De Sousa Dias</h4>
        <ul>
          <li><AiOutlineMail /> samuel.sdias@hotmail.com</li>
          <li><AiOutlinePhone /> (85) 9 9124-0397</li>
        </ul>
      </Contact>
      
      <h3>Liven Tech</h3>
    </Container>
  )
}