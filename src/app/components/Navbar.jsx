import { useState } from "react";


const Navbar = () => {
    const [inputText, setInputText] = useState('');
    const handleTextChange = (e) => {
        setInputText(e.target.value);
      };
    
    return(
        <div className="h-[10vh] w-[100%] flex justify-between items-center px-10 font-medium">
            <h1>AMUStudy</h1>
            <input
                type="text"
                className="styled-input w-[500px] py-2 pl-10 bg-[#2b3336] rounded-full focus:outline-none"
                placeholder="Search AMUStudy"
                value={inputText}
                onChange={handleTextChange}
            />
            
            <button>
                Login
            </button>
        </div>
    )
}

export default Navbar;