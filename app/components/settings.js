import React, { useState } from 'react'
import useStore from '@/utils/store'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import SettingsIcon from '@/icons/settingsIcon'

export default function SettingsSheet() {
  const units = useStore((state) => state.units)
  const setUnits = useStore((state) => state.setUnits)
  const [isMetric, setIsMetric] = useState(units === 'Fahrenheit')

  const handleToggleUnit = () => {
    const newUnits = isMetric ? 'metric' : 'imperial'
    setUnits(newUnits)
    setIsMetric(!isMetric)
    console.log('units', units)
  }

  return (
    <Sheet>
      <SheetTrigger>
        <a className="flex m-5 ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          <SettingsIcon />
        </a>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
          <SheetDescription>Configure your preferences</SheetDescription>
        </SheetHeader>
        <button onClick={handleToggleUnit}>
          Switch to {isMetric ? 'Celsius' : 'Fahrenheit'}
        </button>
      </SheetContent>
    </Sheet>
  )
}
