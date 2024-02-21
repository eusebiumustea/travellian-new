import { PropsWithChildren } from "react";
import { ModalProps } from "./types";

export function ModalContainer({
  children,
  onRequestClose,
  visible,
}: PropsWithChildren<ModalProps>) {
  if (visible) {
    return (
      <div className="absolute z-50 h-screen w-screen top-0 left-0">
        <div
          onClick={onRequestClose}
          className="w-full h-full bg-black opacity-50 absolute -z-10"
        />
        {children}
      </div>
    );
  }
}
