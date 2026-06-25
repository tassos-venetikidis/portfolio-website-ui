import type { Project } from "~/types";
import type { Route } from "./+types/index";
import { useState } from "react";
import ProjectCard from "~/components/ProjectCard";
import Pagination from "~/components/Pagination";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tassos Venetikidis | My Projects" },
    {
      name: "description",
      content:
        "Comprehensive listing of both front-end and full-stack web dev projects of Tassos Venetikidis",
    },
    { name: "author", content: "Tassos Venetikidis" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch("http://localhost:8000/projects");
  const data = await res.json();
  return { projects: data };
}

function ProjectsPage({ loaderData }: Route.ComponentProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const { projects } = loaderData as { projects: Project[] };

  // Get unique categories
  const categories: Set<string> = new Set();
  categories.add("All");
  projects.forEach((project) => categories.add(project.category));

  // Filter projects based on the category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const pageStartProjectsIndex = (currentPage - 1) * projectsPerPage;
  const pageEndProjectsIndex = pageStartProjectsIndex + projectsPerPage;
  const currentPageProjects = filteredProjects.slice(
    pageStartProjectsIndex,
    pageEndProjectsIndex,
  );

  return (
    <>
      <h2 className="text-3xl font-bold text-white mb-8">🚀 Projects</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {Array.from(categories).map((category, idx) => (
          <button
            key={idx}
            className={`px-3 py-1 rounded text-sm cursor-pointer ${selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-200"}`}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {currentPageProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default ProjectsPage;
