import React from 'react';
import sanitizeHTML from 'xss';

interface Props
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
    'dangerouslySetInnerHTML'
  > {
  html?: string;
}

const SanitizedHTML: React.FC<Props> = ({ html, ...rest }) => {
  const sanitizedHTML = html
    ? sanitizeHTML(html, {
        whiteList: {
          h1: [],
          h2: [],
          h3: [],
          p: [],
          ol: [],
          li: [],
          ul: [],
          u: [],
          em: [],
          br: [],
          b: [],
          i: [],
          small: [],
          strong: [],
          sub: [],
          sup: [],
        },
      })
    : '';

  return <span {...rest} dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
};

export default SanitizedHTML;
