import empty from "../../images/empty.png";
import { useMediaQuery } from "react-responsive";
import { FaPlus } from "react-icons/fa";
import { Button } from "../../components/Button";
import { StyledDashboard } from "./styles";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { ClientContext } from "../../context/ClientContext";
import { Navigate } from "react-router-dom";
import { Modal } from "../../components/Modal";
import { ContactContext } from "../../context/ContactContext";
import { ContactCard } from "../../components/ContactCard";
import { AnimBlur } from "../../components/Animation";
import rotate from "../../images/rotate.gif";

export const DashboardPage = () => {
  const { client } = useContext(ClientContext);
  const { modalOpen, setModalOpen, setModalAdd } = useContext(ContactContext);
  const isMobile = useMediaQuery({ maxWidth: 400 });
  const isMobileHorizontal = useMediaQuery({
    query: "(orientation: landscape)",
  });

  return client ? (
    <StyledDashboard>
      {!isMobileHorizontal && isMobile ? (
        <div className="rotate">
          <img src={rotate} alt="gire a tela" />
        </div>
      ) : (
        <AnimBlur>
          <Header className="container" />
          <main className="container">
            <section className="container">
              <div>
                <h3 className="font-title-2">Sua Lista de Contatos</h3>
                <Button
                  size="plus"
                  color="dark_gray"
                  onClick={() => {
                    setModalAdd(true);
                    setModalOpen(true);
                  }}
                >
                  <FaPlus size={13} />
                </Button>
              </div>

              {client.contacts.length > 0 ? (
                <ul>
                  <li>
                    <h5 className="font-title-3">Nome</h5>
                    <div>
                      <h5 className="font-title-3">Telefone</h5>
                      <h5 className="font-title-3">Email</h5>
                      <h5 className="font-title-3">Data inclusão</h5>
                    </div>
                  </li>
                  <ContactCard />
                </ul>
              ) : (
                <div>
                  <img src={empty} alt="animação lista vazia" />
                  <h5>Você não possui contatos cadastrados até o momento.</h5>
                </div>
              )}
            </section>
          </main>

          {modalOpen && <Modal />}
        </AnimBlur>
      )}
    </StyledDashboard>
  ) : (
    <Navigate to="/" />
  );
};
