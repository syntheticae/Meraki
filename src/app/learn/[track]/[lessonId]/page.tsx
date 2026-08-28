import { TRACKS } from '@/data/tracks';
import LessonViewClient from './LessonViewClient';

export function generateStaticParams() {
  const params: { track: string; lessonId: string }[] = [];
  TRACKS.forEach((t) => {
    t.lessons.forEach((l) => {
      params.push({ track: t.slug, lessonId: l.slug });
    });
  });
  return params;
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ track: string; lessonId: string }>;
}) {
  const { track, lessonId } = await params;
  return <LessonViewClient trackSlug={track} lessonSlug={lessonId} />;
}
