
import Head from 'next/head';
import HeaderUser from '../components/HeaderUser';
import Categories from '@/components/Categories';
import BestSellers from '@/components/BestSellers';
import Footer from '@/components/Footer';
import BannerSlider from '@/components/BannerSlider';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Owen Fashion</title>
      </Head>
      <div>
        <HeaderUser />
        <main>
          <BannerSlider></BannerSlider>
          <Categories />
          <BestSellers />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
