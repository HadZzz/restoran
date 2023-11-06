import Categories from './component/Categories';
import Delivery from './component/Delivery';
import Featured from './component/Featured';
import Meal from './component/Meal';
import TopNavbar from './component/TopNavbar';
import TopPics from './component/TopPics';
import NewsLetter from './component/NewsLetter';
import Footer from './component/Footer';
export default function Home() {
  return (
    <div>
      <TopNavbar />
      <Featured />
      <Delivery />
      <Meal />
      <Categories />
      <NewsLetter />
      <Footer />
    </div>
  );
}
