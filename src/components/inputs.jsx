import { useState } from "react";
import { styled } from "styled-components";
export default function Inputs({ setDays, setMonths, setYears }) {
    const [iyars, setIyars] = useState("");
    const [imonth, setImonth] = useState("");
    const [iday, setIday] = useState("");

    const dateNow = new Date();
    const calcYears = () => {
        setYears(dateNow.getFullYear() - iyars);
        setIyars("");
    };

    const calcMonth = () => { 
        if(dateNow.getDay() < Number(iday)){
            setMonths(dateNow.getMonth() - imonth)
        }else{
            setMonths((dateNow.getMonth() + 1) - imonth)
        }        
        setImonth('')
    };

    const handleCalcAge = () => {
        if (iday === "" || isNaN(iday) || iday < 0) return;
        setIday("");
        calcMonth();
        calcYears();
       
    };

    return (
        <WrapperInputs>
            <div>
                <p className="uppercase text-smokeygrey">day</p>
                <Inputss
                    type="text"
                    value={iday}
                    onChange={(e) => setIday(e.target.value)}
                />
            </div>
            <div>
                <p className="uppercase text-smokeygrey">month</p>
                <Inputss
                    type="text"
                    value={imonth}
                    onChange={(e) => setImonth(e.target.value)}
                />
            </div>
            <div>
                <p className="uppercase text-smokeygrey">year</p>
                <Inputss
                    type="text"
                    value={iyars}
                    onChange={(e) => setIyars(e.target.value)}
                />
            </div>
            <div className="col-span-3 flex justify-center mt-10 mb-10">
                <button  onClick={handleCalcAge}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="46"
                        height="44"
                        viewBox="0 0 46 44"
                        className="bg-purple rounded-full"
                    >
                        <g fill="none" stroke="#FFF" strokeWidth="2">
                            <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
                        </g>
                    </svg>
                </button>
            </div>
        </WrapperInputs>
    );
}

export const Inputss = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 10px;
  border: 2px solid #f0f0f0;
  font-size: 2rem;

  &:focus-visible {
    outline: none;
  }
`;
export const WrapperInputs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;
