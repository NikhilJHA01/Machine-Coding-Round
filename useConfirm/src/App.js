import { useState } from "react";
import "./styles.css";
import useConfirm from "./useConfirm";

export default function App() {
  const { triggerConfirm, ConfirmDialog } = useConfirm();

  const [deleteMessage, setDeleteMessage] = useState(false);

  const handleDelete = async () => {
    const deleteText = await triggerConfirm("D you want to delete it?");
    console.log(deleteText);
    setDeleteMessage(deleteText);
  };

  return (
    <div className="App">
      <h1>Window.Confirm</h1>
      <button onClick={handleDelete}>Delete</button>
      <p>{deleteMessage ? "Confirmed" : "Not yet"}: Delete this text</p>
      <ConfirmDialog />
    </div>
  );
}
