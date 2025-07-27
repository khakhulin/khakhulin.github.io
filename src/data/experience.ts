export interface Experience {
  year: string;
  company: string;
  position: string;
  description?: string;
  location?: string;
}

export const experienceData: Experience[] = [
  {
    year: "Jan 2025 – Present",
    company: "Runway",
    position: "Member of Technical Staff, Research",
    description:
      "Developing controllable, aesthetic video models. Authored Act-2, an omni-model for full-body conditioning and user control.",
    location: "Edinburgh, UK",
  },
  {
    year: "Dec 2022 – Jan 2025",
    company: "Synthesia",
    position: "Research Engineer",
    description:
      "Led projects on novel-view synthesis, video diffusion and human avatars (HumanRF, Non-rigid reconstruction, video-diffusion).",
    location: "London/Edinburgh, UK",
  },
  {
    year: "Apr 2019 – Aug 2022",
    company: "Samsung Lab",
    position: "Research Engineer",
    description:
      "Worked on neural rendering and stereo magnification; Developed new one-shot head avatars for 3D priors and high-resolution portraits.",
    location: "Moscow, Russia",
  },
];
