import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Tag, Banknote, CheckCircle2 } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { projects } from '../data/projects';
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider';

export const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen pt-40 pb-20 flex flex-col items-center justify-center bg-[#FAFAF8]">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">Project Not Found</h1>
        <Link to="/projects" className="text-[#054E38] hover:underline font-medium flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>
      </div>
    );
  }

  const coverImage = project.images?.[0];

  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <Container className="relative z-10">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#054E38] transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to all projects
          </Link>
          
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center flex-wrap gap-3 mb-6"
            >
              <Link 
                to={`/projects?category=${encodeURIComponent(project.category)}`}
                className="px-3 py-1 bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors rounded-full text-xs font-bold uppercase tracking-widest"
              >
                {project.category}
              </Link>
              {project.investment && (
                <span className="px-3 py-1 bg-[#054E38]/10 text-[#054E38] rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <Banknote className="w-3.5 h-3.5" />
                  Investment: {project.investment}
                </span>
              )}
              {project.tags?.map(tag => (
                <span key={tag} className="px-3 py-1 border border-gray-200 text-gray-600 rounded-full text-xs font-bold uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-8"
            >
              {project.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl"
            >
              {project.summary}
            </motion.p>
          </div>
        </Container>
      </section>

      {/* 2. PROJECT INFORMATION & GALLERY HERO */}
      <section className="pb-20">
        <Container>
          {/* Main Hero Image */}
          {coverImage && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-gray-900 rounded-[2rem] overflow-hidden mb-16 shadow-[0_20px_40px_rgb(0,0,0,0.08)]"
            >
              <img 
                src={coverImage} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 blur-2xl scale-110"
                aria-hidden="true"
              />
              <img 
                src={coverImage} 
                alt={project.title} 
                className="relative z-10 w-full h-full object-contain p-4 md:p-8"
              />
            </motion.div>
          )}

          {/* Key Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
            {project.location && (
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1 flex items-center gap-1.5"><MapPin className="w-4 h-4"/> Location</div>
                <div className="font-semibold text-gray-900">{project.location}</div>
              </div>
            )}
            {project.state && (
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1 flex items-center gap-1.5"><MapPin className="w-4 h-4"/> State</div>
                <div className="font-semibold text-gray-900">{project.state}</div>
              </div>
            )}
            <div>
              <div className="text-sm text-gray-500 font-medium mb-1 flex items-center gap-1.5"><Tag className="w-4 h-4"/> Category</div>
              <Link to={`/projects?category=${encodeURIComponent(project.category)}`} className="font-semibold text-gray-900 hover:text-[#054E38] transition-colors">{project.category}</Link>
            </div>
            <div>
              <div className="text-sm text-gray-500 font-medium mb-1 flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4"/> Status</div>
              <div className="font-semibold text-[#054E38]">Completed</div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. CASE STUDY CONTENT */}
      <section className="py-16 md:py-24 bg-white border-y border-gray-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-24">
            
            {/* The Need */}
            {project.problem && (
              <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
                <div>
                  <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-amber-600 mb-2">01 &mdash; The Need</h2>
                  <h3 className="text-2xl font-serif font-bold text-gray-900">Identifying the Challenge</h3>
                </div>
                <div className="prose prose-lg text-gray-600 prose-p:leading-relaxed">
                  <p>{project.problem}</p>
                </div>
              </div>
            )}

            {/* The Response */}
            {project.response && (
              <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
                <div>
                  <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#054E38] mb-2">02 &mdash; The Response</h2>
                  <h3 className="text-2xl font-serif font-bold text-gray-900">Our Objective</h3>
                </div>
                <div className="prose prose-lg text-gray-600 prose-p:leading-relaxed">
                  <p>{project.response}</p>
                </div>
              </div>
            )}

            {/* Implementation & Impact */}
            {(project.implementation || project.impact) && (
              <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
                <div>
                  <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-600 mb-2">03 &mdash; Implementation & Impact</h2>
                  <h3 className="text-2xl font-serif font-bold text-gray-900">Creating Meaningful Change</h3>
                </div>
                <div className="prose prose-lg text-gray-600 prose-p:leading-relaxed">
                  {project.implementation && <p>{project.implementation}</p>}
                  {project.impact && (
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mt-6 mb-2">Key Outcomes:</h4>
                      <ul className="list-disc pl-5">
                        {project.impact.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>
        </Container>
      </section>

      {/* 3.5 BEFORE / AFTER COMPARISON */}
      {project.beforeImage && coverImage && (
        <section className="py-16 md:py-24 bg-[#FAFAF8]">
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#054E38] mb-4">Transformation</h2>
                <h3 className="text-3xl font-serif font-bold text-gray-900">Before & After</h3>
              </div>
              <BeforeAfterSlider 
                beforeImage={project.beforeImage} 
                afterImage={coverImage} 
              />
            </div>
          </Container>
        </section>
      )}

      {/* 4. EDITORIAL PROJECT GALLERY */}
      {project.images && project.images.length > 0 && (
        <section className="py-24 bg-[#111] text-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">04 &mdash; Project Gallery</h2>
              <p className="text-3xl md:text-4xl font-serif font-medium">Visual Documentation</p>
            </div>
            
            {/* Clean Grid Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {project.images.map((img, idx) => (
                <div 
                  key={idx} 
                  className="relative group overflow-hidden rounded-xl bg-gray-900 aspect-[4/3] shadow-lg border border-white/10"
                >
                  <img 
                    src={img} 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover opacity-30 blur-xl scale-110 transition-opacity duration-500 group-hover:opacity-50"
                    aria-hidden="true"
                  />
                  <img 
                    src={img} 
                    alt={`${project.title} gallery image ${idx + 1}`} 
                    loading="lazy"
                    className="relative z-10 w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none" />
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 5. CALL TO ACTION */}
      <section className="py-24 bg-gradient-to-br from-[#054E38] to-[#0a382a] text-white text-center">
        <Container>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Support Work Like This</h2>
          <p className="text-lg text-emerald-100 mb-10 max-w-2xl mx-auto">
            Your contribution helps us continue delivering impactful projects to the communities that need it most.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/donate" className="bg-[#F43F5E] hover:bg-[#E11D48] text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_4px_14px_rgba(244,63,94,0.39)] hover:shadow-[0_6px_20px_rgba(244,63,94,0.23)] hover:-translate-y-0.5">
              Make a Donation
            </Link>
            <Link to="/projects" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all backdrop-blur-sm">
              Explore More Projects
            </Link>
          </div>
        </Container>
      </section>

    </div>
  );
};
