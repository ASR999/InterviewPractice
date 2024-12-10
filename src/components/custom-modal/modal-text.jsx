import React, { useState } from "react";
import Modal from "./modal";

const Modaltext = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open model button</button>
      {showModalPopup && (
        <Modal
          id={"custom-id"}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onClose={onClose}
          body={<div>Customized body</div>}
        />
      )}
    </div>
  );
};

export default Modaltext;
