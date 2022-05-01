import Head from 'next/head';

interface MetaTitleProps {
  page: string | undefined;
}

function MetaTitle({ page }: MetaTitleProps): JSX.Element | null {
  if (!page) return null;

  return (
    <Head>
      <title>{`${page} - website name`}</title>
    </Head>
  );
}

export default MetaTitle;
