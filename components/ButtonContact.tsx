import React from "react";
import Link from "next/link";

const ButtonContact = () => {
  return (
    <button className="bg-customColor max-w-[200px]  p-2 xl:min-w-[150px] h-12 rounded-sm hover:text-customColor hover:bg-navcolor transition-all duration-150">
      <Link href="/contact" passHref>
        <span className="text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] text-white xl:text-[16px] font-bold">
          Skontaktuj się!
        </span>
      </Link>
    </button>
  );
};

export default ButtonContact;
