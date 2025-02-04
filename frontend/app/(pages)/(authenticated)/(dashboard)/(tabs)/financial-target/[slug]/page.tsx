import { FinancialTarget } from './_components/financial-target';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function FinancialTargetPage({ params }: Props) {
  const { slug } = await params;

  return <FinancialTarget id={slug} />;
}
