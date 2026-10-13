import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeading } from './SectionHeading';
import { ButtonLink } from './Button';
import { ReportDossier } from './ReportDossier';
import { ReportRail } from './ReportRail';
import { Lightbox, type LightboxImage } from './Lightbox';
import { reports } from '../../data/reports';

/** Home-page band: three project reports as dossiers, linking to the full archive. */
export const ReportsTeaser = () => {
  const [viewer, setViewer] = useState<{ images: LightboxImage[]; index: number } | null>(null);
  const picks = reports.slice(0, 3);

  return (
    <section className="section bg-white">
      <Container>
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Documented on the ground"
            title={<>Project <em>Reports</em></>}
            description="Every project is photographed from the first site visit to the final handover. Open a report to see the work in full."
            alignment="left"
            className="!mb-0"
          />
          <ButtonLink to="/reports" variant="outline" className="w-max shrink-0">
            All {reports.length} reports <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>

        <ReportRail label="Project reports">
          {picks.map((r, i) => (
            <ReportDossier
              key={r.slug}
              report={r}
              number={i + 1}
              delay={i * 0.08}
              onPhotos={() =>
                setViewer({
                  index: 0,
                  images: r.photos.map((src, n) => ({ src, alt: `${r.title}, photo ${n + 1}`, caption: `${r.title} · ${n + 1} of ${r.photos.length}` })),
                })
              }
            />
          ))}
        </ReportRail>
      </Container>

      <Lightbox
        images={viewer?.images ?? []}
        index={viewer ? viewer.index : null}
        onClose={() => setViewer(null)}
        onIndexChange={(index) => setViewer((v) => (v ? { ...v, index } : v))}
      />
    </section>
  );
};
