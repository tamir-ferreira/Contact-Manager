import { yupResolver } from "@hookform/resolvers/yup";
import { modalSchemaCreate, modalSchemaUpdate } from "./schemas";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ContactContext } from "../../context/ContactContext";
import { ClientContext } from "../../context/ClientContext";
import { AnimSlideUp } from "../Animation";
import { Button } from "../Button";
import { Input } from "../Input";
import { StyledModal } from "./styles";
import { Modal as iModal } from "../../interfaces";

export const Modal = () => {
  const { loading, loading2 } = useContext(ClientContext);
  const {
    contactSelected,
    createContactSubmit,
    deleteContactSubmit,
    updateContactSubmit,
    setModalOpen,
    modalAdd,
  } = useContext(ContactContext);
  const { id, name, telephone, email } = contactSelected;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iModal>({
    mode: "onChange",
    resolver: yupResolver(modalAdd ? modalSchemaCreate : modalSchemaUpdate),
  });

  return (
    <StyledModal>
      <AnimSlideUp delay={0}>
        <div>
          <h4 className="font-title-3">
            {modalAdd ? "Cadastrar Contato" : "Editar / Excluir Contato"}
          </h4>
          <Button onClick={() => setModalOpen(false)} model={""} color={""}>
            X
          </Button>
        </div>
        <form
          onSubmit={handleSubmit(
            modalAdd ? createContactSubmit : updateContactSubmit
          )}
        >
          <Input
            label={modalAdd ? "Nome" : "Nome cadastrado"}
            type="text"
            disabled={false}
            placeholder={modalAdd ? "Digite aqui o nome completo" : name}
            register={register("name")}
            error={errors.name?.message}
          />
          <Input
            label={modalAdd ? "Email" : "Email cadastrado"}
            type="text"
            disabled={false}
            placeholder={modalAdd ? "Digite aqui o e-mail" : email}
            register={register("email")}
            error={errors.email?.message}
          />
          <Input
            label={modalAdd ? "Telefone" : "Telefone cadastrado"}
            type="text"
            disabled={false}
            placeholder={modalAdd ? "Digite aqui o telefone" : telephone}
            register={register("telephone")}
            error={errors.telephone?.message}
          />
          {modalAdd ? (
            <Button
              model="default"
              color={!loading ? "colored" : "disabled"}
              children={
                !loading ? (
                  "Cadastrar Contato"
                ) : (
                  <span className="loader"></span>
                )
              }
            />
          ) : (
            <div>
              <Button
                model="fixed_default"
                color={!loading ? "gray" : "disabled"}
                children={
                  !loading ? (
                    "Salvar alterações"
                  ) : (
                    <span className="loader"></span>
                  )
                }
              />
              <Button
                model="fixed_little"
                color={!loading2 ? "colored" : "disabled_gray"}
                children={
                  !loading2 ? "Excluir" : <span className="loader"></span>
                }
                onClick={() => deleteContactSubmit(id)}
              />
            </div>
          )}
        </form>
      </AnimSlideUp>
    </StyledModal>
  );
};
