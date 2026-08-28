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
      <div className="p-6 sm:p-8 rounded-2xl bg-white/80 border border-white/90 shadow-sm space-y-4">
        <p className="text-xl sm:text-2xl font-serif text-[#1A1714] leading-relaxed italic">
          "{exercise.textToShadow}"
        </p>

        {exercise.ipaPhonetic && (
          <div className="font-mono text-xs text-[#C4502A] tracking-wider bg-[#C4502A]/06 px-3 py-1.5 rounded-lg inline-block">
            IPA: {exercise.ipaPhonetic}
          </div>
        )}

        {exercise.translation && (
          <p className="text-xs text-[#82796A] italic border-t border-black/05 pt-3">
            Arti: {exercise.translation}
          </p>
        )}
      </div>

      {/* Native Audio Model Controls */}
      <div className="p-5 rounded-2xl bg-black/03 border border-black/05 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePlayModel}
              className={clsx(
                'w-12 h-12 rounded-full flex items-center justify-center text-white transition-all shadow-xs',
                isPlayingModel ? 'bg-[#C4502A]' : 'bg-[#1A1714] hover:bg-[#C4502A]'
              )}
            >
              {isPlayingModel ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
            </button>
            <div>
              <h4 className="text-sm font-medium text-[#1A1714]">Native Model Audio</h4>
              <p className="text-xs text-[#82796A]">Dengarkan artikulasi dan ritme penutur asli</p>
            </div>
          </div>

          {/* Speed Selector */}
          <div className="flex items-center gap-1.5 bg-white/80 p-1 rounded-xl border border-black/05">
            {[0.75, 0.9, 1.0].map((rate) => (
              <button
                key={rate}
                onClick={() => setPlaybackSpeed(rate)}
                className={clsx(
                  'px-2.5 py-1 rounded-lg text-xs font-mono transition-colors',
                  playbackSpeed === rate
                    ? 'bg-[#1A1714] text-white font-medium'
                    : 'text-[#82796A] hover:text-[#1A1714]'
                )}
              >
                {rate}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* User Voice Recording Sandbox */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/05 to-orange-500/08 border border-amber-500/20 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium text-sm text-[#1A1714]">
            <Mic className="w-4 h-4 text-[#C4502A]" />
            <span>Rekam & Bandingkan Suaramu</span>
          </div>
          {isRecording && (
            <span className="flex items-center gap-1.5 text-xs font-mono text-rose-600 animate-pulse">
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
              'px-5 py-3 rounded-full font-medium text-sm flex items-center gap-2.5 transition-all shadow-xs',
              isRecording
                ? 'bg-rose-600 hover:bg-rose-700 text-white animate-pulse'
                : 'bg-[#1A1714] hover:bg-[#C4502A] text-white'
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
            <div className="flex items-center gap-3 flex-1">
              <audio controls src={userAudioUrl} className="h-9 flex-1 max-w-sm rounded-lg" />
              <button
                onClick={() => setUserAudioUrl(null)}
                className="p-2 rounded-full hover:bg-black/05 text-[#82796A]"
                title="Hapus rekaman dan rekam ulang"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Intonation Guide & Tips */}
      <div className="p-5 rounded-2xl bg-white/60 border border-white/80 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#5F6244]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Catatan Intonasi & Ritme</span>
        </div>
        <ul className="space-y-1.5 text-xs text-[#38332C]">
          {exercise.keyIntonationPoints.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-[#C4502A] font-bold">·</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-[#82796A] pt-2 border-t border-black/05">
          <strong>Tip Tambahan: </strong> {exercise.tips}
        </p>
      </div>

      {completed && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2.5 text-emerald-950 text-xs font-medium">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Latihan Shadowing Selesai! Kamu telah berhasil membandingkan intonasi suaramu.</span>
        </div>
      )}
    </div>
  );
}
