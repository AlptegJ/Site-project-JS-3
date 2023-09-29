import pic1 from "../assets/christin-hume-Hcfwew744z4-unsplash.jpg";
import pic2 from "../assets/dollar-gill-iC5f0oZNTLw-unsplash.jpg";
import pic3 from "../assets/esra-afsar-2d7GA6VwP_Y-unsplash.jpg";
import pic4 from "../assets/latrach-med-jamil-I_eag3NvrG0-unsplash.jpg";
import pic5 from "../assets/lawrence-chismorie-d6GlrDk8g8A-unsplash.jpg";

export function TalentComponent({ navigate }) {
  return (
    <div className="row-span-2 flex flex-col">
      <div className="flex gap-2 justify-center items-center translate-y-1/2">
        <img
          src={pic5}
          alt="a group of perople on the sidewalk "
          className="talent-img h-96 w-96 rotate-12 translate-x-10 z-10 drop-shadow-lg"
        ></img>
        <img
          src={pic1}
          alt="person writing on laptop"
          className="talent h-96 w-96 rotate-2"
        ></img>
        <img
          src={pic2}
          alt="person taking notes"
          className="talent-img h-96 w-96 -rotate-12 -translate-x-5 drop-shadow-lg"
        ></img>
        <img
          src={pic3}
          alt="coffee on table"
          className="talent-img h-96 w-96 rotate-12 -translate-x-10 drop-shadow-lg"
        ></img>
        <img
          src={pic4}
          alt="green car"
          className="talent-img h-96 w-96 rotate-2 -translate-x-10 drop-shadow-lg"
        ></img>
      </div>
      <div className="flex justify-center">
        <h1
          className="talent-text text-8xl z-20 -translate-y-5 text-white cursor-pointer hover:text-red-500 "
          onClick={() => {
            navigate("/join-us");
            window.scrollTo(0, 0);
          }}
        >
          Got talent?
        </h1>
      </div>
    </div>
  );
}
