import { clerkClient } from "@clerk/nextjs/server";

const Home = () => {
  console.log(typeof clerkClient);
  return (
    <div>
      <p>HomePage</p>
    </div>
  );
};

export default Home;
