"use client";

import Footer from "../components/footer";
import Header from "../components/header";
import Link from "next/link";
import Image from "next/image";
import Cta from "../components/cta";
import { CubeTransparentIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { BeakerIcon, WrenchScrewdriverIcon, CodeBracketIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Research & Development",
    description: "Delving into the most complex subject matter to illuminate your path forward.",
  },
  {
    name: "Feasibility Analysis",
    description:
      "Testing your most ambitious ideas against the given requirements and constraints.",
  },
  {
    name: "Product Design",
    description: "Designing software and hardware solutions to the most exacting standards.",
  },
  {
    name: "Prototyping",
    description: "Building proofs of concept to accelerate your team's time to market.",
  },
  {
    name: "Troubleshooting",
    description: "An expert team of engineers to help you solve your most complex problems.",
  },
  {
    name: "Team Augmentation",
    description:
      "Providing your team with subject matter experts to fill knowledge and capacity gaps.",
  },
];

const caseFeatures = [
  {
    name: "Research & Development.",
    description:
      "Conducted a thorough investigation into the current/future capability of WebAssembly, a bleeding edge technology that enables much of Selium's value proposition.",
    icon: BeakerIcon,
  },
  {
    name: "Product Design.",
    description:
      "Architected a fully composable compute and data platform that makes traditional networks and hosting models obsolete.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Prototyping.",
    description:
      "Built numerous proofs of concept for a composable data streaming platform, written in Rust.",
    icon: CodeBracketIcon,
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
    <section id="summary" className="py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 bg-slate-950/50">
        <div className="absolute -z-1 top-43">
          <Image
            src="/images/stock/elephant-bw.png"
            alt="Wise elephant"
            className="w-sm ml-10 object-cover max-lg:hidden"
            width={1000}
            height={1212}
          />
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-2">
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
              Our <span className="text-barbie">experience overcomes</span> the highest barriers.
            </h2>
          </div>
          <div className="col-span-3">
            <p className="py-10">
              Lasting competitive advantage demands industry-leading technology. Our team of experts
              can unlock solutions you didn&apos;t realise were possible.
            </p>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-slate-400 sm:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="font-semibold text-slate-200">
                    <CubeTransparentIcon
                      aria-hidden="true"
                      className="absolute top-1 left-0 size-5 text-indigo-500"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-2">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudy() {
  return (
    <div className="pb-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden sm:bg-gray-900 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <div className="lg:row-start-2 lg:max-w-md">
              <h2 className="text-base/7 font-semibold text-indigo-600">Featured Project</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl lg:text-balance">
                <span className="text-barbie">Selium.</span> Compute fabric and data streaming.
              </p>
              <p className="mt-6 text-lg/8 text-gray-300">
                Selium is a cutting edge compute and data platform designed to disrupt the way
                engineers build, deploy, and scale software applications. <br />
                <br />
                Nice Rhino&apos;s engineers spent two years helping to design and build this
                revolutionary platform.
              </p>
            </div>
            <div className="relative lg:row-span-4 lg:w-[36rem] lg:max-w-none text-center">
              <Link href="https://selium.com" target="_blank">
                <Image
                  alt="Selium logo"
                  src="/images/selium-logo.png"
                  width={2294}
                  height={620}
                  className="max-w-md min-w-full px-5 py-10 rounded-xl bg-slate-200"
                />
              </Link>
              <p className="mt-5">
                For more information, see{" "}
                <Link href="https://selium.com" target="_blank">
                  selium.com
                </Link>
                .
              </p>
            </div>
            <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
              <dl className="max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
                {caseFeatures.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="ml-9 inline-block font-semibold text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-indigo-500"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
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
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main>
      {Header()}
      {Hero()}
      {Summary()}
      {CaseStudy()}
      {Cta()}
      {Footer()}
    </main>
  );
}
