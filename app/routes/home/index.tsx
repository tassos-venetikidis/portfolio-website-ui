import type { Route } from "./+types/index";
import Hero from "~/components/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tassos Venetikidis Web Dev" },
    { name: "description", content: "Custom website and web app development" },
    { name: "author", content: "Tassos Venetikidis" },
  ];
}

export default function Home() {
  return (
    <section>
      <Hero />
    </section>
  );
}
