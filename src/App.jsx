import { useState } from "react";
import "./App.css";
import Checkbox from "./Checkbox";



function App() {
  const INITIAL_DATA = [
    { id: 1, title: "Page 1" },
    { id: 2, title: "Page 2" },
    { id: 3, title: "Page 3" },
    { id: 4, title: "Page 4" },
    { id: 5, title: "Page 5" },
    { id: 6, title: "Page 6" },
  ];

  const [selectedIds, setSelectedIds] = useState([]);

  const allSelected =
    INITIAL_DATA.length > 0 && selectedIds.length === INITIAL_DATA.length;

  const toggleAll = () => {
    if (allSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(INITIAL_DATA.map((d) => d.id));
    }
  };

  const toggleOne = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((sid) => sid !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  return (
    <div className="w-full h-screen bg-[#E5E5E5] flex items-center justify-center font-sans antialiased">
      <div className="w-[370px] h-[326px] bg-white rounded-[6px] shadow-[0_4px_15px_rgba(0,0,0,0.08)] flex flex-col border border-[#EEEEEE] overflow-hidden text-[#1F2128] py-[10px]">
        <div className="flex-none w-full py-[8px] pl-[22px] pr-[15px]">
          <Checkbox
            label="All pages"
            checked={allSelected}
            onChange={toggleAll}
          />
        </div>

        <div className="h-[0.7px] bg-[#CDCDCD] mx-[15px]"></div>

        <div className="flex-1 overflow-y-auto px-[15px] py-[8px] pl-[22px] pr-[15px] max-h-[164px] custom-scrollbar">
          {INITIAL_DATA.map((page) => (
            <div key={page.id}>
              <Checkbox
                label={page.title}
                checked={selectedIds.includes(page.id)}
                onChange={() => toggleOne(page.id)}
              />
            </div>
          ))}
        </div>

        <div className="h-[0.7px] bg-[#CDCDCD] mx-[15px] my-2"></div>

        <div className="flex-none p-[15px] w-[340px]">
          <button className="w-[340px] h-[40px] bg-[#FFCE22] text-[14px] py-[10px] px-[20px] rounded-[4px] font-normal transition-colors outline-none 
          hover:bg-[#FFD84D] active:bg-[#FFCE22] text-[#1F2128] ">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;