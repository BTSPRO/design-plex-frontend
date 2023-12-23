import React from "react";
import Reveal from "../Reveal";
import { useNavigate } from "react-router-dom";
import { OurServicesCardDatas } from "../../all-datas/EveryDatas";

const HomeOurServicesCard = ({ card }) => {
  const navigate = useNavigate();

  const {
    id,
    imageURL,
    title,
    description1,
    description2,
    description3,
    iconSVG,
  } = card;
  const handleOrderNowClick = () => {
    // Conditionally navigate based on the service type
    switch (id) {
      case "1":
        navigate("/design");
        break;
      case "2":
        navigate("/development");
        break;
      case "3":
        navigate("/Full-branding");
        break;
      default:
        break;
    }
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Reveal>
        <div
          className="rounded-3xl w-fit"
          style={{ backgroundColor: "#161616" }}
        >
          <Reveal>
            <img src={imageURL} alt={title} />
          </Reveal>
          <div className="mx-3 mt-2 my-4">
            <Reveal>
              <p className="sm:text-xl lg:text-4xl">{title}</p>
            </Reveal>
            <Reveal>
              <div className="flex">
                <img className="mb-3 me-1" src={iconSVG} alt=" " />
                <p className=" sm:text-base lg:text-xl">{description1}</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex">
                <img className="mb-3 me-1" src={iconSVG} alt=" " />
                <p className=" sm:text-base lg:text-xl">{description2}</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex">
                <img className="mb-3 me-1" src={iconSVG} alt=" " />
                <p className=" sm:text-base lg:text-xl">{description3}</p>
              </div>
            </Reveal>
            <button
              className="text-center bg-white text-black px-5 py-2 rounded-xl w-full"
              type="button"
              onClick={handleOrderNowClick}
            >
              Order Now
            </button>
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default HomeOurServicesCard;
