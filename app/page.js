"use client";
import React from "react";
import SearchBox from "./searchBox";
import ShowWeatherData from "./showWeatherData";

export default function Home() {
  return (
    <main className="m-5">
      <SearchBox />
      <ShowWeatherData />
    </main>
  );
}
