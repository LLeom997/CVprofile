
export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'CAD' | 'CAE' | 'Methods' | 'Soft Skills';
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  grade?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  linkedin: string;
}
