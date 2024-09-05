'use client'
import React from 'react'
import SearchBox from './searchBox'
import ShowWeatherData from './showWeatherData'
import SettingsSheet from './components/settings'

export default function Home() {
  return (
    <main className="m-5">
      <SettingsSheet />
      <SearchBox />
      <ShowWeatherData />
    </main>
  )
}
