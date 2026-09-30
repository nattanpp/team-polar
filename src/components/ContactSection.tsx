import React, { useState } from 'react';
import { Mail, ArrowDown, Send, CheckCircle2, RotateCcw } from 'lucide-react';
import { CONTACT_INFO } from '../data/teamData';
import { ImagePlaceholder } from './ImagePlaceholder';
import { ScrollReveal } from './ScrollAnimation';

export const ContactSection: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const subject = encodeURIComponent(
      `Inquiry: ${firstName} ${lastName}`.trim() || 'Team Polar Contact Inquiry'
    );
    const body = encodeURIComponent(
      `Hello Team Polar,\n\n${message}\n\n---\nSender: ${firstName} ${lastName}\nEmail: ${email}`
    );
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 w-full">
      
      <ScrollReveal direction="up" delay={0.05}>
        <div className="max-w-3xl">
          <h1 className="type-title mb-4">
            Contact Team Polar
          </h1>
          <p className="type-body text-base sm:text-lg text-slate-800 leading-relaxed max-w-3xl text-pretty">
            Get in touch with Team Polar for academic collaboration, technology testing inquiries, partner relations, or expedition logistics.
          </p>
        </div>
      </ScrollReveal>

      
      <ScrollReveal direction="up" delay={0.1}>
        <div className="mt-6 mb-8 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-3.5">
            <a
              href={`mailto:${CONTACT_INFO.email}?subject=Inquiry%20to%20Team%20Polar`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0B132B] text-white text-xs sm:text-sm font-mono-data tracking-wider uppercase shadow-sm hover:shadow-md hover:bg-[#162947] active:scale-[0.98] transition-all cursor-pointer font-semibold group"
            >
              <Mail className="w-4 h-4 text-[#7CBDE8]" />
              <span>EMAIL US DIRECTLY ({CONTACT_INFO.email})</span>
            </a>
            <button
              onClick={() => {
                const el = document.getElementById('contact-form');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-white text-[#0B132B] border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-xs sm:text-sm font-mono-data tracking-wider uppercase shadow-2xs hover:shadow-xs active:scale-[0.98] transition-all cursor-pointer font-semibold"
            >
              <span>TRANSMISSION FORM</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#2A74C4]" />
            </button>
          </div>
        </div>
      </ScrollReveal>

      
      <ScrollReveal direction="up" delay={0.14}>
        <ImagePlaceholder
          imageKey="contactHeadquarters"
          aspectRatio="aspect-[21/9]"
          className="my-8"
        />
      </ScrollReveal>

      <div className="my-12" />

      
      <div id="location-coordinates" className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        
        <ScrollReveal direction="up" delay={0.06}>
          <div className="py-2 flex flex-col justify-between h-full">
            <div>
              <div className="space-y-6">
                <div>
                  <h2 className="type-subsection text-[#0B132B] mb-1">
                    Team Polar Headquarters
                  </h2>
                  <div className="type-body text-[#1E293B]">
                    <div>De Rondom 70</div>
                    <div>5612AP Eindhoven</div>
                    <div>The Netherlands</div>
                  </div>
                </div>

                <div>
                  <h2 className="type-subsection text-[#0B132B] mb-1">
                    Second Location (Matrix)
                  </h2>
                  <div className="type-body text-[#1E293B]">
                    <div>Matrix</div>
                    <div>Het Kranenveld 12</div>
                    <div>5612AE Eindhoven</div>
                    <div>The Netherlands</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        
        <ScrollReveal direction="up" delay={0.12}>
          <div className="py-2 flex flex-col justify-between h-full">
            <div>
              <h2 className="type-subsection text-[#0B132B] mb-4">
                Telecommunication Registry
              </h2>
              <div className="space-y-4 mb-6">
                <div>
                  <span className="font-mono-data text-xs text-slate-600 block uppercase font-medium">
                    Telephone:
                  </span>
                  <a 
                    href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                    className="font-mono-data text-base font-bold text-[#0B132B] hover:text-[#2A74C4] transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>

                <div>
                  <span className="font-mono-data text-xs text-slate-600 block uppercase font-medium">
                    Direct Email:
                  </span>
                  <a 
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="font-mono-data text-base font-bold text-[#0B132B] hover:text-[#2A74C4] transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>

                <div>
                  <span className="font-mono-data text-xs text-slate-600 block uppercase mb-1 font-medium">
                    Social Channels:
                  </span>
                  <div className="flex flex-wrap gap-4 pt-1">
                    {CONTACT_INFO.social.map((s, idx) => (
                      <a
                        key={idx}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono-data uppercase text-[#0B132B] hover:text-[#2A74C4] underline underline-offset-4 transition-colors font-medium"
                      >
                        {s.platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 font-mono-data text-xs text-slate-600 font-medium">
              RESPONSE WINDOW: STANDARD WORKING HOURS (CET)
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="my-12" />

      
      <ScrollReveal direction="up">
        <div className="my-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4 gap-1">
            <h2 className="type-section text-[#0B132B]">
              Location Map : Eindhoven
            </h2>
            <span className="font-mono-data text-xs text-slate-600 font-medium">
              CENTRED ON DE RONDOM 70, 5612AP EINDHOVEN
            </span>
          </div>

          <div className="w-full h-80 sm:h-96 bg-white relative overflow-hidden border border-slate-200">
            <iframe
              title="Team Polar Eindhoven Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=5.4800%2C51.4430%2C5.5000%2C51.4540&amp;layer=mapnik&amp;marker=51.4485%2C5.4907"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center text-xs font-mono-data text-slate-600 pt-2.5 px-1 gap-1">
            <span>COORDINATES: 51°26'55.0"N 5°29'26.5"E (EINDHOVEN)</span>
            <a
              href="https://www.openstreetmap.org/?mlat=51.4485&amp;mlon=5.4907#map=16/51.4485/5.4907"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2A74C4] hover:text-[#0B132B] font-semibold underline"
            >
              VIEW LARGER MAP
            </a>
          </div>
        </div>
      </ScrollReveal>

      <div className="my-10" />

      
      <ScrollReveal direction="up">
        <div id="contact-form" className="my-8 py-4">
          <div className="mb-6">
            <h2 className="type-section text-[#0B132B]">
              Transmission Form
            </h2>
          </div>

          {sent ? (
            <div className="py-4">
              <div className="font-mono-data text-xs text-[#2A74C4] uppercase font-bold mb-2">
                MESSAGE SENT
              </div>
              <h3 className="type-subsection text-[#0B132B] mb-2">
                Transmission Received
              </h3>
              <p className="type-body text-[#1E293B] mb-4 max-w-2xl text-pretty">
                Thank you {firstName ? `${firstName} ` : ''}for contacting Team Polar. Your message has been received by our management team at info@teampolar.org.
              </p>
              <div className="font-mono-data text-xs text-slate-700 mb-4">
                LOGGED SENDER: {email}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(`Inquiry from ${firstName} ${lastName}`)}&body=${encodeURIComponent(`Name: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`)}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B132B] hover:bg-[#162947] text-white text-xs font-mono-data uppercase tracking-wider shadow-sm active:scale-[0.98] transition-all font-medium"
                >
                  <Mail className="w-4 h-4 text-[#7CBDE8]" />
                  <span>RE-OPEN IN EMAIL CLIENT</span>
                </a>
                <button
                  onClick={() => {
                    setSent(false);
                    setFirstName('');
                    setLastName('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#0B132B] text-xs font-mono-data uppercase tracking-wider shadow-2xs active:scale-[0.98] transition-all cursor-pointer font-medium"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>SEND ANOTHER MESSAGE</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-data text-[#0B132B] mb-1.5 font-semibold">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    className="w-full bg-white border border-slate-300 p-3 font-body text-sm text-[#0B132B] placeholder:text-slate-400 focus:outline-none focus:border-[#0B132B] focus:ring-1 focus:ring-[#0B132B] shadow-2xs transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-data text-[#0B132B] mb-1.5 font-semibold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                    className="w-full bg-white border border-slate-300 p-3 font-body text-sm text-[#0B132B] placeholder:text-slate-400 focus:outline-none focus:border-[#0B132B] focus:ring-1 focus:ring-[#0B132B] shadow-2xs transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-data text-[#0B132B] mb-1.5 font-semibold">
                  Email <span className="text-[#2A74C4]">* (Required)</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@organization.com"
                  className="w-full bg-white border border-slate-300 p-3 font-mono-data text-sm text-[#0B132B] placeholder:text-slate-400 focus:outline-none focus:border-[#0B132B] focus:ring-1 focus:ring-[#0B132B] shadow-2xs transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-data text-[#0B132B] mb-1.5 font-semibold">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Please state your message, technical inquiry, or partnership proposal."
                  className="w-full bg-white border border-slate-300 p-3 font-body text-sm text-[#0B132B] placeholder:text-slate-400 focus:outline-none focus:border-[#0B132B] focus:ring-1 focus:ring-[#0B132B] shadow-2xs transition-colors leading-relaxed"
                />
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0B132B] hover:bg-[#162947] text-white text-xs sm:text-sm font-mono-data tracking-wider uppercase shadow-sm hover:shadow-md active:scale-[0.98] transition-all cursor-pointer font-semibold group"
                >
                  <Send className="w-4 h-4 text-[#7CBDE8]" />
                  <span>SEND (OPENS IN YOUR EMAIL)</span>
                </button>
                <a
                  href={`mailto:${CONTACT_INFO.email}?subject=Inquiry%20to%20Team%20Polar`}
                  className="text-xs font-mono-data text-[#0B132B] hover:text-[#2A74C4] underline font-medium"
                >
                  or click to email {CONTACT_INFO.email} directly
                </a>
              </div>
            </form>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
};
