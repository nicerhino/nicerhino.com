"use client";

import Image from "next/image";
import Footer from "./components/footer";
import Header from "./components/header";
import Link from "next/link";
import {
  ChatBubbleLeftRightIcon,
  ArrowTrendingDownIcon,
  CubeTransparentIcon,
} from "@heroicons/react/20/solid";
import Cta from "./components/cta";
import { track } from "@vercel/analytics";
import LogoCloud from "./components/sections/logocloud";

const features = [
  {
    name: "Advisory",
    description:
      "Time is short. Organisations cannot afford to tread water whilst they attempt to navigate ever more complex environments. Our consultants cut through the fog, delivering much needed clarity and forward momentum.",
    icon: ChatBubbleLeftRightIcon,
    href: "advisory",
  },
  {
    name: "Turnaround",
    description:
      "No pressure is greater than that on your bottom line. We understand this imminent threat and respond with urgency to remediate your situation. Don't go it alone. Engage our turnaround experts today.",
    icon: ArrowTrendingDownIcon,
    href: "turnaround",
  },
  {
    name: "Deep Tech",
    description:
      "Global competition is predicated on the development and leveraging of increasingly sophisticated technology. Utilise our expertise to deliver on the most ambitious products and challenging problems.",
    icon: CubeTransparentIcon,
    href: "deep-tech",
  },
];

function Hero() {
  return (
    <section
      id="hero"
      className="h-screen bg-[url(/images/hero-rhino.svg)] bg-no-repeat bg-center bg-contain"
    >
      <div className="bg-slate-950/70 m-auto h-screen px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl lg:flex-auto text-center">
          <h1 className="mt-10 text-5xl font-bold tracking-tight sm:text-7xl">
            Consulting that{" "}
            <span className="relative text-indigo-600">
              delivers<span className="animate-pulse">.</span>
            </span>
          </h1>
          <div className="mt-10 mx-auto max-w-2xl text-lg sm:text-2xl font-semibold tracking-tight text-slate-300">
            Your most{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-(--color-barbie) to-(--color-barbie1)">
              reliable ally.{" "}
            </span>
            With you through every challenge. Guiding you to prosperity.
          </div>
          <div className="mt-20 flex items-center justify-center gap-x-6">
            <Link
              href="/connect"
              className="rounded-md bg-gradient-to-r from-(--color-barbie) to-(--color-barbie1) hover:from-(--color-barbie1) hover:text-white px-3.5 py-2.5 text-sm font-semibold text-white"
              onClick={() => track("Connect CTA", { location: "Home Hero" })}
            >
              Connect with us
            </Link>
            <Link href="#what-we-do" className="text-sm/6 font-semibold">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative isolate py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
          className="aspect-1108/632 w-[69.25rem] bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">What we do</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl lg:text-balance">
            <span className="text-barbie">We deliver change.</span>
            <br />
            Not reports.
          </p>
          <p className="mt-6 text-lg/8 text-slate-400">
            Nice Rhino provides strategic, financial, operational, and technical services to
            governments and organisations in the most demanding industries and challenging
            circumstances.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-slate-50">
                  <feature.icon aria-hidden="true" className="size-5 flex-none text-indigo-600" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-slate-400">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm/6 font-semibold text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <div className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">Who we are</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl lg:text-balance">
                An Australian consultancy with <span className="text-barbie">global reach.</span>
              </p>
              <p className="mt-6 text-xl/8 text-slate-400">
                We have experience working across Europe and Australasia in fields such as banking
                and finance, critical-to-life engineering, geospatial, telecommunications, and
                retail.
              </p>
              <div className="mt-10 max-w-xl text-base/7 text-slate-400 lg:max-w-none">
                <p>
                  Our consultants are subject matter experts in a variety of fields and can be
                  deployed at a moment&apos;s notice, anywhere in the world. We are passionate
                  global citizens and are excited to support your mission, irrespective of
                  nationality, gender, race, religion, or sexual identity.
                </p>

                <h3 className="mt-10 text-2xl font-bold tracking-tight text-slate-200">Mission</h3>
                <p className="mt-4">
                  <strong>
                    Our mission is to be your <strong>ally</strong>.
                  </strong>{" "}
                  Whether in an advisory or a delivery capacity, we are your most reliable partner
                  and strongest defender.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <Image
              alt="Photo of Earth"
              src="/images/stock/earth.png"
              width={2000}
              height={2000}
              className="w-[48rem] max-w-none sm:w-[57rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {Header()}
      {Hero()}
      {WhatWeDo()}
      {LogoCloud()}
      {WhoWeAre()}
      {Cta()}
      {Footer()}
    </main>
  );
}
