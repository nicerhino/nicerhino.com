"use client";

import Footer from "../components/footer";
import Header from "../components/header";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const stats = [
  { id: 1, name: "Global bankruptcy annual growth rate", value: "12.5% AGR" },
  { id: 2, name: "Countries reporting increase in bankruptcies", value: "Over 50%" },
  { id: 3, name: "Bankruptcies in France for 2023", value: "57,731" },
];

const features = [
  {
    name: "1. Stop the bleeding",
    description:
      "Our team urgently consolidates your cash position, campaigns for debt relief, and takes inventory of remaining resources.",
  },
  {
    name: "2. Turnaround strategy",
    description:
      "We evaluate your finances, operations, pipeline, staff, and customers to develop a comprehensive turnaround strategy.",
  },
  {
    name: "3. Take action",
    description:
      "Together we implement the turnaround strategy, measure its effectiveness, and adjust as needed.",
  },
  {
    name: "4. Growth",
    description:
      "Once stabilised, we'll redirect attention to growth opportunities, leaving your business in a strong position with your future assured.",
  },
];

function Hero() {
  return (
    <section
      id="hero"
      className="h-screen bg-[url(/images/stock/stuck-in-mud.jpg)] bg-no-repeat bg-top bg-cover scroll-p-96"
    >
      <div className="flex bg-slate-950/70 h-screen pt-24 pb-10 sm:pt-32">
        <div className="m-auto max-w-3xl text-center align-middle">
          <h1 className="text-base/7 font-semibold text-indigo-600">Services / Turnaround</h1>
          <p className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            <span className="text-barbie">Stuck?</span>
            <br />
            Stop struggling and reach out.
          </p>
          <div className="mt-30">
            <Link href="#stats" className="scroll-smooth">
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

function Stats() {
  return (
    <section id="stats" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="col-span-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-center">
          Sobering statistics...
        </h2>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 mt-20">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-radical">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-radical sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="mt-10 text-sm text-slate-700 text-center">
        Dunn &amp; Bradstreet Global Bankruptcy Report, 2024
      </div>
    </section>
  );
}

// function Summary() {
//   return (
//     <section className="mx-auto max-w-7xl px-6 lg:px-8">
//       <div className="mx-auto max-w-2xl lg:text-center">
//         <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl lg:text-balance">
//           But we have a plan.
//         </h2>
//         <p className="mt-6 text-lg/8 text-slate-400">
//           Just because your business is struggling doesn&apos;t mean it&apos;s doomed. With our
//           expertise and support, <strong>you can succeed.</strong>
//         </p>
//       </div>
//       <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
//         <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
//           {features.map((feature) => (
//             <div key={feature.name} className="relative pl-16">
//               <dt className="text-base/7 font-semibold text-slate-200">
//                 <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
//                   <feature.icon aria-hidden="true" className="size-6 text-white" />
//                 </div>
//                 {feature.name}
//               </dt>
//               <dd className="mt-2 text-base/7 text-slate-500">{feature.description}</dd>
//             </div>
//           ))}
//         </dl>
//       </div>

//       <div className="mt-20 flex justify-center">
//         <a
//           href="/connect"
//           className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
//         >
//           Take action
//         </a>
//       </div>
//     </section>
//   );
// }

function Summary() {
  return (
    <section id="summary" className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl lg:text-balance">
          But we <span className="text-barbie">have a plan.</span>
        </h2>
        <p className="mt-6 text-lg/8 text-slate-400">
          Just because your business is struggling doesn&apos;t mean it&apos;s over. With our
          expertise and support, <strong>you can succeed.</strong>
        </p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.name}>
            <dt className="font-semibold">{feature.name}</dt>
            <dd className="mt-1 text-slate-400">{feature.description}</dd>
          </div>
        ))}
      </dl>

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
      {Stats()}
      {Summary()}
      {Footer()}
    </main>
  );
}
