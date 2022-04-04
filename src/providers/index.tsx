import { OrganizationProvider } from "./Organization";
import { PaginationProvider } from "./Pagination";
import { IProvidersProps } from "../types";

export default function Providers({ children }: IProvidersProps) {
  return (
    <OrganizationProvider>
      <PaginationProvider>{children}</PaginationProvider>
    </OrganizationProvider>
  );
}
