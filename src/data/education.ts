export interface Education {
  year: string;
  degree: string;
  institution: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
  description?: string;
  location?: string;
}

export const educationData: Education[] = [];
