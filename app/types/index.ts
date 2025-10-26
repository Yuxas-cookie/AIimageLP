export interface Testimonial {
  name: string;
  achievement: string;
  text: string;
}

export interface CurriculumItem {
  title: string;
  description: string;
}

export interface Problem {
  text: string;
}

export interface Strength {
  title: string;
  items?: string[];
  description?: string;
}
