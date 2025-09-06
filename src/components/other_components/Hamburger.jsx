import React from "react";

const Hamburger = ({ isOpen, onToggle, ...props }) => {
  return (
    <label
      className="flex flex-col gap-1 w-6 cursor-pointer select-none"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      {...props}
    >
      <input
        className="peer hidden"
        type="checkbox"
        checked={isOpen}
        onChange={onToggle}   // <-- wire to React
      />
      <div className={`rounded-2xl h-[2px] w-1/2 bg-white duration-500 origin-right
        ${isOpen ? 'rotate-[225deg] -translate-x-[8px] -translate-y-[2px]' : ''}`} />
      <div className={`rounded-2xl h-[2px] w-full bg-white duration-500
        ${isOpen ? '-rotate-45' : ''}`} />
      <div className={`rounded-2xl h-[2px] w-1/2 bg-white duration-500 place-self-end origin-left
        ${isOpen ? 'rotate-[225deg] translate-x-[8px] translate-y-[2px]' : ''}`} />
    </label>
  );
};

export default Hamburger;
