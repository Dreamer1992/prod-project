import { RoutePath } from 'shared/config/routeConfig/routeConfig'

// assets
import AboutIcon from 'shared/assets/icons/page/about_page.svg'
import MainIcon from 'shared/assets/icons/page/main_page.svg'
import ProfileIcon from 'shared/assets/icons/page/profile_page.svg'

export interface ISidebarItem {
  text: string
  path: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const sidebarList: ISidebarItem[] = [
  {
    text: 'Main_page',
    path: RoutePath.main,
    Icon: MainIcon,
  },
  {
    text: 'About_us',
    path: RoutePath.about,
    Icon: AboutIcon,
  },
  {
    text: 'Profile',
    path: RoutePath.profile,
    Icon: ProfileIcon,
  },
]
