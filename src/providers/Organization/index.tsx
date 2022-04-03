import { createContext, useState, useContext } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import api from "../../services/api";
import type { ReactNode } from "react";

interface IProvidersProps {
  children: ReactNode;
}

interface IOrganization {
  avatar_url: string;
  name: string;
  description: string;
  location: string;
  twitter_username: string;
  blog: string;
  is_verified: boolean;
}

interface IOrganizationProps {
  organization: IOrganization;
  searchOrganization: (a: string) => void;
}

const OrganizationContext = createContext({} as IOrganizationProps);

export function OrganizationProvider({ children }: IProvidersProps) {
  const router = useRouter();

  const [organization, setOrganization] = useState({} as IOrganization);

  async function searchOrganization(organizationName: string) {
    const res = await api.get(`/orgs/${organizationName}`).catch((err) => {
      console.log(err);
      toast.error("Organization not found!");
    });

    if (!res?.data) return;

    console.log(res.data);
    setOrganization(res.data);

    router.push(`/org/${res.data.name}`);
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
