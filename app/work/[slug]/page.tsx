import { works } from '@/lib/works';
import PDP from './pdp';

export async function generateStaticParams() {
  return works.map((work) => ({
    slug: work.id,
  }));
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return <PDP slug={slug} />;
}
