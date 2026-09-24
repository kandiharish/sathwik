import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { usePageMeta } from '../lib/seo';

export const NotFound = () => {
  usePageMeta({
    title: 'Page Not Found | SATHWIK',
    description: 'The page you are looking for could not be found.',
    path: '/404',
    noindex: true,
  });

  return (
    <section className="min-h-[80vh] flex items-center bg-sand pt-36 pb-20">
      <Container className="text-center">
        <p className="font-serif text-8xl md:text-9xl text-gold/60">404</p>
        <h1 className="mt-4 font-serif text-3xl md:text-4xl text-ink">This page could not be found</h1>
        <p className="mt-4 text-ink-muted">It may have moved. Try one of these instead.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn btn-primary">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back to Home
          </Link>
          <Link to="/programs" className="btn btn-outline">Our Programs</Link>
          <Link to="/contact" className="btn btn-outline">Contact Us</Link>
        </div>
      </Container>
    </section>
  );
};
