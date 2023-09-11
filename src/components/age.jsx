import { useEffect, useState } from "react";
import Inputs from "./inputs";
import { styled } from "styled-components";
export default function Ages() {
    const [years, setYears] = useState("--");
    const [months, setMonths] = useState("--");
    const [days, setDays] = useState("--");
  

    return (
        <Wrapper className="bg-white lg:w-[30%]">
            <Inputs setDays={setDays} setMonths={setMonths} setYears={setYears} />
            <div className="lg:ml-10">
                <div className="text-5xl 2xl:text-7xl font-light">
                    <p>
                        <span className="text-purple">{years}</span> years
                    </p>
                </div>
                <div className="text-5xl 2xl:text-7xl  font-light">
                    <p>
                        <span className="text-purple">{months}</span> months
                    </p>
                </div>
                <div className="text-5xl 2xl:text-7xl  font-light">
                    <p>
                        <span className="text-purple">{days}</span> days
                    </p>
                </div>
            </div>
        </Wrapper>
    );
}

export const Wrapper = styled.div`
  border-radius: 1.5rem;
  margin: 0 1rem;
  padding: 4rem 1rem;
  border-bottom-right-radius: 30%;
`;

export const Paragraph = styled.p`
    

`