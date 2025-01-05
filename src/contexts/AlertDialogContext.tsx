import { createContext, useContext, useState, ReactNode } from "react";
import { PromptDialog } from "@/components/PromptDialog";

interface AlertDialogContextProps {
  showDialog: (options: {
    title: string;
    description: string;
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm: () => void;
    loading?: boolean;
  }) => void;
  closeDialog: () => void;
}

const AlertDialogContext = createContext<AlertDialogContextProps | undefined>(
  undefined
);

export const useAlertDialog = () => {
  const context = useContext(AlertDialogContext);
  if (!context) {
    throw new Error(
      "useAlertDialog must be used within an AlertDialogProvider"
    );
  }
  return context;
};

export const AlertDialogProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogProps, setDialogProps] = useState({
    title: "",
    description: "",
    confirmLabel: "Confirm",
    cancelLabel: "Cancel",
    onConfirm: () => {},
    loading: false,
  });

  const showDialog = ({
    title,
    description,
    confirmLabel = "Confirm",
    cancelLabel = "Cancel",
    onConfirm,
    loading = false,
  }: {
    title: string;
    description: string;
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm: () => void;
    loading?: boolean;
  }) => {
    setDialogProps({
      title,
      description,
      confirmLabel,
      cancelLabel,
      onConfirm,
      loading,
    });
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <AlertDialogContext.Provider value={{ showDialog, closeDialog }}>
      {children}
      <PromptDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title={dialogProps.title}
        description={dialogProps.description}
        confirmLabel={dialogProps.confirmLabel}
        cancelLabel={dialogProps.cancelLabel}
        onConfirm={() => {
          dialogProps.onConfirm();
          closeDialog();
        }}
        loading={dialogProps.loading}
      />
    </AlertDialogContext.Provider>
  );
};
