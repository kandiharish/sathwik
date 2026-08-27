import { motion } from 'framer-motion';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { MapPin, Mail, Phone, Clock, Send, MessageSquare } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-rose-50 rounded-full blur-[100px] opacity-60" />
          <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-emerald-50 rounded-full blur-[100px] opacity-60" />
        </div>
        
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
              <MessageSquare className="w-4 h-4" />
              Get in Touch
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
              Let's Start a <span className="text-[#054E38]">Conversation</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
              Whether you have a question about our programs, want to volunteer, or are interested in partnering with us, we'd love to hear from you.
            </p>
          </motion.div>
        </Container>
      </section>

      <Section className="py-16 md:py-24 relative z-10">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_60px_rgb(0,0,0,0.05)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
              
              {/* Left Column - Contact Info */}
              <div className="lg:w-2/5 bg-[#054E38] p-10 md:p-14 text-white relative overflow-hidden flex flex-col justify-between">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <h3 className="text-3xl font-serif font-bold mb-2">Contact Information</h3>
                  <p className="text-emerald-100/80 text-sm mb-12">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>

                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-xl">
                        <MapPin className="w-6 h-6 text-emerald-300" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-emerald-300 uppercase tracking-wider mb-1">Our Location</h4>
                        <p className="text-white leading-relaxed text-[15px]">
                          380 St Kilda Road<br />
                          Ashok Nagar, Hyderabad<br />
                          500 020
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-xl">
                        <Phone className="w-6 h-6 text-emerald-300" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-emerald-300 uppercase tracking-wider mb-1">Phone Number</h4>
                        <p className="text-white text-[15px]">+91 90000 88422</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-xl">
                        <Mail className="w-6 h-6 text-emerald-300" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-emerald-300 uppercase tracking-wider mb-1">Email Address</h4>
                        <p className="text-white text-[15px]">admin@sathwik.org</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-16 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-emerald-300" />
                    <span className="text-sm font-medium">Mon - Fri: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="lg:w-3/5 p-10 md:p-14 lg:p-16">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">First Name</label>
                      <input 
                        type="text" 
                        placeholder="John"
                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#054E38]/20 focus:border-[#054E38] transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Last Name</label>
                      <input 
                        type="text" 
                        placeholder="Doe"
                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#054E38]/20 focus:border-[#054E38] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#054E38]/20 focus:border-[#054E38] transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+91 90000 00000"
                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#054E38]/20 focus:border-[#054E38] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Subject</label>
                    <input 
                      type="text" 
                      placeholder="How can we help you?"
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#054E38]/20 focus:border-[#054E38] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Message</label>
                    <textarea 
                      rows={5}
                      placeholder="Write your message here..."
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#054E38]/20 focus:border-[#054E38] transition-all resize-none"
                    ></textarea>
                  </div>

                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#054E38] hover:bg-[#033a29] text-white px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95">
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
              
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
