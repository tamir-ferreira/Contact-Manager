export interface Client {
  name: string;
  email: string;
  telephone: string;
  password: string;
  passwordConfirm: string;
  contacts: [];
}

export interface Login {
  email: string;
  password: string;
}

export interface ClientContextProps {
  isMobile: boolean;
  isLandscape: boolean;
  client: Client | null;
  loading: boolean;
  loading2: boolean;
  waitClient: boolean;
  showPass: boolean;
  setClient: (client: Client | null) => void;
  loginSubmit: (data: Login) => Promise<void>;
  registerSubmit: (data: Client) => Promise<void>;
  setLoading: (loading: boolean) => void;
  setLoading2: (loading2: boolean) => void;
  setShowPass: (showPass: boolean) => void;
}
