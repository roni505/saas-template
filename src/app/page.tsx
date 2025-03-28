import Hero from "@/ui/hero";
import Nav from "@/ui/nav";
import Features from "@/ui/features";

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
        Testimonials
      </section>
      <section>
        Benefits
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