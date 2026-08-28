import oxfordCompleteJson from './oxford-3000-complete.json';

export interface OxfordWord {
  id: string;
  word: string;
  partOfSpeech: string;
  cefr: string;
  ipa: string;
  meaningId: string;
  meaningEn: string;
  exampleSentence: string;
  collocations: string[];
  acceptableAnswers: string[];
}

export const OXFORD_3000_VOCABULARY: OxfordWord[] = oxfordCompleteJson as unknown as OxfordWord[];

/**
 * Intelligent and deterministic check for user's typed Indonesian meaning
 */
export function checkMeaningAccuracy(
  userAnswer: string,
  word: OxfordWord
): { isCorrect: boolean; matchedKeyword?: string } {
  const cleanInput = userAnswer
    .trim()
    .toLowerCase()
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!cleanInput || cleanInput.length < 2) {
    return { isCorrect: false };
  }

  // Combine acceptable answers and words from meaningId
  const targets = new Set<string>();
  (word.acceptableAnswers || []).forEach((a) => targets.add(a.toLowerCase().trim()));
  
  if (word.meaningId) {
    targets.add(word.meaningId.toLowerCase().trim());
    // Also add sub-phrases separated by commas or slashes
    word.meaningId.split(/[,;/()]+/).forEach((part) => {
      const cleanPart = part.trim().toLowerCase();
      if (cleanPart.length >= 2) targets.add(cleanPart);
    });
  }

  const targetList = Array.from(targets).filter((t) => t.length >= 2);

  // 1. Direct equality
  const directMatch = targetList.find((kw) => cleanInput === kw);
  if (directMatch) {
    return { isCorrect: true, matchedKeyword: directMatch };
  }

  // 2. User typed a phrase containing the keyword
  const phraseMatch = targetList.find((kw) => cleanInput.includes(kw));
  if (phraseMatch) {
    return { isCorrect: true, matchedKeyword: phraseMatch };
  }

  // 3. Keyword contains the user's input (if user input >= 3 chars)
  if (cleanInput.length >= 3) {
    const reverseMatch = targetList.find((kw) => kw.includes(cleanInput));
    if (reverseMatch) {
      return { isCorrect: true, matchedKeyword: reverseMatch };
    }
  }

  // 4. Token-level matching
  const userTokens = cleanInput.split(/\s+/).filter((t) => t.length >= 2);
  for (const token of userTokens) {
    for (const acceptable of targetList) {
      if (token === acceptable || acceptable.split(/\s+/).includes(token)) {
        return { isCorrect: true, matchedKeyword: acceptable };
      }
    }
  }

  return { isCorrect: false };
}
