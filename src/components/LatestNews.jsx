import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-4 p-3 bg-gray-200 rounded-md items-center my-8">
      <p className="bg-[#D72050] text-base-100 px-4 py-2 rounded">Latest</p>
      <Marquee pauseOnHover={true} direction="right" className="space-x-10">
        <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, rem.</Link>
        <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, rem.</Link>
        <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, rem.</Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
