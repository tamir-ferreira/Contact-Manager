import { useContext, createContext, useState } from "react";
import {
  createContact,
  deleteContact,
  getClient,
  updateContact,
} from "../services/api";
import { ClientContext } from "./ClientContext";
import { ChildrenProps } from "../interfaces";

interface Contact {
  id: string;
  name: string;
  email: string;
  telephone: string;
}

interface ContactContextProps {
  modalAdd: boolean;
  modalOpen: boolean;
  contactSelected: Contact;
  setModalAdd: (modalAdd: boolean) => void;
  setModalOpen: (modalOpen: boolean) => void;
  setContactSelected: (contactSelected: Contact) => void;
  createContactSubmit: (data: any) => Promise<void>;
  deleteContactSubmit: (data: any) => Promise<void>;
  updateContactSubmit: (data: any) => Promise<void>;
}

export const ContactContext = createContext<ContactContextProps>(
  {} as ContactContextProps
);

export const ContactProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [contactSelected, setContactSelected] = useState<Contact>(
    {} as Contact
  );
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

  const createContactSubmit = async (data: any) => {
    setLoading(true);

    const response = await createContact(data);
    response ? closeModal() : setLoading(false);
  };

  const deleteContactSubmit = async (data: any) => {
    setLoading2(true);
    const response = await deleteContact(data);
    response ? closeModal() : setLoading2(false);
  };

  const updateContactSubmit = async (data: any) => {
    setLoading(true);
    const contact_id = (contactSelected as Contact).id;
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
