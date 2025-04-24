import React from "react";
import WindowsBtn from "./WindowsBtn";
const WindowsModal = () => {
  return (
    <section className="w-80 bg-gray-50 h-80">
      <div className="bg-orange-50">
        <div className="btn-container">
          <WindowsBtn />
          <WindowsBtn color="yellow" />
          <WindowsBtn color="green" />
        </div>
        <h3>Header</h3>
      </div>
    </section>
  );
};

export default WindowsModal;
