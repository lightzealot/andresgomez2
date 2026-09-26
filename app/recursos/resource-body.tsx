import type { ReactNode } from 'react';
import type { Block } from './markdown';
import { CopyButton } from './resource-controls';
import styles from './resources.module.css';

function inline(text: string): ReactNode[] {
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\(https?:\/\/[^\s)]+\)|https?:\/\/[^\s]+|`[^`]+`)/g;
  return text.split(pattern).filter(Boolean).map((part, i) => {
    if (part.startsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('`')) return <code key={i}>{part.slice(1, -1)}</code>;
    const link = /^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/.exec(part);
    if (link) return <a key={i} href={link[2]}>{link[1]}</a>;
    if (/^https?:\/\//.test(part)) return <a key={i} href={part}>{part}</a>;
    return part;
  });
}

export default function ResourceBody({ blocks }: { blocks: Block[] }) {
  let promptIndex = 0;
  return <div className={styles.prose}>{blocks.map((block, index) => {
    switch (block.type) {
      case 'heading': return block.level <= 2 ? <h2 id={block.id} key={index}>{inline(block.text)}</h2> : <h3 id={block.id} key={index}>{inline(block.text)}</h3>;
      case 'paragraph': return <p key={index}>{inline(block.text)}</p>;
      case 'quote': return <blockquote key={index}><p>{inline(block.text)}</p></blockquote>;
      case 'code': {
        const label = `Texto para copiar ${++promptIndex}`;
        return <section className={styles.promptBlock} key={index} aria-label={label}><div className={styles.promptToolbar}><span>LISTO PARA USAR</span><CopyButton text={block.text}/></div><pre tabIndex={0} aria-label={label}><code>{block.text}</code></pre></section>;
      }
      case 'list': return block.ordered ? <ol key={index} start={block.start}>{block.items.map((item, i) => <li key={i}>{inline(item)}</li>)}</ol> : <ul key={index}>{block.items.map((item, i) => <li key={i}>{inline(item)}</li>)}</ul>;
      case 'table': return <div className={styles.tableScroll} key={index} tabIndex={0} role="region" aria-label="Tabla del recurso"><table><thead><tr>{block.headers.map((cell, i) => <th scope="col" key={i}>{inline(cell)}</th>)}</tr></thead><tbody>{block.rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{inline(cell)}</td>)}</tr>)}</tbody></table></div>;
    }
  })}</div>;
}
