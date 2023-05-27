import { useContext } from "react";
import { ContactContext } from "../../context/ContactContext";
import { ClientContext } from "../../context/ClientContext";
import { StyledCardContact } from "./styles";
import { format } from "date-fns";
import { Contact } from "../../interfaces";

export const ContactCard = () => {
  const { client } = useContext(ClientContext);
  const { setContactSelected, setModalAdd, setModalOpen } =
    useContext(ContactContext);

  const formatDate = (dateString: string) => {
    const formattedDate = format(new Date(dateString), "dd-MM-yyyy");
    return formattedDate;
  };
  return (
    <>
      {client?.contacts.map((contact: Contact) => (
        <StyledCardContact
          key={contact.id}
          onClick={() => {
            setContactSelected(contact);
            setModalAdd(false);
            setModalOpen(true);
          }}
        >
          <h4 className="font-headline-bold ">{contact.name}</h4>
          <div>
            <span className="font-headline-gray">{contact.telephone}</span>
            <span className="font-headline-gray">{contact.email}</span>
            <span className="font-headline-gray">
              {formatDate(contact.createdAt)}
            </span>
          </div>
        </StyledCardContact>
      ))}
    </>
  );
};
