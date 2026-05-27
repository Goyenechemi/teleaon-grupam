import { Gavel, Network, ShieldCheck, FileSearch, BarChart3, Plug2, TrendingUp, MessageSquare, FileText, type LucideIcon } from "lucide-react";

// ─── Solution Module Data ─────────────────────────────────────
export interface SolutionModule {
  moduleId: string;
  version: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

export const SOLUTION_MODULES: SolutionModule[] = [
  {
    moduleId: "MOD_01",
    version: "VER_2.4.0",
    icon: Gavel,
    title: "Contractual Viability",
    description:
      "Automated analysis of contractual obligations and risk exposure. Integrates with legal repositories to flag clauses, deadlines, and compliance gaps before they become liabilities.",
    tags: ["Legal", "Risk", "Compliance"],
  },
  {
    moduleId: "MOD_02",
    version: "VER_1.9.2",
    icon: Network,
    title: "Workflow Orchestration",
    description:
      "Design, deploy, and monitor end-to-end process flows across departments. Connects disparate systems into a single continuous pipeline with full observability.",
    tags: ["Operations", "Integration", "Monitoring"],
  },
  {
    moduleId: "MOD_03",
    version: "VER_3.1.0",
    icon: ShieldCheck,
    title: "Compliance Monitor",
    description:
      "Real-time regulatory monitoring with automated alerts and audit trail generation. Ensures your operations align with industry standards and internal policy frameworks.",
    tags: ["Regulatory", "Audit", "Alerts"],
  },
  {
    moduleId: "MOD_04",
    version: "VER_2.0.5",
    icon: FileSearch,
    title: "Document Intelligence",
    description:
      "Extract, classify, and route structured data from unstructured documents. Supports invoices, contracts, reports, and custom document schemas at enterprise scale.",
    tags: ["AI", "OCR", "Data Extraction"],
  },
  {
    moduleId: "MOD_05",
    version: "VER_1.7.3",
    icon: BarChart3,
    title: "Process Analytics",
    description:
      "Measure, benchmark, and optimize every automated workflow. Dashboards surface bottlenecks, SLA adherence, and throughput metrics in real time.",
    tags: ["Analytics", "KPIs", "Optimization"],
  },
  {
    moduleId: "MOD_06",
    version: "VER_2.2.1",
    icon: Plug2,
    title: "Integration Framework",
    description:
      "Universal connector layer for ERP, CRM, cloud platforms, and proprietary systems. Build robust integration architectures with pre-built adapters and a low-code interface.",
    tags: ["API", "ERP", "Cloud"],
  },
  {
    moduleId: "MOD_07",
    version: "VER_1.4.0",
    icon: TrendingUp,
    title: "Sales Automation",
    description: "",
    tags: ["Ventas", "Pipeline", "CRM"],
  },
  {
    moduleId: "MOD_08",
    version: "VER_3.0.1",
    icon: MessageSquare,
    title: "Customer Service Agent",
    description: "",
    tags: ["CS", "WhatsApp", "IA"],
  },
  {
    moduleId: "MOD_09",
    version: "VER_2.1.0",
    icon: FileText,
    title: "Automatic Reports",
    description: "",
    tags: ["Reportes", "Dashboard", "Automatización"],
  },
];
