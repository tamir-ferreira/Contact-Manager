import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Client } from "../interfaces";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

export const createClient = async (client: Client): Promise<boolean> => {
  try {
    const { status } = await api.post("/clients", client);

    status === 201 &&
      toast.success("Cadastrado com Sucesso!! Redirecionando...", {
        style: {
          color: "var(--color-success)",
        },
      });

    return true;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      const { message } = axiosError.response.data as { message: string };

      if (message === "Email already exists") {
        toast.error("Email já está em uso", {
          style: {
            color: "var(--color-negative)",
          },
        });
      }
    }

    return false;
  }
};

export const loginClient = async (client: any) => {
  try {
    const { data, status } = await api.post("/login", client);

    status === 200 &&
      toast.success("Logado com Sucesso!! Aguarde...", {
        style: {
          color: "var(--color-success)",
        },
      });

    return data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      const { message } = axiosError.response.data as { message: string };

      message === "Invalid credentials" &&
        toast.error("Email / Senha inválidos!", {
          style: {
            color: "var(--color-negative)",
          },
        });
    }
    return false;
  }
};

export const getClient = async () => {
  try {
    const { data } = await api.get("/clients");

    return data;
  } catch (error) {
    toast.error("Token inválido, faça login novamente!", {
      style: {
        color: "var(--color-negative)",
      },
    });

    return null;
  }
};

export const createContact = async (contact: any) => {
  try {
    const { status } = await api.post("/contacts", contact);

    status === 201 &&
      toast.success("Contato adicionado com sucesso!", {
        style: {
          color: "var(--color-success)",
        },
      });

    return true;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      const { message } = axiosError.response.data as { message: string };

      if (message === "Email already exists") {
        toast.error("Este email já foi cadastrado!", {
          style: {
            color: "var(--color-negative)",
          },
        });
      } else {
        toast.error("Email inválido!", {
          style: {
            color: "var(--color-negative)",
          },
        });
      }
    }
    return false;
  }
};

export const deleteContact = async (contact_id: string) => {
  try {
    const { status } = await api.delete(`/contacts/${contact_id}`);

    status === 204 &&
      toast.success("Contato apagado com sucesso!", {
        style: {
          color: "var(--color-success)",
        },
      });

    return true;
  } catch (error) {
    toast.error("Token inválido! Fazer login novamente!", {
      style: {
        color: "var(--color-negative)",
      },
    });

    return false;
  }
};

export const updateContact = async (contact_id: string, body: any) => {
  try {
    const { status } = await api.patch(`/contacts/${contact_id}`, body);

    status === 200 &&
      toast.success("Contato atualizado com sucesso!", {
        style: {
          color: "var(--color-success)",
        },
      });

    return true;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      const { message } = axiosError.response.data as { message: string };

      if (message === "Email already exists") {
        toast.error("Email já está cadastrado!", {
          style: {
            color: "var(--color-negative)",
          },
        });
      }
    }
    return false;
  }
};
