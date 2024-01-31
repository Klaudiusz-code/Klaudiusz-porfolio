import React from "react";
import Link from "next/link";

const ButtonContact = ({buttonText}) => {
  return (
    <button className="max-w-[200px] border border-customColor  py-2 px-5 xl:min-w-[150px] h-12 rounded-lg hover:text-customColor hover:bg-navcolor transition-all duration-150">
      <Link href="/contact" passHref>
        <span className="text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] text-white xl:text-[16px] font-[400]">
          {buttonText}
        </span>
      </Link>
    </button>
  );
};

export default ButtonContact;
