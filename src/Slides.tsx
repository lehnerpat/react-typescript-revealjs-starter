import React from "react";
import styled from "styled-components";

export const Slides = () => (
  <div className="slides">
    <section>
      <h1>Here You Go!</h1>
      <PurpleParagraph>
        And with <em>styling</em>, too!
      </PurpleParagraph>
    </section>
    <section>More slides!</section>
  </div>
);

const PurpleParagraph = styled.p`
  color: #dd88ff;
`;
