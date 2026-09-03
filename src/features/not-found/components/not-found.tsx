import { ArrowRightIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";

import { Container, ContainerContent } from "@/components/elements/container";
import site_data from "@/data/site.json";
import { cn } from "@/libs/utils";

import NotFoundHeadline from "./not-found-headline";

const SYSTEM_LOGS = [
  { label: "RESOLVING_ROUTE", value: "MISS", tone: "primary" as const },
  { label: "MATCHING_SLUG", value: "NONE", tone: "muted" as const },
  { label: "CHECKING_REDIRECT", value: "EMPTY", tone: "primary" as const },
  { label: "FALLBACK_PATH", value: "/", tone: "primary" as const },
] as const;

const ACTIONS = [
  {
    id: "[ 01 // HOME ]",
    title: "GO HOME",
    href: "/",
  },
  {
    id: "[ 02 // WORK ]",
    title: "VIEW PROJECTS",
    href: "/projects",
  },
  {
    id: "[ 03 // ABOUT ]",
    title: "ABOUT ME",
    href: "/about",
  },
] as const;

export default function NotFoundPage() {
  return (
    <>
      <Container className="flex flex-col grow">
        <ContainerContent
          className={cn(
            "grid grid-cols-1 col-span-4 md:grid-cols-4 border-x grow",
            "divide-y md:divide-y-0 md:divide-x",
          )}
        >
          <div className="flex relative flex-col col-span-1 justify-between p-6 md:col-span-3 md:p-12">
            <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:top-6 md:left-6">
              ROUTE: UNMAPPED
            </span>
            <span className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:bottom-6 md:right-6">
              BRAND: {site_data.brand}
            </span>

            <div className="pt-8 md:pt-4">
              <span className="block mb-6 modular-label md:mb-8">
                [ 00 // NOT FOUND ]
              </span>
              <NotFoundHeadline />
              <div className="flex flex-col gap-2 mt-4 md:mt-6">
                <span className="font-mono text-sm tracking-widest uppercase text-muted-foreground">
                  [ STATUS: PAGE_MISSING ]
                </span>
                <p className="pb-8 max-w-md text-base tracking-wide uppercase text-muted-foreground md:pb-0">
                  This page is not part of the website — it may have moved, or
                  the URL is simply wrong.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col col-span-1 divide-y">
            <div className="relative p-6 grow md:p-8 bg-portfolio-surface">
              <TerminalIcon
                aria-hidden
                className="absolute top-4 right-4 size-5 text-muted-foreground/50 md:top-6 md:right-6"
              />
              <h3 className="mb-6 font-mono text-xs tracking-widest uppercase text-muted-foreground">
                ROUTE_LOG
              </h3>
              <div className="space-y-2 font-mono text-[10px] uppercase text-muted-foreground">
                {SYSTEM_LOGS.map((log) => (
                  <div key={log.label} className="flex gap-4 justify-between">
                    <span>{log.label}</span>
                    <span
                      className={cn(
                        log.tone === "primary"
                          ? "text-foreground"
                          : "text-portfolio-muted",
                      )}
                    >
                      {log.value}
                    </span>
                  </div>
                ))}
                <div className="my-4 h-px bg-border" />
                <div className="flex flex-col gap-1">
                  <span className="text-muted-foreground/50">DETAIL:</span>
                  <span className="text-[11px] leading-tight text-foreground">
                    NO_MATCHING_PAGE
                  </span>
                </div>
              </div>
            </div>

            {/* <div className="flex relative flex-col justify-between p-6 md:p-8 bg-portfolio-surface-low">
              <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:top-6 md:left-6">
                LOC: {site_data.location}
              </span>
              <div className="pt-8 mt-auto">
                <div className="flex justify-center items-center mb-4 border size-12 border-border">
                  <Crosshair aria-hidden className="size-5 text-foreground" />
                </div>
                <p className="text-sm uppercase text-foreground">
                  Still here — just not on this path. Pick a route below.
                </p>
              </div>
            </div> */}
          </div>
        </ContainerContent>
      </Container>

      <Container>
        <ContainerContent
          className={cn(
            "grid grid-cols-1 col-span-4 md:grid-cols-3 border-x",
            "divide-y md:divide-y-0 md:divide-x",
          )}
        >
          {ACTIONS.map((action) => (
            <Link
              key={action.id}
              href={action.href}
              className={cn(
                "flex flex-col gap-4 p-6 transition-colors group md:p-12",
                "hover:bg-foreground/5",
              )}
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {action.id}
              </span>
              <div className="flex gap-4 justify-between items-center">
                <h4 className="text-3xl uppercase font-heading md:text-4xl">
                  {action.title}
                </h4>
                <ArrowRightIcon
                  aria-hidden
                  className="transition-transform size-6 group-hover:translate-x-2"
                />
              </div>
            </Link>
          ))}

          {/* <div className="flex flex-col gap-4 justify-center p-6 md:p-12 bg-foreground/5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              [ 03 // STATUS ]
            </span>
            <div className="flex gap-4 items-center">
              <span className="flex relative size-2">
                <span className="inline-flex absolute w-full h-full bg-emerald-400 rounded-full opacity-75 animate-ping" />
                <span className="inline-flex relative bg-emerald-500 rounded-full size-2" />
              </span>
              <h4 className="font-mono text-sm tracking-widest uppercase text-foreground">
                {site_data.status}
              </h4>
            </div>
          </div> */}
        </ContainerContent>
      </Container>
    </>
  );
}
