import React, { FC } from "react";
import styled from "styled-components";
import { InitializeRevealJs } from "./InitializeRevealJs";
import { Slides } from "./Slides";

export const Body: FC = () => {
  return (
    <body>
      <div className="reveal">
        <Slides />
      </div>

      <InitializeRevealJs />
    </body>
  );
};

const ContentContainer = styled.div`
  margin: 6rem auto;
  width: 40rem;
  max-width: 100%;
  padding: 2rem;
  border: 1px solid gray;
  border-radius: 3px;
  text-align: center;
`;
