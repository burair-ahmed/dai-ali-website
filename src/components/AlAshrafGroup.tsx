'use client';
import { FC } from "react";
import { Building2, DraftingCompass, UtensilsCrossed, MonitorSmartphone } from "lucide-react";

const AlAshrafGroup: FC = () => {
  return (
    <section className="w-full px-6 py-20 md:px-12 lg:px-20">
      <header className="mb-8 max-w-3xl">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Group
        </p>
        <h1 className="mb-3 text-3xl font-semibold text-foreground md:text-4xl">
          Al-Ashraf Group
        </h1>
        <p className="max-w-xl text-sm text-muted-foreground">
          A constellation of ventures advancing design, development, and culture.
        </p>
      </header>

      <div className="flex w-full items-center justify-between rounded-2xl bg-primary px-6 py-4 text-primary-foreground">
        <div className="flex items-center gap-3 text-sm font-medium md:text-lg">
          <Building2 size={26} />
          Al-Ashraf Group of Companies
        </div>

        <a
          href="https://alashrafgoc.com"
          className="flex items-center gap-2 rounded-xl bg-card px-4 py-2 text-xs font-medium text-primary transition hover:bg-card/90 md:text-sm"
        >
          <span>Visit Group</span>
        </a>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Viral Marketing */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-3 text-primary">
              <MonitorSmartphone size={24} />
            </div>
            <div className="text-lg font-semibold text-foreground">Viral Marketing</div>
          </div>

          <span className="mt-2 inline-block rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
            Digital Marketing
          </span>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            A digital marketing agency crafting high-impact brand strategies, content, and campaigns designed for modern audiences.
          </p>

          <a href="https://viralmarketingsolution.com" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90">
            Learn More →
          </a>
        </div>


        {/* ArmArch */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-3 text-primary">
              <DraftingCompass size={24} />
            </div>
            <div className="text-lg font-semibold text-foreground">ArmArch</div>
          </div>

          <span className="mt-2 inline-block rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
            Architecture
          </span>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            A studio dedicated to elevated residential and civic architecture, blending craft with advanced engineering.
          </p>

          <a href="https://armarchengineering.com" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90">
            Learn More →
          </a>
        </div>


        {/* Cafe Little Karachi */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-3 text-primary">
              <UtensilsCrossed size={24} />
            </div>
            <div className="text-lg font-semibold text-foreground">Cafe Little Karachi</div>
          </div>

          <span className="mt-2 inline-block rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
            Hospitality
          </span>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            A vibrant Karachi café offering signature flavors, warm ambience, and a modern take on classic comfort food.
          </p>

          <a href="https://littlekarachirestaurant.com" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90">
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AlAshrafGroup;
