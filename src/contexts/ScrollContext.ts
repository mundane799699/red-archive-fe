import React, { createContext } from "react";

export const ScrollContext =
  createContext<React.RefObject<HTMLDivElement> | null>(null);
