import React from "react";
import { cn } from "../../lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  icon,
  index,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 border-neutral-200",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-primary/20 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Human-Centered Mastery",
      description:
        "AI should serve imagination, empathy and connection, it must not replace them.",
      icon: <IconHeart />,
    },
    {
      title: "Critical Curiosity",
      description:
        "Learning is driven by questions that matter, not just answers.",
      icon: <IconHelp />,
    },
    {
      title: "Invest in Future Skills",
      description:
        "The skills you build today—adaptability, ethics, creativity—are your future currency.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Creating with AI",
      description: "Turn imagination into reality through images, videos, stories, and projects.",
      icon: <IconCloud />,
    },
    {
      title: "Extension, Not Substitution",
      description: "AI should enhance thinking and capability, not bypass the learning process.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "AI Foundations",
      description:
        "Understand what AI is, how it works, and where its limits lie.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Ethical Imagination",
      description:
        "We build with care, while being aware of bias, ownership, privacy, and equity.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Reflective Agency",
      description: "Learners know themselves, how they think, learn, adapt, and lead.",
      icon: <IconEaseInOut />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}