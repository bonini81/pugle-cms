import { useForm } from "react-hook-form";

import "../scss/Login.scss";
import Button from "../components/Boton";
import TextField from "../components/CoTextField";

const Login = (): JSX.Element => {

  const  { register, handleSubmit } = useForm();

  return (
    <section className="main-wrapper-login-box">
      <div className="login-box-styles">
        <h1>Login Pugle CMS</h1>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <TextField data-testid="username" label="Username" type="text" />
          <TextField
            data-testid="username"
            label="Password"
            type="password"
            className="login-field-styles"
          />
          <div className="login-button-styles">
            <Button variant="contained" data-testid="login">
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
