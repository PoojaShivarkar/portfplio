import { create } from 'zustand';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  links?: { label: string; url: string; restricted?: string }[];
  restricted?: string;
  role: string;
  tech: string[];
  contributions: string[];
  architecture?: string;
  problem?: string;
  impact?: string[];
  learnings?: string[];
  features?: { title: string; description: string }[];
  challengesSolutions?: { challenge: string; solution: string }[];
}

interface ProjectStore {
  selectedProject: Project | null;
  isOpen: boolean;
  openProject: (project: Project) => void;
  closeProject: () => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  selectedProject: null,
  isOpen: false,
  openProject: (project) => set({ selectedProject: project, isOpen: true }),
  closeProject: () => set({ selectedProject: null, isOpen: false }),
}));
