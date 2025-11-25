"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { LeadModal } from "./LeadModal";

interface LeadModalContextType {
  openModal: (planName?: string) => void;
  closeModal: () => void;
}

const LeadModalContext = createContext<LeadModalContextType | null>(null);

export function useLeadModal() {
  const context = useContext(LeadModalContext);
  if (!context) {
    throw new Error("useLeadModal must be used within LeadModalProvider");
  }
  return context;
}

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [planName, setPlanName] = useState<string | undefined>();

  const openModal = (plan?: string) => {
    setPlanName(plan);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setPlanName(undefined);
  };

  return (
    <LeadModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <LeadModal isOpen={isOpen} onClose={closeModal} planName={planName} />
    </LeadModalContext.Provider>
  );
}
