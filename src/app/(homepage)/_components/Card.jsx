import useExtractColors from "@/hooks/useExtractColors";
import { createBackground } from "@/utils/createBackground";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const Card = ({ showName, genres, slug, imgUrl }) => {
  const cardRef = useRef(null);
  const { colors } = useExtractColors(imgUrl);
  const { hex: dominantColor } = colors[0] || {}; // Assuming the first color is the dominant one
  const { hex: dominantColor2 } = colors[0] || {};

  useEffect(() => {
    if (cardRef.current) {
      createBackground(cardRef.current, dominantColor, dominantColor2, imgUrl);
    }
  }, [dominantColor, dominantColor2, imgUrl]);

  return (
    <div
      ref={cardRef}
      // style={cardStyle}
      className="px-6 py-8 text-white h-[250px] rounded-xl grid grid-cols-3 drop-shadow-2xl shadow-2xl "
    >
      <div className="flex flex-col justify-center col-span-2">
        <h2 className="text-3xl text-ellipsis">{showName} </h2>
        <div className="flex mt-2 space-x-2">
          {genres.map((genre) => (
            <span className="px-1 text-sm bg-gray-500 rounded-full w-max">
              {genre}
            </span>
          ))}
        </div>
        <Link
          href={`/details/${slug}`}
          className="flex items-center mt-10 space-x-3 transition-transform cursor-pointer w-max"
        >
          <DoubleArrowRightIcon />
          <span>More Details</span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
