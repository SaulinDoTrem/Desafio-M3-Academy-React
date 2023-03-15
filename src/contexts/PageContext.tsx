import { createContext, useState } from "react";

interface PageContextData {
    isOpened: boolean;
    setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PageContext = createContext({} as PageContextData);

export const PageProvider = ({ children }: any) => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <PageContext.Provider value={{ isOpened, setIsOpened }}>{children}</PageContext.Provider>
    );
};

export type { PageContextData };
