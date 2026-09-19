"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt, FaRegImage } from "react-icons/fa";

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
    stack: "React / Spring Boot / MySQL",
    href: "https://aaalumni.com/",
    actionLabel: "Visit Portal",
    domain: "aaalumni.com",
    image: "/aaa-alumni-live-preview.jpeg",
    alt: "AAA Alumni Portal homepage",
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
    descriptor: "GST & Accounting Services",
    description:
      "Built and deployed a live business site for a GST, accounting, and tax compliance services provider in Bhubaneswar.",
    stack: "React / Tailwind / Next.js",
    href: "https://primegstmitra.com/",
    actionLabel: "Visit Site",
    domain: "primegstmitra.com",
    image: "/prime-gst-mitra-live-preview.jpeg",
    alt: "Prime GST Mitra homepage",
    capabilities: [
      "GST registration & filing",
      "Accounting & bookkeeping",
      "Income tax returns",
      "Business consultancy",
    ],
  },
];

function PreviewImage({ src, alt, sizes, priority = false }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex h-full min-h-[180px] w-full flex-col items-center justify-center gap-2 bg-white/5 px-4 text-center text-white/40">
        <FaRegImage aria-hidden="true" className="text-xl" />
        <span className="font-mono text-[10px] uppercase tracking-[0.15em]">
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
      className="object-cover transition-transform duration-700 group-hover/preview:scale-105"
      onError={() => setHasError(true)}
    />
  );
}

function DeploymentRecord({ deployment, reverse }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative bg-[#0a0a0a]/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:border-white/20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className={`grid md:grid-cols-2 items-stretch`}>
        {/* Copy Section */}
        <div className={`flex flex-col justify-center p-8 lg:p-12 ${reverse ? "md:order-2" : "md:order-1"}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-white/40">
              {deployment.index}
            </span>
            <div className="h-px w-8 bg-white/20" />
            <span className="font-mono text-[10px] font-bold tracking-[0.1em] uppercase text-white/60">
              {deployment.client}
            </span>
          </div>

          <h3 className="font-display text-3xl lg:text-5xl font-black leading-tight tracking-tight text-white/90 group-hover:text-white transition-colors mb-2">
            {deployment.title}
          </h3>

          <p className="font-mono text-xs font-bold tracking-[0.05em] text-white/50 mb-6 uppercase">
            {deployment.descriptor}
          </p>

          <p className="text-white/60 leading-relaxed text-base mb-8 max-w-md font-sans">
            {deployment.description}
          </p>

          {deployment.stack && (
            <div className="mb-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40 mb-2">
                Tech Stack
              </p>
              <p className="font-mono text-xs text-white/70">
                {deployment.stack}
              </p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 mb-8">
            {deployment.capabilities.map((capability, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                <span className="text-xs text-white/60 font-sans leading-tight">
                  {capability}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
            <a
              href={deployment.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <span className="text-sm font-semibold text-white/90 font-sans">{deployment.actionLabel}</span>
              <FaExternalLinkAlt className="text-xs text-white/50 group-hover/link:text-white transition-colors" />
            </a>
            
            <span className="font-mono text-[10px] text-white/40 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
              LIVE
            </span>
          </div>
        </div>

        {/* Preview Section */}
        <div className={`relative min-h-[300px] md:min-h-full bg-white/5 p-4 lg:p-8 flex items-center justify-center group/preview ${reverse ? "md:order-1 border-r border-white/10" : "md:order-2 border-l border-white/10"}`}>
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#050505]">
            {/* macOS-style window header */}
            <div className="absolute top-0 inset-x-0 h-8 bg-white/5 border-b border-white/10 flex items-center px-4 z-10 backdrop-blur-md">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <div className="flex-1 flex justify-center">
                <span className="font-mono text-[9px] text-white/30 truncate max-w-[200px]">{deployment.domain}</span>
              </div>
            </div>
            
            <div className="absolute top-8 inset-0">
              <PreviewImage
                src={deployment.image}
                alt={deployment.alt}
                sizes="(max-width: 768px) 90vw, 50vw"
              />
            </div>
            
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/preview:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ClientProjects() {
  return (
    <section id="clients" className="relative py-12 lg:py-16  text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 mb-16 lg:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6 max-w-3xl"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
              Client Deployments
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          <h2 className="text-5xl lg:text-7xl font-display font-black tracking-tighter text-white">
            CLIENT WORK
          </h2>
          <p className="text-white/50 text-lg lg:text-xl font-sans leading-relaxed">
            Production-ready solutions built to solve real business problems and scale efficiently.
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="space-y-16 lg:space-y-24">
          {deployments.map((deployment, index) => (
            <DeploymentRecord 
              key={deployment.id} 
              deployment={deployment} 
              reverse={index % 2 !== 0} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
