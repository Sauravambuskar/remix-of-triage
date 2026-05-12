import { Sparkles } from "@/components/ui/sparkles"
import { useTheme } from "next-themes"
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

const clientLogos = [
  {
    id: "datawave",
    src: "https://thesalesbridge.com/wp-content/uploads/2022/07/datawave.png",
  },
  {
    id: "download3",
    src: "https://thesalesbridge.com/wp-content/uploads/2022/12/download__3_-removebg-preview.png",
  },
  {
    id: "leadsquared",
    src: "https://thesalesbridge.com/wp-content/uploads/2022/07/leadsquared.png",
  },
  {
    id: "sectrio",
    src: "https://thesalesbridge.com/wp-content/uploads/2022/07/sectrio.png",
  },
  {
    id: "hanu",
    src: "https://thesalesbridge.com/wp-content/uploads/2022/07/hanu-logo.png",
  }
]

export function ClientsSection() {
  const { theme } = useTheme()

  return (
    <section className="relative w-full bg-background overflow-hidden border-t border-border">
      {/* Top content */}
      <div className="relative z-10 pt-20 pb-6 px-6 text-center">
        <p className="text-[13px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
          Our Clients
        </p>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-[500] tracking-[-0.035em] text-foreground leading-[1.1]">
          Trusted by experts.<br />
          <span className="text-muted-foreground font-[400]">Used by the leaders.</span>
        </h2>
      </div>

      {/* Logo Slider */}
      <div className="relative z-10 py-10 px-0">
        <div className="relative w-full">
          <InfiniteSlider
            className="flex w-full items-center py-4"
            duration={35}
            gap={80}
          >
            {clientLogos.map(({ id, src }) => (
              <div
                key={id}
                className="flex items-center justify-center w-[160px] h-[70px] flex-shrink-0"
              >
                <img
                  src={src}
                  alt={`${id} logo`}
                  className="w-full h-full object-contain transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100"
                  style={{ maxWidth: 160, maxHeight: 70 }}
                />
              </div>
            ))}
          </InfiniteSlider>

          {/* Soft edge fades — narrow so logos are not hidden */}
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 left-0 h-full w-[80px]"
            direction="left"
            blurIntensity={0.4}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 right-0 h-full w-[80px]"
            direction="right"
            blurIntensity={0.4}
          />
        </div>
      </div>

      {/* Sparkle bg wave */}
      <div className="relative w-full h-52 overflow-hidden [mask-image:radial-gradient(60%_60%,white,transparent)]">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,var(--gradient-color),transparent_70%)] before:opacity-20" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-border bg-background" />
        <Sparkles
          density={600}
          size={1.2}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          color={theme === "dark" ? "#ffffff" : "#8350e8"}
        />
      </div>
    </section>
  )
}
