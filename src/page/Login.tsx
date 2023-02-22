import { flexCenter } from "@utils/styles/Minxin";
import styled from "styled-components";

const LoginWrapper = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  ${flexCenter}
`;

const LoginForm = styled.form`
  width: 34rem;
  height: 45rem;
  border-radius: 1rem;
  background-color: yellow;
`;

const Login = () => {
  return (
    <LoginWrapper>
      <LoginForm></LoginForm>
    </LoginWrapper>
  );
};

export default Login;
