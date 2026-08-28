/**
 * Native Web Speech API synthesis helper
 * Zero-cost, runs purely client-side inside user's browser.
 */
export function playTextToSpeech(
  text: string,
  options?: {
    lang?: 'en-US' | 'en-GB' | 'en-AU';
    rate?: number; // 0.7 to 1.2
    pitch?: number;
    onEnd?: () => void;
    onError?: (err: any) => void;
  }
): boolean {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this browser environment');
    return false;
  }

  try {
    window.speechSynthesis.cancel(); // Stop any currently playing utterance

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = options?.lang || 'en-US';
    utterance.rate = options?.rate || 0.95; // slightly slower than native for crisp learner listening
    utterance.pitch = options?.pitch || 1.0;

    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(
      (v) => v.lang.startsWith(options?.lang || 'en') && !v.name.includes('Google')
    ) || voices.find((v) => v.lang.startsWith(options?.lang || 'en'));

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    if (options?.onEnd) {
      utterance.onend = options.onEnd;
    }
    if (options?.onError) {
      utterance.onerror = options.onError;
    }

    window.speechSynthesis.speak(utterance);
    return true;
  } catch (e) {
    console.error('TTS error', e);
    return false;
  }
}

export const playNativeAudio = playTextToSpeech;

export function stopTextToSpeech(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}
