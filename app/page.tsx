import Link from "next/link";
import { ReturnTable } from "@/components/return-table";
import { audit, returns } from "@/lib/data";

const reviewRoutes = [
  {
    href: "/operations",
    label: "Operations queue",
    copy: "Review cases by operational state and move work through the return lifecycle.",
  },
  {
    href: "/insights",
    label: "Risk & insights",
    copy: "Inspect return exposure, refund patterns and the cases that deserve manual attention.",
  },
  {
    href: "/policies",
    label: "Policy engine",
    copy: "Keep eligibility and disposition rules explicit instead of burying them inside UI conditions.",
  },
];

export default function Page() {
  const open = returns.filter((item) => !["refunded", "rejected"].includes(item.status));
  const liability = open.reduce((sum, item) => sum + item.refundAmount, 0);
  const restockable = returns.filter((item) => item.restockable).length;
  const manualReview = open.filter((item) => item.riskScore >= 70).length;
  const restockRate = Math.round((restockable / returns.length) * 100);

  const kpis = [
    {
      label: "Open cases",
      value: String(open.length),
      detail: `${manualReview} high-risk case${manualReview === 1 ? "" : "s"} need manual review`,
    },
    {
      label: "Refund liability",
      value: `${liability.toLocaleString()} MAD`,
      detail: "Exposure across active cases",
    },
    {
      label: "Restockable",
      value: `${restockRate}%`,
      detail: `${restockable} cases can recover inventory`,
    },
    {
      label: "Median resolution",
      value: "1.8d",
      detail: "Seeded operational benchmark",
    },
  ];

  return (
    <main>
      <section className="hero-panel">
        <div>
          <div className="section-title">Returns operations</div>
          <h1 className="hero-title">Protect margin without slowing customers down.</h1>
          <p className="muted hero-copy">
            A policy-aware RMA workspace for eligibility, refund exposure, restockability,
            warehouse disposition and auditable operational decisions.
          </p>
        </div>
        <div className="hero-proof">
          <span className="proof-dot" />
          <div>
            <strong>Operational case study</strong>
            <p className="muted">Typed rules · API boundaries · audit history</p>
          </div>
        </div>
      </section>

      <section className="grid-auto" style={{ marginBottom: 18 }}>
        {kpis.map((kpi) => (
          <article key={kpi.label} className="card kpi">
            <span className="muted">{kpi.label}</span>
            <strong>{kpi.value}</strong>
            <span className="muted">{kpi.detail}</span>
          </article>
        ))}
      </section>

      <section className="review-grid">
        {reviewRoutes.map((route) => (
          <Link key={route.href} href={route.href} className="card review-card">
            <span className="section-title">Review path</span>
            <strong>{route.label}</strong>
            <p className="muted">{route.copy}</p>
            <span className="review-link">Open view →</span>
          </Link>
        ))}
      </section>

      <section className="card queue-card">
        <div className="queue-heading">
          <div>
            <div className="section-title">RMA queue</div>
            <h2>Cases that still need a decision.</h2>
          </div>
          <p className="muted">
            Searchable seeded records with explicit status, refund and inventory state.
          </p>
        </div>
        <ReturnTable rows={returns} />
      </section>

      <section className="card audit-card">
        <div className="audit-heading">
          <div>
            <div className="section-title">Audit trail</div>
            <h2>Every operational change should leave context behind.</h2>
          </div>
          <span className="chip">{audit.length} seeded events</span>
        </div>

        <div className="audit-list">
          {audit.map((event) => (
            <article key={event.id} className="audit-event">
              <div className="muted">{event.at}</div>
              <div>
                <strong>{event.action}</strong> · {event.actor}
                <div className="muted">{event.note}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
