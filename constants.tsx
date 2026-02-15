import React from 'react';
import { NavLink, ValueCard, Pillar, TeamMember, Testimonial, FAQItem } from './types';
import { 
  Brain, 
  Lightbulb, 
  Heart, 
  ShieldCheck, 
  Users, 
  Globe, 
  Cpu, 
  Sparkles,
  Bot,
  Layers,
  PenTool
} from 'lucide-react';

// ============================================================================
// UPDATE CONTENT HERE
// This file contains the text and data used throughout the website.
// ============================================================================

export const BRAND_NAME = "HumainAI.sg";

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about', color: '#aac291' },
  { label: 'Technologies', href: '#technologies', color: '#e8a772' },
  { label: 'Discover', href: '#discover', color: '#aac291' },
  { label: 'FAQs', href: '#faqs', color: '#e8a772' },
];

export const HERO_TEXT = {
  headline: "Where the AI Future Learns to Stay Human",
  subheadline: "Empowering students aged 13+ to harness AI capabilities while preserving human creativity, critical thinking, and emotional intelligence"
};

export const MISSION_TEXT = "“We exist to put humanity at the heart of the AI age, nurturing self-aware learners who harness technology while staying rooted in their deepest human essence.”";

export const WHO_WE_ARE_TEXT = "At HumainAI.sg, we believe the future of education lies at the intersection of human values and artificial intelligence. Our work is rooted in progressive pedagogy, deep inquiry, and international research. We are not here to simply teach AI tools. We are here to nurture critical thinkers, empathetic humans, and responsible creators who will lead in an AI-driven world.";

export const VALUE_CARDS: ValueCard[] = [
  {
    title: "Human-Centered Mastery",
    description: "AI should serve imagination, empathy and connection, it must not replace them.",
    icon: <Heart className="w-8 h-8 text-primary" />,
    color: 'primary'
  },
  {
    title: "Critical Curiosity",
    description: "Learning is driven by questions that matter, not just answers.",
    icon: <Lightbulb className="w-8 h-8 text-secondary" />,
    color: 'secondary'
  },
  {
    title: "Extension, Not Substitution",
    description: "AI should enhance thinking, not bypass it.",
    icon: <Brain className="w-8 h-8 text-primary" />,
    color: 'primary'
  },
  {
    title: "Ethical Imagination",
    description: "We build with care, while being aware of bias, ownership, privacy, and equity.",
    icon: <ShieldCheck className="w-8 h-8 text-secondary" />,
    color: 'secondary'
  },
  {
    title: "Reflective Agency",
    description: "Learners know themselves, how they think, learn, adapt, and lead.",
    icon: <Users className="w-8 h-8 text-primary" />,
    color: 'primary'
  }
];

export const FRAMEWORK_TEXT = "At HumainAI.sg, we believe that AI literacy is not just about tools, it is about nurturing thinkers, creators, and responsible humans. Drawing on international frameworks such as OECD, the European Commission’s AI Literacy Framework, and UNESCO’s AI Competencies, we have crafted a uniquely human-centered approach: the Humain AI Literacy Framework.";

export const PILLARS: Pillar[] = [
  {
    title: "Ethics, Safety & Responsibility",
    description: "Develop critical awareness of bias, misinformation, privacy, and digital well-being.",
    icon: <Globe className="w-6 h-6 text-dark" />,
    side: 'left',
    borderColor: '#91AA74',
    bgColor: 'bg-primary/20'
  },
  {
    title: "Creating with AI",
    description: "Turn imagination into reality through images, videos, stories, and projects - always human-first, AI-second.",
    icon: <Sparkles className="w-6 h-6 text-dark" />,
    side: 'left',
    borderColor: '#91AA74',
    bgColor: 'bg-primary/20'
  },
  {
    title: "AI Foundations",
    description: "Understand what AI is, how it works, and where its limits lie.",
    icon: <Cpu className="w-6 h-6 text-dark" />,
    side: 'left',
    borderColor: '#91AA74',
    bgColor: 'bg-primary/20'
  },
  {
    title: "Human Intelligence in the Age of AI",
    description: "Preserve what makes us deeply human while working with AI.",
    icon: <Heart className="w-6 h-6 text-dark" />,
    side: 'right',
    borderColor: '#E69D67',
    bgColor: 'bg-secondary/20'
  },
  {
    title: "Agents & Automation",
    description: "Design personal study agents and workflows to save time, solve problems, and extend human capabilities.",
    icon: <Bot className="w-6 h-6 text-dark" />,
    side: 'right',
    borderColor: '#E69D67',
    bgColor: 'bg-secondary/20'
  },
  {
    title: "Learning with AI",
    description: "Use AI as a study partner that sparks curiosity and deeper understanding, not as a shortcut.",
    icon: <Layers className="w-6 h-6 text-dark" />,
    side: 'right',
    borderColor: '#E69D67',
    bgColor: 'bg-secondary/20'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Aravind Bettadapura",
    role: "Co-founder",
    description: "Pioneered Experiential Learning in Singapore. M.Ed, Harvard University.",
    image: "https://picsum.photos/400/400?random=1",
    color: "bg-[#aac291]"
  },
  {
    name: "Brinda Aravind",
    role: "Co-founder",
    description: "Spearheaded practice-based teacher education. M.Ed, Cambridge University.",
    image: "https://picsum.photos/400/400?random=2",
    color: "bg-[#e8a772]"
  },
  {
    name: "Dr. James Lee",
    role: "Academic Director",
    description: "Leader in curriculum design and assessment. PhD. Educational Psychology.",
    image: "https://picsum.photos/400/400?random=3",
    color: "bg-[#aac291]"
  },
  {
    name: "Priya Raj",
    role: "COO",
    description: "Business strategy expert passionate about education technology. MBA, NUS.",
    image: "https://picsum.photos/400/400?random=4",
    color: "bg-[#e8a772]"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Nitin",
    role: "Parent",
    text: "The world is moving towards AI, and my daughter was truly keen to learn. Though I know about AI tools, it was amazing to see her guide me. This course is a great step that we have taken."
  },
  {
    name: "Dr. Tshering",
    role: "Parent",
    text: "I am grateful for this well-organized workshop. It's encouraging to see platforms like HumainAI.sg taking the lead in educating the next generation to utilise AI responsibly and safely."
  },
  {
    name: "Mrs. Meenakshi",
    role: "Educator",
    text: "My students are now teaching me about AI! What I really appreciate is that they didn’t just focus on the tools, but also on how and how not to use AI."
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Who is this course for?",
    answer: (
      <>
        This program is designed for students aged 13+ who are curious about the future.
        <br/><br/>
        The ideal student is a curious questioner, a creative thinker, and a thoughtful collaborator. Perfect for:
        <ul className="list-disc ml-5 mt-2">
          <li><strong>The Forward-Thinker</strong> preparing for the future of work.</li>
          <li><strong>The Creative Storyteller</strong> exploring AI art and music.</li>
          <li><strong>The Problem-Solver</strong> interested in automation.</li>
        </ul>
      </>
    )
  },
  {
    question: "What specific skills will my child develop?",
    answer: "Students develop Emotional Intelligence (EQ), Adaptability (AQ), Critical Curiosity, and Ethical Imagination alongside technical AI literacy."
  },
  {
    question: "Do students need coding experience?",
    answer: "No prior coding knowledge is required. We focus on conceptual understanding and using modern, no-code AI tools to foster creativity and logic."
  },
  {
    question: "How does this help with college applications?",
    answer: "It provides a unique project portfolio, demonstrates future-ready competencies, and shows admissions officers that the student is proactive about emerging technologies."
  }
];
