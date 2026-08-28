'use client';

import React, { useState } from 'react';
import { PenTool, Sparkles, Clock, BookOpen, Award, CheckCircle } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { WritingRubric } from '@/components/exercises/WritingRubric';
import { WritingRubricExercise } from '@/types/exercise';

const WRITING_PROMPTS: WritingRubricExercise[] = [
  {
    id: 'wp-ielts-task2-1',
    lessonId: 'writing-studio',
    type: 'writing-rubric',
    title: 'IELTS Writing Task 2: Technology & Human Connection',
    instruction: 'Tulis esai argumentatif minimal 250 kata dalam waktu 40 menit.',
    taskType: 'IELTS-Task-2',
    prompt: 'Some people argue that technological advancements have made people more socially isolated, while others believe technology brings communities closer together. Discuss both views and give your own opinion.',
    suggestedTimeMin: 40,
    minWordCount: 250,
    maxWordCount: 350,
    criteria: [
      {
        id: 'tr',
        name: 'Task Response',
        weightPercent: 25,
        descriptors: [
          { score: 9, label: 'Band 9', description: 'Fully addresses both views and states a well-developed, nuanced position throughout.' },
          { score: 7, label: 'Band 7', description: 'Addresses both perspectives with clear central points and supporting explanations.' },
          { score: 5, label: 'Band 5', description: 'Addresses the topic only partially or one-sidedly.' },
        ],
      },
      {
        id: 'cc',
        name: 'Coherence and Cohesion',
        weightPercent: 25,
        descriptors: [
          { score: 9, label: 'Band 9', description: 'Effortless paragraphing and varied linking phrases.' },
          { score: 7, label: 'Band 7', description: 'Clear paragraph progression with appropriate cohesive devices.' },
          { score: 5, label: 'Band 5', description: 'Inadequate or repetitive linking words.' },
        ],
      },
      {
        id: 'lr',
        name: 'Lexical Resource',
        weightPercent: 25,
        descriptors: [
          { score: 9, label: 'Band 9', description: 'Sophisticated academic vocabulary with natural collocations.' },
          { score: 7, label: 'Band 7', description: 'Good lexical range with awareness of style and collocation.' },
          { score: 5, label: 'Band 5', description: 'Limited vocabulary with noticeable spelling slips.' },
        ],
      },
      {
        id: 'gra',
        name: 'Grammatical Range and Accuracy',
        weightPercent: 25,
        descriptors: [
          { score: 9, label: 'Band 9', description: 'Wide range of complex sentence structures with rare minor slips.' },
          { score: 7, label: 'Band 7', description: 'Frequent error-free complex sentences.' },
          { score: 5, label: 'Band 5', description: 'Limited complex structures with recurring errors.' },
        ],
      },
    ],
    modelAnswer: {
      bandOrScore: 'Band 8.0 Sample Model',
      text: `The influence of digital communication technology on interpersonal relationships remains a subject of intense global debate. While critics argue that virtual interaction cultivates alienation, proponents contend that digital platforms bridge geographical divides. In my view, while excessive digital dependency can erode intimate face-to-face bonds, technology fundamentally enhances human connectivity when utilized mindfully.

On the one hand, excessive reliance on screen-based interactions can precipitate social isolation. When individuals replace authentic physical encounters with superficial virtual validation, their capacity for deep empathetic dialogue diminishes. For instance, studies among adolescents correlate excessive social media consumption with heightened feelings of loneliness and anxiety. Consequently, passive scrolling frequently replaces meaningful communal participation.

On the other hand, technological platforms empower individuals to forge and maintain vital connections across vast geographical barriers. Digital networks facilitate cross-border scholarly collaborations, support diaspora communities in preserving cultural ties, and provide marginalized individuals with supportive peer circles. Furthermore, modern video conferencing enables families separated across continents to sustain immediate emotional intimacy.

In conclusion, while unchecked technological consumption poses genuine risks of social detachment, its capacity to unite disparate communities is profound. By fostering disciplined digital habits, individuals can maximize communal connectivity without sacrificing the richness of direct interpersonal encounters.`,
      analysis: [
        'Nuanced balanced introduction presenting clear personal viewpoint.',
        'Paragraph 2 examines the isolation perspective with psychological evidence.',
        'Paragraph 3 explores global connectivity and emotional closeness.',
        'Sophisticated vocabulary: "precipitate social isolation", "superficial virtual validation", "disparate communities".',
      ],
    },
    recommendedVocabulary: [
      { term: 'Precipitate alienation', definition: 'Memicu perasaan keterasingan sosial', example: 'Excessive screen time may precipitate alienation.' },
      { term: 'Disparate communities', definition: 'Komunitas yang terpisah atau berbeda-beda', example: 'Digital tools unite disparate communities globally.' },
      { term: 'Empathetic dialogue', definition: 'Percakapan penuh empati dan keterhubungan mendalam', example: 'Direct physical encounters foster empathetic dialogue.' },
    ],
    points: 30,
  },
  {
    id: 'wp-toefl-academic-1',
    lessonId: 'writing-studio',
    type: 'writing-rubric',
    title: 'TOEFL iBT: Academic Discussion on Remote Work',
    instruction: 'Tulis respon diskusi kelas minimal 100 kata dalam 10 menit.',
    taskType: 'TOEFL-Academic',
    prompt: `**Professor Vance**: As corporations increasingly consider making telecommuting permanent, should governments offer tax incentives to companies that maintain remote-work policies, or should they incentivize employees to return to city-center offices to support local small businesses?

**Jessica**: Remote work drastically decreases daily commuting emissions and allows workers to achieve a healthier work-life balance, so governments should actively subsidize companies that adopt work-from-home models.

**David**: Empty commercial districts devastate neighborhood restaurants, transport services, and retailers that depend on daily office foot traffic. Supporting downtown businesses is crucial for economic vitality.`,
    suggestedTimeMin: 10,
    minWordCount: 100,
    maxWordCount: 160,
    criteria: [
      {
        id: 'dev',
        name: 'Topic Development & Relevance',
        weightPercent: 50,
        descriptors: [
          { score: 5, label: 'Score 5', description: 'Adds distinct arguments and illustrative insights.' },
          { score: 3, label: 'Score 3', description: 'Adequate but somewhat generic contribution.' },
          { score: 1, label: 'Score 1', description: 'Incomplete or unoriginal contribution.' },
        ],
      },
      {
        id: 'lang',
        name: 'Language Use',
        weightPercent: 50,
        descriptors: [
          { score: 5, label: 'Score 5', description: 'High precision and error-free execution.' },
          { score: 3, label: 'Score 3', description: 'Occasional minor grammar errors.' },
          { score: 1, label: 'Score 1', description: 'Frequent noticeable errors.' },
        ],
      },
    ],
    modelAnswer: {
      bandOrScore: 'Score 5.0 (Top Tier Model)',
      text: `While David raises an important point regarding downtown economic recovery, I firmly agree with Jessica that subsidizing remote-work models delivers far superior long-term socioeconomic benefits. Rather than artificially preserving obsolete commuting patterns, government subsidies for telecommuting encourage economic decentralization. When professionals work from home, their disposable income is spent within residential suburbs, stimulating localized neighborhood enterprises rather than concentrating capital solely in central business districts. Furthermore, eliminating daily transit hours boosts workforce productivity and mental health. Therefore, incentivizing remote work establishes a more resilient, environmentally sustainable economic framework.`,
      analysis: [
        'Connects with both classmates directly while developing a fresh macro-economic argument (economic decentralization).',
        'Concise and forceful conclusion.',
      ],
    },
    recommendedVocabulary: [
      { term: 'Economic decentralization', definition: 'Penyebaran aktivitas ekonomi ke berbagai daerah', example: 'Remote work accelerates economic decentralization.' },
      { term: 'Obsolete patterns', definition: 'Pola-pola usang yang sudah tidak relevan', example: 'Cities should not preserve obsolete commuting routines.' },
    ],
    points: 20,
  },
];

export default function WritingStudioPage() {
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);

  const currentExercise = WRITING_PROMPTS[selectedPromptIndex];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C4502A]" />
          <span className="font-mono text-xs text-[#82796A] uppercase tracking-widest">
            Writing Studio & Assessment Pad
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#1A1714]">
          Simulasi Penulisan Esai & Evaluasi Mandiri
        </h1>
        <p className="text-[#82796A] text-base sm:text-lg leading-relaxed">
          Ruang menulis bebas distraksi dengan timer waktu nyata, live word counter, dan rubrik evaluasi standar Cambridge & ETS.
        </p>
      </div>

      {/* Prompt Selector Pills */}
      <div className="flex flex-wrap items-center gap-3">
        {WRITING_PROMPTS.map((prompt, idx) => (
          <button
            key={prompt.id}
            onClick={() => setSelectedPromptIndex(idx)}
            className={`px-5 py-2.5 rounded-full text-xs font-mono transition-all flex items-center gap-2 ${
              selectedPromptIndex === idx
                ? 'bg-[#1A1714] text-white shadow-xs'
                : 'bg-white/70 hover:bg-white text-[#82796A] hover:text-[#1A1714] border border-black/10'
            }`}
          >
            <PenTool className="w-3.5 h-3.5" />
            <span>{prompt.title}</span>
          </button>
        ))}
      </div>

      {/* Main Writing Pad Component */}
      <GlassCard padded="lg" className="bg-white/85 shadow-md">
        <WritingRubric key={currentExercise.id} exercise={currentExercise} />
      </GlassCard>
    </div>
  );
}
