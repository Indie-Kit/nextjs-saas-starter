import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Our privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="py-16 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <header className="mb-12 space-y-4 text-center">
          <h1 className="text-4xl font-semibold md:text-5xl">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        <main className="prose prose-neutral dark:prose-invert max-w-none">
          <p>
            Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website.
          </p>
          
          <h2>1. Information We Collect</h2>
          <p>
            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
          </p>

          <h2>2. How We Use Information</h2>
          <p>
            We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
          </p>

          <h2>3. Sharing of Information</h2>
          <p>
            We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
          </p>

          <h2>4. Your Rights</h2>
          <p>
            You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
          </p>

          <p>
            Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
          </p>
        </main>
      </div>
    </article>
  );
}
