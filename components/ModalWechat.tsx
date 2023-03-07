import { Modal, ModalProps } from "@nextui-org/react";
import Image from "next/image";

export const QrImage = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <Image
        src="/static/about/qr.png"
        alt="qr"
        width={200}
        height={200}
        className="rounded-md"
      />
      <p className="text-sm font-semibold text-blue-500"> 👋 扫码加微</p>
    </div>
  );
};

export default function ModalWechat(props: ModalProps) {
  return (
    <Modal
      closeButton={false}
      blur
      noPadding
      autoMargin
      {...props}
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Modal.Body>
        <QrImage />
      </Modal.Body>
    </Modal>
  );
}
