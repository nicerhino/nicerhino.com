"use client";

import Footer from "../components/footer";
import Header from "../components/header";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    order: 1,
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    order: 3,
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    order: 2,
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    order: 4,
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];

function Hero() {
  return (
    <section
      id="hero"
      className="h-screen bg-[url(/images/stock/baobab-tree.jpg)] bg-no-repeat bg-top bg-cover scroll-p-96"
    >
      <div className="flex bg-slate-950/70 h-screen pt-24 pb-10 sm:pt-32">
        <div className="m-auto max-w-3xl text-center align-middle">
          <h1 className="text-base/7 font-semibold text-indigo-600">Services / Deep Tech</h1>
          <p className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            Wisdom takes time.
            <br />
            <span className="text-barbie">Leverage ours now.</span>
          </p>
          <div className="mt-30">
            <Link href="#summary" className="scroll-smooth">
              <ChevronDownIcon
                aria-hidden="true"
                className="size-14 text-white hover:text-corn inline-block animate-bounce"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Summary() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl lg:text-balance">
          But we have a plan.
        </h2>
        <p className="mt-6 text-lg/8 text-slate-400">
          Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas
          a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base/7 font-semibold text-slate-200">
                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                  {feature.order}
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base/7 text-slate-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-20 flex justify-center">
        <a
          href="/connect"
          className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        >
          Take action
        </a>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main>
      {Header()}
      {Hero()}
      {Summary()}
      {Footer()}
    </main>
  );
}
