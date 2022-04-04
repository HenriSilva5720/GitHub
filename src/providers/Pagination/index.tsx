import { createContext, useState, useContext } from "react";
import { IProvidersProps, IPaginationProps } from "../../types";

const PaginationContext = createContext({} as IPaginationProps);

export function PaginationProvider({ children }: IProvidersProps) {
  const [page, setPage] = useState(1);

  function previousPage() {
    if (page <= 0) return;

    setPage(page - 1);
  }

  function nextPage(repoQuantity: number) {
    if (repoQuantity < 10) return;

    setPage(page + 1);
  }

  return (
    <PaginationContext.Provider
      value={{ page, setPage, previousPage, nextPage }}
    >
      {children}
    </PaginationContext.Provider>
  );
}

export function usePage() {
  return useContext(PaginationContext);
}
