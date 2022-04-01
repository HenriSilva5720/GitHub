import { createContext, useState, useContext } from "react";
import api from "../../services/api";
import type { ReactNode } from "react";

interface IProvidersProps {
  children: ReactNode;
}

interface IOrganization {
  avatar_url: string;
  description: string;
  name: string;
  blog: string;
  location: string;
  twitter_username: string;
}

interface IOrganizationProps {
  organization: IOrganization;
  searchOrganization: (a: string) => void;
}

const OrganizationContext = createContext({} as IOrganizationProps);

export function OrganizationProvider({ children }: IProvidersProps) {
  const [organization, setOrganization] = useState({} as IOrganization);

  async function searchOrganization(organizationName: string) {
    const res = await api
      .get(`/orgs/${organizationName}`)
      .catch((err) => console.log(err));

    if (!res?.data) return;

    setOrganization(res.data);
  }

  return (
    <OrganizationContext.Provider value={{ organization, searchOrganization }}>
      {children}
    </OrganizationContext.Provider>
  );
}

export function useOrganization() {
  return useContext(OrganizationContext);
}
