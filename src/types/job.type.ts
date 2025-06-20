export type UnconvertedJob = {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
  };
  
  export type Job = {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: Role;
    level: Level;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
  };
  
  export type Level = "Junior" | "Midweight" | "Senior";
  export type Role = "Backend" | "Frontend" | "Fullstack";
  export type Language = "Python" | "Ruby" | "JavaScript" | "HTML" | "CSS";
  export type Tool = "React" | "Sass" | "Vue" | "Django" | "RoR";
  
  const validRoles: Role[] = ["Backend", "Frontend", "Fullstack"];
  
  const convertToRol = (rol: string): Role =>
    validRoles.includes(rol as Role) ? (rol as Role) : "Backend";
  
  const validLevels: Level[] = ["Junior", "Midweight", "Senior"];
  
  const converToLevel = (level: string): Level =>
    validLevels.includes(level as Level) ? (level as Level) : "Junior";
  
  const validLanguages = ["Python", "Ruby", "JavaScript", "HTML", "CSS"];
  
  const convertToLanguage = (language: string): Language =>
    validLanguages.includes(language as Language)
      ? (language as Language)
      : "Python";
  
  const validTools = ["React", "Sass", "Vue", "Django", "RoR"];
  
  const convertToTool = (tool: string): Tool =>
    validTools.includes(tool as Tool) ? (tool as Tool) : "React";
  
  export const convertToJob = (jobsList: UnconvertedJob[]): Job[] => {
    let jobs: Job[] = jobsList.map((uJob) => {
      const languagesConverted = uJob.languages.map((language) =>
        convertToLanguage(language)
      );
  
      const toolsConverted = uJob.tools.map((tool) => convertToTool(tool));
  
      return {
        id: uJob.id,
        company: uJob.company,
        logo: uJob.logo,
        new: uJob.new,
        featured: uJob.featured,
        position: uJob.position,
        role: convertToRol(uJob.role),
        level: converToLevel(uJob.level),
        postedAt: uJob.postedAt,
        contract: uJob.contract,
        location: uJob.location,
        languages: languagesConverted,
        tools: toolsConverted,
      };
    });
  
    return jobs;
  };
  