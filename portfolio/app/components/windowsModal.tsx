import React from "react";
import WindowsBtn from "./windowsBtn";
const WindowsModal = () => {
  return (
    <section className="w-80 bg-gray-50 h-80 custom-scroll rounded drop-shadow overflow-scroll">
      <div className="bg-orange-50 flex flex-row items-center">
        <div className="flex flex-row gap-1 p-2">
          <WindowsBtn />
          <WindowsBtn color="yellow" />
          <WindowsBtn color="green" />
        </div>
        <h3 className="text-l">Header</h3>
      </div>
      <div className="flex">
        <div>
          Text placeholder Text placeholder Text placeholder Text placeholder
          placeholder Text placeholder Text placeholder Text placeholder Textnpm
        </div>
      </div>
    </section>
  );
};

export default WindowsModal;
