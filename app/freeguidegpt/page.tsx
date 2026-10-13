import type { Metadata } from 'next';
import { CorporateHeader } from '@/components/CorporateHeader';
import { CorporateFooter } from '@/components/CorporateFooter';
import { GuidePrompt } from './prompt';
import styles from '../business.module.css';

export const metadata: Metadata = {
  title: 'Free Guide GPT — Andrés Gómez',
  description: 'A short, practical guide to using ChatGPT. Learn to write clear prompts, refine answers, and try a reusable template.',
  alternates: { canonical: 'https://andresgomez.store/freeguidegpt' },
};
const steps = [
  ['Open a chat', 'Go to ChatGPT and type what you want help with: writing, learning, planning, or brainstorming.'],
  ['Be specific', 'Describe your task, add useful context, and say who the answer is for.'],
  ['Choose the format', 'Ask for a list, table, or short paragraph. Specify the tone and length you need.'],
  ['Refine the answer', 'Keep the conversation going. Try “Make it shorter,” “Give me an example,” or “Explain that more simply.”'],
];
export default function FreeGuideGPT() {
  return <div className={styles.site} lang="en"><CorporateHeader bilingual={false}/><main id="contenido">
    <section className={styles.hero}><div className={styles.heroInner}><div><p className={styles.eyebrow}>FREE GUIDE GPT · A QUICK START</p><h1>Better answers<br/>start here<span>.</span></h1><p className={styles.statement}>A short guide to using ChatGPT with confidence.</p><p className={styles.description}>Learn the basics, write a clear prompt, and turn the first answer into something useful.</p><div className={styles.heroDiagnostic}><span>START WITH THE BASICS</span><a className={styles.primary} href="#quick-guide">Read the quick guide ↓</a></div></div><aside className={styles.diagnosticAction}><span>TRY THIS PROMPT</span><blockquote style={{margin:'22px 0',fontSize:24,lineHeight:1.5}}>“Explain photosynthesis to a beginner in three short bullet points. Use one everyday example.”</blockquote><p>A clear task + an audience + a format.</p></aside></div></section>
    <section id="quick-guide" className={`${styles.section} ${styles.approach}`}><div><p className={styles.eyebrow}>THE QUICK GUIDE</p><h2>Four steps.<br/>One useful conversation.</h2><p className={styles.description}>You do not need a complicated prompt. Start with what you need, then add the details that matter.</p></div><ol className={styles.steps}>{steps.map(([title,text],i)=><li key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>
    <section className={`${styles.section} ${styles.diagnostic}`}><div><p className={styles.eyebrow}>YOUR FIRST PROMPT</p><h2>Make it your own.</h2><p className={styles.description}>Copy the template and replace the brackets with your details.</p></div><GuidePrompt/></section>
    <section className={styles.contact}><div className={styles.contactInner}><div className={styles.contactCopy}><p className={styles.eyebrow}>PUT IT INTO PRACTICE</p><h2>Ask. Review. Refine.</h2><p>Check important facts and edit the answer to fit your needs. A follow-up question can make a useful answer even better.</p></div><div className={styles.contactActions}><a className={styles.primary} href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer">Try it in ChatGPT ↗</a><a href="https://learn.chatgpt.com/docs/prompting" target="_blank" rel="noopener noreferrer">Official OpenAI prompting guide ↗</a></div></div></section>
  </main><CorporateFooter/></div>;
}
