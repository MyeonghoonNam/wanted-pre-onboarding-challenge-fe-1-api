import { withNoneAuth } from '@hoc/index';
import { Container, SignUpForm } from './components';

const SignUpPage = () => {
  return (
    <Container>
      <SignUpForm />
    </Container>
  );
};

export default withNoneAuth(SignUpPage);
