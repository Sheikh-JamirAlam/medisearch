"use client";

import { useEffect, useState, useRef } from "react";
import { Bulb, GraduationCap, LeftArrowCircle, RightArrowCircle } from "@/ui/Icons";

type PropType = {
  head: string;
  icon: string;
  ques: Array<String>;
};

export default function HomeQuestions(props: PropType): JSX.Element {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 0.5);
    }
  };

  const moveNext = () => {
    if (carousel.current !== null && carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current) {
      setCurrentIndex((prevState) => prevState + 0.5);
    }
  };

  const isDisabled = (direction: string) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current;
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current ? carousel.current.scrollWidth - carousel.current.offsetWidth : 0;
  }, []);

  return (
    <div className="w-full flex flex-col gap-2 hidden-css" style={{ transitionDelay: "0.6s" }}>
      <div className="px-5 flex justify-between items-center">
        <span className="flex gap-1 items-center">
          <div className="w-4 h-4">{props.icon === "bulb" ? <Bulb /> : <GraduationCap />}</div>
          <span className="text-xs">{props.head}</span>
        </span>
        <div className="flex">
          <button className={`w-5 h-5 cursor-pointer ${isDisabled("prev") && "text-primary-light-grey"}`} onClick={movePrev}>
            <LeftArrowCircle />
          </button>
          <button className={`w-5 h-5 cursor-pointer ${isDisabled("next") && "text-primary-light-grey"}`} onClick={moveNext}>
            <RightArrowCircle />
          </button>
        </div>
      </div>
      <div className="mx-5 flex justify-between items-center">
        <div
          ref={carousel}
          className="relative flex gap-2 items-center overflow-hidden scroll-smooth"
          style={{
            maskImage: isDisabled("prev")
              ? "linear-gradient(to right, #000 90%, transparent 100%)"
              : isDisabled("next")
                ? "linear-gradient(to left, #000 90%, transparent 100%)"
                : "linear-gradient(to right, transparent 0, #000 10%, #000 90%, transparent 100%)",
          }}
        >
          <div className="flex gap-1">
            {props.ques.map((ques, index) => (
              <a href="" key={index}>
                <div className="py-2 px-3 bg-primary-white rounded-full border-[1px] border-secondary-dark-blue whitespace-nowrap text-sm">{ques}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
