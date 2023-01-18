import { withNoneAuth } from '@hoc/index';
import { Container, LoginForm } from './components';

const LoginPage = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

export default withNoneAuth(LoginPage);
