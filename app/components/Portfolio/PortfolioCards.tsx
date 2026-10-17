
"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data/projects";
import { PortfolioTabs } from "@/app/components/Portfolio/PortfolioTabs";
import { FiExternalLink } from "react-icons/fi";

const PROJECTS_PER_PAGE = 6;

const categoryLabels: Record<string, string> = {
  wordPress: "WordPress",
  shopify: "Shopify",
  react: "React / Next.js",
  static: "Static Website",
};

export default function PortfolioCards() {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter and sort projects by latest date
  const filteredProjects = useMemo(() => {
    const filtered =
      activeTab === "all"
        ? projects
        : projects.filter(
            (project) => project.category === activeTab
          );

    return [...filtered].sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    );
  }, [activeTab]);

  // Pagination calculations
  const totalPages = Math.ceil(
    filteredProjects.length / PROJECTS_PER_PAGE
  );

  const safeCurrentPage = Math.min(
    currentPage,
    Math.max(totalPages, 1)
  );

  const currentProjects = useMemo(() => {
    const start =
      (safeCurrentPage - 1) * PROJECTS_PER_PAGE;

    return filteredProjects.slice(
      start,
      start + PROJECTS_PER_PAGE
    );
  }, [filteredProjects, safeCurrentPage]);

  // Handle category change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  // Handle pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full">

      {/* Category Filters */}
      <PortfolioTabs
        active={activeTab}
        setActive={handleTabChange}
      />

      {/* Project Count */}
      <div className="mt-7 flex items-center justify-between">
        <p className="text-sm text-gray-200">
          Showing{" "}
          <span className="font-semibold text-emerald-400">
            {currentProjects.length}
          </span>{" "}
          of {filteredProjects.length} projects
        </p>
      </div>

      {/* Projects Grid */}
      {currentProjects.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">

          {currentProjects.map((project) => (
            <article
              key={project.id}
              className="
                group flex h-full flex-col
                overflow-hidden rounded-2xl
                border border-gray-800
                bg-[#111c29]
                transition-all duration-300
                hover:-translate-y-1
                hover:border-emerald-500/40
                hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)]
              "
            >

              {/* Project Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-900">
                <Image
                  src={project.image}
                  alt={`${project.title} website preview`}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 500px"
                  className="
                    object-cover object-top
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />

                {/* Category Badge */}
                <div
                  className="
                    absolute left-4 top-4
                    rounded-md border border-white/10
                    bg-[#020617]/90
                    px-3 py-1.5
                    text-xs font-semibold
                    text-emerald-400
                    backdrop-blur-sm
                  "
                >
                  {categoryLabels[project.category] ??
                    project.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">

                {/* Project Title */}
                <h3 className="mb-3 text-[19px] font-semibold leading-snug text-white sm:text-xl">
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mb-5 line-clamp-4
                    text-[15px] leading-7
                    text-gray-200
                  "
                >
                  {project.description}
                </p>

                {/* Technology Badges */}
                {"technologies" in project &&
                  Array.isArray(project.technologies) &&
                  project.technologies.length > 0 && (
                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-md
                            border border-gray-700
                            bg-[#1e293b]
                            px-2.5 py-1.5
                            text-[12px] font-medium
                            text-gray-200
                            transition-colors duration-200
                            group-hover:border-emerald-500/30
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                {/* Footer */}
                <div
                  className="
                    mt-auto flex flex-wrap
                    items-center justify-between
                    gap-3 border-t
                    border-gray-700/60 pt-4
                  "
                >

                  {/* Developer Role */}
                  <span className="text-xs font-medium text-gray-200">
                    {"role" in project &&
                    typeof project.role === "string"
                      ? project.role
                      : "Web Development"}
                  </span>

                  {/* Live Website Link */}
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2
                      text-sm font-semibold
                      text-emerald-400
                      transition-colors
                      hover:text-emerald-300
                    "
                    aria-label={`Visit ${project.title} website`}
                  >
                    Visit Website
                    <FiExternalLink size={16} />
                  </Link>

                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="mt-8 rounded-xl border border-gray-800 p-10 text-center">
          <p className="text-gray-200">
            No projects found in this category.
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav
          aria-label="Project pagination"
          className="
            mt-12 flex flex-wrap
            items-center justify-center gap-3
          "
        >

          {/* Previous Button */}
          <button
            type="button"
            onClick={() =>
              handlePageChange(
                Math.max(safeCurrentPage - 1, 1)
              )
            }
            disabled={safeCurrentPage === 1}
            className="
              rounded-lg border border-gray-700
              px-4 py-2 text-sm font-medium
              text-gray-200
              transition-colors
              hover:border-emerald-500
              hover:text-emerald-400
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            Previous
          </button>

          {/* Page Numbers */}
          {Array.from(
            { length: totalPages },
            (_, index) => index + 1
          ).map((page) => (
            <button
              type="button"
              key={page}
              onClick={() => handlePageChange(page)}
              aria-current={
                safeCurrentPage === page
                  ? "page"
                  : undefined
              }
              className={`
                flex h-10 min-w-10
                items-center justify-center
                rounded-lg border px-3
                text-sm font-semibold
                transition-colors
                ${
                  safeCurrentPage === page
                    ? "border-emerald-500 bg-emerald-500 text-[#020617]"
                    : "border-gray-700 text-gray-200 hover:border-emerald-500 hover:text-emerald-400"
                }
              `}
            >
              {page}
            </button>
          ))}

          {/* Next Button */}
          <button
            type="button"
            onClick={() =>
              handlePageChange(
                Math.min(
                  safeCurrentPage + 1,
                  totalPages
                )
              )
            }
            disabled={safeCurrentPage === totalPages}
            className="
              rounded-lg border border-gray-700
              px-4 py-2 text-sm font-medium
              text-gray-200
              transition-colors
              hover:border-emerald-500
              hover:text-emerald-400
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            Next
          </button>

        </nav>
      )}

    </div>
  );
}
