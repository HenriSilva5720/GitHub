import { OrganizationProvider } from "./Organization";
import { IProvidersProps } from "../types";

export default function Providers({ children }: IProvidersProps) {
  return <OrganizationProvider>{children}</OrganizationProvider>;
}
