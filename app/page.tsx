import { Button } from "@/components/ui/button";
import Header from "./dashboard/_components/Header";
import Footer from "./dashboard/_components/Footer";
import Banner from "./dashboard/_components/Banner";
import Blog from "./dashboard/_components/Blog";
import Testimonials from "./dashboard/_components/Testimonials";
import Contact from "./dashboard/_components/Contact";

export default function Home() {
  return (
    <div>
      <Header />

      <Banner />
      <span className="flex items-center">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></span>

        <span className="shrink-0 px-4 text-gray-900">Blogs </span>

        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300"></span>
      </span>
      <Blog />

      <span className="flex items-center">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></span>

        <span className="shrink-0 px-4 text-gray-900">Testimonials And Reviews  </span>

        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300"></span>
      </span>

      <Testimonials />

      <span className="flex items-center">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></span>

        <span className="shrink-0 px-4 text-gray-900">Contact US  </span>

        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300"></span>
      </span>

      <Contact/>

      <span className="flex items-center">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></span>

        <span className="shrink-0 px-4 text-gray-900">Footer</span>

        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300"></span>
      </span>
      <Footer />
    </div>
  );
}
