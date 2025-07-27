export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  videoUrl?: string; // Added for hover effects
  award?: string;
  projectUrl?: string;
  otherLinks?: Array<{ name: string; url: string }>;
}

export const publicationData: Publication[] = [
  {
    year: "2023",
    conference: "ACM ToG, SIGGRAPH",
    title: "HumanRF: High-Fidelity Neural Radiance Fields for Humans in Motion",
    authors: "Mustafa Işık, Martin Rünz, Markos Georgopoulos, Taras Khakhulin, Jonathan Starck, Lourdes Agapito, Matthias Nießner",
    paperUrl: "https://arxiv.org/abs/2305.06356",
    codeUrl: "https://github.com/synthesiaresearch/humanrf",
    projectUrl: "https://synthesiaresearch.github.io/humanrf/",
    imageUrl: "/images/humanrf_cover.png",
    videoUrl: "/videos/humanrf_trimmed.mp4",
    tldr: "Introduced high-resolution dataset of human performances to speed up development in avatars. Also, we demonstrated ability to reconstruct large scenes with temporal factorization for 4D NeRFs."
  },
  {
    year: "2023",
    conference: "WACV",
    title: "Self-improving Multiplane-to-layer Images for Novel View Synthesis",
    authors: "Pavel Solovev*, Taras Khakhulin*, Denis Korzhenkov*",
    paperUrl: "http://arxiv.org/abs/2210.01602",
    codeUrl: "https://github.com/SamsungLabs/MLI",
    projectUrl: "https://samsunglabs.github.io/MLI/",
    imageUrl: "/images/shot_simpli.jpg",
    videoUrl: "/videos/simpli.mp4",
    tldr: "Create the most efficient renderable representation for novel view synthesis from an arbitrary number of images (more than one). We learn this system end-to-end on the dataset of monocular videos. Extremely fast and compact way to present scene.",
    otherLinks: [
      { name: "Immersive Results", url: "https://samsunglabs.github.io/MLI/gallery.html" }
    ]
  },
  {
    year: "2022",
    conference: "ECCV",
    title: "Realistic One-shot Mesh-based Head Avatars",
    authors: "Taras Khakhulin, Vanessa Sklyarova, Victor Lempitsky, Egor Zakharov",
    paperUrl: "https://arxiv.org/abs/2206.08343",
    codeUrl: "https://github.com/SamsungLabs/rome",
    projectUrl: "https://samsunglabs.github.io/rome/",
    imageUrl: "/images/shot_rome.jpg",
    videoUrl: "/videos/rome_crop.mp4",
    tldr: "Create an animatable avatar just from a single image with coarse hair mesh and neural rendering. We learn head geometry and rendering together with supreme quality in a cross-person reenactment."
  },
  {
    year: "2022",
    conference: "ACMM",
    title: "MegaPortraits: One-shot Megapixel Neural Head Avatars",
    authors: "Nikita Drobyshev, Jenya Chelishev, Taras Khakhulin, Aleksei Ivakhnenko, Victor Lempitsky, Egor Zakharov",
    paperUrl: "https://arxiv.org/abs/2207.07621",
    projectUrl: "https://samsunglabs.github.io/MegaPortraits/",
    imageUrl: "/images/frida.jpg",
    videoUrl: "/videos/frida_cmp.mp4",
    tldr: "One-shot high-resolution avatars with latent poses for cross-reenactment."
  },
  {
    year: "2022",
    conference: "CVPR",
    title: "Stereo Magnification with Multi-Layer Images",
    authors: "Taras Khakhulin, Denis Korzhenkov, Pavel Solovev, Gleb Sterkin, Andrei-Timotei Ardelean, Victor Lempitsky",
    paperUrl: "http://arxiv.org/abs/2201.05023",
    projectUrl: "https://samsunglabs.github.io/StereoLayers/",
    imageUrl: "/images/stereo_img.png",
    videoUrl: "/videos/164_cmp.mp4",
    tldr: "The scene can be represented as a set of semi-transparent mesh layers from just stereo pair without loss of the quality. This representation allows effortless estimation and fast rendering. Additionally, we published a dataset with occluded region - SWORD - for novel view synthesis.",
    otherLinks: [
      { name: "Dataset", url: "https://samsunglabs.github.io/StereoLayers/sword/" },
      { name: "Blog", url: "https://research.samsung.com/blog/CVPR-2022-Series-4-Stereo-Magnification-with-Multi-Layer-Images" }
    ]
  },
  {
    year: "2021",
    conference: "CVPR",
    title: "Image Generators with Conditionally-Independent Pixel Synthesis",
    authors: "Ivan Anokhin, Kiril Demochkin, Taras Khakhulin, Gleb Sterkin, Victor Lempitsky, Denis Korzhenkov",
    paperUrl: "https://arxiv.org/abs/2011.13775",
    codeUrl: "https://github.com/saic-mdal/CIPS",
    imageUrl: "/images/cips1.png",
    award: "🎤 Oral Presentation",
    tldr: "Our generator produce images without any spatial convolutions. Each pixel synthesized separately conditioned on noise vector. We investigate properties of such generator and propose several applications (e.g. super-res, foveated rendering).",
    otherLinks: [
      { name: "Samples", url: "/images/cips_samples.png" },
      { name: "Blog", url: "https://research.samsung.com/blog/Image-Generators-with-Conditionally-Independent-Pixel-Synthesis" }
    ]
  },
  {
    year: "2020",
    conference: "Learning Meets Combinatorial Algorithms, NeurIPS Workshop",
    title: "Learning Elimination Ordering for Tree Decomposition Problem",
    authors: "Taras Khakhulin, Roman Schutski, Ivan Oseledets",
    paperUrl: "https://arxiv.org/pdf/1910.08371",
    imageUrl: "/images/graph_agent.png",
    tldr: "We propose a learning heuristic with RL for real-world combinatorial problem on graphs. Surprisingly, we can easily estimate universal policy which can be scaled across different graphs.",
    otherLinks: [
      { name: "Presentation", url: "https://slideslive.com/38942695/learning-elimination-ordering-for-tree-decomposition-problem?locale=en" }
    ]
  },
  {
    year: "2020",
    conference: "CVPR",
    title: "High-Resolution Daytime Translation Without Domain Labels",
    authors: "Ivan Anokhin*, Pavel Solovev*, Denis Korzhenkov*, Alexey Kharlamov*, Taras Khakhulin, Alexey Silvestrov, Sergey Nikolenko, Victor Lempitsky, Gleb Sterkin",
    paperUrl: "https://arxiv.org/abs/2003.08791",
    codeUrl: "https://github.com/saic-mdal/HiDT",
    projectUrl: "https://saic-mdal.github.io/HiDT/",
    imageUrl: "/images/hidt_cover.jpg",
    videoUrl: "/videos/hidt_camp.mp4",
    award: "🎤 Oral Presentation",
    tldr: "High-resolution image-to-image translation without domain labels, enabling daytime style transfer at unprecedented quality."
  },
  {
    year: "2020",
    conference: "Physical Review A",
    title: "Simple heuristics for efficient parallel tensor contraction and quantum circuit simulation",
    authors: "Roman Schutski, Dmitry Kolmakov, Taras Khakhulin, Ivan Oseledets",
    paperUrl: "https://arxiv.org/abs/2004.10892",
    imageUrl: "/images/td_heuristic.png",
    tldr: "The heuristic approach based on tree decomposition to relax the contraction of tensor networks using probabilistic graphical models and applied for random quantum circuits."
  },
  {
    year: "2018",
    conference: "Workshop on Noisy User-generated Text at EMNLP",
    title: "Robust word vectors: context-informed embeddings for noisy texts",
    authors: "Valentin Malykh, Varvara Logacheva, Taras Khakhulin",
    paperUrl: "https://aclanthology.org/W18-6108.pdf",
    imageUrl: "/images/rove.png",
    tldr: "We suggest a new language-independent architecture of robust word vectors (RoVe). It is designed to alleviate the issue of typos, which are common in almost any user-generated content, and hinder automatic text processing."
  },
  {
    year: "2018",
    conference: "ACL, System Demonstrations",
    title: "Deeppavlov: Open-source library for dialogue systems",
    authors: "Mikhail Burtsev, Alexander Seliverstov, Rafael Airapetyan, Mikhail Arkhipov, Dilyara Baymurzina, Nickolay Bushkov, Olga Gureenkova, Taras Khakhulin, Yuri Kuratov, Denis Kuznetsov, Alexey Litinsky, Varvara Logacheva, Alexey Lymar, Valentin Malykh, Maxim Petrov, Vadim Polulyakh, Leonid Pugachev, Alexey Sorokin, Maria Vikhreva, Marat Zaynutdinov",
    paperUrl: "https://aclanthology.org/P18-4021.pdf",
    codeUrl: "https://github.com/deepmipt/DeepPavlov",
    imageUrl: "/images/deeppavlov-img.jpg",
    tldr: "Open-source library for end2end conversational NLP.",
    otherLinks: [
      { name: "TF Blog", url: "https://blog.tensorflow.org/2019/09/deeppavlov-open-source-library-for-end.html" }
    ]
  }
];
