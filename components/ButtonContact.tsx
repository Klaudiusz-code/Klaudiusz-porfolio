import React from "react";
import Link from "next/link";

type ButtonContactProps = {
  buttonText: string;
}

const ButtonContact = (props: ButtonContactProps) => {
  const {
    buttonText,
  } = props;

  return (
    <Link href="/contact" passHref>
      <button className="max-w-[200px] bg-customColor py-2 px-5 xl:min-w-[150px] h-12 rounded-lg hover:scale-105 transition-all duration-150">
        <span className="text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] text-white xl:text-[16px] font-[400]">
          {buttonText}
        </span>
      </button>
    </Link>
  );
};

export default ButtonContact;
