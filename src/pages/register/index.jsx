import { StyledRegister } from "./styles";
import { FormRegister } from "../../components/Form/FormRegister";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { useContext } from "react";
import { ClientContext } from "../../context/ClientContext";

export const RegisterPage = () => {
  const { setShowPass } = useContext(ClientContext);

  return (
    <StyledRegister>
      <main>
        <Link to={`/`}>
          <Button
            size="small"
            color="gray"
            onClick={() => setShowPass(false)}
            children={"Voltar"}
          />
        </Link>
        <FormRegister />
      </main>
    </StyledRegister>
  );
};
