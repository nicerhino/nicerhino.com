"use client";

import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import {
  BuildingOffice2Icon,
  CheckIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import countries from "../../countries.json";
import timezones from "../../timezones.json";
import Link from "next/link";
import { ConnectResult, requestCall, sendMessage } from "./actions";
import { useActionState } from "react";
import { track } from "@vercel/analytics";
import nr from "../../nicerhino.json";
import LogoCloud from "../components/sections/logocloud";

const initialState: ConnectResult = {
  success: false,
  message: "",
};

function Hero() {
  return (
    <section id="hero" className="relative">
      <div className="mx-auto max-w-7xl lg:mb-40">
        <div className="relative z-1 pt-14 lg:w-full lg:max-w-2xl">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-slate-950 lg:block"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h1 className="text-5xl font-semibold tracking-tight text-pretty sm:text-7xl">
                <span className="text-barbie">Connect</span> with us.
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-slate-400 sm:text-xl/8">
                Looking for guidance on a specific project, a thorny issue, or an ambitious idea?
                We&apos;re here to help with honest feedback and subject matter expertise.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href={"tel:" + nr.tel}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={() => track("Call now CTA", { location: "Connect Hero" })}
                >
                  Call now
                </Link>
                <Link href="#message" className="text-sm/6 font-semibold">
                  Send a message <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          alt="Rhino meets a small bird"
          src="/images/stock/rhino-meet-bird.jpg"
          className="aspect-3/2 object-cover lg:aspect-auto lg:size-full"
          width={2800}
          height={2832}
        />
      </div>
    </section>
  );
}

function Connect() {
  const [state, formAction, pending] = useActionState(sendMessage, initialState);

  return (
    <section id="message" className="relative isolate">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pt-20 pb-20 lg:static lg:px-8 lg:py-40">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg overflow-x-clip">
            <div className="absolute inset-y-0 left-0 -z-10 w-full lg:w-1/2">
              <div
                aria-hidden="true"
                className="absolute top-[calc(100%-13rem)] -left-56 transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))]"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)",
                  }}
                  className="aspect-1155/678 w-[72.1875rem] bg-linear-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                />
              </div>
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
              Location
            </h2>
            <p className="mt-6 text-lg/8 text-gray-300">
              Nice Rhino is based in Orange, Australia. Our work takes us all over the globe.
            </p>
            <dl className="mt-10 space-y-4 text-base/7 text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  8 McNamara Street
                  <br />
                  Orange, NSW 2800
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href={"tel:" + nr.tel}>{nr.tel_pretty}</a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href={"mailto:" + nr.email}>{nr.email}</a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form action={formAction} className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm/6 font-semibold text-white">
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    minLength={2}
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="organisation" className="block text-sm/6 font-semibold text-white">
                  Organisation
                </label>
                <div className="mt-2.5">
                  <input
                    id="organisation"
                    name="organisation"
                    type="text"
                    autoComplete="organization"
                    required
                    minLength={1}
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm/6 font-semibold text-white">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    minLength={5}
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm/6 font-semibold text-white">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    minLength={10}
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-8">
              <div className="text-red-600 font-bold">{!state.success && state.message}</div>
              <div className="flex justify-end text-green-600">
                {state.success ? (
                  <>
                    <CheckIcon aria-hidden="true" className="size-6" />
                    <span className="pl-2">Sent</span>
                  </>
                ) : (
                  <button
                    type="submit"
                    disabled={pending}
                    className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer"
                  >
                    Send message
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

function Callback() {
  const [state, formAction, pending] = useActionState(requestCall, initialState);

  return (
    <section id="callback">
      <div className="px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Request a call.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-indigo-200">
            If you&apos;re in a different timezone, we&apos;ll call you back during your local
            business hours.
          </p>
          <form action={formAction} className="pt-10">
            <div className="flex flex-wrap justify-center justify-items-start">
              <div className="flex shrink-0 rounded-md mr-1 bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <select
                  id="timezone"
                  name="timezone"
                  aria-label="Timezone"
                  className="w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  defaultValue="UTC"
                >
                  {timezones.map((tz) => (
                    <option key={tz} value={tz}>
                      {tz}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>

              <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    aria-label="Country Code"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    {countries.map((cn) => (
                      <option key={cn.code} value={cn.dial_code}>
                        {cn.emoji} {cn.code}
                      </option>
                    ))}
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
                <input
                  id="phone-number"
                  name="phone"
                  type="tel"
                  placeholder="0400 123 456"
                  required
                  minLength={6}
                  pattern="[0-9\s-]+"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
              <div className="ml-1 text-green-600 w-24 text-left text-nowrap">
                {state.success ? (
                  <>
                    <CheckIcon aria-hidden="true" className="size-10 pl-2" />
                  </>
                ) : (
                  <button
                    type="submit"
                    disabled={pending}
                    className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer"
                  >
                    Call me
                  </button>
                )}
              </div>
            </div>
            <div className="mt-5 text-red-600 text-center font-bold">
              {!state.success && state.message}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main>
      {Header()}
      {Hero()}
      {LogoCloud()}
      {Connect()}
      {Callback()}
      {Footer()}
    </main>
  );
}
