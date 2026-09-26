export type Block =
  | { type: 'heading'; level: number; text: string; id: string }
  | { type: 'paragraph' | 'quote' | 'code'; text: string }
  | { type: 'list'; ordered: boolean; start: number; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] };

export function parseMarkdown(markdown: string): Block[] {
  const lines = markdown.replace(/\r/g, '').split('\n');
  const blocks: Block[] = [];
  const seen = new Map<string, number>();
  const cells = (line: string) => line.trim().replace(/^\||\|$/g, '').split('|').map(x => x.trim());
  const listPattern = /^(?:[-*]\s+|\d+\.\s+)/;
  const special = (line: string) => /^(?:#{1,3} |```|> |[-*] |\d+\. |\|)/.test(line) || /^---+$/.test(line);
  for (let i = 0; i < lines.length;) {
    const line = lines[i].trim();
    if (!line || /^---+$/.test(line)) { i++; continue; }
    if (line.startsWith('```')) {
      const code: string[] = []; i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) code.push(lines[i++]);
      blocks.push({ type: 'code', text: code.join('\n').trim() }); i++; continue;
    }
    const heading = /^(#{1,3}) (.+)$/.exec(line);
    if (heading) {
      const base = heading[2].normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      const count = seen.get(base) ?? 0; seen.set(base, count + 1);
      blocks.push({ type: 'heading', level: heading[1].length, text: heading[2], id: count ? `${base}-${count + 1}` : base }); i++; continue;
    }
    if (line.startsWith('|') && /^\|[\s:|\-]+$/.test(lines[i + 1]?.trim() ?? '')) {
      const headers = cells(line), rows: string[][] = []; i += 2;
      while (i < lines.length && lines[i].trim().startsWith('|')) rows.push(cells(lines[i++]));
      blocks.push({ type: 'table', headers, rows }); continue;
    }
    if (listPattern.test(line)) {
      const ordered = /^\d+\./.test(line), items: string[] = [], start = ordered ? Number(line.match(/^\d+/)![0]) : 1;
      while (i < lines.length) {
        if (!lines[i].trim()) {
          if (listPattern.test(lines[i + 1]?.trim() ?? '')) { i++; continue; }
          break;
        }
        if (!listPattern.test(lines[i].trim()) || /^\d+\./.test(lines[i].trim()) !== ordered) break;
        let item = lines[i++].trim().replace(listPattern, '');
        while (i < lines.length && lines[i].trim() && !special(lines[i].trim())) item += ' ' + lines[i++].trim();
        items.push(item.replace(/^\[ \]\s*/, ''));
      }
      blocks.push({ type: 'list', ordered, start, items }); continue;
    }
    if (line.startsWith('> ')) {
      const quote: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('> ')) quote.push(lines[i++].trim().slice(2));
      blocks.push({ type: 'quote', text: quote.join(' ') }); continue;
    }
    const paragraph = [line]; i++;
    while (i < lines.length && lines[i].trim() && !special(lines[i].trim())) paragraph.push(lines[i++].trim());
    blocks.push({ type: 'paragraph', text: paragraph.join(' ') });
  }
  return blocks;
}
