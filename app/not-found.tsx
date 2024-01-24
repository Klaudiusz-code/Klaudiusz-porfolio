"use client";
import React from "react";
import Link from "next/link";

const Notfound = () => {
  return (
    <div className="global">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Wróć do strony głownej"</Link>
    </div>
  );
};

export default Notfound;
