'use client'
import { Activity, Globe, MessageCircle } from 'lucide-react'
import DottedMap from 'dotted-map'
import { Area, AreaChart, CartesianGrid } from 'recharts'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

export function Features() {
    return (
        <section className="px-4 py-12 md:py-24 bg-background">
            {/* Heading */}
            <div className="mx-auto max-w-5xl mb-10 md:mb-14 text-center px-4">
                <p className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground mb-3">Why Salesbridge</p>
                <h2 className="text-[clamp(1.6rem,4vw,2.8rem)] font-[500] tracking-[-0.035em] text-foreground leading-[1.1]">
                    Everything you need to grow online
                </h2>
                <p className="mt-3 text-[14px] md:text-[15px] text-muted-foreground max-w-[480px] mx-auto">
                    From global reach to real-time insights — one team that handles it all.
                </p>
            </div>

            <div className="mx-auto grid max-w-5xl border border-border grid-cols-1 md:grid-cols-2">
                {/* Card 1 — Global Reach / Map */}
                <div>
                    <div className="p-5 sm:p-10">
                        <span className="text-muted-foreground flex items-center gap-2 text-sm">
                            <Globe className="size-4 shrink-0" />
                            Global digital presence
                        </span>
                        <p className="mt-5 text-xl md:text-2xl font-semibold leading-snug">
                            We build brands that reach customers anywhere in the world.
                        </p>
                    </div>

                    <div aria-hidden className="relative">
                        <div className="absolute inset-0 z-10 m-auto size-fit pointer-events-none">
                            <div className="rounded-lg bg-background dark:bg-muted relative flex size-fit w-fit items-center gap-2 border border-border px-3 py-1 text-xs font-medium shadow-md shadow-black/5 whitespace-nowrap">
                                <span className="text-base">🌍</span> Clients across 12+ countries
                            </div>
                            <div className="rounded-lg bg-background absolute inset-2 -bottom-2 mx-auto border border-border px-3 py-4 text-xs font-medium shadow-md shadow-black/5 dark:bg-zinc-900"></div>
                        </div>
                        <div className="relative overflow-hidden">
                            <div className="z-1 to-background absolute inset-0 from-transparent to-75% bg-[radial-gradient(var(--tw-gradient-stops))]"></div>
                            <Map />
                        </div>
                    </div>
                </div>

                {/* Card 2 — Client Communication */}
                <div className="border-t md:border-t-0 md:border-l border-border bg-zinc-50 dark:bg-transparent p-5 sm:p-10">
                    <span className="text-muted-foreground flex items-center gap-2 text-sm">
                        <MessageCircle className="size-4 shrink-0" />
                        Dedicated client support
                    </span>
                    <p className="my-5 text-xl md:text-2xl font-semibold leading-snug">
                        Always reachable. Always accountable. We move as fast as you do.
                    </p>
                    <div aria-hidden className="flex flex-col gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-1.5">
                                <span className="flex justify-center items-center size-5 rounded-full border border-border shrink-0">
                                    <span className="size-3 rounded-full bg-primary"/>
                                </span>
                                <span className="text-muted-foreground text-xs">Mon 5 May</span>
                            </div>
                            <div className="rounded-lg bg-background w-4/5 border border-border p-3 text-xs leading-relaxed">
                                Hey! Our organic traffic just hit an all-time high 🚀
                            </div>
                        </div>
                        <div>
                            <div className="rounded-lg mb-1 ml-auto w-4/5 bg-primary p-3 text-xs text-primary-foreground leading-relaxed">
                                Amazing! We pushed the new content clusters live last week — expect this to compound over the next 60 days.
                            </div>
                            <span className="text-muted-foreground block text-right text-xs">Just now</span>
                        </div>
                    </div>
                </div>

                {/* Full-width stat */}
                <div className="col-span-full border-y border-border p-8 md:p-12">
                    <p className="text-center text-3xl sm:text-5xl lg:text-7xl font-semibold tracking-tight">
                        3× Avg. Traffic Growth
                    </p>
                    <p className="text-center text-muted-foreground mt-3 text-sm">
                        Across all active SEO & content marketing clients in the first 90 days.
                    </p>
                </div>

                {/* Full-width — Growth Chart */}
                <div className="relative col-span-full">
                    {/* Text sits above chart on mobile, overlaps on md+ */}
                    <div className="px-5 pt-6 pb-4 md:absolute md:z-10 md:max-w-lg md:px-12 md:pt-12 md:pb-0">
                        <span className="text-muted-foreground flex items-center gap-2 text-sm">
                            <Activity className="size-4 shrink-0" />
                            Growth analytics
                        </span>
                        <p className="mt-4 mb-2 md:my-6 text-xl md:text-2xl font-semibold leading-snug">
                            Track your brand's growth in real-time.{' '}
                            <span className="text-muted-foreground">
                                Organic traffic, leads, and conversions — all in one view.
                            </span>
                        </p>
                    </div>
                    <MonitoringChart />
                </div>
            </div>
        </section>
    )
}

/* ─── Dotted World Map ─────────────────────────────── */
const map = new DottedMap({ height: 55, grid: 'diagonal' })
const points = map.getPoints()

const Map = () => (
    <svg viewBox="0 0 120 60" style={{ background: 'transparent' }}
        className="text-muted-foreground/30 dark:text-muted-foreground/20 w-full">
        {points.map((point, index) => (
            <circle key={index} cx={point.x} cy={point.y} r={0.15} fill="currentColor" />
        ))}
    </svg>
)

/* ─── Chart ────────────────────────────────────────── */
const chartConfig = {
    organic: { label: 'Organic Traffic', color: 'hsl(234 55% 58%)' },
    leads:   { label: 'Qualified Leads', color: 'hsl(234 55% 80%)' },
} satisfies ChartConfig

const chartData = [
    { month: 'Jan', organic: 420, leads: 180 },
    { month: 'Feb', organic: 580, leads: 240 },
    { month: 'Mar', organic: 740, leads: 310 },
    { month: 'Apr', organic: 920, leads: 410 },
    { month: 'May', organic: 1100, leads: 520 },
    { month: 'Jun', organic: 1380, leads: 680 },
]

const MonitoringChart = () => (
    <ChartContainer className="w-full h-52 md:h-80" config={chartConfig}>
        <AreaChart accessibilityLayer data={chartData} margin={{ left: 0, right: 0 }}>
            <defs>
                <linearGradient id="fillOrganic" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-organic)" stopOpacity={0.5} />
                    <stop offset="75%" stopColor="var(--color-organic)" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="fillLeads" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-leads)" stopOpacity={0.5} />
                    <stop offset="75%" stopColor="var(--color-leads)" stopOpacity={0.05} />
                </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="hsl(var(--border))" />
            <ChartTooltip cursor={false} content={<ChartTooltipContent className="dark:bg-muted" />} />
            <Area strokeWidth={2} dataKey="leads" type="monotone" fill="url(#fillLeads)" stroke="var(--color-leads)" stackId="a" />
            <Area strokeWidth={2} dataKey="organic" type="monotone" fill="url(#fillOrganic)" stroke="var(--color-organic)" stackId="a" />
        </AreaChart>
    </ChartContainer>
)
