import Head from 'next/head';
import styles from '../styles/page.module.css';
import ManualHeader from '@/components/ManualHeader';
import Header from '@/components/Header';
import LotteryEntrance from '@/components/LotteryEntrance';

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Smart Contract Lottery</title>
        <meta name="description" content="Our Smart Contract Lottery" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Header />
      <LotteryEntrance />
    </div>
  );
}
