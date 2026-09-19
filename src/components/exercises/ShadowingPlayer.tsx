'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Mic, Square, RotateCcw, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';
import { ShadowingExercise } from '@/types/exercise';
import { playTextToSpeech, stopTextToSpeech } from '@/services/speech';
import { BrowserAudioRecorder } from '@/services/audio-recorder';
import { clsx } from 'clsx';

interface Props {
  exercise: ShadowingExercise;
  onCompleted?: () => void;
}

export function ShadowingPlayer({ exercise, onCompleted }: Props) {
  const [isPlayingModel, setIsPlayingModel] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(0.9);
  const [isRecording, setIsRecording] = useState(false);
  const [userAudioUrl, setUserAudioUrl] = useState<string | null>(null);
  const [completed, setCompleted] = useState(false);

  const recorderRef = useRef<BrowserAudioRecorder | null>(null);

  useEffect(() => {
    recorderRef.current = new BrowserAudioRecorder();
    return () => {
      stopTextToSpeech();
      recorderRef.current?.cleanup();
    };
  }, []);

  const handlePlayModel = () => {
    if (isPlayingModel) {
      stopTextToSpeech();
      setIsPlayingModel(false);
      return;
    }

    setIsPlayingModel(true);
    playTextToSpeech(exercise.textToShadow, {
      lang: exercise.audioVoice || 'en-US',
      rate: playbackSpeed,
      onEnd: () => setIsPlayingModel(false),
      onError: () => setIsPlayingModel(false),
    });
  };

  const handleToggleRecord = async () => {
    if (!recorderRef.current) return;

    if (isRecording) {
      const url = await recorderRef.current.stopRecording();
      setIsRecording(false);
      if (url) {
        setUserAudioUrl(url);
        setCompleted(true);
        if (onCompleted) onCompleted();
      }
    } else {
      const started = await recorderRef.current.startRecording();
      if (started) {
        setIsRecording(true);
        setUserAudioUrl(null);
      } else {
        alert('Izin mikrofon diperlukan untuk merekam suaramu.');
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-[#82796A] uppercase tracking-wider">
          Speaking & Shadowing Lab · {exercise.points} Pts
        </span>
        <span className="font-mono text-xs text-[#5F6244] bg-[#5F6244]/10 px-2.5 py-0.5 rounded-full">
          Self-Comparison Mode
        </span>
      </div>

      <p className="text-sm text-[#82796A] leading-relaxed">
        {exercise.instruction}
      </p>

      {/* Target Shadowing Text Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#EDF3F7] dark:bg-[#1C1C1C] dark:bg-[#201D19] border border-[#BFD8E3]/40 dark:border-white/10 dark:border-[#3A342D] shadow-sm space-y-4">
        <p className="text-xl sm:text-2xl font-serif text-[#141414] dark:text-[#FFFFFF] dark:text-[#E8E8F0] leading-relaxed italic">
          "{exercise.textToShadow}"
        </p>

        {exercise.ipaPhonetic && (
          <div className="font-mono text-xs text-[#00638E] dark:text-[#8CB9CC] dark:text-[#00638E] dark:text-[#8CB9CC] tracking-wider bg-[#00638E]/10 dark:bg-[#00638E]/20 dark:bg-[#00638E] text-white/15 px-3 py-1.5 rounded-xl inline-block font-bold">
            IPA: {exercise.ipaPhonetic}
          </div>
        )}

        {exercise.translation && (
          <p className="text-xs text-[#50585C] dark:text-[#7A8992] dark:text-[#2B2B2B] dark:text-[#BFD8E3] italic border-t border-[#BFD8E3]/40 dark:border-white/10 dark:border-[#3A342D] pt-3">
            Arti: {exercise.translation}
          </p>
        )}
      </div>

      {/* Native Audio Model Controls */}
      <div className="p-5 rounded-3xl bg-[#FFFFFF] dark:bg-[#141414] dark:bg-[#1E1B18] border border-[#BFD8E3]/40 dark:border-white/10 dark:border-[#3A342D] space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePlayModel}
              className={clsx(
                'w-12 h-12 rounded-full flex items-center justify-center text-white transition-all shadow-xs tactile-btn',
                isPlayingModel ? 'bg-[#00638E] text-white dark:bg-[#00638E] text-white' : 'bg-[#141414] dark:bg-[#00638E] text-white dark:bg-[#00638E] text-white hover:bg-[#00638E] text-white'
              )}
            >
              {isPlayingModel ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
            </button>
            <div>
              <h4 className="text-sm font-serif font-bold text-[#141414] dark:text-[#FFFFFF] dark:text-[#E8E8F0]">Native Model Audio</h4>
              <p className="text-xs text-[#50585C] dark:text-[#7A8992] dark:text-[#2B2B2B] dark:text-[#BFD8E3]">Dengarkan artikulasi dan ritme penutur asli</p>
            </div>
          </div>

          {/* Speed Selector */}
          <div className="flex items-center gap-1.5 bg-[#EDF3F7] dark:bg-[#1C1C1C] dark:bg-[#1E1E2B] p-1.5 rounded-2xl border border-[#BFD8E3]/40 dark:border-white/10 dark:border-[#3A342D]">
            {[0.75, 0.9, 1.0].map((rate) => (
              <button
                key={rate}
                onClick={() => setPlaybackSpeed(rate)}
                className={clsx(
                  'px-2.5 py-1 rounded-xl text-xs font-mono transition-colors tactile-btn',
                  playbackSpeed === rate
                    ? 'bg-[#141414] dark:bg-[#00638E] text-white dark:bg-[#00638E] text-white text-white dark:text-white font-bold shadow-xs'
                    : 'text-[#50585C] dark:text-[#7A8992] dark:text-[#2B2B2B] dark:text-[#BFD8E3] hover:text-[#141414] dark:text-[#FFFFFF] dark:hover:text-[#EFEAE1]'
                )}
              >
                {rate}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* User Voice Recording Sandbox */}
      <div className="p-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#141414] dark:bg-[#1E1B18] border border-[#BFD8E3]/40 dark:border-white/10 dark:border-[#3A342D] space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-serif font-bold text-sm text-[#141414] dark:text-[#FFFFFF] dark:text-[#E8E8F0]">
            <Mic className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC] dark:text-[#00638E] dark:text-[#8CB9CC]" />
            <span>Rekam & Bandingkan Suaramu</span>
          </div>
          {isRecording && (
            <span className="flex items-center gap-1.5 text-xs font-mono text-rose-600 animate-pulse font-bold">
              <span className="w-2 h-2 rounded-full bg-rose-600" />
              Merekam...
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={handleToggleRecord}
            className={clsx(
              'px-5 py-2.5 rounded-2xl font-mono text-xs font-medium flex items-center gap-2.5 transition-all shadow-xs tactile-btn',
              isRecording
                ? 'bg-rose-600 hover:bg-rose-700 text-white animate-pulse'
                : 'bg-[#141414] dark:bg-[#00638E] text-white dark:bg-[#00638E] text-white hover:bg-[#00638E] text-white text-white dark:text-white'
            )}
          >
            {isRecording ? (
              <>
                <Square className="w-4 h-4" />
                <span>Stop Rekaman</span>
              </>
            ) : (
              <>
                <Mic className="w-4 h-4" />
                <span>Mulai Rekam Suara</span>
              </>
            )}
          </button>

          {userAudioUrl && (
            <div className="flex items-center gap-3">
              <audio controls src={userAudioUrl} className="h-9 rounded-2xl" />
              <button
                type="button"
                onClick={() => setUserAudioUrl(null)}
                className="p-2 rounded-xl text-[#50585C] dark:text-[#7A8992] dark:text-[#2B2B2B] dark:text-[#BFD8E3] hover:text-[#141414] dark:text-[#FFFFFF] dark:hover:text-[#EFEAE1] transition-colors"
                title="Hapus Rekaman & Coba Lagi"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Intonation Guide & Tips */}
      {exercise.keyIntonationPoints && exercise.keyIntonationPoints.length > 0 && (
        <div className="p-5 rounded-3xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs text-[#00638E] dark:text-[#8CB9CC] font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fokus Ritme & Intonasi:</span>
          </div>
          <ul className="space-y-1.5 text-xs text-[#141414] dark:text-[#FFFFFF]">
            {exercise.keyIntonationPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00638E] dark:bg-[#8CB9CC] mt-1.5 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          {exercise.tips && (
            <p className="text-xs text-[#50585C] dark:text-[#7A8992] pt-2 border-t border-[#BFD8E3]/40 dark:border-white/10">
              <strong>Tip Tambahan: </strong> {exercise.tips}
            </p>
          )}
        </div>
      )}

      {completed && (
        <div className="p-4 rounded-2xl bg-[#00638E]/10 dark:bg-[#00638E]/20 border border-[#00638E]/30 dark:border-[#8CB9CC]/30 flex items-center gap-2.5 text-[#141414] dark:text-[#FFFFFF] text-xs font-mono font-medium">
          <CheckCircle2 className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC] shrink-0" />
          <span>Latihan Shadowing Selesai! Kamu telah berhasil membandingkan intonasi suaramu.</span>
        </div>
      )}
    </div>
  );
}
