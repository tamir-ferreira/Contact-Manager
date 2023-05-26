import { ContactProvider } from "./ContactContext";
import { ClientProvider } from "./ClientContext";

export const Providers = ({ children }) => {
  return (
    <ClientProvider>
      <ContactProvider>{children}</ContactProvider>
    </ClientProvider>
  );
};
