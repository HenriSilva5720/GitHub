import { createContext, useState, useContext } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import api from "../../services/api";
import type { ReactNode } from "react";

interface IProvidersProps {
  children: ReactNode;
}

interface IOrganization {
  login: string;
  avatar_url: string;
  name: string;
  description: string;
  location: string;
  twitter_username: string;
  blog: string;
  is_verified: boolean;
  public_repos: number;
  repos_url: string;
}

// interface IOrganizationRepoLicense {
//   spdx_id: string;
// }

// interface IOrganizationRepos {
//   name: string;
//   description: string;
//   language: string;
//   license: IOrganizationRepoLicense;
//   stargazers_count: number;
//   forks_count: number;
//   visibility: string;
// }

interface IOrganizationProps {
  organization: IOrganization;
  // organizationRepos: IOrganizationRepos[];
  searchOrganization: (a: string) => Promise<void>;
}

const OrganizationContext = createContext({} as IOrganizationProps);

export function OrganizationProvider({ children }: IProvidersProps) {
  const router = useRouter();

  const [organization, setOrganization] = useState({} as IOrganization);

  // const [organizationRepos, setOrganizationRepos] = useState<
  //   IOrganizationRepos[]
  // >([]);

  async function searchOrganization(organizationName: string) {
    const org = await api.get(`/orgs/${organizationName}`).catch((err) => {
      console.log(err);
      toast.error("Organization not found!");
    });

    if (!org?.data) return;

    setOrganization(org.data);

    // const orgRepos = await api.get(
    //   `orgs/${org.data.login}/repos?per_page=10&page=1`
    // );

    // setOrganizationRepos(orgRepos.data);

    router.push(`/org/${org.data.login}`);
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
