export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Taras Khakhulin",
  title: "Member of Technical Staff, Research",
  institution: "Runway",
  // Note that links work in the description
  description: `
I’m a <strong>Member of Technical Staff (Research)</strong> at <a href='https://runwayml.com'>Runway</a> where I build the next generation of <em>controllable, aesthetic video models</em>. I authored <strong>Act-2</strong> – the first publicly available omni-model that enables full-body precise control for motion capture.

Before joining Runway I spent 2+ years at <a href='https://www.synthesia.io/'>Synthesia</a> working on <strong>novel-view synthesis, human reconstruction and video diffusion</strong>, including <em>HumanRF</em> (SIGGRAPH ’23) with high-fidelity neural radiance fields for humans in motion.

During my Ph.D. studies at Skoltech I worked as a researcher at Samsung Lab, bringing neural-rendering technology for view synthesis and one-shot animation to real-world mobile and XR devices. During my studies I contributed to <strong>3D representations, image synthesis and human avatars</strong>.

Prior to that, in my master’s I investigated reinforcement-learning approaches for discrete optimisation, and even earlier I was part of the <a href='https://github.com/deepmipt/DeepPavlov'>DeepPavlov</a> project where we developed robust word representations for noisy texts using context-aware language models.
`,
  email: "t.khakhulin@gmail.com",
  imageUrl: "/images/website-taras.jpg",
  googleScholarUrl: "https://scholar.google.ru/citations?user=D3OF4rYAAAAJ",
  githubUsername: "khakhulin",
  linkedinUsername: "taras-khakhulin",
  twitterUsername: "tkhakhulin",
  cvUrl: "/Taras_KhakhulinCV.pdf",
  institutionUrl: "https://runwayml.com",
  secretDescription: "I synthesize things that people currently cannot.",
};
