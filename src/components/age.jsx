import { useState } from "react";
import Inputs from "./inputs";
import { styled } from "styled-components";

export default function Ages() {
    const [years, setYears] = useState("--");
    const [months, setMonths] = useState("--");
    const [days, setDays] = useState("--");
    return (
        <Wrapper className="bg-white">
            <Inputs setDays={setDays} setMonths={setMonths} setYears={setYears} />
            <div>
                <div className="text-5xl font-light">
                    <p>
                        <span className="text-purple">{years}</span> years
                    </p>
                </div>
                <div className="text-5xl font-light">
                    <p>
                        <span className="text-purple">{months}</span> months
                    </p>
                </div>
                <div className="text-5xl font-light">
                    <p>
                        <span className="text-purple">{days}</span> days
                    </p>
                </div>
            </div>
        </Wrapper>
    );
}

export const Wrapper = styled.div`
  border-radius: 1rem;
  margin: 0 1rem;
  padding: 5rem 1rem;
 
`;
