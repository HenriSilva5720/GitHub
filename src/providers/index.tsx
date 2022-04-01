import type { ReactNode } from "react";
import { OrganizationProvider } from "./Organization";

interface IProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: IProvidersProps) {
  return <OrganizationProvider>{children}</OrganizationProvider>;
}
