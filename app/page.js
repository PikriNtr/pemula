import TaskIcon from '@/components/svgs/TaskIcon';
import GithubIcon from '@/components/svgs/github';
import InstagramIcon from '@/components/svgs/instagram';
import TiktokIcon from '@/components/svgs/tiktok';
import YoutubeIcon from '@/components/svgs/youtube';
import { Bars3Icon } from '@heroicons/react/24/solid'
const menus = [
  { href: '/', text: "home"  },
  { href: '/about', text: "about"  },
  { href: '/contact', text: "contact"  },
]

const icons = [
  {
    href: 'https://github.com/PikriNtr',
    icon:  GithubIcon,
  },
  {
    href: 'https://instagram.com/PikriNtr',
    icon:  InstagramIcon,
  },
  {
    href: 'https://tiktok.com/ilp_21',
    icon:  TiktokIcon,
  },
  {
    href: 'https://www.youtube.com/@pikrintr',
    icon:  YoutubeIcon,
  },
]

export default function Home() {
  return (
    <><header className="fixed w-full">
      <div className="py-3 md:py-4 px-4 mx-auto flex flex-row justify-between items-center md:max-w-3xl xl:max-w-7x1">
        <div className="flex items-center space-x-6">
          <a className="flex py-2 md:px-3 space-x-2 md:space-x-4 items-center" href="/">
            <img src="https://avatars.githubusercontent.com/u/82983170?v=4"
              className="w-6 h-6 md:w-10 md:h-10 object-cover rounded-full" />
            <span className="font-semibold leading-[160%] text-text">PikriNtr</span>
          </a>
          <nav className="hidden md:block">
            <ul className="flex space-x-2 ">
              {menus.map((menu, index) => (
                <li key={index}>
                  <a className="px-3 py-2 leading-[160%] text-sm" href={menu.href}>{menu.text}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-3">
          <div className="hidden lg:flex items-center space-x-6">
            {icons.map((icon, index) => <a key={index}>
              <icon.icon />
            </a>)}
          </div>

          <button className="py-2 px-6 text-sm leading-[160%] border border-brand rounded-full">anomaly jir</button>

          <button className="md:hidden p-2">
            <Bars3Icon className="w-6 h-6 " />
          </button>
        </div>
      </div>
    </header>
    <main className="px-4 py-12  ">
        {/*hero */}
        <section className="mt-[58px] mx-auto md:max-w-3xl xl:max-w-7x1">
          <div>
            <h3 className="flex flex-col font-light text-[34px] md:text-[72px]">
              <span className="flex items-center space-x-2">Gw Fikri<TaskIcon className="md:w-14 md:h-14"/></span>
              <span>Ini cuma Prototype </span>
              <span>Maaf masih pemula</span>
            </h3>
          </div>
          <div>
            <h2 className="flex flex-col font-reguler md:text-[16]">
              <span>kata reika aku pemula di after effect, tapi fakta sih tapi aku sedih aduhai le, tapi akun mole ku laku 300k</span>
            </h2>
          </div>
        </section>
      </main>
    </>

  );
  
}
