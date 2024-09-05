import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import SettingsIcon from '@/icons/settingsIcon'

export default function SettingsSheet() {
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
      </SheetContent>
    </Sheet>
  )
}
