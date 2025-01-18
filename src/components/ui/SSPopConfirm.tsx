import React, { useState } from "react";
import { Modal } from "antd";

interface SSModalProps {
  title?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  name: string;
  icon: React.ReactNode;
  bgColor: string;
  alartMsg: string;
  content: React.ReactNode;
}

const SSPopConfirm = ({
  title = "Default Title",
  onCancel,
  name,
  icon,
  onConfirm,
  bgColor,
  content,
  alartMsg
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
        className={`px-4 py-2 bg-${bgColor}-500 text-white rounded-md hover:bg-${bgColor}-600 flex gap-2 items-center`}
      >
        {icon} {name}
      </button>
      <Modal
        open={open}
        title={title}
        onCancel={handleCancel}
        onOk={onConfirm}
        footer={<div />}
      >
        <div className="space-y-2">
          <h1 className="text-xl font-semibold text-gray-800">
            {alartMsg}
          </h1>
          <p className="text-sm text-gray-600">
            Warning: Deleting this item may cause data loss, affect related
            files, and cannot be undone. Are you sure you want to proceed?
          </p>
          {content}
        </div>
      </Modal>
    </div>
  );
};

export default SSPopConfirm;
