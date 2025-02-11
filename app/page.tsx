"use client";

import Image from "next/image";
import Footer from "./components/footer";
import Header from "./components/header";
import {
  EnvelopeIcon,
  LightBulbIcon,
  PhoneIcon,
  PresentationChartBarIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  ClipboardDocumentCheckIcon,
  CodeBracketSquareIcon,
  HeartIcon,
  PencilSquareIcon,
} from "@heroicons/react/20/solid";

const people = [
  {
    name: "John Park",
    role: "Principal Consultant",
    imageUrl: "/images/mugshot-john.svg",
    bio: "John is an experienced operations and logistics leader with a strong track record in tech leadership, having spent the last five years as an executive driving strategic growth.\n\nSkilled in large-scale digital transformation and operational integration during mergers, ownership transitions, John brings a sharp focus on efficiency, innovation, and business scalability.",
  },
  {
    name: "Pete Hayes",
    role: "Principal Consultant",
    imageUrl: "/images/mugshot-pete.svg",
    bio: "A software engineer by trade, Pete has spent his career in tech leadership, helping form strategy and implementation for some of the world's largest institutions, including Crossrail, HSBC and Lloyd's Bank.\n\nPete has a business degree and two startups under his belt.",
  },
];

const features = [
  {
    name: "Build technical competency.",
    description:
      "Helping you design and build a competent technical team that is well organised and mission focussed.",
    icon: CodeBracketSquareIcon,
  },
  {
    name: "Uplift existing capacity.",
    description:
      "Assessing your existing technical capacity, identifying gaps, and improving delivery.",
    icon: HeartIcon,
  },
  {
    name: "Prototyping.",
    description:
      "Building sophisticated designs and prototypes for your products and internal solutions, paving the way for your team.",
    icon: PencilSquareIcon,
  },
  {
    name: "Project delivery.",
    description:
      "Helping you with technology selection, implementation design, system commissioning, and project management.",
    icon: ClipboardDocumentCheckIcon,
  },
];

function Divider() {
  return (
    <div className="w-full h-px max-w-6xl mx-auto bg-gradient-to-r from-slate-950 via-radical to-slate-950"></div>
  );
}

function Hero() {
  return (
    <section className="h-screen bg-[url(/images/hero-rhino.svg)] bg-no-repeat bg-right-bottom bg-contain">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h1 className="mt-10 text-5xl font-bold tracking-tight sm:text-7xl">
            When you need a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-(--color-barbie) to-(--color-barbie1)">
              champion
            </span>{" "}
            by your side
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-(--color-barbie) to-(--color-barbie1)">
              .
            </span>
          </h1>
          <div className="mt-20 flex items-center gap-x-6">
            <Link
              href="#connect-with-us"
              className="rounded-md bg-gradient-to-r from-(--color-barbie) to-(--color-barbie1) hover:from-(--color-barbie1) hover:text-white px-3.5 py-2.5 text-sm font-semibold text-white"
            >
              Connect with us
            </Link>
            <Link href="#problem-solving" className="text-sm/6 font-semibold">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section
      id="testimonial"
      className="px-6 py-12 sm:py-32 lg:px-8"
      style={{
        backgroundImage:
          "radial-gradient(at 71% 2%, transparent 0%, transparent 60%), radial-gradient(at 34% 43%, oklch(25% 0.2501 350.73) 0%, transparent 40%), radial-gradient(at 56% 67%, oklch(20% 0.2501 350.73) 0%, transparent 30%)",
      }}
    >
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <svg
          version="1.1"
          fill="#ED3641"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="44.52 218.89 703.36 179.35"
          xmlSpace="preserve"
          width="190px"
          className="mx-auto"
        >
          <g>
            <path
              className="logo"
              d="M207.33 359.85c-26.13 0-48.7-15.84-48.7-47.32s22.57-47.31 48.7-47.31c26.13 0 48.7 15.84 48.7 47.31.01 31.48-22.56 47.32-48.7 47.32m19.8-47.32c0-17.22-9.1-24.35-19.8-24.35-10.69 0-19.8 7.12-19.8 24.35 0 17.22 9.11 24.35 19.8 24.35 10.7.01 19.8-7.13 19.8-24.35M313.67 359.85c-26.13 0-48.7-15.84-48.7-47.32s22.57-47.31 48.7-47.31c26.13 0 48.7 15.84 48.7 47.31 0 31.48-22.57 47.32-48.7 47.32m19.79-47.32c0-17.22-9.11-24.35-19.8-24.35-10.69 0-19.8 7.12-19.8 24.35 0 17.22 9.11 24.35 19.8 24.35 10.7.01 19.8-7.13 19.8-24.35M492.87 359.85c-26.13 0-48.7-15.84-48.7-47.32s22.57-47.31 48.7-47.31c26.14 0 48.71 15.84 48.71 47.31-.01 31.48-22.58 47.32-48.71 47.32m19.79-47.32c0-17.22-9.1-24.35-19.8-24.35-10.69 0-19.8 7.12-19.8 24.35 0 17.22 9.11 24.35 19.8 24.35 10.7.01 19.8-7.13 19.8-24.35M610.68 357.47v-52.66c0-7.92-1.38-15.84-12.07-15.84-10.69 0-15.04 7.92-15.04 20.98v47.52h-28.51v-89.88h26.53l1.98 11.88c6.73-10.69 16.04-14.25 25.94-14.25 17.81 0 29.7 11.48 29.7 31.28v60.98h-28.53zM44.52 218.89v138.58h30.5V218.89z"
            />
            <path
              className="logo"
              d="M108.76 288.18l53.65-69.29h-32.07l-55.32 69.29 54.13 69.3h34.64zM721.36 267.59l-1.98 12.27c-4.36-9.9-13.66-14.65-25.34-14.65-21.78 0-41.97 16.43-41.97 46.72 0 28.31 17.62 45.53 39.99 45.53 11.09 0 20.79-4.16 27.32-14.06v12.87c0 14.06-7.53 19.01-18.41 19.01-7.99 0-19.48-2.74-29.05-8.59l-14.89 18.65c1.96 1.49 17.8 12.9 43.14 12.9 31.28 0 47.71-17.42 47.71-44.35v-86.32h-26.52zm-20.98 66.92c-9.31 0-19.4-5.15-19.4-23.16 0-19.4 11.68-23.17 19.79-23.17 9.31 0 19.01 5.15 19.01 23.17 0 19.4-11.29 23.16-19.4 23.16M430.65 293.83l14.27-17.87c-3.61-6.13-10.03-9.96-18.39-9.96-9.7 0-18.22 5.15-22.17 14.26l-1.98-12.67h-26.52v89.88h28.51v-45.73c0-14.65 6.13-21.38 15.04-21.38 4.96 0 9.03 2.06 11.24 3.47"
            />
          </g>
        </svg>

        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold sm:text-2xl/9">
            <p>
              “Nice Rhino’s ability to blend deep business understanding with practical, actionable
              solutions made all the difference. We couldn’t have asked for a better partner in
              shaping the future of Koorong’s online presence.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              src="/images/mugshot-koorong.svg"
              alt=""
              width="40"
              height="40"
              className="mx-auto rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold">David&nbsp;Foster</div>
              <svg
                viewBox="0 0 2 2"
                width="3"
                height="3"
                aria-hidden="true"
                className="fill-current"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div className="text-gray-300">Chief&nbsp;Retail&nbsp;Officer at Koorong</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function ProblemSolving() {
  return (
    <section id="problem-solving" className="overflow-hidden py-12 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <p className="text-base/7 font-semibold text-indigo-600">Problem Solving</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
            Helping you find the&nbsp;
            <span className="inline-flex flex-col h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] overflow-hidden z-0">
              <ul className="block animate-text-slide-3 text-left leading-tight [&_li]:block text-radical">
                <li>right answer.</li>
                <li>path forward.</li>
                <li>best solution.</li>
                <li aria-hidden="true">right answer.</li>
              </ul>
            </span>
          </h1>
          <p className="mt-6 text-xl/8 text-balance text-gray-400">
            No one has all the answers, but your organisation looks to you to find them. In times
            when you need an extra pair of eyes, you can rely on us.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8">
            <h2 className="text-2xl font-semibold tracking-tight text-pretty">What we do</h2>
            <p className="mt-6 text-base/7 text-gray-400">
              Our work varies from evaluating options for a critical stategic decision, to reigning
              in runaway projects, solutioning complex problems, and assisting with implementation.
            </p>
            <p className="mt-6 text-base/7 text-gray-400">
              That last part is extremely important - walking with you through implementation,
              acting as a sounding board and a troubleshooter. Unlike many consultancies that are
              just
              <em>&lsquo;report mills&rsquo;</em>, we own our work through to completion.
            </p>

            <h2 className="mt-12 text-2xl font-semibold tracking-tight text-pretty">
              Robin to your Batman
            </h2>
            <p className="mt-6 text-base/7 text-gray-400">
              You know your organisation, your team, and your challenges better than anyone.
              We&apos;re not here to take over or pretend we have all the answers, but to work
              alongside you — listening carefully and helping you find a way forward at your own
              pace.
            </p>
            <p className="mt-6 text-base/7 text-gray-400">
              Our approach is down-to-earth, personal, and designed to make the process feel
              supportive and manageable.
            </p>
          </div>
          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <Image
                  src="/images/stock/two-people-smiling.jpg"
                  className="block size-full object-cover"
                  alt="Two people smiling"
                  width="280"
                  height="280"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <Image
                  src="/images/stock/roadmap-planning.jpg"
                  className="block size-full object-cover"
                  alt="Roadmap planning"
                  width="280"
                  height="280"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <Image
                  src="/images/stock/office-collaboration.jpg"
                  className="block size-full object-cover"
                  alt="People collaborating in an office space"
                  width="280"
                  height="280"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <Image
                  src="/images/stock/person-smiling.jpg"
                  className="block size-full object-cover"
                  alt="Office worker smiling for the camera"
                  width="280"
                  height="280"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Growth() {
  return (
    <section id="growth" className="overflow-hidden py-12 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <p className="text-base/7 font-semibold text-indigo-600">Growth</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
            Getting you to the <span className="text-radical">next level.</span>
          </h1>
          <p className="mt-6 text-xl/8 sm:text-balance text-gray-400">
            Growth is a combination of ambition, opportunity, and planning. Let us help you realise
            your potential.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base/7 font-semibold">
                <RocketLaunchIcon aria-hidden="true" className="stroke-barbie size-7" />
                Cultivate ambition
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-400">
                <p className="flex-auto">
                  Growth starts with you - what is your vision for your organisation? What do you
                  want to achieve? What do you believe your team is capable of?
                </p>
                <p className="flex-auto mt-6">
                  We can help you dream up ambitious and well reasoned goals, discover potential
                  blindspots in your thinking, and eradicate any unnecessary limitations that
                  you&apos;ve placed on yourself.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base/7 font-semibold">
                <LightBulbIcon aria-hidden="true" className="stroke-barbie size-7" />
                Discover opportunities
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-400">
                <p className="flex-auto">
                  McDonald&apos;s produces kilolitres of waste fryer oil per day. This was an
                  expensive problem, until they realised that they could convert their dirty oil
                  into biofuel. Now they&apos;re
                  <span className="italic">saving</span> money, and in the UK alone, have saved
                  11,000 tonnes of Co2.
                </p>
                <p className="flex-auto mt-6">
                  Growth opportunities are not always clear cut. We can help you discover them.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base/7 font-semibold">
                <PresentationChartBarIcon aria-hidden="true" className="stroke-barbie size-7" />
                Plan to grow
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-400">
                <p className="flex-auto">
                  As they say, you don&apos;t plan to fail - you fail to plan. We can help you put
                  in place practical, actionable, and measurable plans, and walk with you as those
                  plans inevitably change and flex over time.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function Tech() {
  return (
    <section id="tech" className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600">Tech</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
                Don&apos;t play catch up. <span className="text-radical">Overtake.</span>
              </h1>
              <p className="mt-6 text-lg/8 text-gray-300">
                Technology is a powerful lever to use in an increasingly competitive environment. We
                can help you leverage it without risking the farm.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
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
          <Image
            alt="Worker using a computer tablet"
            src="/images/stock/worker-in-factory.jpg"
            className="w-[30rem] max-w-none rounded-xl ring-1 shadow-xl ring-white/10 lg:mt-20 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width="5120"
            height="2880"
          />
        </div>
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section id="about-us" className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <p className="text-base/7 font-semibold text-indigo-600">About Us</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
            <span className="text-radical">Who are we</span> to tell you what to do?
          </h1>
          <p className="mt-6 text-lg/8 text-gray-400">
            We&apos;re a <span className="italic">&lsquo;dynamic duo&rsquo;</span> (our words) that
            love solving problems and collaborating with likeminded people. Our mission is to help
            organisations that truly desire change.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <Image
                alt={`${person.name}'s photo`}
                src={person.imageUrl}
                className="aspect-4/5 w-52 flex-none rounded-2xl object-cover"
                width="52"
                height="52"
              />
              <div className="flex-auto">
                <h3 className="text-lg/8 font-semibold tracking-tight">{person.name}</h3>
                <p className="text-base/7">{person.role}</p>
                <p className="mt-6 text-base/7 text-gray-400 whitespace-pre-wrap">{person.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ConnectWithUs() {
  return (
    <section id="connect-with-us" className="py-24 sm:py-32">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <Image
              alt="Woman presenting in meeting"
              src="/images/stock/presentation.jpg"
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              width="1500"
              height="1099"
            />
            <div className="w-full flex-auto">
              <h1 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
                <div className="flex-col h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] overflow-hidden">
                  <ul className="block animate-text-slide-5 leading-tight [&_li]:block text-corn">
                    <li>Advice.</li>
                    <li>Guidance.</li>
                    <li>Direction.</li>
                    <li>Creativity.</li>
                    <li>Support.</li>
                    <li aria-hidden="true">Advice.</li>
                  </ul>
                </div>
                When you need it most.
              </h1>

              <div className="mt-6 text-lg/8 text-gray-300">
                Whatever your situation or your goals, we&apos;d love to talk it through. No
                obligations. No sales pitch. No nonsense.
                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6">
                  <div className="flex gap-x-3 align-text-top">
                    <dt>
                      <span className="sr-only">Telephone</span>
                      <PhoneIcon aria-hidden="true" className="size-6" />
                    </dt>
                    <dd>
                      <Link href="tel:+61272574433">(02)&nbsp;7257&nbsp;4433</Link>
                    </dd>
                  </div>
                  <div className="flex gap-x-3">
                    <dt>
                      <span className="sr-only">Email</span>
                      <EnvelopeIcon aria-hidden="true" className="size-6" />
                    </dt>
                    <dd>
                      <Link href="mailto:hello@nicerhino.com">hello@nicerhino.com</Link>
                    </dd>
                  </div>
                </div>
                <div className="text-xs text-gray-500 text-center mt-10">
                  Our office hours are from 9am - 5.30pm, Monday - Friday, Australian Eastern
                  Standard Time (AEST).
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
            className="aspect-1318/752 w-[82.375rem] flex-none bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      {Header()}
      {Hero()}
      {/* {Testimonial()}
      {Divider()} */}
      {ProblemSolving()}
      {Divider()}
      {Growth()}
      {Divider()}
      {Tech()}
      {Divider()}
      {AboutUs()}
      {Divider()}
      {ConnectWithUs()}
      {Divider()}
      {Footer()}
    </main>
  );
}
