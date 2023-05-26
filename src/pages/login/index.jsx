import { StyledLogin } from "./styles";
import { Link } from "react-router-dom";
import { FormLogin } from "../../components/Form/FormLogin";
import { Button } from "../../components/Button";
import { useContext } from "react";
import { ClientContext } from "../../context/ClientContext";

export const LoginPage = () => {
  const { setShowPass, waitClient } = useContext(ClientContext);
  if (waitClient) {
    return (
      <div className="container-loader2">
        <span className="loader2"></span>
      </div>
    );
  }
  return (
    <StyledLogin>
      <main className="container">
        <section>
          <div>
            <FormLogin />
            <p className="font-headline-gray">
              Descubra o equilíbrio perfeito entre funcionalidade e elegância,
              uma organização eficiente e sofisticada.
            </p>
            <Link to={"/register"}>
              <Button
                size="default"
                color="gray"
                children="Cadastre-se"
                onClick={() => setShowPass(false)}
              />
            </Link>
          </div>
        </section>
      </main>
    </StyledLogin>
  );
};
