import { Scale, Workflow, ScanEye, Sparkles, Activity, Cable, Zap, Bot, LayoutDashboard, type LucideIcon } from "lucide-react";

// ─── Solution Module Data ─────────────────────────────────────
export interface SolutionModule {
  moduleId: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  /** Path to a video in /public/videos/ — if present the card opens a modal */
  videoSrc?: string;
}

/**
 * Modules WITH a videoSrc come first so they render at the top of the grid.
 * Modules without a video are shown with a "Coming Soon / Próximamente" badge.
 *
 * Video mapping:
 *   AdversaCut.mp4   → MOD_01 (Revisión Legal Automática)
 *   ContactSales.mp4 → MOD_07 (Automatización de Ventas)
 *   Nose.mp4         → MOD_08 (Agente de Atención)
 *   DataReport.mp4   → MOD_09 (Reportes Automáticos)
 */
export const SOLUTION_MODULES: SolutionModule[] = [
  // ── Modules with video ──────────────────────────────────────
  {
    moduleId: "MOD_01",
    icon: Scale,
    title: "Contractual Viability",
    description:
      "Automated analysis of contractual obligations and risk exposure. Integrates with legal repositories to flag clauses, deadlines, and compliance gaps before they become liabilities.",
    tags: ["Agentes IA", "Legal Compliance", "Auditoría"],
    videoSrc: "/videos/AdversaCut.mp4",
  },
  {
    moduleId: "MOD_07",
    icon: Zap,
    title: "Sales Automation",
    description: "",
    tags: ["Agentes de Venta", "CRM", "Orquestación"],
    videoSrc: "/videos/ContactSales.mp4",
  },
  {
    moduleId: "MOD_08",
    icon: Bot,
    title: "Customer Service Agent",
    description: "",
    tags: ["Agentes Conversacionales", "WhatsApp", "Atención Cliente"],
    videoSrc: "/videos/Nose.mp4",
  },
  {
    moduleId: "MOD_09",
    icon: LayoutDashboard,
    title: "Automatic Reports",
    description: "",
    tags: ["Agentes Analíticos", "BI", "Reportes Automáticos"],
    videoSrc: "/videos/DataReport.mp4",
  },

  // ── Modules without video (coming soon) ─────────────────────
  {
    moduleId: "MOD_02",
    icon: Workflow,
    title: "Workflow Orchestration",
    description:
      "Design, deploy, and monitor end-to-end process flows across departments. Connects disparate systems into a single continuous pipeline with full observability.",
    tags: ["Orquestación de Procesos", "Integración", "Pipelines"],
  },
  {
    moduleId: "MOD_03",
    icon: ScanEye,
    title: "Compliance Monitor",
    description:
      "Real-time regulatory monitoring with automated alerts and audit trail generation. Ensures your operations align with industry standards and internal policy frameworks.",
    tags: ["Compliance IA", "Seguridad", "Auditoría"],
  },
  {
    moduleId: "MOD_04",
    icon: Sparkles,
    title: "Document Intelligence",
    description:
      "Extract, classify, and route structured data from unstructured documents. Supports invoices, contracts, reports, and custom document schemas at enterprise scale.",
    tags: ["Agentes de Lectura", "Document AI", "Extracción"],
  },
  {
    moduleId: "MOD_05",
    icon: Activity,
    title: "Process Analytics",
    description:
      "Measure, benchmark, and optimize every automated workflow. Dashboards surface bottlenecks, SLA adherence, and throughput metrics in real time.",
    tags: ["Analítica de Agentes", "KPIs", "Optimización"],
  },
  {
    moduleId: "MOD_06",
    icon: Cable,
    title: "Integration Framework",
    description:
      "Universal connector layer for ERP, CRM, cloud platforms, and proprietary systems. Build robust integration architectures with pre-built adapters and a low-code interface.",
    tags: ["ERP/CRM Integradores", "APIs", "Orquestador"],
  },
];
