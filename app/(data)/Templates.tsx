export default [
  {
    name: "Video Script Generator",
    desc: "Generate full video scripts for platforms like YouTube, TikTok, Instagram, etc.",
    category: "Content Creation",
    icon: "https://cdn-icons-png.flaticon.com/128/2504/2504691.png",
    aiPrompt:
      'Generate a full video script for a video about "{topic}" with an engaging intro, body, and conclusion.',
    slug: "generate-video-script",
    form: [
      {
        label: "Enter Video Topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Captions Generator",
    desc: "Create viral captions for Instagram posts that increase engagement.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/833/833314.png",
    aiPrompt:
      'Generate 5 Instagram captions for a post about "{theme}" with emojis and hashtags.',
    slug: "generate-instagram-captions",
    form: [
      {
        label: "Enter Post Theme",
        field: "input",
        name: "theme",
        required: true,
      },
    ],
  },
  {
    name: "YouTube Content Ideas",
    desc: "Generate creative and engaging YouTube video content ideas.",
    category: "Content Creation",
    icon: "https://cdn-icons-png.flaticon.com/128/725/725282.png",
    aiPrompt:
      'Generate 10 YouTube video content ideas for the niche "{niche}" based on your provided outline.',
    slug: "generate-youtube-content-ideas",
    form: [
      {
        label: "Enter YouTube Niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter YouTube Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },

  // Learning Services
  {
    name: "AI Tutor",
    desc: "Ask any question and get personalized tutoring help powered by AI.",
    category: "Education",
    icon: "https://cdn-icons-png.flaticon.com/128/2140/2140767.png",
    aiPrompt:
      'Answer this question about "{subject}": "{userQuestion}". Provide detailed explanations.',
    slug: "generate-ai-tutor",
    form: [
      {
        label: "Enter Your Question",
        field: "input",
        name: "userQuestion",
        required: true,
      },
    ],
  },

  // Professional Tools
  {
    name: "Resume Builder",
    desc: "Generate professional resumes tailored to your career and job title.",
    category: "Career Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/3522/3522876.png",
    aiPrompt:
      'Generate a professional resume for the job title "{jobTitle}" in the "{industry}" industry.',
    slug: "generate-resume",
    form: [
      {
        label: "Enter Job Title",
        field: "input",
        name: "jobTitle",
        required: true,
      },
      {
        label: "Enter Industry",
        field: "input",
        name: "industry",
        required: true,
      },
    ],
  },

  // Email Services
  {
    name: "Email Generator",
    desc: "Generate professional emails for any occasion, from formal requests to follow-ups.",
    category: "Productivity",
    icon: "https://cdn-icons-png.flaticon.com/128/2829/2829361.png",
    aiPrompt:
      'Generate a professional email for "{recipientType}" regarding "{emailTopic}". Keep it concise and polite.',
    slug: "generate-email",
    form: [
      {
        label: "Enter Recipient Type",
        field: "input",
        name: "recipientType",
        required: true,
      },
      {
        label: "Enter Email Topic",
        field: "input",
        name: "emailTopic",
        required: true,
      },
    ],
  },

  // Social Media Ideas
  {
    name: "Facebook Post Ideas",
    desc: "Generate engaging Facebook post ideas that are shareable and thought-provoking.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/1779/1779672.png",
    aiPrompt:
      'Generate 5 creative Facebook post ideas for the theme "{postTheme}". Keep them fun and shareable.',
    slug: "generate-facebook-posts",
    form: [
      {
        label: "Enter Post Theme",
        field: "input",
        name: "postTheme",
        required: true,
      },
    ],
  },
  {
    name: "TikTok Script Generator",
    desc: "Generate engaging TikTok video scripts tailored to trends and niche topics.",
    category: "Content Creation",
    icon: "https://cdn-icons-png.flaticon.com/128/872/872004.png",
    aiPrompt:
      'Generate a short, creative TikTok video script based on the theme "{theme}". Include a catchy hook.',
    slug: "generate-tiktok-script",
    form: [
      {
        label: "Enter TikTok Theme",
        field: "input",
        name: "theme",
        required: true,
      },
    ],
  },
  {
    name: "Marketing Email Generator",
    desc: "Create persuasive marketing emails that drive conversions.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/1154/1154455.png",
    aiPrompt:
      'Generate a persuasive marketing email to promote "{product}" with a strong call to action.',
    slug: "generate-marketing-email",
    form: [
      {
        label: "Enter Product Name",
        field: "input",
        name: "product",
        required: true,
      },
      {
        label: "Enter Email Purpose",
        field: "input",
        name: "emailPurpose",
        required: true,
      },
    ],
  },

  // Coding Services
  {
    name: "Code Snippet Generator",
    desc: "Generate code snippets for various programming tasks and languages.",
    category: "Development",
    icon: "https://cdn-icons-png.flaticon.com/128/2914/2914619.png",
    aiPrompt:
      'Generate a code snippet for "{task}" in the programming language "{language}". Optimize the code for performance.',
    slug: "generate-code-snippet",
    form: [
      {
        label: "Enter Task Description",
        field: "input",
        name: "task",
        required: true,
      },
      {
        label: "Enter Programming Language",
        field: "input",
        name: "language",
        required: true,
      },
    ],
  },

  // Social Media Services
  {
    name: "Twitter Post Ideas",
    desc: "Generate engaging Twitter posts for trending topics or specific themes.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/733/733590.png",
    aiPrompt:
      'Generate 5 Twitter post ideas based on the theme "{postTheme}". Keep them brief and impactful.',
    slug: "generate-twitter-posts",
    form: [
      {
        label: "Enter Post Theme",
        field: "input",
        name: "postTheme",
        required: true,
      },
    ],
  },

  // Blog Services
  {
    name: "Blog Content Generator",
    desc: "Generate full blog posts based on your niche and outline.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/1042/1042399.png",
    aiPrompt:
      'Generate a blog post about "{niche}" using the following outline: "{outline}". Include headings and subheadings.',
    slug: "generate-blog-content",
    form: [
      {
        label: "Enter Blog Niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter Blog Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },

  // More Prompts (Additional)
  {
    name: "Newsletter Content Generator",
    desc: "Create compelling newsletter content to engage your subscribers.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/1344/1344094.png",
    aiPrompt:
      'Generate a newsletter content about "{topic}". Keep it engaging, informative, and shareable.',
    slug: "generate-newsletter-content",
    form: [
      {
        label: "Enter Newsletter Topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },

  {
    name: "LinkedIn Post Ideas",
    desc: "Generate professional LinkedIn post ideas to showcase your expertise.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/2740/2740705.png",
    aiPrompt:
      'Generate 5 LinkedIn post ideas for the theme "{theme}". Keep them professional and insightful.',
    slug: "generate-linkedin-posts",
    form: [
      {
        label: "Enter Post Theme",
        field: "input",
        name: "theme",
        required: true,
      },
    ],
  },

  {
    name: "TikTok Hashtag Generator",
    desc: "Generate trending TikTok hashtags for your videos to maximize reach and engagement.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/1234/1234012.png",
    aiPrompt:
      'Generate a list of 10 trending TikTok hashtags related to "{topic}".',
    slug: "generate-tiktok-hashtags",
    form: [
      {
        label: "Enter TikTok Video Topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Pinterest Pin Ideas",
    desc: "Generate creative Pinterest pin ideas to boost visibility and engagement.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/733/733548.png",
    aiPrompt:
      'Generate 5 Pinterest pin ideas related to the topic "{theme}". Include catchy titles and descriptions.',
    slug: "generate-pinterest-pins",
    form: [
      {
        label: "Enter Pinterest Pin Theme",
        field: "input",
        name: "theme",
        required: true,
      },
    ],
  },
  {
    name: "Snapchat Story Ideas",
    desc: "Generate creative and engaging Snapchat story ideas tailored to your audience.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/1209/1209392.png", // New icon for Snapchat Story Ideas
    aiPrompt:
      'Generate 5 Snapchat story ideas based on the theme "{theme}". Keep them fun and engaging.',
    slug: "generate-snapchat-stories",
    form: [
      {
        label: "Enter Snapchat Story Theme",
        field: "input",
        name: "theme",
        required: true,
      },
    ],
  },
  {
    name: "Product Description Generator",
    desc: "Generate compelling product descriptions that convert visitors into buyers.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/3071/3071301.png",
    aiPrompt:
      'Generate a persuasive product description for a product named "{productName}" in the category "{category}". Focus on benefits and key features.',
    slug: "generate-product-description",
    form: [
      {
        label: "Enter Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Enter Product Category",
        field: "input",
        name: "category",
        required: true,
      },
    ],
  },
  {
    name: "Landing Page Copy Generator",
    desc: "Generate effective landing page copy that captures attention and converts visitors.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/1174/1174147.png",
    aiPrompt:
      'Generate landing page copy for a product/service "{product}" targeting "{audience}". Include a headline, benefits, and call-to-action.',
    slug: "generate-landing-page-copy",
    form: [
      {
        label: "Enter Product/Service Name",
        field: "input",
        name: "product",
        required: true,
      },
      {
        label: "Enter Target Audience",
        field: "input",
        name: "audience",
        required: true,
      },
    ],
  },
  {
    name: "Email Newsletter Ideas",
    desc: "Generate ideas for engaging email newsletters to captivate your subscribers.",
    category: "Email Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/3622/3622903.png",
    aiPrompt:
      'Generate 5 email newsletter ideas on the topic "{topic}". Include catchy subject lines and brief descriptions.',
    slug: "generate-email-newsletters",
    form: [
      {
        label: "Enter Email Newsletter Topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "YouTube Video Title Generator",
    desc: "Generate catchy and SEO-friendly YouTube video titles to improve visibility and clicks.",
    category: "Content Creation",
    icon: "https://cdn-icons-png.flaticon.com/128/1366/1366351.png",
    aiPrompt:
      'Generate 5 catchy YouTube video titles for the topic "{topic}". Include relevant keywords for SEO.',
    slug: "generate-youtube-titles",
    form: [
      {
        label: "Enter YouTube Video Topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Blog Headline Generator",
    desc: "Generate compelling blog headlines that attract readers and increase click-through rates.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/9836/9836465.png",
    aiPrompt:
      'Generate 5 attention-grabbing blog headlines for the topic "{topic}". Focus on clarity and intrigue.',
    slug: "generate-blog-headlines",
    form: [
      {
        label: "Enter Blog Topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "LinkedIn Article Ideas",
    desc: "Generate article ideas for LinkedIn that highlight your expertise and engage your network.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/924/924874.png",
    aiPrompt:
      'Generate 5 LinkedIn article ideas related to the topic "{topic}". Ensure the ideas are professional and insightful.',
    slug: "generate-linkedin-articles",
    form: [
      {
        label: "Enter LinkedIn Article Topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Twitter Hashtag Generator",
    desc: "Generate popular and relevant hashtags for Twitter posts to increase reach.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/733/733563.png",
    aiPrompt:
      'Generate 10 trending Twitter hashtags related to "{topic}". Ensure they are popular and relevant.',
    slug: "generate-twitter-hashtags",
    form: [
      {
        label: "Enter Twitter Post Topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Google Ads Copy Generator",
    desc: "Generate compelling Google Ads copy that drives clicks and conversions.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/3705/3705582.png",
    aiPrompt:
      'Generate a Google Ads copy for the product/service "{product}" targeting "{audience}". Focus on clarity and urgency.',
    slug: "generate-google-ads-copy",
    form: [
      {
        label: "Enter Product/Service Name",
        field: "input",
        name: "product",
        required: true,
      },
      {
        label: "Enter Target Audience",
        field: "input",
        name: "audience",
        required: true,
      },
    ],
  },
  {
    name: "Press Release Generator",
    desc: "Generate professional press releases for announcing new products, features, or events.",
    category: "Public Relations",
    icon: "https://cdn-icons-png.flaticon.com/128/336/336685.png",
    aiPrompt:
      'Generate a press release for the launch of the product "{productName}". Include headline, body, and quotes.',
    slug: "generate-press-release",
    form: [
      {
        label: "Enter Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
    ],
  },
  {
    name: "Event Description Generator",
    desc: "Create event descriptions that attract attendees and boost registration.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/3037/3037346.png",
    aiPrompt:
      'Generate an event description for the event "{eventName}". Include details about the agenda and speakers.',
    slug: "generate-event-description",
    form: [
      {
        label: "Enter Event Name",
        field: "input",
        name: "eventName",
        required: true,
      },
    ],
  },
  {
    name: "Client Testimonial Generator",
    desc: "Generate authentic-sounding client testimonials for your website or marketing material.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/4310/4310167.png",
    aiPrompt:
      'Generate a testimonial for a client who used "{productName}". Make it sound natural and convincing.',
    slug: "generate-client-testimonials",
    form: [
      {
        label: "Enter Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Story Ideas",
    desc: "Generate engaging Instagram story ideas to increase interaction with your followers.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111456.png",
    aiPrompt:
      'Generate 5 Instagram story ideas for the theme "{theme}". Keep them interactive and visually appealing.',
    slug: "generate-instagram-stories",
    form: [
      {
        label: "Enter Instagram Story Theme",
        field: "input",
        name: "theme",
        required: true,
      },
    ],
  },
  {
    name: "Pinterest Board Ideas",
    desc: "Generate creative Pinterest board ideas to help organize and inspire your content.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/197/197548.png",
    aiPrompt:
      'Generate 5 Pinterest board ideas based on the theme "{theme}". Include suggested pin categories.',
    slug: "generate-pinterest-boards",
    form: [
      {
        label: "Enter Pinterest Board Theme",
        field: "input",
        name: "theme",
        required: true,
      },
    ],
  },
  {
    name: "Facebook Ad Ideas",
    desc: "Generate Facebook ad ideas designed to maximize engagement and conversions.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/733/733547.png",
    aiPrompt:
      'Generate 5 Facebook ad ideas for the product "{productName}". Focus on catchy visuals and compelling copy.',
    slug: "generate-facebook-ads",
    form: [
      {
        label: "Enter Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
    ],
  },
  {
    name: "YouTube Video Description Generator",
    desc: "Generate SEO-optimized YouTube video descriptions to improve visibility and rank.",
    category: "Content Creation",
    icon: "https://cdn-icons-png.flaticon.com/128/1199/1199063.png",
    aiPrompt:
      'Generate a YouTube video description for the video titled "{videoTitle}". Include relevant keywords for SEO.',
    slug: "generate-youtube-descriptions",
    form: [
      {
        label: "Enter Video Title",
        field: "input",
        name: "videoTitle",
        required: true,
      },
    ],
  },
  {
    name: "Twitter Bio Ideas",
    desc: "Generate unique and catchy Twitter bio ideas to showcase your personality.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/924/924874.png",
    aiPrompt:
      "Generate 5 creative Twitter bio ideas that reflect your interests and personality. Limit to 160 characters.",
    slug: "generate-twitter-bio",
    form: [
      {
        label: "Enter Your Interests",
        field: "input",
        name: "interests",
        required: true,
      },
    ],
  },
  {
    name: "Brand Slogan Generator",
    desc: "Generate a memorable slogan that embodies the essence of your brand.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/1372/1372116.png",
    aiPrompt:
      'Generate 5 slogan ideas for the brand "{brandName}". Focus on being catchy and brand-centric.',
    slug: "generate-brand-slogans",
    form: [
      {
        label: "Enter Brand Name",
        field: "input",
        name: "brandName",
        required: true,
      },
    ],
  },
  {
    name: "SEO Blog Title Generator",
    desc: "Generate SEO-optimized blog titles to increase traffic and clicks.",
    category: "SEO",
    icon: "https://cdn-icons-png.flaticon.com/128/726/726585.png",
    aiPrompt:
      'Generate 5 SEO-friendly blog titles for the topic "{topic}". Focus on incorporating relevant keywords.',
    slug: "generate-seo-blog-titles",
    form: [
      {
        label: "Enter Blog Topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "E-commerce Product Tagline Generator",
    desc: "Generate enticing taglines for your e-commerce products that capture attention and drive sales.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/2089/2089478.png",
    aiPrompt:
      'Generate 5 tagline ideas for the e-commerce product "{productName}". Focus on highlighting key benefits.',
    slug: "generate-product-taglines",
    form: [
      {
        label: "Enter Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
    ],
  },
  {
    name: "Job Interview Questions Generator",
    desc: "Generate a list of relevant interview questions for specific job positions.",
    category: "Human Resources",
    icon: "https://cdn-icons-png.flaticon.com/128/2438/2438061.png",
    aiPrompt:
      'Generate a list of 10 job interview questions for the position of "{jobTitle}".',
    slug: "generate-interview-questions",
    form: [
      {
        label: "Enter Job Title",
        field: "input",
        name: "jobTitle",
        required: true,
      },
    ],
  },
  {
    name: "Podcast Episode Ideas",
    desc: "Generate creative podcast episode ideas based on the theme you provide.",
    category: "Content Creation",
    icon: "https://cdn-icons-png.flaticon.com/128/2742/2742136.png",
    aiPrompt:
      'Generate 5 podcast episode ideas related to the theme "{theme}". Focus on intriguing topics that engage listeners.',
    slug: "generate-podcast-episodes",
    form: [
      {
        label: "Enter Podcast Theme",
        field: "input",
        name: "theme",
        required: true,
      },
    ],
  },
  {
    name: "Online Course Topic Ideas",
    desc: "Generate unique and in-demand online course ideas that appeal to learners.",
    category: "Education",
    icon: "https://cdn-icons-png.flaticon.com/128/1199/1199040.png",
    aiPrompt: 'Generate 5 online course topic ideas for the niche "{niche}".',
    slug: "generate-course-topics",
    form: [
      {
        label: "Enter Course Niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Business Name Generator",
    desc: "Generate creative and catchy business name ideas for your startup.",
    category: "Business",
    icon: "https://cdn-icons-png.flaticon.com/128/753/753289.png",
    aiPrompt:
      'Generate 5 unique business name ideas for a business in the field of "{industry}".',
    slug: "generate-business-names",
    form: [
      {
        label: "Enter Business Industry",
        field: "input",
        name: "industry",
        required: true,
      },
    ],
  },
  {
    name: "Email Subject Line Ideas",
    desc: "Generate compelling email subject lines that increase open rates.",
    category: "Email Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/862/862821.png",
    aiPrompt:
      'Generate 5 email subject lines for an email campaign about "{campaignTopic}".',
    slug: "generate-email-subject-lines",
    form: [
      {
        label: "Enter Campaign Topic",
        field: "input",
        name: "campaignTopic",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Reel Ideas",
    desc: "Generate fun and creative Instagram reel ideas to engage your audience.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/3035/3035525.png",
    aiPrompt:
      'Generate 5 Instagram Reel ideas for the theme "{theme}". Make them trendy and visually appealing.',
    slug: "generate-instagram-reels",
    form: [
      {
        label: "Enter Instagram Reel Theme",
        field: "input",
        name: "theme",
        required: true,
      },
    ],
  },
];
