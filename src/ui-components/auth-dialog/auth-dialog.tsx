import { ModalContainer } from "..";
import { AuthDialogProps } from "./types";

export function AuthDialog({ show, onClose }: AuthDialogProps) {
  return (
    <ModalContainer onRequestClose={onClose} visible={show !== null}>
      {show === "log-in" && (
        <div className="text-white">Authentification Log In</div>
      )}
      {show === "sign-up" && (
        <div className="text-white">Authentification Sign Up</div>
      )}
    </ModalContainer>
  );
}
