export interface Contact {
  id: string;
  name: string;
  email: string;
  telephone: string;
  createdAt: string;
}

export interface ContactContextProps {
  modalAdd: boolean;
  modalOpen: boolean;
  contactSelected: Contact | null;
  setModalAdd: (modalAdd: boolean) => void;
  setModalOpen: (modalOpen: boolean) => void;
  setContactSelected: (contactSelected: Contact | null) => void;
  createContactSubmit: (data: any) => Promise<void>;
  deleteContactSubmit: (data: any) => Promise<void>;
  updateContactSubmit: (data: any) => Promise<void>;
}
