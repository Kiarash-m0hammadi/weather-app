import SettingsSheet from './settings'
import SearchBox from './searchBox'

export default function Header() {
  return (
    <wrapper className="flex">
      <SearchBox />
      <SettingsSheet />
    </wrapper>
  )
}
