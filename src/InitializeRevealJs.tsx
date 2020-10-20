import React, { FC } from "react";

export const InitializeRevealJs = () => (
  <>
    <script src="dist/reveal.js"></script>
    <script src="plugin/notes/notes.js"></script>
    <script src="plugin/markdown/markdown.js"></script>
    <script src="plugin/highlight/highlight.js"></script>
    <RevealInitializer
      options={{
        hash: true,
        slideNumber: true,
      }}
    />
  </>
);

interface RevealInitializerProps {
  options: object;
}
const RevealInitializer: FC<RevealInitializerProps> = ({ options }) => {
  // More info about initialization & config:
  // - https://revealjs.com/initialization/
  // - https://revealjs.com/config/
  const optionsString = JSON.stringify(options);
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          Reveal.initialize({
            ...${optionsString},
            plugins: [RevealMarkdown, RevealHighlight, RevealNotes]
          });`,
      }}
    />
  );
};
