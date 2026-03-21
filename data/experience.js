export const experiences = [
  {
    slug: 'csi-operations-lead',
    role: 'Operations Lead — PR & Sponsorship',
    org: 'CSI GRIET Chapter',
    orgFull: 'Computer Society of India, GRIET Student Chapter',
    period: '2024 – Present',
    location: 'Hyderabad, India',
    type: 'Leadership',
    summary: 'Leading operations, external partnerships, and event logistics for the CSI student chapter at GRIET. Responsible for sponsorship development, membership growth, and coordinating 5+ major technical events.',
    description: 'Managing operations and external relationships for GRIET\'s CSI chapter. Responsible for industry sponsor acquisition, event logistics from planning to execution, volunteer coordination, and driving chapter membership growth.',
    achievements: [
      { metric: '30%', label: 'Membership Growth', detail: 'Grew chapter membership by 30% over one year through structured onboarding and engagement programs' },
      { metric: '₹50,000+', label: 'Sponsorship Revenue', detail: 'Secured corporate sponsorships from 10+ industry partners across technology and education sectors' },
      { metric: '25–50%', label: 'Event Efficiency', detail: 'Reduced event planning and execution turnaround time through process standardization and delegation frameworks' },
      { metric: '5+', label: 'Events Coordinated', detail: 'End-to-end logistics for RESO\'25, IdeaQuest, Sequence Saga, and multiple technical workshops' },
    ],
    responsibilities: [
      {
        area: 'Event Operations',
        items: [
          'Managed end-to-end logistics for RESO\'25, IdeaQuest, and Sequence Saga',
          'Coordinated with catering, venue, and AV teams to ensure smooth event execution',
          'Built and enforced pre-event checklists reducing day-of issues by approximately 40%',
          'Supervised volunteer teams of 10–15 people per event',
        ],
      },
      {
        area: 'Sponsorship and Business Development',
        items: [
          'Identified and approached 15+ potential industry sponsors; converted 10+ to active partnerships',
          'Managed sponsor communication, deliverable agreements, and post-event reporting',
          'Secured ₹50,000+ in sponsorship revenue across two academic years',
          'Developed pitch materials and sponsor benefit packages',
        ],
      },
      {
        area: 'Team Leadership and Delegation',
        items: [
          'Mentored 3–5 junior members in event logistics and stakeholder communication',
          'Delegated responsibilities with accountability frameworks; reduced last-minute escalations',
          'Solved on-ground supply chain issues in real time during events',
          'Maintained communication across CR team, management, and external partners simultaneously',
        ],
      },
    ],
    challenges: [
      { challenge: 'Coordinating across multiple stakeholder groups simultaneously', lesson: 'Developed a single-source communication document updated in real time; reduced confusion and duplicate effort significantly' },
      { challenge: 'Sponsor follow-through inconsistency', lesson: 'Implemented structured follow-up cadence and clear written agreements; improved commitment reliability' },
      { challenge: 'Volunteer accountability during events', lesson: 'Role-specific briefing cards and a buddy system improved accountability and reduced the need for micro-management' },
    ],
    skills: ['Project Management', 'Stakeholder Communication', 'Team Leadership', 'Event Coordination', 'Business Development', 'Problem Solving'],
  },
  {
    slug: 'bytesedge-internship',
    role: 'Project Intern — Design, Development & Digital Marketing',
    org: 'BytesEdge',
    orgFull: 'BytesEdge',
    period: 'January 2026 – March 2026',
    periodNote: '3 months — Completed',
    location: 'Hyderabad, India',
    type: 'Internship',
    summary: 'Three-month internship contributing to UI/UX design, web component development, and digital marketing strategy in a professional product environment.',
    description: 'Contributed to design, development, and digital marketing workflows supporting real product and campaign cycles. Worked across UI/UX, frontend development, and marketing strategy with a cross-functional team.',
    achievements: [
      { metric: 'UI/UX', label: 'Design Work', detail: 'Created and reviewed interface designs using Adobe Photoshop and design system principles' },
      { metric: 'Components', label: 'Web Development', detail: 'Developed functional, responsive website components for live digital products' },
      { metric: 'Strategy', label: 'Marketing Contributions', detail: 'Participated in digital marketing planning for user engagement and visibility campaigns' },
      { metric: 'Cross-functional', label: 'Team Collaboration', detail: 'Analyzed requirements, ran usability tests, and refined solutions based on feedback cycles' },
    ],
    responsibilities: [
      {
        area: 'UI/UX Design',
        items: [
          'Created and reviewed interface designs for digital products',
          'Applied UI/UX principles and component-level design system standards',
          'Used Adobe Photoshop for visual asset creation and editing',
          'Tested usability and incorporated feedback into revised designs',
        ],
      },
      {
        area: 'Web Development',
        items: [
          'Developed responsive, accessible website components in HTML, CSS, and JavaScript',
          'Collaborated on product feature launches with development team',
          'Used Git for version control and team code collaboration',
          'Built components to meet cross-browser compatibility requirements',
        ],
      },
      {
        area: 'Digital Marketing',
        items: [
          'Participated in planning digital marketing campaigns for engagement and visibility',
          'Supported campaign workflow documentation and execution planning',
          'Analyzed project requirements with cross-functional team before implementation',
          'Contributed to building and iterating on launched digital products',
        ],
      },
    ],
    challenges: [
      { challenge: 'Adapting to a professional product development workflow', lesson: 'Learned to balance individual initiative with team process; documentation and communication matter as much as the work itself' },
      { challenge: 'Working across design and development simultaneously', lesson: 'Understanding both sides reduces friction in handoff; designers who can code and developers who understand design produce better outcomes' },
    ],
    skills: ['UI/UX Design', 'Adobe Photoshop', 'HTML/CSS/JavaScript', 'Git', 'Digital Marketing', 'Cross-functional Collaboration'],
    tools: ['Adobe Photoshop', 'HTML', 'CSS', 'JavaScript', 'Git'],
  },
];

export function getExperienceBySlug(slug) {
  return experiences.find(e => e.slug === slug) || null;
}
