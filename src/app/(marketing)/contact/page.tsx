"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";
import { appConfig } from "@/lib/config";
import { Mail, MapPin, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type ContactFormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      setIsSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast.success("Thank you for your message! We'll get back to you soon.");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-muted/50 py-16 md:py-24">
        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We&apos;d love to hear from you. Send us a message
              and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
            {/* Contact Information */}
            <div className="space-y-10">
              <div>
                <h2 className="mb-4 text-3xl font-semibold">Contact Information</h2>
                <p className="text-lg text-muted-foreground">
                  Fill up the form and our Team will get back to you within 24
                  hours.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: Phone,
                    title: "Call Us",
                    details: [appConfig.legal.phone],
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    details: [appConfig.legal.email],
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    details: [
                      appConfig.projectName,
                      appConfig.legal.address.street,
                      `${appConfig.legal.address.city}, ${appConfig.legal.address.state}`,
                      `${appConfig.legal.address.postalCode}, ${appConfig.legal.address.country}`,
                    ],
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted">
                        <item.icon className="h-6 w-6 text-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">
                        {item.title}
                      </h3>
                      {item.details.map((detail, j) => (
                        <p key={j} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border bg-card p-8 md:p-10 shadow-sm">
              <h2 className="mb-8 text-2xl font-semibold">Send us a Message</h2>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Inc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us how we can help..."
                            className="min-h-[120px] resize-y"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
