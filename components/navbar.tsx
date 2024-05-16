"use client";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      className=" bg-default-50 rounded-3xl"
    >
      <NavbarBrand>
        <NextLink className="flex items-center gap-1" href="/">
          <Logo />
          <p className="font-bold text-inherit">Wolf</p>
        </NextLink>
      </NavbarBrand>

      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <Button
              as={NextLink}
              href={item.href}
              color="default"
              variant="light"
              radius="full"
              className={pathname === item.href ? "bg-primary" : ""}
            >
              {item.label}
            </Button>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>
    </NextUINavbar>
  );
};
