import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Quote } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { stories } from '../data/stories';
import { projects } from '../data/projects';

export const StoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const story = stories.find(s => s.slug === slug);

  if (!story) {
    return (
      <div className="min-h-screen pt-40 pb-20 flex flex-col items-center justify-center bg-[#FAFAF8]">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">Story Not Found</h1>
        <Link to="/stories" className="text-[#054E38] hover:underline font-medium flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Stories
        </Link>
      </div>
    );
  }

  const relatedProject = story.relatedProjectId ? projects.find(p => p.id === story.relatedProjectId) : null;

  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      <article>
        {/* HERO */}
        <section className="relative h-[60vh] md:h-[75vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={story.heroImage} 
              alt={story.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF8] via-transparent to-transparent" />
          </div>
          
          <Container className="relative z-10 w-full text-center mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link to="/stories" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 text-sm font-bold uppercase tracking-widest bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <ArrowLeft className="w-4 h-4" /> Back to Stories
              </Link>
              
              <div className="mb-4">
                <span className="text-amber-400 font-bold tracking-[0.2em] uppercase text-sm drop-shadow-md">
                  {story.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white max-w-4xl mx-auto leading-tight drop-shadow-lg">
                {story.title}
              </h1>
            </motion.div>
          </Container>
        </section>

        {/* CONTENT */}
        <section className="pb-24 -mt-10 relative z-20">
          <Container>
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-16 rounded-[2rem] shadow-[0_20px_40px_rgb(0,0,0,0.06)] border border-gray-100">
              
              <div className="prose prose-lg md:prose-xl prose-p:text-gray-600 prose-p:leading-relaxed mx-auto">
                <p className="text-2xl font-serif text-gray-900 leading-snug mb-10">
                  {story.situation}
                </p>
                
                <h3 className="text-[#054E38] font-bold text-sm tracking-widest uppercase mt-12 mb-4">The Challenge</h3>
                <p>{story.challenge}</p>

                <h3 className="text-[#054E38] font-bold text-sm tracking-widest uppercase mt-12 mb-4">The Action</h3>
                <p>{story.action}</p>
              </div>

              {/* QUOTE PULL-OUT */}
              <div className="my-16 relative">
                <div className="absolute -top-6 -left-6 text-[#054E38]/10">
                  <Quote className="w-24 h-24 rotate-180" />
                </div>
                <blockquote className="relative z-10 pl-8 md:pl-12 border-l-4 border-amber-400">
                  <p className="text-2xl md:text-3xl font-serif italic text-gray-900 leading-snug mb-6">
                    "{story.quote.text}"
                  </p>
                  <footer>
                    <div className="font-bold text-gray-900">{story.quote.author}</div>
                    <div className="text-sm font-bold uppercase tracking-wider text-gray-500">{story.quote.role}</div>
                  </footer>
                </blockquote>
              </div>

              <div className="prose prose-lg md:prose-xl prose-p:text-gray-600 prose-p:leading-relaxed mx-auto">
                <h3 className="text-[#054E38] font-bold text-sm tracking-widest uppercase mb-4">The Impact</h3>
                <p>{story.change}</p>
                <p>{story.impact}</p>
              </div>
              
              {/* RELATED LINKS */}
              {(relatedProject || story.relatedProgramId) && (
                <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <span className="text-sm font-bold tracking-widest uppercase text-gray-400">Explore Related</span>
                  <div className="flex gap-4">
                    {relatedProject && (
                      <Link 
                        to={`/projects/${relatedProject.slug}`}
                        className="text-sm font-bold text-[#054E38] hover:underline"
                      >
                        View Related Project
                      </Link>
                    )}
                    {story.relatedProgramId && (
                      <Link 
                        to="/programs" 
                        className="text-sm font-bold text-amber-600 hover:underline"
                      >
                        View Related Program
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          </Container>
        </section>
      </article>
    </div>
  );
};
