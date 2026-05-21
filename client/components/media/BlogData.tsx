export interface BlogPost {
  id: number;
  slug: string;
  image: string;
  thumb: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category?: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 0,
    slug: "should-christians-date",
    image: "/images/cardy.png",
    thumb: "/images/cardy.png",
    title: "Should Christians Date?",
    excerpt: "For many single Christian adults, the question of dating can be both exciting and confusing. What does Scripture say?",
    author: "Yusuf Afolabi",
    date: "June 1, 2025",
    category: "Relationships",
    content: `
      <p>For many single Christian adults, the question of dating can be both exciting and overwhelming...</p>
      <h2>What Does the Bible Say?</h2>
      <p>While the Bible doesn't use the word "dating," it provides timeless principles about relationships, purity, and love.</p>
      <blockquote>"Guard your heart above all else, for it determines the course of your life." — Proverbs 4:23</blockquote>
      <h2>Practical Wisdom for Christian Dating</h2>
      <ul>
        <li>Date with purpose — know what you're looking for in a life partner.</li>
        <li>Maintain physical boundaries and honour God with your body.</li>
        <li>Involve community — seek counsel from trusted mentors and pastors.</li>
        <li>Pray together. A relationship built on shared prayer is built on solid ground.</li>
      </ul>
    `,
  },
  {
    id: 1,
    slug: "you-are-important-to-god",
    image: "/images/cardium.png",
    thumb: "/images/cardium.png",
    title: "You Are Very Important to God",
    excerpt: "You are important enough for God to send His own Son. Let that truth sink in — deeply.",
    author: "Tunde Ola",
    date: "January 1, 2025",
    category: "Faith",
    content: `
      <p>Have you ever felt overlooked? Like you don't quite matter in the grand scheme of things?</p>
      <blockquote>"For God so loved the world that He gave His only begotten Son..." — John 3:16</blockquote>
      <h2>Your Worth Is Not Based on Performance</h2>
      <p>Romans 5:8 says: "But God demonstrates His own love for us in this: While we were still sinners, Christ died for us."</p>
    `,
  },
  {
    id: 2,
    slug: "jesus-wants-you-to-prosper",
    image: "/images/sec.png",
    thumb: "/images/sec.png",
    title: "Jesus Wants You to Prosper",
    excerpt: "Our Heavenly Father, the most powerful being in existence, is fully on your side.",
    author: "Bisi Amara",
    date: "June 2, 2025",
    category: "Prosperity",
    content: `
      <p>There's a common misconception that prosperity and faith are incompatible.</p>
      <blockquote>"Beloved, I pray that you may prosper in all things and be in health." — 3 John 1:2</blockquote>
      <h2>God's Definition of Prosperity</h2>
      <p>Biblical prosperity is holistic — soul, health, relationships, and provision. Jesus said: "I have come that they may have life, and have it to the full." (John 10:10)</p>
    `,
  },
  {
    id: 3,
    slug: "why-attend-church-in-college",
    image: "/images/download7.png",
    thumb: "/images/download7.png",
    title: "Why Should I Attend Church in College?",
    excerpt: "The quad, the dorms, the lecture halls — everything seems perfectly designed. Except it isn't.",
    author: "Donny Friederichsen",
    date: "January 1, 2025",
    category: "Community",
    content: `
      <p>You've made it to college. But something essential might be missing from the picture.</p>
      <blockquote>"And let us not neglect our meeting together, as some people do..." — Hebrews 10:25</blockquote>
      <h2>Community Is a Lifeline</h2>
      <p>Church in college isn't just about Sunday mornings — it's about finding a family far from home. People who will pray with you during exams, walk with you through heartbreak, and celebrate your wins.</p>
    `,
  },
  {
    id: 4,
    slug: "ordering-your-inner-world",
    image: "/images/download8.png",
    thumb: "/images/download8.png",
    title: "Ordering Your Inner World",
    excerpt: "Before you can order your outer world, you must first tend to the world within.",
    author: "Mide Ola",
    date: "December 4, 2024",
    category: "Growth",
    content: `
      <p>We spend enormous energy managing our outer world. But what about the inner world?</p>
      <blockquote>"Create in me a pure heart, O God, and renew a steadfast spirit within me." — Psalm 51:10</blockquote>
      <h2>Daily Rhythms That Order the Soul</h2>
      <p>Ordering the inner world begins with daily rhythms: prayer, Scripture, silence, solitude. Like a garden, the inner life either grows intentionally or it grows wild.</p>
    `,
  },
  {
    id: 5,
    slug: "passover-power-of-the-blood",
    image: "/images/images1.png",
    thumb: "/images/images1.png",
    title: "Passover: Remembering the Power of the Blood",
    excerpt: "The blood of the Passover lamb pointed to something far greater.",
    author: "Ruth Yinka",
    date: "January 15, 2025",
    category: "Scripture",
    content: `
      <p>Every year at Passover, Jewish families retell the story of liberation from Egypt.</p>
      <blockquote>"For Christ, our Passover lamb, has been sacrificed." — 1 Corinthians 5:7</blockquote>
      <h2>What the Blood Accomplished</h2>
      <p>The blood of Jesus justifies us, cleanses us, and grants us access to God. It is not a relic of history — it is eternally present before the throne of God, speaking on our behalf.</p>
    `,
  },
  {
    id: 6,
    slug: "holy-spirit-gods-gift",
    image: "/images/images2.png",
    thumb: "/images/images2.png",
    title: "The Holy Spirit: God's Gift to Every Christian",
    excerpt: "You were not meant to live the Christian life alone. The Helper is available to all who believe.",
    author: "Femi Adeyemi",
    date: "February 22, 2025",
    category: "Holy Spirit",
    content: `
      <p>One of the most overlooked gifts in the Christian life is the Person of the Holy Spirit.</p>
      <blockquote>"But the Helper, the Holy Spirit, whom the Father will send in my name, he will teach you all things." — John 14:26</blockquote>
      <h2>Not a Force — a Person</h2>
      <p>The Holy Spirit is the third Person of the Trinity — fully God, fully personal. He convicts, comforts, guides, and intercedes. And He lives inside every born-again believer.</p>
    `,
  },
];

// Keep old cardData export so nothing breaks
export const cardData = blogPosts.map((p) => ({
  image: p.thumb,
  title: p.title,
  description: p.excerpt,
  buttonText: p.date,
  link: `/blog/${p.slug}`,
}));