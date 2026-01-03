import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import logo from "@/assets/home/kea-software_logo_plain.svg";
import { Link } from "react-router";
import ModeToggle from "@/components/mode-toggle.tsx";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-10">
        <div className="mx-auto px-10 flex items-center justify-between py-3 relative">
          {/* logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 font-bold text-xl shrink-0"
          >
            <div className="w-14 h-14" aria-hidden="true">
              <img
                src={logo}
                alt="Kea Software Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span>Kea Software</span>
          </Link>

          {/* mobile */}
          <button
              className="md:hidden relative w-8 h-8"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-full bg-black dark:bg-white transition-transform duration-300 ${
                menuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-full bg-black dark:bg-white transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-full bg-black dark:bg-white transition-transform duration-300 ${
                menuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>

          {/* desktop */}
          <div className="hidden md:flex w-full space-x-3">
            <div className="relative mr-auto ml-4">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-semiboldbold text-md">Projects</NavigationMenuTrigger>
                    <NavigationMenuContent className="dark:bg-gray-800">
                      <ul className="grid w-[250px] gap-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/overview/planner">
                              <div className="font-medium">Kea Planner</div>
                              <div className="text-muted-foreground">
                                Shared online agenda for school
                              </div>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/">
                              <div className="font-medium">LessonGear</div>
                              <div className="text-muted-foreground">
                                Tools for every lesson
                              </div>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/">
                              <div className="font-medium">ToolTime</div>
                              <div className="text-muted-foreground">
                                Mashine usage calculations
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
            
              </NavigationMenu>
            
            </div>

            <ModeToggle />
            {/* <button className="hover:cursor-pointer hover:bg-gray-800 rounded-md px-2">
              <CircleUserIcon
                className="h-5 w-5 text-black dark:text-white"
                strokeWidth={2}
              />            
            </button> */}

            <a
                href="#contact"
                className="px-3 py-1 rounded-lg bg-primary-button-background text-white hover:bg-primary-button-hover transition"
              >
                Contact
              </a>
          </div>

          


        </div>
      </header>

      {/* mobile navigation menu */}
      <div
        className={`fixed inset-0 top-20 border border-t-line/50 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col gap-2 pl-6 pt-5 text-lg">
          <div className="flex flex-col gap-1">
            <div className="text-muted-foreground mb-1">Menu</div>
            <a onClick={() => setMenuOpen(false)} href="#home" className="text-2xl font-normal">
              Home
            </a>
            <a onClick={() => setMenuOpen(false)} href="#contact" className="text-2xl font-normal">
              Contact
            </a>
          </div>
          <div className="flex flex-col pt-5 gap-2">
            <div className="text-muted-foreground">Projects</div>
            <Link to={"/overview/planner"} onClick={() => setMenuOpen(false)} className="text-2xl font-normal flex flex-col">
              <div>Kea Planner</div>
              <div className="text-muted-foreground text-base">Shared online agenda for school</div>
            </Link>
            <a onClick={() => setMenuOpen(false)} href="" className="text-2xl font-normal flex flex-col">
              <div>LessonGear</div>
              <div className="text-muted-foreground text-base">Tools for every lesson</div>
            </a>
            <a onClick={() => setMenuOpen(false)} href="" className="text-2xl font-normal flex flex-col">
              <div>ToolTime</div>
              <div className="text-muted-foreground text-base">Mashine usage calculations</div>
            </a>
          </div>
          
        </div>
      </div>

      {/* normal page */}
      <div>
        <Outlet />
        {/* Footer */}
        <footer className="mt-20 border-t border-gray-300 text-sm text-slate-500 py-5">
          <div className="px-10 flex flex-col gap-2 items-center md:flex-row md:justify-between">
            {/* Left */}
            <div>© {new Date().getFullYear()} Kea Software</div>
            {/* Right */}
            <div className="flex gap-3">
              <a href="#about" className="hover:text-teal-700">About</a>
              <span>·</span>
              <a href="#contact" className="hover:text-teal-700">Contact</a>
              <span>·</span>
              <a href="https://kea-software.github.io/resources/terms.html" className="hover:text-teal-700">Terms</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Header;