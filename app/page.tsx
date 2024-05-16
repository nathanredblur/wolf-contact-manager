import { title, subtitle } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import NextLink from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Simplify Your&nbsp;</h1>
        <br />
        <h1 className={title({ color: "violet" })}>
          Business Relationships&nbsp;
        </h1>

        <h2 className={subtitle({ class: "mt-4" })}>
          Manage Customers, Sales, and Staff from One Platform.
        </h2>
      </div>
      <div className="mt-4">
        <Button
          as={NextLink}
          href="/contacts"
          radius="full"
          className="bg-gradient-to-tr from-[#FF1CF7] to-[#b249f8]"
        >
          Wolf Contact Manager
        </Button>
      </div>
    </section>
  );
}
