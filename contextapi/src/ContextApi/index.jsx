import { createContext } from "react";

export const BioContext = createContext();

export const BioProvider = ({children}) =>{

    const myName = "sam";
    const age = 24;
    return  <BioContext.Provider value={{myName,age}}> {children} </BioContext.Provider>
 
}