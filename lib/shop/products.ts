export type ProductColor = {
  name: string;
  value: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  priceValue: number;
  category: string;
  images: string[];
  modelPath?: string;
  colors: ProductColor[];
  wraps: string[];
  features: string[];
  specs: Record<string, string>;
  whatsInTheBox: string[];
  faqs: { question: string; answer: string }[];
};

export const colorOptions: ProductColor[] = [
  { name: "Soft White", value: "#f4f0e8" },
  { name: "Midnight Black", value: "#111111" },
  { name: "Sand", value: "#c9b79f" },
  { name: "Deep Blue", value: "#17223a" },
];

export const wrapOptions = [
  "Minimal",
  "Calm Gradient",
  "Abstract",
  "Space",
  "Nature",
  "Custom Upload Coming Soon",
];

export const products: Product[] = [
  {
    id: "sleep-earbuds",
    slug: "ypod-sleep-earbuds",
    name: "YPOD Sleep Earbuds",
    tagline: "low-profile sleep audio for calm nights",
    description:
      "A soft, compact sleep-audio earbud concept for night routines, sound masking, music, and private listening without reaching for a bright phone.",
    price: "₦185,000",
    priceValue: 185000,
    category: "earbuds",
    images: ["/assets/yema-case-white.png", "/assets/yema-two-white.png", "/assets/yema-solo-dark.png"],
    colors: colorOptions,
    wraps: wrapOptions,
    features: ["Low-profile earbud body", "Soft silicone fit", "Phone-first controls", "Quiet matte finish"],
    specs: {
      fit: "compact in-ear sleep profile",
      controls: "phone first",
      finish: "matte black or soft grey direction",
      charging: "USB-C charging case concept",
    },
    whatsInTheBox: ["YPOD sleep earbuds", "Charging case", "Silicone tip set", "USB-C cable", "Quick start guide"],
    faqs: [
      {
        question: "Is this a medical sleep product?",
        answer: "No. YPOD is positioned as consumer sleep-audio hardware, not a medical treatment device.",
      },
      {
        question: "Can it play normal audio?",
        answer: "Yes. The product direction supports sleep sounds, music, podcasts, and routine audio.",
      },
    ],
  },
  {
    id: "remote",
    slug: "ypod-remote",
    name: "YPOD Remote",
    tagline: "bedside control without touching your earbuds",
    description:
      "A small premium controller for sleep audio. Play, pause, skip, go back, or start a saved dream routine from your bedside.",
    price: "₦95,000",
    priceValue: 95000,
    category: "remote",
    images: ["/assets/remote/ypod-remote-black.png", "/assets/remote/ypod-remote-wrap-kuromi.png", "/assets/remote/ypod-remote-system.png"],
    modelPath: "/models/ypod-controller.glb",
    colors: colorOptions,
    wraps: wrapOptions,
    features: ["Physical play/pause", "Previous and next controls", "Dream routine button", "Collectible wrap support"],
    specs: {
      control: "play, pause, previous, next, dream",
      connection: "Bluetooth Low Energy concept",
      charging: "rechargeable concept",
      customization: "wraps, skins, and attachable accessories",
    },
    whatsInTheBox: ["YPOD Remote", "USB-C cable", "Starter wrap card", "Quick start guide"],
    faqs: [
      {
        question: "What does the dream button do?",
        answer: "It is designed to start a saved bedtime routine such as a preferred sound, volume, timer, fade-out, or night preset.",
      },
      {
        question: "Can the remote be customized?",
        answer: "Yes. The product direction supports matte colors, collectible wraps, skins, and attachable keychain-style accessories.",
      },
    ],
  },
  {
    id: "bundle",
    slug: "ypod-bundle",
    name: "YPOD Bundle",
    tagline: "earbuds, case, remote, and personalization together",
    description:
      "The full YPOD sleep ecosystem concept: low-profile earbuds, charging case, bedside remote, and customization options in one premium kit.",
    price: "₦255,000",
    priceValue: 255000,
    category: "bundle",
    images: ["/assets/remote/ypod-remote-system.png", "/assets/yema-case-dark.png", "/assets/yema-case-white.png"],
    colors: colorOptions,
    wraps: wrapOptions,
    features: ["Sleep earbuds", "Charging case", "Remote controller", "Wrap and skin options"],
    specs: {
      system: "sleep earbuds + remote + case",
      finish: "matte black product family",
      control: "phone and remote",
      personalization: "colors, wraps, skins, and accessories",
    },
    whatsInTheBox: ["YPOD sleep earbuds", "Charging case", "YPOD Remote", "Wrap starter pack", "USB-C cable"],
    faqs: [
      {
        question: "Why bundle the remote?",
        answer: "The remote turns YPOD into a bedside sleep system instead of only another pair of Bluetooth earbuds.",
      },
      {
        question: "Is checkout live?",
        answer: "Not yet. Payments stay paused until inventory, shipping, support, and launch terms are ready.",
      },
    ],
  },
  {
    id: "wraps",
    slug: "custom-wraps",
    name: "Custom Wraps",
    tagline: "collectible skins for your sleep setup",
    description:
      "Personalization packs for the YPOD remote and future product surfaces, made for room style, limited drops, and brand collaborations.",
    price: "₦12,000",
    priceValue: 12000,
    category: "accessories",
    images: ["/assets/remote/ypod-remote-wrap-kuromi.png", "/assets/remote/ypod-remote-showcase.png", "/assets/remote/ypod-remote-system.png"],
    colors: colorOptions,
    wraps: wrapOptions,
    features: ["Collectible designs", "Brand partnership potential", "Remote skin support", "Future custom upload flow"],
    specs: {
      surface: "remote-first wrap concept",
      formats: "minimal, gradient, abstract, space, nature",
      launch: "small-batch drops",
      future: "custom upload workflow",
    },
    whatsInTheBox: ["Selected wrap", "Application card", "Cleaning cloth"],
    faqs: [
      {
        question: "Can brands make exclusive skins?",
        answer: "Yes. Brand and artist collaborations are part of the accessory revenue plan.",
      },
      {
        question: "Can customers upload designs?",
        answer: "Custom upload is planned as a future feature after the base wrap system is validated.",
      },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
