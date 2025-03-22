import Button from "./components/button";
import Card from "./components/card"

const Home = () => {
  return (
    <>
      <Button />    
      <div className="flex w-full h-screen justify-center items-center bg-neutral-200">
        <Card />
      </div>
    </>
  );
}

export default Home;