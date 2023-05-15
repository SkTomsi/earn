enum MainSkills {
  'Frontend',
  'Backend',
  'Blockchain',
  'Design',
  'Growth',
  'Content',
  'Community',
  'Other',
  'Mobile',
  'Fullstack',
}
enum SubSkills {
  'Javascript',
  'PHP',
  'Python',
  'Java',
  'C++',
  'C',
  'Ruby',
  'Go',
  'MySQL',
  'Postgres',
  'Redux',
  'MongoDB',
  'React',
  'Angular',
  'Vue',
  'Android',
  'iOS',
  'Rust',
  'Solidity',
  'Sway',
  'Move',
  'Flutter',
  'ReactNative',
  'Data Analytics',
  'Operations',
  'Admin',
  'Community Manager',
  'Discord Moderator',
  'Research',
  'Writing',
  'Video',
  'Social Media',
  'Business Development',
  'Digital Marketing',
  'Marketing',
  'UI/UX Design',
  'Graphic Design',
  'Illustration',
  'Game Design',
  'Presentation Design',
}
type Skills = {
  main: MainSkills[];
  sub: SubSkills[];
};
type SkillMap = {
  mainskill: MainSkills;
  color: string;
};
export { MainSkills, SubSkills };
export type { SkillMap, Skills };
