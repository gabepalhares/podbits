import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkReadingTime() {
  return function (tree, { data }) {
    const textPage = toString(tree);
    const readingTime = getReadingTime(textPage);
    // tempoLeitura.text nos dará minutos lidos como uma string amigável
    // i.e. "3 min read"
    data.astro.frontmatter.minutesRead = readingTime.text;
  };
}