export interface Module {
  id: string;
  title: string;
  description: string;
  difficulty: 1 | 2 | 3; // 1: Basic, 2: Intermediate, 3: Advanced
  duration: string;
  skillPoints: number;
  prerequisites: string[];
  icon: string;
  status: 'locked' | 'available' | 'in-progress' | 'completed';
  progress: number;
}

export interface LearningPath {
  id: string;
  title: string;
  modules: Module[];
}