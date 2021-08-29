import { Lottie } from '@crello/react-lottie'
import animation from './loading.json';

import { Container } from './styles';

export const Loading: React.FC = () => (
  <Container>
    <Lottie
      config={{
        animationData: animation,
        loop: true,
      }}
      speed={1}
      width="200px"
    />
  </Container>
);