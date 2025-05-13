// app/page.tsx
import Header from "../components/Header";
import Hero from "../components/Hero";
import BirthdayCard from "../components/BirthdayCard";
import Footer from "../components/Footer";

const Page = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero imageSrc="/images/confetti.png" altText="Confetti image">
        <BirthdayCard />
      </Hero>
      <Footer />
    </div>
  );
};

export default Page;
