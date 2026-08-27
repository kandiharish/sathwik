import { motion } from 'framer-motion';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { MapPin, Mail, Phone, Clock, MessageSquare, ArrowRight } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="bg-[#FAFAF8] min-h-screen relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-emerald-50/50 to-transparent pointer-events-none z-0" />
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-rose-50/40 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-emerald-100/30 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="pt-40 pb-16 relative z-10">
        <Container className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 bg-white border border-slate-100 shadow-sm text-[#054E38] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-8">
              <MessageSquare className="w-3.5 h-3.5" />
              Get in Touch
            </div>
            
            <h1 
              className="text-6xl md:text-8xl text-[#053e2f]/10 tracking-tight leading-none mb-2"
              style={{ fontFamily: '"Brush Script MT", "Great Vibes", cursive' }}
            >
              Contact Us
            </h1>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-[#1d1d1f] tracking-tight -mt-10 md:-mt-14 mb-6">
              Let's Start a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#053e2f] to-[#0a7a5c]">
                Conversation
              </span>
            </h2>
            
            <p className="text-[17px] text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Whether you have a question about our programs, want to volunteer, or are interested in partnering with us, our team is ready to help.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Premium Bento Box Form Section */}
      <Section className="py-12 pb-32 relative z-10">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_20px_80px_rgba(0,0,0,0.06)] border border-white overflow-hidden flex flex-col lg:flex-row relative">
              
              {/* Left Column - Premium Contact Card */}
              <div className="lg:w-2/5 relative overflow-hidden bg-[#053e2f] p-10 md:p-14 lg:p-16 text-white flex flex-col justify-between group">
                {/* Stunning animated gradient background inside the card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#053e2f] via-[#085a45] to-[#0a7a5c] z-0" />
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-400/20 rounded-full blur-[80px] group-hover:bg-emerald-400/30 transition-colors duration-700 z-0" />
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-400/20 rounded-full blur-[80px] group-hover:bg-blue-400/30 transition-colors duration-700 z-0" />

                <div className="relative z-10">
                  <h3 className="text-3xl font-serif font-bold mb-4 tracking-tight">Contact Information</h3>
                  <p className="text-emerald-100/70 text-[15px] mb-12 font-medium leading-relaxed pr-8">
                    Fill out the form and our dedicated team will get back to you within 24 hours.
                  </p>

                  <div className="space-y-10">
                    <div className="flex items-start gap-5 group/item cursor-default">
                      <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 group-hover/item:bg-white/20 transition-colors duration-300">
                        <MapPin className="w-6 h-6 text-emerald-300" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-emerald-300/80 uppercase tracking-[0.2em] mb-1.5">Our Location</h4>
                        <p className="text-white leading-relaxed text-[15px] font-medium">
                          380 St Kilda Road<br />
                          Ashok Nagar, Hyderabad<br />
                          500 020
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5 group/item cursor-default">
                      <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 group-hover/item:bg-white/20 transition-colors duration-300">
                        <Phone className="w-6 h-6 text-emerald-300" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-emerald-300/80 uppercase tracking-[0.2em] mb-1.5">Phone Number</h4>
                        <p className="text-white text-[15px] font-medium">+91 90000 88422</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5 group/item cursor-default">
                      <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 group-hover/item:bg-white/20 transition-colors duration-300">
                        <Mail className="w-6 h-6 text-emerald-300" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-emerald-300/80 uppercase tracking-[0.2em] mb-1.5">Email Address</h4>
                        <p className="text-white text-[15px] font-medium">admin@sathwik.org</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-16 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-emerald-300/80" />
                    <span className="text-sm font-medium text-emerald-100">Mon - Fri: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Premium Form Tool */}
              <div className="lg:w-3/5 p-10 md:p-14 lg:p-16 bg-white relative">
                <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <input 
                        type="text" 
                        id="firstName"
                        className="peer w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 focus:outline-none focus:ring-0 focus:border-[#054E38] transition-all text-slate-800 placeholder-transparent font-medium"
                        placeholder="First Name"
                      />
                      <label htmlFor="firstName" className="absolute left-0 -top-3.5 text-xs font-bold tracking-widest uppercase text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-medium peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:tracking-widest peer-focus:text-[#054E38]">
                        First Name
                      </label>
                    </div>
                    
                    <div className="relative group">
                      <input 
                        type="text" 
                        id="lastName"
                        className="peer w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 focus:outline-none focus:ring-0 focus:border-[#054E38] transition-all text-slate-800 placeholder-transparent font-medium"
                        placeholder="Last Name"
                      />
                      <label htmlFor="lastName" className="absolute left-0 -top-3.5 text-xs font-bold tracking-widest uppercase text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-medium peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:tracking-widest peer-focus:text-[#054E38]">
                        Last Name
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <input 
                        type="email" 
                        id="email"
                        className="peer w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 focus:outline-none focus:ring-0 focus:border-[#054E38] transition-all text-slate-800 placeholder-transparent font-medium"
                        placeholder="Email Address"
                      />
                      <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs font-bold tracking-widest uppercase text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-medium peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:tracking-widest peer-focus:text-[#054E38]">
                        Email Address
                      </label>
                    </div>
                    
                    <div className="relative group">
                      <input 
                        type="tel" 
                        id="phone"
                        className="peer w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 focus:outline-none focus:ring-0 focus:border-[#054E38] transition-all text-slate-800 placeholder-transparent font-medium"
                        placeholder="Phone Number"
                      />
                      <label htmlFor="phone" className="absolute left-0 -top-3.5 text-xs font-bold tracking-widest uppercase text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-medium peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:tracking-widest peer-focus:text-[#054E38]">
                        Phone Number
                      </label>
                    </div>
                  </div>

                  <div className="relative group pt-4">
                    <p className="text-sm font-bold text-slate-700 mb-4 tracking-wide">I am interested in...</p>
                    <div className="flex flex-wrap gap-3">
                      {['Donations', 'Volunteering', 'Partnerships', 'General Inquiry'].map((topic) => (
                        <label key={topic} className="cursor-pointer">
                          <input type="radio" name="topic" className="peer sr-only" />
                          <div className="px-5 py-2.5 rounded-full border-2 border-slate-200 text-slate-600 font-medium text-sm transition-all hover:border-[#054E38]/30 peer-checked:border-[#054E38] peer-checked:bg-[#054E38] peer-checked:text-white">
                            {topic}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="relative group pt-6">
                    <textarea 
                      id="message"
                      rows={4}
                      className="peer w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 focus:outline-none focus:ring-0 focus:border-[#054E38] transition-all text-slate-800 placeholder-transparent resize-none font-medium"
                      placeholder="Your Message"
                    ></textarea>
                    <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs font-bold tracking-widest uppercase text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-medium peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:tracking-widest peer-focus:text-[#054E38]">
                      Your Message
                    </label>
                  </div>

                  <div className="pt-4">
                    <button className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#111] hover:bg-[#054E38] text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 hover:shadow-[0_10px_40px_rgba(5,78,56,0.3)] hover:-translate-y-1 overflow-hidden">
                      <span className="relative z-10 text-[15px] tracking-wide">Send Message</span>
                      <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease-out] z-0" />
                    </button>
                  </div>
                </form>
              </div>
              
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
};
