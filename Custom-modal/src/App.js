import "./styles.css";
import Modal from "./components/Modal";
import { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [content] = useState("Your Custom Message");

  return (
    <div className="App">
      <h1>Custom Modal</h1>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal
        showModal={showModal}
        content={content}
        handleCloseModal={() => setShowModal(false)}
      />
    </div>
  );
}
