import { Container, ContainerContent } from "@/components/elements/container";
import site_data from "@/data/site.json";

export default function StatusSection() {
  return (
    <Container>
      <ContainerContent className="grid grid-cols-1 col-span-4 divide-y md:divide-x md:divide-y-0 md:grid-cols-4 border-x">
        <div className="flex flex-col justify-between col-span-1 p-6 md:col-span-2 md:p-12">
          <div>
            <span className="block mb-8 modular-label">[ 02 // STATUS ]</span>
            <div className="flex items-center gap-3 mb-8 md:mb-12">
              <span className="relative flex w-3 h-3">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-400" />
                <span className="relative inline-flex w-3 h-3 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-xs tracking-widest uppercase">
                {site_data.status}
              </span>
            </div>
          </div>
          <p className="max-w-lg text-base leading-relaxed md:text-lg text-balance">
            {site_data.intro_2}
          </p>
        </div>

        <div className="col-span-1 p-6 md:p-12">
          <span className="block mb-8 modular-label">[ 03 // LOC ]</span>
          <div className="mb-12">
            <div className="mb-2 font-mono text-xs uppercase text-muted-foreground">
              Location
            </div>
            <div className="text-xl font-medium">{site_data.location}</div>
          </div>
          <div>
            <div className="mb-2 font-mono text-xs uppercase text-muted-foreground">
              Timezone
            </div>
            <div className="text-xl font-medium">{site_data.timezone}</div>
          </div>
        </div>

        <div className="col-span-1 p-6 md:p-12">
          <span className="block mb-8 modular-label">[ 04 // STACK ]</span>
          <div className="flex flex-col gap-3">
            {site_data.stacks.map((stack) => (
              <span
                key={stack}
                className="px-3 py-2 font-mono text-xs uppercase border border-muted-foreground"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
      </ContainerContent>
    </Container>
  );
}
