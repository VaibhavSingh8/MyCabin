import React from "react";
import Button from "./Button";

const ConfirmDelete = ({ resourceName, onConfirm, disabled, onModalClose }) => {
  return (
    <div className="flex flex-col gap-4 max-w-xl">
      <h3>Delete {resourceName}</h3>
      <p className="text-gray-500">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>
      <div className="flex justify-end gap-4">
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onModalClose}
        >
          Cancel
        </Button>
        <Button
          variation="danger"
          disabled={disabled}
          onClick={onConfirm}
          className="bg-red-500 hover:bg-red-700"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
