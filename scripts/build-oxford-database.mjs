import fs from 'fs';
import path from 'path';

const rawText = fs.readFileSync('src/data/raw-oxford-text.txt', 'utf8');
const lines = rawText.split('\n').map((l) => l.trim()).filter(Boolean);

const wordEntries = [];
const seen = new Set();

lines.forEach((line) => {
  if (
    line.includes('© Oxford') ||
    line.includes('The Oxford 3000') ||
    line.includes('most important words')
  ) {
    return;
  }

  // Regex to extract: word pos cefr
  const match = line.match(/^([a-zA-Z\s\-\,\/\'\(\)]+?)\s+([a-z\.\,\s]+?)\s+([A-C][1-2])/i);
  if (match) {
    let cleanWord = match[1].replace(/,\s*$/, '').trim();
    const pos = match[2].trim();
    const cefr = match[3].toUpperCase().trim();

    if (!cleanWord || cleanWord.length < 2) return;

    const lower = cleanWord.toLowerCase();
    if (!seen.has(lower)) {
      seen.add(lower);
      wordEntries.push({
        id: `ox3k-${wordEntries.length + 1}`,
        word: cleanWord.charAt(0).toUpperCase() + cleanWord.slice(1),
        partOfSpeech: pos,
        cefr: cefr,
        rawWord: lower,
      });
    }
  }
});

console.log(`Successfully extracted ${wordEntries.length} unique American Oxford 3000 words!`);

// Helper to generate Indonesian meaning, acceptable recall tokens, and contextual sentence
function generateLexicalData(entry) {
  const w = entry.rawWord;
  const pos = entry.partOfSpeech;
  const cefr = entry.cefr;
  const cap = entry.word;

  return {
    id: entry.id,
    word: cap,
    partOfSpeech: pos,
    cefr: cefr,
    ipa: `/${w}/`,
    meaningId: `Arti kata '${cap}' (${pos}) dalam bahasa Indonesia`,
    meaningEn: `The official definition and academic usage of ${cap} in American English.`,
    exampleSentence: `The term '${w}' is commonly utilized in formal and academic contexts.`,
    collocations: [`common ${w}`, `${w} in context`, `use ${w}`],
    acceptableAnswers: [w, `${w}s`, `${w}ing`],
  };
}

fs.writeFileSync(
  'src/data/oxford-3000-list.json',
  JSON.stringify(wordEntries, null, 2)
);

console.log('Saved oxford-3000-list.json successfully!');
