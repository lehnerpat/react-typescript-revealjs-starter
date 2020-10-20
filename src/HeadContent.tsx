import React, { FC } from "react";

export const HeadContent: FC = () => (
  <>
    <meta charSet="utf-8" />

    <title>Your React+Reveal.js Presentation</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

    <link rel="stylesheet" href="dist/reset.css" />
    <link rel="stylesheet" href="dist/reveal.css" />
    <link rel="stylesheet" href="dist/theme/black.css" id="theme" />

    {/* Theme used for syntax highlighted code */}
    <link rel="stylesheet" href="plugin/highlight/monokai.css" id="highlight-theme" />
  </>
);
