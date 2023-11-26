import { Controller, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import "../scss/Login.scss";
import Button from "../components/Boton";
import TextField from "../components/CoTextField";

const Login = () => {
  interface FormValues {
    username: string;
    password: string;
  }

  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { register, handleSubmit, control } = form;

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <section className="main-wrapper-login-box">
      <div className="login-box-styles">
        <h1>Login Pugle CMS</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            defaultValue="Username"
            render={({ field }) => (
              <TextField
                data-testid="username"
                className="login-field-styles"
                label="Username"
                {...register("username")}
                {...field}
                ref={null}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue="Password"
            render={({ field }) => (
              <TextField
                data-testid="password"
                label="Password"
                className="login-field-styles"
                {...register("password")}
                {...field}
                ref={null}
              />
            )}
          />
          <div className="login-button-styles">
            <Button
              variant="contained"
              data-testid="login"
              type="submit"
              value="Login"
            >
              Enviar
            </Button>
          </div>
        </form>
      </div>
      <DevTool control={control} />
    </section>
  );
};

export default Login;
