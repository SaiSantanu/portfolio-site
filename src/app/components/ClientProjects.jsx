"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowUp,
  FaExternalLinkAlt,
  FaRegImage,
} from "react-icons/fa";

const deployments = [
  {
    id: "aaa",
    index: "01",
    client: "ARYAVART ANCIENT ACADEMY",
    location: "KHORDHA, ODISHA",
    title: "Aryavart Ancient Academy",
    descriptor: "AAA Alumni Portal",
    description:
      "Built and deployed a live alumni networking portal for Aryavart Ancient Academy, Khordha, with a React frontend and Spring Boot/MySQL backend.",
    stack: "React frontend · Spring Boot / MySQL backend",
    href: "https://aaalumni.com/",
    actionLabel: "Visit AAA Alumni Portal",
    domain: "aaalumni.com",
    image: "/aaa-alumni-live-preview.jpeg",
    alt: "AAA Alumni Portal homepage showing campus aerial view, academy crest, alumni network call to action and alumni statistics.",
    capabilities: [
      "Alumni directory",
      "Events",
      "Achievements",
      "Gallery",
      "Notifications",
      "Portal login",
    ],
  },
  {
    id: "prime",
    index: "02",
    client: "PRIME GST MITRA",
    location: "BHUBANESWAR, ODISHA",
    title: "Prime GST Mitra",
    descriptor: "GST & accounting services website",
    description:
      "Built and deployed a live business site for a GST, accounting, and tax compliance services provider in Bhubaneswar.",
    href: "https://primegstmitra.com/",
    actionLabel: "Visit Prime GST Mitra",
    domain: "primegstmitra.com",
    image: "/prime-gst-mitra-live-preview.jpeg",
    alt: "Prime GST Mitra homepage showing accounting and GST services headline, ochre contact action and accounting consultation photograph.",
    capabilities: [
      "GST registration & filing",
      "Accounting & bookkeeping",
      "Income tax returns",
      "Business consultancy",
    ],
  },
];

const deploymentStyles = {
  aaa: {
    border: "border-[#214A9B]/50",
    accent: "text-[#D6AD27]",
    mark: "border-[#D6AD27]/70",
    grid: "md:grid-cols-[38%_62%]",
    copy: "order-1 md:order-1",
    preview: "order-2 md:order-2",
    button:
      "bg-[#D6AD27] text-[#15130A] hover:bg-[#E3C34A] focus-visible:outline-[#D6AD27]",
    urlHover: "hover:text-[#D6AD27]",
    overlay: "border-[#D6AD27]",
  },
  prime: {
    border: "border-[#C9A04E]/45",
    accent: "text-[#C9A04E]",
    mark: "border-[#C9A04E]/70",
    grid: "md:grid-cols-[58%_42%]",
    copy: "order-2 md:order-2",
    preview: "order-1 md:order-1",
    button:
      "border-l-4 border-[#C9A04E] bg-[#F8EEE6] text-[#27231F] hover:bg-[#FFF8F1] focus-visible:outline-[#C9A04E]",
    urlHover: "hover:text-[#C9A04E]",
    overlay: "border-[#C9A04E]",
  },
};

function PreviewImage({ src, alt, sizes, priority = false }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex h-full min-h-[180px] w-full flex-col items-center justify-center gap-2 bg-[#16171D] px-4 text-center text-white/55">
        <FaRegImage
          aria-hidden="true"
          className="text-lg"
        />
        <span className="font-mono text-[10px] uppercase tracking-[0.14em]">
          Preview unavailable
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className="object-cover"
      onError={() => setHasError(true)}
    />
  );
}

function RegistrationMarks({ className }) {
  return (
    <>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-4 top-4 z-20 h-4 w-4 border-l border-t sm:left-5 sm:top-5 ${className}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-4 right-4 z-20 h-4 w-4 border-b border-r sm:bottom-5 sm:right-5 ${className}`}
      />
    </>
  );
}

function DeploymentMeta({ deployment }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-white/10 px-5 py-5 font-mono text-[10px] font-bold tracking-[0.08em] text-white/65 sm:px-7 sm:text-[11px] md:px-8 md:py-6">
      <span className="text-white/90">
        {deployment.index} / PRODUCTION WEBSITE
      </span>
      <span aria-hidden="true" className="text-white/25">
        ·
      </span>
      <span>{deployment.client}</span>
      <span aria-hidden="true" className="text-white/25">
        ·
      </span>
      <span>{deployment.location}</span>
    </div>
  );
}

function LiveSiteButton({ deployment, styles }) {
  return (
    <motion.a
      href={deployment.href}
      target="_blank"
      rel="noopener noreferrer"
      whileTap={{ scale: 0.985 }}
      className={`group flex min-h-[54px] w-full items-center justify-between gap-4 rounded-lg px-4 py-3 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:px-5 ${styles.button}`}
    >
      <span>{deployment.actionLabel}</span>
      <FaExternalLinkAlt
        aria-hidden="true"
        className="shrink-0 text-sm transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </motion.a>
  );
}

function CapabilityList({ deployment, styles }) {
  return (
    <ul className="grid w-full gap-3 text-sm leading-snug text-white/72 sm:grid-cols-2 sm:gap-x-5">
      {deployment.capabilities.map((capability) => (
        <li key={capability} className="flex items-start gap-2">
          <FaArrowUp
            aria-hidden="true"
            className={`mt-0.5 shrink-0 rotate-45 text-[10px] ${styles.accent}`}
          />
          <span>{capability}</span>
        </li>
      ))}
    </ul>
  );
}

function PreviewTessellation({ deployment, styles }) {
  const isPrime = deployment.id === "prime";

  return (
    <div
      className={`relative min-h-[300px] w-full overflow-hidden border border-white/10 bg-[#08090C] p-2 sm:min-h-[380px] sm:p-3 md:min-h-[480px] ${isPrime ? "aspect-[16/11] md:aspect-auto" : "aspect-[4/3] md:aspect-auto"}`}
    >
      <div className="relative h-full min-h-[284px] w-full overflow-hidden rounded-[10px] bg-[#16171D] sm:min-h-[354px] md:min-h-[450px]">
        <PreviewImage
          src={deployment.image}
          alt={deployment.alt}
          sizes="(max-width: 768px) 90vw, 62vw"
        />

        <div
          aria-hidden="true"
          className={`absolute overflow-hidden rounded-[4px] border bg-[#0D0E12]/90 ${styles.overlay} ${isPrime ? "bottom-[52px] left-4 h-[42%] w-[38%] sm:bottom-[56px] sm:left-5 md:bottom-[58px] md:left-6 md:h-[40%] md:w-[29%]" : "right-4 top-4 bottom-[52px] w-[38%] sm:right-5 sm:top-5 sm:bottom-[58px] md:right-6 md:top-6 md:bottom-[62px] md:w-[23%]"}`}
        >
          <PreviewImage
            src={deployment.image}
            alt=""
            sizes="(max-width: 768px) 38vw, 18vw"
          />
        </div>

        <div className="absolute inset-x-2 bottom-2 z-10 flex min-h-9 items-center justify-between gap-3 bg-black/85 px-3 font-mono text-[10px] tracking-[0.08em] text-white/75 sm:inset-x-3 sm:bottom-3 sm:px-4">
          <span>LIVE SITE PREVIEW / HOME</span>
          <span className={styles.accent}>
            {deployment.id === "prime" ? "GST / 02" : "AAA / 01"}
          </span>
        </div>

        {isPrime ? (
          <div
            aria-hidden="true"
            className="absolute inset-x-5 bottom-4 z-20 flex h-3 items-end justify-between opacity-80 sm:inset-x-6 sm:bottom-5"
          >
            {[0, 1, 2, 3, 4].map((tick) => (
              <span
                key={tick}
                className={`w-px bg-[#C9A04E] ${tick === 2 ? "h-3" : "h-2"}`}
              />
            ))}
          </div>
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-x-5 bottom-4 z-20 h-0.5 bg-gradient-to-r from-[#214A9B] via-[#214A9B] to-[#D6AD27] sm:inset-x-6 sm:bottom-5"
          >
            <span className="absolute -right-0.5 -top-1.5 h-3 w-3 rounded-full border border-[#D6AD27] bg-[#08090C]" />
          </div>
        )}
      </div>
    </div>
  );
}

function DeploymentRecord({ deployment }) {
  const styles = deploymentStyles[deployment.id];

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-tl-[28px] rounded-br-[28px] rounded-tr-lg rounded-bl-lg border bg-[#0D0E12] ${styles.border}`}
    >
      <RegistrationMarks className={styles.mark} />
      <DeploymentMeta deployment={deployment} />

      <div className={`grid items-stretch ${styles.grid}`}>
        <div className={`flex min-w-0 flex-col px-5 py-8 sm:px-8 sm:py-10 md:px-8 md:py-11 ${styles.copy}`}>
          <span className="mb-4 font-mono text-[11px] font-bold tracking-[0.1em] text-white/58">
            DEPLOYMENT {deployment.index}
          </span>

          <h3 className="max-w-[15ch] font-display text-4xl font-extrabold leading-[0.98] tracking-[-0.045em] text-[#EDEDED] sm:text-5xl">
            {deployment.title}
          </h3>

          <p className={`mt-3 font-mono text-xs font-bold tracking-[0.04em] ${styles.accent}`}>
            {deployment.descriptor}
          </p>

          <p className="mt-5 max-w-[36ch] text-sm leading-7 text-white/68">
            {deployment.description}
          </p>

          {deployment.stack && (
            <p className="mt-4 font-mono text-[11px] leading-5 text-white/58">
              <span className="mr-2 text-white/85">BUILD</span>
              {deployment.stack}
            </p>
          )}

          <div className="mt-7">
            <LiveSiteButton deployment={deployment} styles={styles} />
            <p className="mt-2 text-xs text-white/58">Opens the live website</p>
            <a
              href={deployment.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-2 inline-block font-mono text-[11px] text-white/72 underline decoration-white/30 underline-offset-4 transition-colors ${styles.urlHover} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
            >
              {deployment.domain}
            </a>
          </div>

          <div className="mt-9">
            <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-white/58">
              {deployment.id === "prime" ? "Service coverage" : "Coverage"}
            </p>
            <CapabilityList deployment={deployment} styles={styles} />
          </div>
        </div>

        <div className={`flex min-w-0 items-center bg-[#16171D]/75 p-4 sm:p-5 md:p-6 ${styles.preview}`}>
          <PreviewTessellation deployment={deployment} styles={styles} />
        </div>
      </div>
    </motion.article>
  );
}

export default function ClientProjects() {
  return (
    <section id="clients" className="relative overflow-hidden bg-black px-6 py-28 text-[#EDEDED] sm:py-32 md:px-8 md:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-[8%] right-[5%] opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:60px_60px] [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <header className="mb-12 grid gap-8 md:grid-cols-[18%_1fr] md:gap-12 md:mb-14">
          <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-6">
            <span className="font-mono text-[11px] font-bold tracking-[0.14em] text-white/58">
              {"// CLIENT WORK"}
            </span>
            <span
              aria-label="Two client deployments"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/25 font-mono text-xs text-white/80"
            >
              02
            </span>
          </div>

          <div className="min-w-0">
            <h2 className="w-full min-w-0 max-w-3xl break-words font-display text-[clamp(3rem,8vw,6.5rem)] font-extrabold uppercase leading-[0.96] tracking-[-0.045em]">
              Client
              <br />
              Deployments
            </h2>
            <p className="mt-6 max-w-[52ch] text-base leading-7 text-white/62 sm:text-lg">
              Two production websites built for organisations in Odisha.
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-8 h-px w-full max-w-[700px] origin-left bg-white/20"
            >
              <span className="block h-0.5 w-[39%] bg-gradient-to-r from-[#214A9B] to-[#D6AD27]" />
            </motion.div>
          </div>
        </header>

        <div className="space-y-11 md:space-y-[72px]">
          {deployments.map((deployment) => (
            <DeploymentRecord key={deployment.id} deployment={deployment} />
          ))}
        </div>
      </div>
    </section>
  );
}
