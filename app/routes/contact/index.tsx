import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tassos Venetikidis | Contact Me" },
    {
      name: "description",
      content: "Contact form to reach out to Tassos Venetikidis web dev.",
    },
    { name: "author", content: "Tassos Venetikidis" },
  ];
}

function ContactPage() {
  return (
    <>
      <section>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          📫 Contact Me
        </h2>
      </section>
    </>
  );
}

export default ContactPage;
