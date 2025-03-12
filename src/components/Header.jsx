import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="logo mt-6 mb-2">
        <img className="w-[400px] pt-4" src={logo} alt="" />
      </div>
      <h1 className="text-gray-500 italic">Journalism Without Fear and Favour</h1>
      <p>
        {
          moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        }
      </p>
    </div>
  );
};

export default Header;