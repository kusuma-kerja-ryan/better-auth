import { Blog } from "./example-type";

const blogsPayload : Blog[] = [
    {
        id: "post-1",
        title: "Mastering Tailwind CSS for Scalable UI",
        slug: "mastering-tailwind-css-for-scalable-ui",
        user: {
            name: "Alice Carter",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        },
        createdAt: "2024-06-21T14:12:00.000Z",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
        tags: ["Tailwind CSS", "React", "Frontend Development"],
        content: `
<p>Tailwind CSS has changed how we think about styling in frontend development. By combining utility classes and component-driven design, we can build consistent interfaces at scale.</p>

<h2>Utility-First Design</h2>
<p>Tailwind encourages thinking in terms of small, composable classes rather than writing custom CSS for every component.</p>

<blockquote>
  “Design systems thrive on consistency, and Tailwind delivers just that.”
</blockquote>

<h3>Challenges</h3>
<ul>
  <li>Class name explosion</li>
  <li>Initial learning curve</li>
  <li>Customizing themes</li>
</ul>

<p>Once you get used to it, productivity increases significantly.</p>
    `
    },
    {
        id: "post-2",
        title: "The Rise of Server Components in React",
        slug: "the-rise-of-server-components-in-react",
        user: {
            name: "Michael Tan",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        },
        createdAt: "2024-06-18T10:00:00.000Z",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
        tags: ["React", "Server-Side Rendering", "Performance"],
        content: `
<p>Server Components are one of the most exciting advancements in React. They allow rendering parts of your UI on the server with zero JavaScript sent to the client.</p>

<h2>Performance Boost</h2>
<p>By offloading logic to the server, we reduce the client-side load and improve Time to Interactive (TTI).</p>

<h3>When to Use</h3>
<ul>
  <li>Data-heavy components</li>
  <li>Non-interactive elements</li>
  <li>SEO-optimized pages</li>
</ul>
    `
    },
    {
        id: "post-3",
        title: "Design Tokens: The Heart of Your Design System",
        slug: "design-tokens-the-heart-of-your-design-system",
        user: {
            name: "Emily Zhang",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        },
        createdAt: "2024-05-30T08:30:00.000Z",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
        tags: ["Design System", "Design Tokens", "UI/UX"],
        content: `
<p>Design tokens are named entities that store visual design attributes. They enable scalability and consistency across platforms.</p>

<h2>Core Tokens</h2>
<ul>
  <li>Colors</li>
  <li>Spacing</li>
  <li>Typography</li>
</ul>

<p>Start with a simple system, then evolve as your brand grows.</p>
    `
    },
    {
        id: "post-4",
        title: "Improving Web Accessibility with ARIA",
        slug: "improving-web-accessibility-with-aria",
        user: {
            name: "Noah Lee",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        },
        createdAt: "2024-06-05T16:45:00.000Z",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
        tags: ["Accessibility", "ARIA", "Web Accessibility"],
        content: `
<p>Accessibility (a11y) is essential in modern web development. ARIA roles, states, and properties help improve experiences for assistive technologies.</p>

<h2>Common ARIA Attributes</h2>
<ul>
  <li>aria-label</li>
  <li>aria-hidden</li>
  <li>aria-live</li>
</ul>

<p>Accessibility is not optional — it's a responsibility.</p>
    `
    },
    {
        id: "post-5",
        title: "Deploying Full-Stack Apps with Vercel",
        slug: "deploying-full-stack-apps-with-vercel",
        user: {
            name: "Liam Johnson",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        },
        createdAt: "2024-06-12T09:00:00.000Z",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
        tags: ["Vercel", "Full-Stack", "Deployment"],
        content: `
<p>Deploying with Vercel is straightforward and powerful. From frontend to API routes, it supports seamless deployments with zero config.</p>

<h2>Steps</h2>
<ol>
  <li>Push to GitHub</li>
  <li>Connect to Vercel</li>
  <li>Enjoy automatic deployments</li>
</ol>
    `
    },
    {
        id: "post-6",
        title: "Understanding Zod for Schema Validation",
        slug: "understanding-zod-for-schema-validation",
        user: {
            name: "Olivia Smith",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        },
        createdAt: "2024-05-28T13:00:00.000Z",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
        tags: ["Zod", "Schema Validation", "TypeScript"],
        content: `
<p>Zod is a TypeScript-first schema validation library. It allows defining types and validating data at runtime, all in one place.</p>

<h2>Benefits</h2>
<ul>
  <li>Type inference</li>
  <li>Runtime validation</li>
  <li>Clear error messages</li>
</ul>
    `
    },
    {
        id: "post-7",
        title: "Next.js App Directory: Rethinking Routing",
        slug: "nextjs-app-directory-rethinking-routing",
        user: {
            name: "Sophia Brown",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        },
        createdAt: "2024-06-10T11:20:00.000Z",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
        tags: ["Next.js", "Routing", "App Directory"],
        content: `
<p>The new App Directory in Next.js introduces a more flexible file-based routing system. It also supports nested layouts and server components.</p>

<h3>Key Concepts</h3>
<ul>
  <li>Layouts</li>
  <li>Templates</li>
  <li>Loading UI</li>
</ul>
    `
    },
    {
        id: "post-8",
        title: "Build a Dark Mode Toggle with Tailwind",
        slug: "build-a-dark-mode-toggle-with-tailwind",
        user: {
            name: "James Wilson",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        },
        createdAt: "2024-06-01T17:45:00.000Z",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
        tags: ["Tailwind CSS", "Dark Mode", "Toggle"],
        content: `
<p>Adding a dark mode toggle with Tailwind CSS is simple. Using the <code>dark</code> variant, you can style elements based on the user's preference or a toggle switch.</p>

<h2>Implementation</h2>
<ul>
  <li>Set <code>darkMode: 'class'</code> in config</li>
  <li>Use <code>dark:</code> classes</li>
  <li>Toggle a <code>dark</code> class on the <code>html</code> tag</li>
</ul>
    `
    },
    {
        id: "post-9",
        title: "CSS Grid vs Flexbox: When to Use What",
        slug: "css-grid-vs-flexbox-when-to-use-what",
        user: {
            name: "Grace Miller",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        },
        createdAt: "2024-05-24T08:15:00.000Z",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
        tags: ["CSS Grid", "Flexbox", "Layout"],
        content: `
<p>Both CSS Grid and Flexbox are powerful layout tools. Knowing when to use each can greatly improve your UI development flow.</p>

<h3>Use Flexbox for:</h3>
<ul>
  <li>One-dimensional layouts</li>
  <li>Simple alignment</li>
</ul>

<h3>Use Grid for:</h3>
<ul>
  <li>Two-dimensional layouts</li>
  <li>Complex positioning</li>
</ul>
    `
    },
    {
        id: "post-10",
        title: "The Art of Component Composition",
        slug: "the-art-of-component-composition",
        user: {
            name: "Ethan Davis",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        },
        createdAt: "2024-06-15T07:30:00.000Z",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
        tags: ["React", "Component Composition", "Reusability"],
        content: `
<p>Component composition allows developers to build flexible and reusable UI elements. It emphasizes building smaller pieces that work together harmoniously.</p>

<h2>Principles</h2>
<ul>
  <li>Avoid deep nesting</li>
  <li>Favor children over props</li>
  <li>Use slots or render props if needed</li>
</ul>
    `
    }
];

export {
    blogsPayload
}
