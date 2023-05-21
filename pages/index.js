import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedArticles from '../components/FeaturedArticles';
import AuthorSection from '../components/AuthorSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Header />
      <HeroSection />
      <FeaturedArticles />
      <AuthorSection />
      <Footer />
    </div>
  );
}
