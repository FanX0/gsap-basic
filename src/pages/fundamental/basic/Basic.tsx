import DocumentationLayout from "@/components/layouts/DocumentationLayout";
import To from "@/pages/fundamental/basic/To";
import Timeline from "@/pages/fundamental/basic/Timeline";
import From from "@/pages/fundamental/basic/From";
import FromTo from "@/pages/fundamental/basic/FromTo";

const Basic = () => {
  return (
    <DocumentationLayout>
      <section className="space-y-4">
        <h1 className="text-xl font-semibold">GSAP Basic Features</h1>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <To />
          </li>
          <li>
            <From />
          </li>
          <li>
            <FromTo />
          </li>
          <li>
            <Timeline />
          </li>
        </ul>
      </section>
    </DocumentationLayout>
  );
};

export default Basic;
