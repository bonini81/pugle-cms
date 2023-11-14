import "../scss/Login.scss";
import Button from "../components/Boton";
import TextField from "../components/CoTextField";
import Title from "../components/Title";

const Login = () => {
  return (
    <section className="main-wrapper-login-box">
      <div className="login-box-styles">
        <Title titleServices="Login" renderSubtitle={false} />
        <TextField data-testid="username" label="Username" type="text" />
        <TextField data-testid="username" label="Password" type="password" />
        <div className="login-button-styles">
          <Button variant="contained" data-testid="login">
            Enviar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Login;
