import { useContext } from "react";
import { createContext, useState } from "react";
import {
  createContact,
  deleteContact,
  getClient,
  updateContact,
} from "../services/api";
import { ClientContext } from "./ClientContext";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
  const [contactSelected, setContactSelected] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAdd, setModalAdd] = useState(true);
  const { setClient, setLoading, setLoading2 } = useContext(ClientContext);

  const closeModal = () => {
    setTimeout(async () => {
      const response = await getClient();
      setClient(response);
      setModalOpen(false);
      setLoading(false);
      setLoading2(false);
    }, 500);
  };

  const createContactSubmit = async (data) => {
    setLoading(true);

    const response = await createContact(data);
    response ? closeModal() : setLoading(false);
  };

  const deleteContactSubmit = async (data) => {
    setLoading2(true);
    const response = await deleteContact(data);
    response ? closeModal() : setLoading2(false);
  };

  const updateContactSubmit = async (data) => {
    setLoading(true);
    const contact_id = contactSelected.id;
    for (let key in data) if (data[key] === "") delete data[key];

    const response = await updateContact(contact_id, data);
    response ? closeModal() : setLoading(false);
  };

  return (
    <ContactContext.Provider
      value={{
        modalAdd,
        modalOpen,
        contactSelected,
        setModalAdd,
        setModalOpen,
        setContactSelected,
        createContactSubmit,
        deleteContactSubmit,
        updateContactSubmit,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
