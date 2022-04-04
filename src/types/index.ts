import type { ReactNode } from "react";

interface IOrganizationRepoLicense {
  spdx_id: string;
}

export interface IOrganization {
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

export interface IOrganizationRepos {
  name: string;
  description: string;
  language: string;
  license: IOrganizationRepoLicense;
  stargazers_count: number;
  forks_count: number;
  visibility: string;
}

export interface IProvidersProps {
  children: ReactNode;
}

export interface IHeaderProps {
  search?: boolean;
}

export interface IInputProps {
  setShowInput: (bool: boolean) => void;
}

export interface IRepoCardProps {
  repository: IOrganizationRepos;
}

export interface IOrganizationProps {
  organization: IOrganization;
  searchOrganization: (a: string) => Promise<void>;
}
