import { useState } from "react";
import { styled } from "styled-components";
import moment from "moment";
export default function Inputs({ setDays, setMonths, setYears }) {
    const [iyars, setIyars] = useState("");
    const [imonth, setImonth] = useState("");
    const [iday, setIday] = useState("");
    const actualDay = moment().date();
    const actualMonth = moment().month();
    const actualYears = moment().year();

    const calcYears = () => {
        if (actualMonth + 1 < imonth) {
            setYears(actualYears - 1 - iyars);
        } else {
            setYears(actualYears - iyars);
        }
        setIyars("");
    };

    const calcMonth = () => {
        if (imonth > actualMonth + 1) {
            setMonths(Math.abs(imonth - actualMonth - 12));
        } else if (iday <= actualDay) {
            setMonths(Math.abs(imonth - (actualMonth + 1)));
        } else {
            setMonths(actualMonth - imonth);
        }

        setImonth("");
    };

    const handleCalcAge = () => {
        if (iday === "" || isNaN(iday) || iday < 0) return;
        if (iday > actualDay) {
            setDays(30 - (iday - actualDay));
        } else {
            setDays(actualDay - iday);
        }
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
                    placeholder="DD"
                    value={iday}
                    onChange={(e) => setIday(e.target.value)}
                />
            </div>
            <div>
                <p className="uppercase text-smokeygrey">month</p>
                <Inputss
                    type="text"
                    placeholder="MM"
                    value={imonth}
                    onChange={(e) => setImonth(e.target.value)}
                />
            </div>
            <div>
                <p className="uppercase text-smokeygrey">year</p>
                <Inputss
                    type="text"
                    placeholder="YYYY"
                    value={iyars}
                    onChange={(e) => setIyars(e.target.value)}
                />
            </div>
            <ContainerBtn className="col-span-3 flex justify-center mt-10 mb-10">
                <Btn onClick={handleCalcAge}>
                    <Svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="46"
                        height="44"
                        viewBox="0 0 46 44"
                    >
                        <g fill="none" stroke="#FFF" strokeWidth="2">
                            <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
                        </g>
                    </Svg>
                </Btn>
            </ContainerBtn>
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

export const ContainerBtn = styled.div`
  position: relative;

  &::before {
    content: "";
    height: 1px;
    width: 90%;
    background: #dbdbdb;
    position: absolute;
    bottom: 50%;
  }
`;

export const Svg = styled.svg`
  height: 1.5rem;
  width: 1.5rem;
`;

export const Btn = styled.button`
  background-color: #854dff;
  padding: 1rem;
  border-radius: 50%;
  position: relative;
`;
