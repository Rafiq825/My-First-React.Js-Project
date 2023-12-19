import Hero from "./sections/Hero";
import PopularProducts from "./Sections/PopularProducts";
import SuperQuality from "./Sections/SuperQuality";
import Services from "./Sections/Services";
import SpecialOffers from "./Sections/SpecialOffers";
import CustomerReviews from "./Sections/CustomerReviews";
import Subscribe from "./Sections/Subscribe";
import Footer from "./Sections/Footer";
import Nav from "./components/Nav";
import WhatsAppButton from "./components/Wattsapp";

const App=()=>(
  <main className="relative bg-white dark:bg-black">
     <Nav/>
     <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero/> 
      </section>
     <section className="padding">
      <PopularProducts/>
     </section>
     <section className="padding">
      <SuperQuality/>
     </section>
     <section className="padding-x py-10">
      <Services
/>     </section>
     <section className="padding">
      <SpecialOffers/>
     </section>
     <section className="bg-pale-blue padding">
     <CustomerReviews/>
     </section>
     <section className="padding-x sm:py-32 py-16 w-full bg-slate-600">
      <WhatsAppButton/>
     </section>
     <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
     </section>
     <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
       </section>
  </main>

);
export default App;