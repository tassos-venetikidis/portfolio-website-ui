import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tassos Venetikidis | About Me" },
    {
      name: "description",
      content:
        "Personal journey of Tassos Venetikidis in the world of web development",
    },
    { name: "author", content: "Tassos Venetikidis" },
  ];
}

function AboutPage() {
  return (
    <>
      <>
        <h1 className="text-3xl font-bold text-white mb-2 ">
          Hey, I'm Tassos 👋
        </h1>
      </>
    </>
  );
}

export default AboutPage;
