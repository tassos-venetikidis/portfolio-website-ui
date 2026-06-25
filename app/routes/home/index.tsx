import type { Route } from "./+types/index";
import FeaturedProjects from "~/components/FeaturedProjects";
import type { Project } from "~/types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tassos Venetikidis Web Dev" },
    { name: "description", content: "Custom website and web app development" },
    { name: "author", content: "Tassos Venetikidis" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
  const data = await res.json();
  return { projects: data };
}

function HomePage({ loaderData }: Route.ComponentProps) {
  const { projects } = loaderData;

  return (
    <>
      <FeaturedProjects projects={projects} count={2} />
    </>
  );
}

export default HomePage;
