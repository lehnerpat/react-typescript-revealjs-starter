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
