import type { ImageMetadata } from 'astro';

import arthurThompsonImage from '~/assets/images/2026/speakers/arthur_thompson.jpg';
import carolBolgerImage from '~/assets/images/2026/speakers/carol_bolger.png';
import dwaneHemmingsImage from '~/assets/images/2026/speakers/dwane_hemmings.jpg';
import javieraLasoImage from '~/assets/images/2026/speakers/javiera_laso.jpg';
import loianeGronerImage from '~/assets/images/2026/speakers/loiane_groner.jpeg';
import willGormanImage from '~/assets/images/2026/speakers/will_gorman.jpg';

export interface SpeakerLink {
  label: string;
  href: string;
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  companyUrl?: string;
  image?: ImageMetadata;
  imageAlt?: string;
  talkTitle: string;
  /** Each entry renders as a paragraph. */
  talkDescription: string[];
  links: SpeakerLink[];
}

export const speakers: Speaker[] = [
  {
    id: 'arthur-thompson',
    name: 'Arthur Thompson',
    role: 'Developer Relations Engineer',
    company: 'Google',
    companyUrl: 'https://google.com',
    image: arthurThompsonImage,
    imageAlt: 'Arthur Thompson',
    talkTitle: 'Building AI apps from scratch with the Google ecosystem',
    talkDescription: [
      'The way we build software has changed. Today, the most successful developers aren\'t just writing code, they are orchestrating AI tools and agents to build better and faster. This hands-on session is a deep dive into this modern "Builder Stack"',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/kroikie' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arthur-thompson-02a275258/' },
    ],
  },
  {
    id: 'german-gamboa',
    name: 'German Gamboa',
    role: 'Senior Software Engineer',
    company: 'Olo',
    talkTitle: 'Exploring experiments in agent harnesses',
    talkDescription: [],
    links: [
      { label: 'GitHub', href: 'https://github.com/germangamboa95' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/germangamboa' },
    ],
  },
  {
    id: 'carol-bolger',
    name: 'Carol Bolger',
    role: 'Founder / Flutter & AI Consultant',
    company: 'Real World Applications',
    companyUrl: 'https://realworldapplications.net',
    image: carolBolgerImage,
    imageAlt: 'Carol Bolger',
    talkTitle: 'Ask My Data: Building Grounded Gemini Agents with Flutter & Firebase',
    talkDescription: [
      "Most AI agents lean on one deceptively simple trick to be useful: grounding. In this hands-on workshop, you'll build a Flutter chat app where Gemini answers questions using your own live Firestore data instead of guessing — the same function-calling pattern behind real agentic apps. Along the way, you'll set up a Firebase project from scratch (free, no credit card required), learn what Firestore, Authentication, and Firebase AI Logic actually do, and wire them into a working Flutter app. You'll leave with a template you can immediately re-skin and extend for your hackathon project this weekend, plus a real mental model for grounding an LLM in data instead of letting it hallucinate.",
    ],
    links: [
      { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/carolcorybolger' },
      { label: "Check out Carol's Substack", href: 'https://substack.com/@car01' },
    ],
  },
  {
    id: 'loiane-groner',
    name: 'Loiane Groner',
    role: 'Director of Engineering',
    company: 'BNY',
    companyUrl: 'https://www.bny.com/corporate/global/en.html',
    image: loianeGronerImage,
    imageAlt: 'Loiane Groner',
    talkTitle: 'Specs Driven Development, Harness Engineering, Loops and Everything in Between',
    talkDescription: [
      "Chatting with LLMs is fun, but episodic prompting is a dead-end for enterprise software development. To build robust, production-ready code with AI, we need to move from 'prompt engineering' to SDD with 'harness and loop engineering.'",
      'This session introduces an enterprise-scale architecture where AI agents and human developers co-author code inside a highly defensive, multi-layer validation harness. We walk through a Specs-Driven Development (SDD) methodology that keeps AI agents honest through rigid EARS-based specifications and TDD requirements.',
      'We then dive deep into the mechanics of automated loops. You will learn how to design systems where an agent automatically polls MR pipelines, analyzes compiler traces, tracks down SonarQube issues, synthesizes the exact code modifications needed, and pushes updates iteratively until the build is 100% green.',
    ],
    links: [
      { label: 'loiane.com', href: 'https://loiane.com/' },
      { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/loiane' },
      { label: 'github.com/loiane', href: 'https://github.com/loiane' },
    ],
  },
  {
    id: 'will-gorman',
    name: 'Will Gorman',
    role: 'CTO',
    company: 'Nucleus Security',
    companyUrl: 'https://nucleussec.com/',
    image: willGormanImage,
    imageAlt: 'Will Gorman',
    talkTitle: 'Agentic Engineering Workshop',
    talkDescription: [
      'This talk and optional lab will explore how the Software Developer role is evolving into Agentic Engineering. We will look at Agent Skills and Agent Orchestration impacting the traditional software development life cycle.',
    ],
    links: [{ label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/wpgorman/' }],
  },
  {
    id: 'dwane-hemmings',
    name: 'Dwane Hemmings',
    role: 'JavaScript Developer Advocate',
    company: 'Vonage',
    companyUrl: 'https://www.vonage.com/',
    image: dwaneHemmingsImage,
    imageAlt: 'Dwane Hemmings',
    talkTitle: 'WebXR: Augment Reality with Real-time Communications',
    talkDescription: [
      'Smart glasses are getting smarter with some being able to display WebXR experiences like their headset counterparts. In this interactive code-along workshop, we will create a WebXR application capable of receiving phone calls.',
    ],
    links: [
      { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/dwane-hemmings' },
      { label: 'LifeLong.dev', href: 'https://LifeLong.dev' },
      { label: 'GitHub', href: 'https://github.com/conshus' },
    ],
  },
  {
    id: 'javiera-laso',
    name: 'Javiera Laso',
    role: 'Lead developer consultant',
    company: 'Thoughtworks',
    image: javieraLasoImage,
    imageAlt: 'Javier Laso',
    talkTitle: 'Build Your Own AI-Assisted Architecture Review Board',
    talkDescription: [
      'Architecture Review Boards are meant to improve consistency, reduce risk, and help teams make better technical decisions. In practice, they can also become slow, centralized, and difficult to scale.',
      'In this hands-on workshop, participants will design a lightweight AI-assisted Architecture Review Board that brings architectural standards, ADRs, engineering principles, system constraints, and organizational knowledge directly into the decision process.',
      'I’ll share how I use AI in my own architecture practice to structure analysis, surface relevant standards, explore alternatives, challenge assumptions, and expose trade-offs. Participants will then apply those ideas to build their own review workflow.',
      'We’ll work through a realistic architectural decision and define what an AI-assisted review should evaluate, what context it needs, what questions it should ask, and when a decision should still require human review or escalation.',
      'The goal is not to automate architecture governance. It is to make architectural guidance more accessible, consistent, and scalable while preserving the judgment and accountability of engineers and architects.',
      'By the end of the workshop, participants will leave with a practical blueprint for an Architecture Review Board they can adapt to their own organization, standards, and level of governance maturity.',
    ],
    links: [{ label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/javujavichi/' }],
  },
];

export const getSpeaker = (id: string) => speakers.find((speaker) => speaker.id === id);
