import Lottie from 'lottie-react-web';
import animation from './loading.json';

import { Container } from './styles';

export const Loading: React.FC = () => (
  <Container>
    <Lottie
      options={{
        animationData: animation,
        loop: true,
      }}
      speed={1}
      width={200}
    />
  </Container>
);