import { sourceDocuments } from "@/data/sources";
import type { SourceDocument } from "@/data/types";

const statusStyles: Record<SourceDocument["status"], string> = {
  draft: "border-signal-amber/35 bg-signal-amber/10 text-signal-amber",
  issued: "border-signal-green/35 bg-signal-green/10 text-signal-green",
  "for-review": "border-purple-300/40 bg-purple-400/10 text-purple-200",
  superseded: "border-slate-400/35 bg-slate-400/10 text-slate-300",
  working: "border-signal-cyan/35 bg-signal-cyan/10 text-signal-cyan"
};

const sourceTypesCount = new Set(sourceDocuments.map((document) => document.type)).size;
const statusBreakdown = sourceDocuments.reduce<Record<SourceDocument["status"], number>>(
  (acc, document) => {
    acc[document.status] += 1;
    return acc;
  },
  {
    draft: 0,
    issued: 0,
    "for-review": 0,
    superseded: 0,
    working: 0
  }
);

export function SourceRegistry() {
  return (
    <section className="rounded-lg border border-white/10 bg-command-800/55 p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Source Registry</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Document Intelligence</h2>
        </div>
        <span className="text-sm text-slate-400">Single source reference layer</span>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <div className="rounded border border-white/10 bg-command-950/55 p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Total Documents</p>
          <p className="mt-2 text-2xl font-semibold text-white">{sourceDocuments.length}</p>
        </div>
        <div className="rounded border border-white/10 bg-command-950/55 p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Source Types</p>
          <p className="mt-2 text-2xl font-semibold text-white">{sourceTypesCount}</p>
        </div>
        <div className="rounded border border-white/10 bg-command-950/55 p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Status Breakdown</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {Object.entries(statusBreakdown)
              .filter(([, count]) => count > 0)
              .map(([status, count]) => (
                <span key={status} className={`rounded border px-2.5 py-1 text-xs ${statusStyles[status as SourceDocument["status"]]}`}>
                  {status}: {count}
                </span>
              ))}
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-2">
        {sourceDocuments.map((document) => (
          <article key={document.id} className="rounded-lg border border-white/10 bg-command-950/55 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{document.type}</p>
                <h3 className="mt-2 text-base font-semibold text-white">{document.title}</h3>
              </div>
              <span className={`rounded border px-2.5 py-1 text-xs font-semibold ${statusStyles[document.status]}`}>
                {document.status}
              </span>
            </div>

            <p className="mt-3 break-all rounded border border-white/10 bg-white/[0.035] px-3 py-2 text-xs text-slate-300">
              {document.fileName}
            </p>

            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {document.version ? (
                <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-slate-300">
                  {document.version}
                </span>
              ) : null}
              {document.date ? (
                <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-slate-300">
                  {document.date}
                </span>
              ) : null}
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-300">{document.description}</p>

            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Used For</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {document.usedFor.map((item) => (
                  <span key={item} className="rounded border border-signal-cyan/20 bg-signal-cyan/10 px-2.5 py-1 text-xs text-signal-cyan">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Related Systems</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {document.relatedSystemKeys.map((system) => (
                  <span key={system} className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                    {system}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
