import React from "react";

interface Props {
  setToggleCard: any;
}

const CloseButton = ({ setToggleCard }: Props) => {
  return (
    <button
      onClick={() => setToggleCard(false)}
      className="absolute transition transition-all group hover:bg-cyan/80 hover:scale-105 left-5 h-8 w-8 rounded-full border-2 border-black text-center bg-cyan"
    >
      <span className="text-3xl -translate-y-1.5 block translate-x-px pointer rotate-45">
        +
      </span>
    </button>
  );
};

export default CloseButton;
