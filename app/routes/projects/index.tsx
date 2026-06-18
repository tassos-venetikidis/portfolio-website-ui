import type { Route } from "./+types/index";

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

function ProjectsPage() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8">🚀 Projects</h2>
    </section>
  );
}

export default ProjectsPage;
