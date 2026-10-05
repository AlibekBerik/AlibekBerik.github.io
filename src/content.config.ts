import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const link = z.object({ label: z.string(), url: z.string().url() });

const profile = defineCollection({
  loader: glob({ pattern: 'profile.md', base: './src/content' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    tagline: z.string(),
    availability: z.string(),
    location: z.string(),
    email: z.string().email(),
    github: z.string().url(),
    linkedin: z.string().url().optional(),
    cv: z.string(),
    photo: z.string().optional(),
    focus: z.array(z.string()),
    heroStack: z.array(z.string()),
    languages: z.array(z.string()),
    stats: z.array(z.object({ value: z.string(), label: z.string() })),
  }),
});

const why = defineCollection({
  loader: glob({ pattern: 'why-hire-me.md', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    reasons: z.array(z.object({ title: z.string(), text: z.string() })),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: 'skills.md', base: './src/content' }),
  schema: z.object({
    groups: z.array(z.object({ name: z.string(), items: z.array(z.string()) })),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: 'education.md', base: './src/content' }),
  schema: z.object({
    degree: z.string(),
    school: z.string(),
    start: z.string(),
    end: z.string(),
    gpa: z.string().optional(),
    coursework: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    year: z.number(),
    order: z.number(),
    summary: z.string(),
    highlight: z.object({ value: z.string(), label: z.string() }).optional(),
    image: z.string().optional(),
    stack: z.array(z.string()),
    links: z.array(link).default([]),
    draft: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    org: z.string(),
    start: z.string(),
    end: z.string(),
    location: z.string().optional(),
    order: z.number(),
    draft: z.boolean().default(false),
  }),
});

const certificates = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/certificates' }),
  schema: z.object({
    title: z.string(),
    issuer: z.string().optional(),
    date: z.string().optional(),
    url: z.string().url().optional(),
    order: z.number(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { profile, why, skills, education, projects, experience, certificates };
