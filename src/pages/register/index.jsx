import { StyledRegister } from "./styles";
import { FormRegister } from "../../components/Form/FormRegister";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { AnimSlideDown } from "../../components/Animation";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { ClientContext } from "../../context/ClientContext";

export const RegisterPage = () => {
  const { setShowPass } = useContext(ClientContext);
  return (
    <StyledRegister>
      {/* <AnimSlideDown> */}
      {/* <Header children={"Voltar"} onClick={() => setShowPass(false)} /> */}
      <main>
        <Link to={`/`}>
          <Button
            size="small"
            color="disabled_gray"
            onClick={setShowPass(false)}
            children={"Voltar"}
          />
        </Link>
        <FormRegister />
      </main>
      {/* </AnimSlideDown> */}
    </StyledRegister>
  );
};
