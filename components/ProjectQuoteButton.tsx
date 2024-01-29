import Link from "next/link";
import React from "react";
const ProjectQuoteButton = () => {
  return (
    <button className="mt-4 bg-white p-3 lg:p-5 h-13 rounded-3xl hover:text-customColor hover:bg-slate-200 transition-all duration-150">
      <Link href="/contact" passHref>
        <span className="text-[0.8rem] font-sans md:text-[0.9rem] lg:text-[1.2rem] text-[#0077cc] xl:text-[16px] font-bold">
          Darmowa Wycena Projektu
        </span>
      </Link>
    </button>
  );
};

export default ProjectQuoteButton;