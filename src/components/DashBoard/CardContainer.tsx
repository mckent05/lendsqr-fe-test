import React from "react";
import CardDetails from "./CardDetails";
import logo1 from "../../assets/images/userdashboard/logo1.png"
import logo2 from "../../assets/images/userdashboard/logo2.png"
import logo3 from "../../assets/images/userdashboard/logo3.png"
import logo4 from "../../assets/images/userdashboard/logo4.png"
import "./cards.css"

export interface CardList {
  logo: string;
  cardDesc: string;
  cardAmount: string;
}

const CardContainer = () => {
  const cardList: CardList[] = [
    {
      logo: logo1,
      cardDesc: "users",
      cardAmount: "2,453",
    },
    {
      logo: logo2,
      cardDesc: "active users",
      cardAmount: "2,453",
    },
    {
      logo: logo3,
      cardDesc: "users with loans",
      cardAmount: "2,453",
    },
    {
      logo: logo4,
      cardDesc: "users with saving",
      cardAmount: "102,453",
    },
  ];

  return (
    <div className="card__container">
      {cardList.map((card) => (
        <CardDetails
          logo={card.logo}
          cardDesc={card.cardDesc}
          cardAmount={card.cardAmount}
        />
      ))}
    </div>
  );
};

export default CardContainer;
