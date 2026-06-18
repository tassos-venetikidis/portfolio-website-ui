import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tassos Venetikidis Web Dev" },
    { name: "description", content: "Custom website and web app development" },
    { name: "author", content: "Tassos Venetikidis" },
  ];
}

export default function Home() {
  return <>Homepage</>;
}
