import { useRef, useState } from "react";

const useConfirm = () => {
  const awaitingPromiseRef = useRef(null);
  const [showDialog, setShowDialog] = useState(false);

  const [content, setContent] = useState("Are you sure you want to delete?");

  const triggerConfirm = (content) => {
    setShowDialog(true);
    setContent(content);
    return new Promise((resolve) => {
      awaitingPromiseRef.current = resolve;
    });
  };

  const ConfirmDialog = () => {
    const handleCancel = () => {
      awaitingPromiseRef.current(false);
      setShowDialog(false);
    };

    const handleOK = () => {
      awaitingPromiseRef.current(true);
      setShowDialog(false);
    };

    if (!showDialog) return null;
    else
      return (
        <div className="modal">
          <div className="modal-header"></div>
          <div className="modal-body">
            <h3>{content}</h3>
          </div>

          <div className="modal-footer">
            <button onClick={handleOK}>Ok</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      );
  };

  return { triggerConfirm, ConfirmDialog };
};

export default useConfirm;
