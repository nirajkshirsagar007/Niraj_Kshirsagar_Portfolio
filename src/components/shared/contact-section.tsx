"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Briefcase, GitBranch, Send, CheckCircle2, Phone } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";

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
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Let's Work Together</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Contact Info */}
          <FadeIn delay={0.2} direction="right">
            <div className="flex flex-col h-full justify-center">
              <h3 className="text-3xl font-bold mb-6 text-white">Get in Touch</h3>
              <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                Feel free to reach out for collaborations, job opportunities, or just a friendly hello.
              </p>

              <div className="flex flex-col gap-4">
                <Link
                  href="mailto:nirajkshirsagar007@gmail.com"
                  className="group flex items-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 w-full md:w-fit"
                >
                  <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium mb-0.5">Email Me</p>
                    <p className="text-sm text-white font-medium group-hover:text-blue-400 transition-colors">nirajkshirsagar007@gmail.com</p>
                  </div>
                </Link>

                <Link
                  href="tel:9370507643"
                  className="group flex items-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 w-full md:w-fit"
                >
                  <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium mb-0.5">Call Me</p>
                    <p className="text-sm text-white font-medium group-hover:text-green-400 transition-colors">+919370507643</p>
                  </div>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/nirajkshirsagar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 w-full md:w-fit"
                >
                  <div className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium mb-0.5">Connect on LinkedIn</p>
                    <p className="text-sm text-white font-medium group-hover:text-blue-500 transition-colors">Niraj Kshirsagar</p>
                  </div>
                </Link>

                <Link
                  href="https://github.com/nirajkshirsagar007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 w-full md:w-fit"
                >
                  <div className="h-10 w-10 rounded-full bg-gray-500/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <GitBranch className="h-5 w-5 text-gray-300" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium mb-0.5">Check out my Code</p>
                    <p className="text-sm text-white font-medium group-hover:text-gray-300 transition-colors">github.com/nirajkshirsagar007</p>
                  </div>
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Right Column - Contact Form */}
          <FadeIn delay={0.4} direction="left">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-2xl relative overflow-hidden">
              {/* Form subtle highlight */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
                <p className="text-gray-400">Fill out the form below and I'll get back to you.</p>
              </div>

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-16 space-y-4 text-center">
                  <div className="h-16 w-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 ring-8 ring-green-500/10">
                    <CheckCircle2 className="h-8 w-8 text-green-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
                  <p className="text-gray-400 max-w-sm">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  <Button
                    variant="outline"
                    className="mt-6 rounded-full border-white/20 hover:bg-white/10 text-white"
                    onClick={() => setIsSuccess(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-blue-500 focus-visible:ring-offset-0 rounded-xl h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Your Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-blue-500 focus-visible:ring-offset-0 rounded-xl h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Hello Niraj, I'd like to discuss a project..."
                      rows={5}
                      className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-blue-500 focus-visible:ring-offset-0 rounded-xl resize-none p-4"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 rounded-xl bg-blue-400 text-black hover:bg-gray-200 text-base font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
