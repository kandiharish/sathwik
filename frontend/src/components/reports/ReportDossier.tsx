import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Images, ArrowUpRight } from 'lucide-react';
import { Img } from '../common/Img';
import { tones, toneFor } from '../../lib/tones';
import type { ProjectReport } from '../../data/reports';

const EASE = [0.22, 1, 0.36, 1] as const;

interface Props {
  report: ProjectReport;
  number: number;
  onPhotos: () => void;
  delay?: number;
}

/**
 * A project report presented as a bound dossier: photo cover with a coloured
 * spine, a stack of pages behind it that fans out on hover, and quiet actions.
 */
export const ReportDossier = ({ report, number, onPhotos, delay = 0 }: Props) => {
  const tone = tones[toneFor(report.category)];
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className="group flex flex-col"
    >
      {/* Dossier */}
      <div className="relative mb-6 mr-3 mt-2 sm:mx-2 sm:mb-7 sm:mt-3">
        {/* Page stack */}
        <span
          aria-hidden="true"
          className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl border border-line bg-white transition-transform duration-500 ease-out group-hover:translate-x-3.5 group-hover:translate-y-3"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 translate-x-1 translate-y-1 rounded-2xl border border-line bg-[#FBFBFD] transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:translate-y-1.5"
        />

        {/* Cover */}
        <a
          href={report.pdf}
          target="_blank"
          rel="noopener"
          aria-label={`Open the ${report.title} report (PDF, ${report.pages} pages)`}
          className="relative block overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-soft)] transition-[translate,box-shadow] duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[var(--shadow-lift)]"
        >
          <span className={`absolute inset-y-0 left-0 z-10 w-1.5 ${tone.bg}`} aria-hidden="true" />
          <div className="relative aspect-[5/4] overflow-hidden bg-sand sm:aspect-[4/3]">
            <Img
              src={report.cover}
              alt={report.title}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 to-transparent" aria-hidden="true" />
            <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/92 px-3 py-1 text-[11px] font-semibold text-ink backdrop-blur-sm">
              <FileText className="h-3 w-3 text-secondary" aria-hidden="true" />
              {report.pages}-page report
            </span>
            <span className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 text-[12px] font-medium text-white">
              <Images className="h-3.5 w-3.5" aria-hidden="true" />
              {report.photos.length} photographs
            </span>
          </div>
          <div className="border-t border-line px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
            <div className="mb-3 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.12em]">
              <span className={tone.text}>{report.category}</span>
              <span className="tabular-nums text-ink-muted">Report No. {String(number).padStart(2, '0')}</span>
            </div>
            <h3 className="font-serif text-[1.25rem] font-medium leading-snug text-ink sm:text-[1.35rem]">{report.title}</h3>
            {(report.location || report.partner) && (
              <p className="mt-2 text-[14px] text-ink-muted">
                {[report.location, report.state].filter(Boolean).join(', ')}
                {report.location && report.partner && <span className="mx-1.5 text-line">|</span>}
                {report.partner && <>With {report.partner}</>}
              </p>
            )}
          </div>
        </a>
      </div>

      {/* Actions */}
      <div className="mt-auto grid grid-cols-2 gap-2 pr-3 sm:mx-2 sm:flex sm:flex-wrap sm:items-center sm:pr-0">
        <a href={report.pdf} target="_blank" rel="noopener" className="btn btn-primary !px-4 !py-2.5 !text-[13px] sm:!py-2">
          <FileText className="h-4 w-4" aria-hidden="true" />
          Read report
        </a>
        <button type="button" onClick={onPhotos} className="btn btn-outline !px-4 !py-2.5 !text-[13px] sm:!py-2">
          <Images className="h-4 w-4" aria-hidden="true" />
          View photos
        </button>
        <Link
          to={`/projects/${report.project}`}
          className="col-span-2 inline-flex items-center justify-center gap-1 py-1.5 text-[13px] font-semibold text-primary hover:underline sm:col-span-1 sm:ml-auto sm:py-0"
        >
          View project <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
};
