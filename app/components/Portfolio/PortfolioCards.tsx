"use client"

import React, { useEffect, useMemo, useState } from 'react'
import { projects } from "@/app/data/projects"
import { PortfolioTabs } from '@/app/components/Portfolio/PortfolioTabs';
import { FaEye } from 'react-icons/fa';
import Link from "next/link"
import { Button } from '../ui/Button';

export default function PortfolioCards() {
    const [activeTab, setActiveTab] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);

    const projectsPerPage = 8;

    const filteredProjects =
        activeTab === "all"
            ? projects
            : projects.filter(
                (project) => project.category === activeTab
            );

    // Latest Post Date

    const shortedProjects = useMemo(() =>{
        return [...filteredProjects].sort((a, b) =>
            new Date(b.date).getTime() - 
            new Date(a.date).getTime()            
        );
    }, [filteredProjects]);

    // Pagination
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;

    const currentProjects  = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

    useEffect(() =>{
        setCurrentPage(1);        
    }, [activeTab]);

    return (
        <>           
            {/* Tabs */}
            <PortfolioTabs
                active={activeTab}
                setActive={setActiveTab}
            />

            <div className='grid md:grid-cols-2 gap-6 mt-8'>
                {shortedProjects.map((project) => (
                    <div key={project.id} className='relative bg-[#151e29] flex items-center rounded-xl overflow-hidden group'>
                        <div className="w-1/3">
                            <img
                                src={project.image}
                                width={179}
                                height={200}
                                alt={project.title}
                                className='w-full h-full object-cover'
                            />
                        </div>
                        {/* Content */}
                        <div className='w-2/3 px-8 flex flex-col gap-2'>
                            <h3 className='text-xl text-gray-200 line-clamp-1'>
                                {project.title}
                            </h3>
                            <p className='text-base text-gray-400 line-clamp-5'>
                                {project.description}
                            </p>
                        </div>

                        {/* Overlay */}
                        <div className="
                                absolute inset-0
                                bg-black/70
                                flex items-center justify-center
                                opacity-0
                                group-hover:opacity-100
                                transition duration-300
                            ">
                            <div className="bg-gray-600 text-white px-4 py-2 rounded font-bold">                                
                                    <Link className='flex gap-2' href={project.link} target='_blank'>
                                        <FaEye size={20} />View Case Study
                                    </Link>                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>

             {/* Paginations */}
            {totalPages > 1 && (
                <div className="flex justify-center gap-3 mt-12">

                    {/* Prev */}
                    <Button
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-40"
                    >
                        Prev
                    </Button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, index) => (
                        <Button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-4 py-2 rounded transition ${
                                currentPage === index + 1
                                    ? "bg-green-500 text-white"
                                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                            }`}
                        >
                            {index + 1}
                        </Button>
                    ))}

                    {/* Next */}
                    <Button
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-40"
                    >
                        Next
                    </Button>

                </div>
            )}

        </>
    )
}
