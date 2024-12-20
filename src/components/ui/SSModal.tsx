import React, { useState } from "react";
import { Modal } from "antd";

interface SSModalProps {
  title?: string;
  content: React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const SSModal = ({
  title = "Default Title",
  content,
  onConfirm,
  onCancel,
}: SSModalProps) => {
  const [open, setOpen] = useState(false);
  const handleOk = () => {
    if (onConfirm) onConfirm();
    setOpen(false);
  };
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
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        View
      </button>
      <Modal
        open={open}
        title={title}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <div className="flex justify-end gap-2">
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handleOk}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Ok
            </button>
          </div>
        }
      >
        <div className="space-y-4">{content}</div>
      </Modal>
    </div>
  );
};

export default SSModal;
