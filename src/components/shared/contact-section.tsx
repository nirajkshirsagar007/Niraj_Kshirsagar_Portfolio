"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Briefcase, GitBranch, Send, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "5e21662e-82e1-40a7-a890-16eaa539696a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Feel free to reach out for collaborations or just a friendly hello. 
              My inbox is always open.
            </p>

            <div className="flex flex-col gap-4">
              <Link 
                href="mailto:nirajkshirsagar007@gmail.com" 
                className={`flex items-center justify-start w-fit ${buttonVariants({ variant: "ghost", size: "lg" })}`}
              >
                <Mail className="mr-3 h-5 w-5 text-primary" />
                <span className="text-lg">nirajkshirsagar007@gmail.com</span>
              </Link>
              
              <Link 
                href="https://www.linkedin.com/in/nirajkshirsagar" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center justify-start w-fit ${buttonVariants({ variant: "ghost", size: "lg" })}`}
              >
                <Briefcase className="mr-3 h-5 w-5 text-primary" />
                <span className="text-lg">LinkedIn Profile</span>
              </Link>

              <Link 
                href="https://github.com/nirajkshirsagar007" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center justify-start w-fit ${buttonVariants({ variant: "ghost", size: "lg" })}`}
              >
                <GitBranch className="mr-3 h-5 w-5 text-primary" />
                <span className="text-lg">GitHub Profile</span>
              </Link>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <Card className="border border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-10 space-y-4 text-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                  <Button variant="outline" className="mt-4" onClick={() => setIsSuccess(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" name="name" required placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" name="email" type="email" required placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea id="message" name="message" required placeholder="Hello Niraj..." rows={5} className="resize-none" />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
