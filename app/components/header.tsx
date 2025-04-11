"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon, PhoneArrowDownLeftIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import {
  ArrowTrendingDownIcon,
  Bars3Icon,
  ChatBubbleLeftRightIcon,
  CubeTransparentIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const services = [
  {
    name: "Advisory",
    description: "Get clarity and momentum in complex times.",
    href: "/advisory",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Turnaround",
    description: "Expert help for urgent financial recovery.",
    href: "/turnaround",
    icon: ArrowTrendingDownIcon,
  },
  {
    name: "Deep Tech",
    description: "Research and development for the most complex domains.",
    href: "/deep-tech",
    icon: CubeTransparentIcon,
  },
];
const callsToAction = [
  { name: "Request callback", href: "/connect#callback", icon: PhoneArrowDownLeftIcon },
  { name: "Call now", href: "tel:+61272574433", icon: PhoneIcon },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-inherit/80 backdrop-blur-sm z-10">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:flex-1 lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 cursor-pointer hover:text-corn">
              Services
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-slate-900 shadow-lg transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {services.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex gap-x-6 rounded-lg p-4 text-sm/6 text-slate-200 hover:bg-slate-800"
                  >
                    <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-slate-700 group-hover:bg-slate-300">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block text-slate-200">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-slate-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-white/20 bg-slate-800">
                {callsToAction.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 hover:bg-slate-700"
                  >
                    <item.icon aria-hidden="true" className="size-5 flex-none" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link href="/connect" className="text-sm/6 text-slate-200">
            Connect
          </Link>

          <Link href="/" className="text-sm/6 text-slate-200">
            Company
          </Link>
        </PopoverGroup>

        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Nice Rhino</span>
          <Image alt="" src="/images/icon.png" className="h-8 w-auto" width={47} height={32} />
        </Link>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/*<a href="#" className="text-sm/6 font-semibold">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>*/}
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-slate-900 sm:max-w-sm">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Nice Rhino</span>
                <Image
                  alt=""
                  src="/images/icon.png"
                  className="h-8 w-auto"
                  width={47}
                  height={32}
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base/7 text-slate-200 hover:bg-slate-800"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-slate-700 group-hover:bg-slate-300">
                        <item.icon
                          aria-hidden="true"
                          className="size-6 group-hover:text-indigo-600"
                        />
                      </div>
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2 py-6">
                  <Link
                    href="/connect"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-slate-200"
                  >
                    Connect
                  </Link>
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-slate-200"
                  >
                    Company
                  </Link>
                </div>
                <div className="py-6">
                  {/*<a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold hover:bg-gray-50"
                  >
                    Log in
                  </a>*/}
                </div>
              </div>
            </div>
          </div>
          <div className="sticky bottom-0 grid grid-cols-2 divide-x divide-white/20 bg-slate-800 text-center">
            {callsToAction.map((item) => (
              <a key={item.name} href={item.href} className="p-3 text-base/7 hover:bg-slate-700">
                {item.name}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
