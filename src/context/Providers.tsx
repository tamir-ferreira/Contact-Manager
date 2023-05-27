import { ContactProvider } from "./ContactContext";
import { ClientProvider } from "./ClientContext";
import { ChildrenProps } from "../interfaces";

export const Providers = ({ children }: ChildrenProps) => {
  return (
    <ClientProvider>
      <ContactProvider>{children}</ContactProvider>
    </ClientProvider>
  );
};
