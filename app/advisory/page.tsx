"use client";

import Footer from "../components/footer";
import Header from "../components/header";
import Link from "next/link";
import {
  ChevronDownIcon,
  ArrowTrendingUpIcon,
  CodeBracketSquareIcon,
  RocketLaunchIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Cta from "../components/cta";

const features = [
  {
    name: "Strategic",
    description:
      "Understand your micro and macro environments, set ambitious vision, and create competitive advantage.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Operational",
    description: "Realise efficiencies through process improvement, restructuring, and automation.",
    icon: ClipboardDocumentListIcon,
  },
  {
    name: "Technical",
    description:
      "Uplift engineering capabilities, increase velocity, and improve collaboration with other teams.",
    icon: CodeBracketSquareIcon,
  },
  {
    name: "Financial",
    description:
      "Gain greater insight into your financial performance and make data-driven decisions.",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Fractional Leadership",
    description:
      "Benefit from an experienced CFO, COO, or CTO on your management team, without the expense of a full-time commitment.",
    icon: UserGroupIcon,
  },
];

function Hero() {
  return (
    <section
      id="hero"
      className="h-screen bg-[url(/images/stock/lion-stalking.jpg)] bg-no-repeat bg-top bg-cover scroll-p-96"
    >
      <div className="flex bg-slate-950/70 h-screen pt-24 pb-10 sm:pt-32">
        <div className="m-auto max-w-3xl text-center align-middle">
          <h1 className="text-base/7 font-semibold text-indigo-600">Services / Advisory</h1>
          <p className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            It&apos;s a jungle out there.
            <br />
            <span className="text-barbie">Who has your back?</span>
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
    <section id="summary" className="relative my-24 sm:my-32 overflow-x-clip">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <h2 className="col-span-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
            Advice that could <span className="text-barbie">save your organisation.</span>
          </h2>
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base/7 font-semibold text-slate-200">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base/7 text-slate-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-12 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:top-auto lg:bottom-[-12rem] lg:translate-y-0 lg:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-25"
        />
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
      {Cta()}
      {Footer()}
    </main>
  );
}
