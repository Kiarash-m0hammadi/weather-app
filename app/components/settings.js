import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

export default function SettingsSheet() {
  return (
    <Sheet>
      <SheetTrigger>
        <button className="flex m-5 ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Open Settings
        </button>
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
