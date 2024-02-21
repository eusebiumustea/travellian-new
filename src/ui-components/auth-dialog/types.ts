export type AuthDialogProps = {
  show: "sign-up" | "log-in" | null;
  onClose: () => void;
};
