"use client"

import { Menu } from "lucide-react";

import {
  Accordion,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { payloadNavbar } from "@/constant/payload";
import { renderMenuItem, renderMobileMenuItem } from "./_components/MenuItem";
import { useSession, signOut } from "@/lib/auth";
import Image from "next/image";
const { auth, logo, menu } = payloadNavbar

const Navbar = () => {
  const { data } = useSession();
  return (
    <section className="py-4 fixed top-0 left-0 right-0 z-50 bg-background px-5 md:px-10">
      <div className="container mx-auto">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <Image src={logo.src} className="max-h-8" alt={logo.alt} width={50} height={500} />
              <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
              </span>
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          {
            data?.user
              ?
              <div className="flex gap-2 items-center">
                <p className="font-semibold text-sm">{data.user.name}</p>
                <Button effect={"scale"} variant="outline" size="md" className="py-2" onClick={async () => await signOut()} >
                  Logout
                </Button>
              </div>
              : <div className="flex gap-2">
                <Button effect={"scale"} asChild variant="outline" size="sm">
                  <a href={auth.login.url}>{auth.login.title}</a>
                </Button>
                <Button effect={"scale"} asChild size="sm">
                  <a href={auth.signup.url}>{auth.signup.title}</a>
                </Button>
              </div>
          }
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2 w-fit">
              <Image src={logo.src} className="max-h-8 w-fit" alt={logo.alt} width={10} height={500} />
            </a>
            <p className="text-lg font-semibold tracking-tighter w-full text-center mx-auto">
              {logo.title}
            </p>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <Image src={logo.src} className="max-h-8" alt={logo.alt} width={500} height={500} />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <a href={auth.login.url}>{auth.login.title}</a>
                    </Button>
                    <Button asChild>
                      <a href={auth.signup.url}>{auth.signup.title}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
