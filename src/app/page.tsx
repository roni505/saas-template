import Hero from "@/ui/hero";
import Nav from "@/ui/nav";
import Features from "@/ui/features";
import Customers from "@/ui/customers";
import Benefits from "@/ui/benefits";

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
        Pricing
      </section>
      <section>
        CTA
      </section>
      <section>
        Footer
      </section>
    </main>
  );
}

export default Home;