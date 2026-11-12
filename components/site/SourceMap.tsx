import Image from "next/image";
import type { Icon } from "@tabler/icons-react";
import {
  IconBrandReddit,
  IconBrandX,
  IconLock,
  IconNews,
  IconSparkles,
  IconUsers,
} from "@tabler/icons-react";
import { Reveal } from "@/components/site/Reveal";

type Source = {
  label: string;
  icon: Icon;
  x: number;
  y: number;
};

type Connector = {
  d: string;
  delay: number;
};

const DESKTOP_WIDTH = 1120;
const DESKTOP_HEIGHT = 560;
const MOBILE_WIDTH = 400;
const MOBILE_HEIGHT = 500;

/**
 * The connector endpoints below land on the edges of the mark, so its size is
 * part of the geometry: 72px in the 1120px schematic (6.429%) and 67px in the
 * 400px portrait (16.8%).
 */

const DESKTOP_SOURCES: Source[] = [
  { label: "News", icon: IconNews, x: 190, y: 92 },
  { label: "X", icon: IconBrandX, x: 930, y: 84 },
  { label: "Reddit", icon: IconBrandReddit, x: 110, y: 330 },
  { label: "Social", icon: IconUsers, x: 1010, y: 330 },
  { label: "AI research", icon: IconSparkles, x: 300, y: 464 },
  { label: "Your wallet", icon: IconLock, x: 860, y: 476 },
];

const DESKTOP_CONNECTORS: Connector[] = [
  {
    d: "M190 92 C330 92 500.6 150 500.6 220.6",
    delay: 0,
  },
  {
    d: "M930 84 C790 84 619.4 150 619.4 220.6",
    delay: -1.1,
  },
  {
    d: "M110 330 C240 330 380 280 476 280",
    delay: -2.2,
  },
  {
    d: "M1010 330 C880 330 720 280 644 280",
    delay: -3.3,
  },
  {
    d: "M300 464 C390 464 500.6 410 500.6 339.4",
    delay: -4.4,
  },
  {
    d: "M860 476 C770 476 619.4 410 619.4 339.4",
    delay: -5.5,
  },
];

const DESKTOP_HUB = { x: 560, y: 280, radius: 84 };
const DESKTOP_HUB_POINTS = [
  { x: 500.6, y: 220.6 },
  { x: 619.4, y: 220.6 },
  { x: 476, y: 280 },
  { x: 644, y: 280 },
  { x: 500.6, y: 339.4 },
  { x: 619.4, y: 339.4 },
];

const MOBILE_SOURCES: Source[] = [
  { label: "News", icon: IconNews, x: 80, y: 68 },
  { label: "X", icon: IconBrandX, x: 320, y: 60 },
  { label: "Reddit", icon: IconBrandReddit, x: 52, y: 276 },
  { label: "Social", icon: IconUsers, x: 348, y: 276 },
  { label: "AI research", icon: IconSparkles, x: 96, y: 436 },
  { label: "Your wallet", icon: IconLock, x: 304, y: 436 },
];

const MOBILE_CONNECTORS: Connector[] = [
  {
    d: "M80 68 C110 68 150.5 130 150.5 200.5",
    delay: 0,
  },
  {
    d: "M320 60 C290 60 249.5 130 249.5 200.5",
    delay: -1.1,
  },
  {
    d: "M52 276 C80 276 105 250 130 250",
    delay: -2.2,
  },
  {
    d: "M348 276 C320 276 295 250 270 250",
    delay: -3.3,
  },
  {
    d: "M96 436 C120 436 150.5 370 150.5 299.5",
    delay: -4.4,
  },
  {
    d: "M304 436 C280 436 249.5 370 249.5 299.5",
    delay: -5.5,
  },
];

const MOBILE_HUB = { x: 200, y: 250, radius: 70 };
const MOBILE_HUB_POINTS = [
  { x: 150.5, y: 200.5 },
  { x: 249.5, y: 200.5 },
  { x: 130, y: 250 },
  { x: 270, y: 250 },
  { x: 150.5, y: 299.5 },
  { x: 249.5, y: 299.5 },
];

function DesktopSource({ label, icon: IconComponent, x, y }: Source) {
  return (
    <li
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${(x / DESKTOP_WIDTH) * 100}%`,
        top: `${(y / DESKTOP_HEIGHT) * 100}%`,
      }}
    >
      <span className="inline-flex h-8 items-center gap-2 whitespace-nowrap rounded-card bg-surface pl-2.5 pr-3 text-ink shadow-btn">
        <IconComponent
          size={14}
          stroke={1.8}
          className="shrink-0 text-ink-2"
          aria-hidden
        />
        <span className="text-[11.5px] font-medium leading-none">{label}</span>
      </span>
    </li>
  );
}

function MobileSource({ label, icon: IconComponent, x, y }: Source) {
  return (
    <li
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${(x / MOBILE_WIDTH) * 100}%`,
        top: `${(y / MOBILE_HEIGHT) * 100}%`,
      }}
    >
      <span className="grid size-9 place-items-center rounded-card bg-surface text-ink-2 shadow-btn">
        <IconComponent size={16} stroke={1.8} aria-hidden />
      </span>
      <span className="absolute left-1/2 top-[calc(100%+8px)] -translate-x-1/2 whitespace-nowrap text-[10px] font-medium leading-none text-ink-2">
        {label}
      </span>
    </li>
  );
}

function Mark({ widthClass }: { widthClass: string }) {
  return (
    <div
      className={`absolute left-1/2 top-1/2 z-10 aspect-square -translate-x-1/2 -translate-y-1/2 ${widthClass}`}
    >
      <Image
        src="/myntle-logo.svg"
        alt=""
        fill
        sizes="(min-width: 768px) 72px, 67px"
        className="object-contain"
      />
    </div>
  );
}

/**
 * The reading stage: the six places an answer comes from, bent into the mark.
 * Desktop is a wide schematic; below the breakpoint it becomes a taller
 * portrait so the sources keep their spacing instead of crowding the mark.
 */
export function SourceMap() {
  return (
    <section
      className="border-t border-line bg-canvas"
      aria-labelledby="sources-title"
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-20 lg:px-8 lg:py-24">
        <Reveal>
          <h2
            id="sources-title"
            className="max-w-[38ch] text-[clamp(1.5rem,2.6vw,1.75rem)] font-semibold leading-[1.25] tracking-[-0.02em] text-ink"
          >
            Before it answers, Myntle reads across the web and your wallet.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-10 lg:mt-14">
          <figure>
            <div className="relative hidden aspect-[1120/560] w-full md:block">
              <svg
                viewBox={`0 0 ${DESKTOP_WIDTH} ${DESKTOP_HEIGHT}`}
                fill="none"
                aria-hidden
                className="absolute inset-0 size-full"
              >
                <circle
                  cx={DESKTOP_HUB.x}
                  cy={DESKTOP_HUB.y}
                  r={DESKTOP_HUB.radius}
                  stroke="var(--ink-3)"
                  strokeOpacity={0.28}
                  strokeWidth={1}
                  vectorEffect="non-scaling-stroke"
                />
                {DESKTOP_CONNECTORS.map((connector) => (
                  <path
                    key={`track-${connector.d}`}
                    d={connector.d}
                    stroke="var(--ink-3)"
                    strokeOpacity={0.07}
                    strokeWidth={5}
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
                {DESKTOP_CONNECTORS.map((connector) => (
                  <path
                    key={connector.d}
                    d={connector.d}
                    stroke="var(--ink-3)"
                    strokeOpacity={0.55}
                    strokeWidth={1}
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
                {DESKTOP_HUB_POINTS.map((point) => (
                  <circle
                    key={`${point.x}-${point.y}`}
                    cx={point.x}
                    cy={point.y}
                    r={2.4}
                    fill="var(--ink-3)"
                    fillOpacity={0.7}
                  />
                ))}
                {DESKTOP_CONNECTORS.map((connector) => (
                  <path
                    key={`pulse-${connector.d}`}
                    d={connector.d}
                    pathLength={100}
                    stroke="var(--accent)"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    className="source-pulse"
                    style={{ animationDelay: `${connector.delay}s` }}
                  />
                ))}
              </svg>

              <ul
                className="absolute inset-0"
                aria-label="Sources Myntle can read"
              >
                {DESKTOP_SOURCES.map((source) => (
                  <DesktopSource key={source.label} {...source} />
                ))}
              </ul>

              <Mark widthClass="w-[6.429%]" />
            </div>

            <div className="relative mx-auto aspect-[4/5] w-full max-w-[440px] md:hidden">
              <svg
                viewBox={`0 0 ${MOBILE_WIDTH} ${MOBILE_HEIGHT}`}
                fill="none"
                aria-hidden
                className="absolute inset-0 size-full"
              >
                <circle
                  cx={MOBILE_HUB.x}
                  cy={MOBILE_HUB.y}
                  r={MOBILE_HUB.radius}
                  stroke="var(--ink-3)"
                  strokeOpacity={0.28}
                  strokeWidth={1}
                  vectorEffect="non-scaling-stroke"
                />
                {MOBILE_CONNECTORS.map((connector) => (
                  <path
                    key={`track-${connector.d}`}
                    d={connector.d}
                    stroke="var(--ink-3)"
                    strokeOpacity={0.07}
                    strokeWidth={4}
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
                {MOBILE_CONNECTORS.map((connector) => (
                  <path
                    key={connector.d}
                    d={connector.d}
                    stroke="var(--ink-3)"
                    strokeOpacity={0.55}
                    strokeWidth={1}
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
                {MOBILE_HUB_POINTS.map((point) => (
                  <circle
                    key={`${point.x}-${point.y}`}
                    cx={point.x}
                    cy={point.y}
                    r={2.2}
                    fill="var(--ink-3)"
                    fillOpacity={0.7}
                  />
                ))}
                {MOBILE_CONNECTORS.map((connector) => (
                  <path
                    key={`pulse-${connector.d}`}
                    d={connector.d}
                    pathLength={100}
                    stroke="var(--accent)"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    className="source-pulse"
                    style={{ animationDelay: `${connector.delay}s` }}
                  />
                ))}
              </svg>

              <ul
                className="absolute inset-0"
                aria-label="Sources Myntle can read"
              >
                {MOBILE_SOURCES.map((source) => (
                  <MobileSource key={source.label} {...source} />
                ))}
              </ul>

              <Mark widthClass="w-[16.8%]" />
            </div>

            <figcaption className="sr-only">
              The Myntle mark at the center, with news, X, Reddit, social, AI
              research, and your wallet connected inward to it.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
