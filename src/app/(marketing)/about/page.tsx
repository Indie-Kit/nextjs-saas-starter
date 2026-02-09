import { appConfig } from "@/lib/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About Us | ${appConfig.projectName}`,
  description: "Learn more about our company, mission, and values.",
};

export default function AboutPage() {
  return (
    <article className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Hero Section */}
        <header className="space-y-6 text-center mb-16 md:mb-24">
          <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
            About {appConfig.projectName}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building the future of SaaS, one feature at a time.
          </p>
        </header>

        <div className="space-y-16 md:space-y-24">
          {/* Mission Section */}
          <section className="space-y-6" aria-labelledby="mission">
            <h2 id="mission" className="text-3xl font-semibold text-center md:text-4xl">Our Mission</h2>
            <p className="text-lg leading-relaxed text-muted-foreground text-center max-w-3xl mx-auto">
              At {appConfig.projectName}, we believe in empowering developers with the tools they need to launch their projects faster. Our platform combines the simplicity of traditional setups with the power of modern web technologies.
            </p>
          </section>

          {/* Values Section */}
          <section className="space-y-8" aria-labelledby="values">
            <h2 id="values" className="text-3xl font-semibold text-center md:text-4xl">Our Values</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:gap-12 mt-12">
              <article className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Speed</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We value shipping fast. Our tools are designed to help you go from idea to product in record time.
                </p>
              </article>
              <article className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Quality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We don't cut corners. Our code is clean, well-tested, and built to scale with your business.
                </p>
              </article>
              <article className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are open source at heart. We believe in sharing our knowledge and tools with the world.
                </p>
              </article>
              <article className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Simplicity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Complex problems don't always need complex solutions. We strive for elegance in everything we do.
                </p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
