import React from "react";
import CarouselComponent from "../components/CarouselComponent";
function Shows() {
    const cards = [
        { title: "Card 1", image: "/assets/sample.png" },
        { title: "Card 2", image: "/assets/sample.png" },
        { title: "Card 3", image: "/assets/sample.png" },
        { title: "Card 4", image: "/assets/sample.png" },
        { title: "Card 5", image: "/assets/sample.png" },
        { title: "Card 6", image: "/assets/sample.png" },
        { title: "Card 7", image: "/assets/sample.png" },
        { title: "Card 8", image: "/assets/sample.png" },
        { title: "Card 9", image: "/assets/sample.png" },
        { title: "Card 10", image: "/assets/sample.png" },
        { title: "Card 11", image: "/assets/sample.png" },
      ];
  return (
    <div className="pt-[100px]">
        <div className="text-2xl pl-8 font-extrabold">Shows</div>
        <CarouselComponent cards={cards} />
    </div>
  );
}
export default Shows