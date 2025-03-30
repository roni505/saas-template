import Hero from "@/ui/hero";
import Nav from "@/ui/nav";
import Features from "@/ui/features";
import Customers from "@/ui/customers";
import Benefits from "@/ui/benefits";
import Pricing from "@/ui/pricing";
import FinalCTA from "@/ui/final-cta";
import Footer from "@/ui/footer";

const Home = () => {
  return (
    <main className="text-white">
      <section>
        <Nav />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <Customers />
      </section>
      <section>
        <Benefits />
      </section>
      <section>
        <Pricing />
      </section>
      <section>
        <FinalCTA />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}

export default Home;