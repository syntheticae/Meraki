import { redirect } from 'next/navigation';

export default function WorkspacePage() {
  redirect('/?tab=modules');
}
