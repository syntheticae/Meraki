import { SAMPLE_MOCK_EXAMS } from '@/data/mock-exams';
import MockExamClient from './MockExamClient';

export function generateStaticParams() {
  return SAMPLE_MOCK_EXAMS.map((exam) => ({
    type: exam.type,
  }));
}

export default async function MockExamPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  return <MockExamClient examType={type} />;
}
