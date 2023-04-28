
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AI } from '@/types/AI';
import { AIMain } from '@/components/AI/AIMain';

interface Props {
 /* serverSideApiKeyIsSet: boolean;
  serverSidePluginKeysSet: boolean;
  defaultModelId: OpenAIModelID;*/
}

const Home = ({
/*  serverSideApiKeyIsSet,
  serverSidePluginKeysSet,
  defaultModelId,*/
}: Props) => {
  
  const AI: AI = {
      name: "Test AI",
      description: "Ceci est une description de mon AI",
      maxLength: 300,
      tokenLimit: 100,
  };

  const AI2: AI = {
    name: "supp AI",
    description: "Ceci est une description de mon AI",
    maxLength: 300,
    tokenLimit: 100,
};
  

  return (
    <><Head>
      <title>Chatbot UI</title>
      <meta name="description" content="ChatGPT but better." />
      <meta
        name="viewport"
        content="height=device-height ,width=device-width, initial-scale=1, user-scalable=no" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <AIMain index={0} AI={AI} />
    <AIMain index={1} AI={AI2} />
    </>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {

      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
        'chat',
        'sidebar',
        'markdown',
        'promptbar',
        'settings',
      ])),
    },
  };
};
