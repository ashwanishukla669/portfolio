
"use client";

import React from "react";
import { skills } from "./skillsData";
import SkillCard from "./SkillCard";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export const WhatIDO = () => {
  return (
    <section className="relative py-10 sm:py-12 lg:py-14">

      {/* Section Header */}
      <div className="mb-9 max-w-[850px]">

        {/* Section Label */}
        <div className="mb-4 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-emerald-400" />

          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
            My Expertise
          </span>
        </div>

        {/* Heading */}
        <h2 className="mb-5 text-[30px] font-bold leading-tight tracking-tight text-white sm:text-[36px]">
          What I <span className="text-emerald-400">Do</span>
        </h2>

        {/* Description */}
        <p className="max-w-[800px] text-[15px] leading-7 text-gray-200 sm:text-[16px] sm:leading-8">
          With 13+ years of web development experience, I specialize
          in building custom WordPress websites, Shopify stores,
          and scalable eCommerce solutions. My expertise includes
          theme customization, responsive frontend development,
          and performance optimization. I also have hands-on
          experience developing websites using React.js and Next.js.
        </p>

        {/* Links */}
        <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-emerald-400 transition-colors duration-200 hover:text-emerald-300"
          >
            Explore My Projects
            <FiArrowUpRight size={16} />
          </Link>

          <Link
            href="/pdf/resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-200 hover:text-emerald-400"
          >
            View My Resume
            <FiArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>

    </section>
  );
};
