import React from 'react'

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label className="group flex items-center justify-between cursor-pointer py-[8px] select-none hover:bg-transparent">
      <span className="text-[#1F2128] text-[14px] font-normal leading-tight">
        {label}
      </span>

      <div className="relative w-[23px] h-[23px] ml-4">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />

        <div
          className="
          absolute inset-0 rounded-[6px] border-[1px] opacity-[60%] border-[#CDCDCD] bg-white transition-all 
          
          group-hover:border-[#BDBDBD] group-hover:opacity-100
          
          peer-active:ring-[3px] peer-active:ring-[#2469F6]/10 peer-active:border-[#BDBDBD]

          peer-focus-visible:ring-4 peer-focus-visible:ring-[#2469F6]/10 peer-focus-visible:border-[#BDBDBD] peer-focus-visible:opacity-100

          peer-checked:bg-[#2469F6] peer-checked:border-0 peer-checked:opacity-100

          peer-checked:group-hover:bg-[#5087F8] peer-checked:group-hover:border-0

          peer-checked:peer-active:ring-[3px] peer-checked:peer-active:ring-[#2469F6]/10 peer-checked:peer-active:border-0
  
          flex items-center justify-center

          text-transparent
          group-hover:text-[#E3E3E3]
          peer-active:text-[#878787]
          peer-focus-visible:text-[#878787]
          peer-checked:text-white
          peer-checked:peer-active:text-white
        "
        >
          <svg
            width="17"
            height="13"
            viewBox="0 0 17 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 6.572L6.04879 11.5072C6.06925 11.5254 6.10055 11.5237 6.11899 11.5035L16.14 0.5"
              stroke="currentColor"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </label>
  );
};


export default Checkbox