export type Stack = "backend" | "frontend";

export type Project = {
  id: number;
  stack: Stack;
  title: string;
  image: string;
  description: string;
  projectLink: string;
  sourceCodeLink: string;
  keys: Array<string>;
};
