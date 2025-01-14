import React, { useState } from "react";
import { Modal } from "antd";

interface SSModalProps {
  title?: string;
  content: React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  btnName: string;
  icon: React.ReactNode;
}

const SSModal = ({
  title = "Default Title",
  content,
  onCancel,
  btnName,
  icon,
  onConfirm
}: SSModalProps) => {
  const [open, setOpen] = useState(false);
  const handleCancel = () => {
    if (onCancel) onCancel();
    setOpen(false);
  };
  const showModal = () => {
    setOpen(true);
  };

  return (
    <div>
      <button
        onClick={showModal}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 flex gap-2 items-center"
      >
        {icon} {btnName}
      </button>
      <Modal
        open={open}
        title={title}
        onCancel={handleCancel}
        onOk={onConfirm}
        footer={
          <div>
          </div>
        }
      >
        <div className="space-y-4">{content}</div>
      </Modal>
    </div>
  );
};

export default SSModal;
