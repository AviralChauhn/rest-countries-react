import { useContext } from "react";
import { ThemeContext } from "../App";
const Dropdown = ({ options, value, onChange, placeholder}) => {
    const {theme}=useContext(ThemeContext)
    return (
      <div className="dropdown">
        <select value={value} onChange={onChange} className='drop-select' id={theme}>
          <option value="All">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default Dropdown;
  