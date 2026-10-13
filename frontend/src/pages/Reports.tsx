import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Images, ArrowRight, CheckCircle2, Download } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ReportDossier } from '../components/reports/ReportDossier';
import { ReportRail } from '../components/reports/ReportRail';
import { Lightbox, type LightboxImage } from '../components/ui/Lightbox';
import { Img } from '../components/common/Img';
import { reports, type ProjectReport } from '../data/reports';
import { tones, toneFor } from '../lib/tones';

const EASE = [0.22, 1, 0.36, 1] as const;
const ALL = 'All reports';

const photosOf = (r: ProjectReport): LightboxImage[] =>
  r.photos.map((src, i) => ({ src, alt: `${r.title}, photo ${i + 1}`, caption: `${r.title} · ${i + 1} of ${r.photos.length}` }));

const totalPages = reports.reduce((sum, r) => sum + r.pages, 0);
const totalPhotos = reports.reduce((sum, r) => sum + r.photos.length, 0);

export const Reports = () => {
  const [category, setCategory] = useState(ALL);
  const [viewer, setViewer] = useState<{ images: LightboxImage[]; index: number } | null>(null);

  const featured = reports[0];
  const rest = reports.slice(1);
  const categories = useMemo(() => [ALL, ...Array.from(new Set(rest.map((r) => r.category)))], [rest]);
  const shown = category === ALL ? rest : rest.filter((r) => r.category === category);
  const tone = tones[toneFor(featured.category)];
  const openPhotos = (r: ProjectReport, index = 0) => setViewer({ images: photosOf(r), index });

  return (
    <>
      <PageHero
        eyebrow="Documentation"
        title={<>Project <em>Reports</em></>}
        description="Photographic reports from our work on the ground, documented from the first site visit to the final handover. Browse the highlights here or open any full report."
      >
        <div className="grid w-full max-w-lg grid-cols-3 gap-4 border-t border-line pt-6 sm:gap-10">
          {[
            [reports.length, 'Reports'],
            [totalPages, 'Pages of documentation'],
            [totalPhotos, 'Field photographs'],
          ].map(([n, label]) => (
            <div key={label}>
              <p className="font-serif text-[2rem] font-medium leading-none tracking-[-0.02em] text-ink tabular-nums sm:text-4xl">{n}</p>
              <p className="mt-2 text-[12px] leading-snug text-ink-muted sm:text-[13px]">{label}</p>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Featured report */}
      <section className="section bg-white">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Photo spread */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: EASE }}
              className="grid grid-cols-6 grid-rows-2 gap-3 lg:col-span-7"
            >
              {[featured.cover, featured.photos[16] ?? featured.photos[1], featured.photos[21] ?? featured.photos[2]].filter(Boolean).map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => openPhotos(featured, Math.max(0, featured.photos.indexOf(src)))}
                  aria-label={`View photo ${i + 1} from ${featured.title}`}
                  className={`group relative overflow-hidden rounded-2xl bg-sand ${
                    i === 0 ? 'col-span-4 row-span-2 aspect-[4/5]' : 'col-span-2 min-h-0 w-full'
                  }`}
                >
                  <Img
                    src={src}
                    alt=""
                    sizes={i === 0 ? '(max-width: 1024px) 66vw, 38vw' : '(max-width: 1024px) 33vw, 19vw'}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  />
                </button>
              ))}
            </motion.div>

            {/* Story */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <span className="eyebrow mb-4">Featured report</span>
              <p className={`mb-3 text-[12px] font-semibold uppercase tracking-[0.12em] ${tone.text}`}>
                {featured.category}
                {featured.period && <span className="text-ink-muted"> · {featured.period}</span>}
              </p>
              <h2 className="font-serif text-[2rem] font-medium leading-[1.12] tracking-[-0.02em] text-ink md:text-[2.5rem]">
                {featured.title}
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-muted">{featured.summary}</p>

              <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                {featured.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-[14px] leading-snug text-ink">
                    <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${tone.text}`} aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-9 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center">
                <a href={featured.pdf} target="_blank" rel="noopener" className="btn btn-primary">
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  Read full report
                </a>
                <button type="button" onClick={() => openPhotos(featured)} className="btn btn-outline">
                  <Images className="h-4 w-4" aria-hidden="true" />
                  {featured.photos.length} photos
                </button>
                <a href={featured.pdf} download className="col-span-2 inline-flex items-center justify-center gap-1.5 px-2 py-1 text-[14px] font-semibold text-primary hover:underline sm:col-span-1">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download
                </a>
              </div>
              <p className="mt-4 inline-flex items-center gap-2 text-[13px] text-ink-muted">
                <FileText className="h-3.5 w-3.5 text-secondary" aria-hidden="true" />
                {featured.pages}-page photographic report
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Archive */}
      <section className="section bg-sand">
        <Container>
          <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="The archive"
              title={<>Reports from the <em>field</em></>}
              alignment="left"
              className="!mb-0"
            />
            <div role="group" aria-label="Filter reports by category" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:max-w-[62%] md:flex-wrap md:justify-end md:overflow-visible md:px-0">
              {categories.map((c) => {
                const active = c === category;
                return (
                  <button
                    key={c}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setCategory(c)}
                    className={`shrink-0 rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                      active ? 'border-primary bg-primary text-white' : 'border-line bg-white text-ink-muted hover:border-primary/40 hover:text-primary'
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>

          <ReportRail key={category} label="Project reports">
            {shown.map((r, i) => (
              <ReportDossier
                key={r.slug}
                report={r}
                number={reports.indexOf(r) + 1}
                onPhotos={() => openPhotos(r)}
                delay={(i % 3) * 0.08}
              />
            ))}
          </ReportRail>

          <div className="mt-16 flex flex-col items-center gap-3 text-center">
            <p className="text-[15px] text-ink-muted">Want to see how a project was delivered in detail?</p>
            <Link to="/projects" className="btn btn-outline">
              Explore all projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      <Lightbox
        images={viewer?.images ?? []}
        index={viewer ? viewer.index : null}
        onClose={() => setViewer(null)}
        onIndexChange={(index) => setViewer((v) => (v ? { ...v, index } : v))}
      />
    </>
  );
};
