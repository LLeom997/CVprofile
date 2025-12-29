import React from "react";
import { Settings, Cpu, Package, Ruler, PenTool, Database, Globe, UserCheck } from "lucide-react";
import { Experience, Skill, Education, ContactInfo } from "./types";

export const CONTACT_DATA: ContactInfo = {
  email: "maitreyanarendra1997@gmail.com",
  phone: "+91 940 447 9387",
  whatsapp: "+91 703 036 1627",
  location: "Pune, India",
  linkedin: "https://linkedin.com/in/maitreyagokhale"
};

export const SUMMARY: string = `
Mechanical Design Engineer with more than 5 years of experience delivering production ready chassis, packaging, and mechanical systems across consumer appliances and industrial machinery. Strong expertise in new product development, DFMEA, GD and T, CAE validation, tolerance analysis, and design for manufacturability. Proven history of cost reduction, resolving late stage design failures, compressing validation timelines, and owning systems end to end from concept through design validation, supplier alignment, and SOP execution.
`;

export const EXPERIENCES: Experience[] = [
  {
    company: "Whirlpool of India Pvt. Ltd.",
    location: "Pune",
    role: "Senior Engineer – New Product Development (Platform Owner – Chassis and Packaging)",
    period: "July 2023 – Present",
    highlights: [
      "Platform owner for chassis and packaging systems across high volume cooking appliances including Cooktop, Ultra US, Chaplain, M63, Q Plus Downdraft.",
      "Prevented approximately 3 million USD annual cost addition by enabling simulation driven reuse and revalidation of legacy packaging designs at million unit scale.",
      "Led VAVE and cost recovery efforts delivering approximately 300 thousand USD cost reduction and 300 thousand USD cost avoidance without compromising reliability.",
      "Compressed design validation failure resolution timelines from 6 months to 3 months using ANSYS, HyperMesh, and accelerated testing iterations.",
      "Implemented ventilation optimization and steam clean architecture to resolve thermal and condensation risks while preserving assembly and cost targets.",
      "Drove multi team design alignment across global R and D, sourcing, manufacturing, quality, and supplier groups to release production ready hardware."
    ]
  },
  {
    company: "Whirlpool of India Pvt. Ltd.",
    location: "Pune",
    role: "CAE Engineer",
    period: "September 2022 – July 2023",
    highlights: [
      "Performed structural CAE for refrigeration chassis subsystems, guiding structural tradeoffs and early stage design direction.",
      "Developed hyper elastic silicone rubber material models to improve CAE correlation accuracy.",
      "Evaluated failure modes and what if scenarios to de risk structural performance prior to physical prototype builds.",
      "Embedded CAE feedback into tolerance, thickness, fastener, weld, and interface decisions to stabilize release readiness."
    ]
  },
  {
    company: "Chinmay Infra",
    location: "Pune",
    role: "Machine Integration Specialist",
    period: "2021 – 2022",
    highlights: [
      "Designed automated hydraulic machinery including structural frames, system enclosures, and integration interfaces.",
      "Delivered a 150 ton hydraulic press at 15 lakh INR cost versus 25 lakh INR expected, achieving approximately 40 percent reduction through material optimization.",
      "Developed system architecture using 1D hydraulic simulations in Automation Studio to optimize flow, cycle timing, and pressure performance.",
      "Coordinated prototyping, validation, assembly sequencing, and manufacturing handoff enabling scalable deployment."
    ]
  },
  {
    company: "Aditya Hydrotech",
    location: "Sangli",
    role: "Associate Engineer",
    period: "2019 – 2021",
    highlights: [
      "Designed mechanical components for vertical turbine pumps ranging from 250 HP to 2500 HP used for municipal water applications.",
      "Created production ready drawings using GD and T supporting supplier fabrication and inspection.",
      "Performed structural validation using ANSYS and supported issue resolution during manufacturing, assembly, and field installation.",
      "Implemented pattern inventory and color identification system improving casting retrieval and shop execution."
    ]
  },
  {
    company: "Rucha Engineering",
    location: "Aurangabad",
    role: "Summer Intern",
    period: "June 2019 – September 2019",
    highlights: [
      "Supported development of automated material handling robots for casting and sheet metal movement.",
      "Reviewed design layouts, assisted PLM documentation, and created fixture and robotic cell support documentation.",
      "Conducted time and motion studies across six manufacturing plants supplying Bajaj Automotive."
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: "Creo Parametric", level: 95, category: "CAD" },
  { name: "SolidWorks", level: 90, category: "CAD" },
  { name: "NX", level: 85, category: "CAD" },
  { name: "CATIA", level: 80, category: "CAD" },

  { name: "ANSYS Workbench", level: 92, category: "CAE" },
  { name: "HyperMesh", level: 88, category: "CAE" },
  { name: "LS DYNA", level: 70, category: "CAE" },

  { name: "DFMEA", level: 95, category: "Methods" },
  { name: "GD and T", level: 90, category: "Methods" },
  { name: "Tolerance Stack Up", level: 85, category: "Methods" },
  { name: "Design for Manufacturability and Assembly", level: 88, category: "Methods" },
  { name: "VAVE and Cost Reduction", level: 92, category: "Methods" }
];

export const EDUCATION: Education[] = [
  {
    school: "Walchand College of Engineering",
    degree: "M.Tech in Design Engineering",
    period: "2021 – 2023"
  },
  {
    school: "Shivaji University",
    degree: "B.E. Mechanical Engineering",
    period: "2015 – 2019",
    grade: "First Class"
  }
];

export const LANGUAGES: string[] = [
  "Marathi (Native)",
  "Hindi (Native)",
  "English (Fluent)",
  "Japanese (Beginner)"
];

export const COMPETENCY_ICONS: Record<string, React.ReactNode> = {
  "Chassis and Packaging": <Package className="w-6 h-6 text-amber-500" />,
  "Structural Analysis": <Cpu className="w-6 h-6 text-amber-500" />,
  "New Product Development": <Settings className="w-6 h-6 text-amber-500" />,
  "Cost and Value Engineering": <Database className="w-6 h-6 text-amber-500" />,
  "Manufacturing and DFM": <Ruler className="w-6 h-6 text-amber-500" />,
  "Systems Integration": <PenTool className="w-6 h-6 text-amber-500" />,
  "Thermal Architecture": <Globe className="w-6 h-6 text-amber-500" />,
  "Technical Leadership": <UserCheck className="w-6 h-6 text-amber-500" />
};
