export interface Experience {
  year: string;
  company: string;
  companyUrl?: string;
  position: string;
  description?: string;
  location?: string;
}

export const experienceData: Experience[] = [
  {
    year: "Jan 2025 – Present",
    company: "Runway",
    companyUrl: "https://runwayml.com",
    position: "Member of Technical Staff",
    description:
      "Developing controllable, aesthetic video models. Authored <a href='https://www.youtube.com/watch?v=JW8PHlFD7HM' target='_blank' rel='noopener'>Act-2</a>, an omni-model for full-body conditioning and user control.",
    location: "Edinburgh, UK",
  },
  {
    year: "Dec 2022 – Jan 2025",
    company: "Synthesia",
    companyUrl: "https://www.synthesia.io/",
    position: "Research Engineer",
    description:
      "Led projects on novel-view synthesis, video diffusion and human avatars. Key work: <a href='https://synthesiaresearch.github.io/humanrf/' target='_blank' rel='noopener'>HumanRF</a> (SIGGRAPH ’23), non-rigid reconstruction pipelines and human avatar <a href='https://www.technologyreview.com/2024/06/24/1094170/synthesias-hyperrealistic-deepfakes-will-soon-have-full-bodies/' target='_blank' rel='noopener'>diffusion-based systems</a>.",
    location: "London/Edinburgh, UK",
  },
  {
    year: "Apr 2019 – Aug 2022",
    company: "Samsung Lab",
    position: "Research Engineer",
    description:
      "Worked on neural rendering and stereo magnification; developed one-shot head avatars for 3D priors and high-resolution portraits (e.g. StereoLayers, RoMe).",
    location: "Moscow, Russia",
  },
];
