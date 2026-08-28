import oxfordCompleteJson from './oxford-3000-complete.json';

export interface OxfordWord {
  id: string;
  word: string;
  partOfSpeech: string;
  cefr: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | string;
  ipa: string;
  meaningId: string;
  meaningEn: string;
  exampleSentence: string;
  collocations: string[];
  acceptableAnswers: string[];
}

export const OXFORD_3000_VOCABULARY: OxfordWord[] = oxfordCompleteJson as OxfordWord[];

/**
 * Strict and accurate check for user's typed Indonesian meaning
 */
export function checkMeaningAccuracy(
  userAnswer: string,
  word: OxfordWord
): { isCorrect: boolean; matchedKeyword?: string } {
  const cleanInput = userAnswer.trim().toLowerCase().replace(/[^a-z0-9\s-]/g, '');
  if (!cleanInput || cleanInput.length < 3) {
    return { isCorrect: false };
  }

  // 1. Direct equality with acceptable answers
  const directMatch = word.acceptableAnswers.find(
    (kw) => cleanInput === kw.toLowerCase().trim()
  );
  if (directMatch) {
    return { isCorrect: true, matchedKeyword: directMatch };
  }

  // 2. User typed a phrase containing the keyword (e.g. "artinya berlimpah ruah")
  const phraseMatch = word.acceptableAnswers.find(
    (kw) => kw.length >= 3 && cleanInput.includes(kw.toLowerCase().trim())
  );
  if (phraseMatch) {
    return { isCorrect: true, matchedKeyword: phraseMatch };
  }

  // 3. Token-level matching: extract words from user input
  const userTokens = cleanInput.split(/\s+/).filter((t) => t.length >= 3);
  for (const token of userTokens) {
    for (const acceptable of word.acceptableAnswers) {
      const accClean = acceptable.toLowerCase().trim();
      if (token === accClean) {
        return { isCorrect: true, matchedKeyword: acceptable };
      }
    }
  }

  return { isCorrect: false };
}
