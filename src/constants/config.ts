type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  socials: {
    label: string;
    href: string;
  }[];
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Vinit Gill — Portfolio",
    fullName: "Vinit Kumar Gill",
    email: "vinitgill048@gmail.com",
  },
  hero: {
    name: "Vinit Gill",
    p: ["I build machine learning models and", "full-stack AI applications"],
  },
  socials: [
    { label: "GitHub", href: "https://github.com/vinitgill" },
    { label: "LinkedIn", href: "https://linkedin.com/in/vinitgill" },
    { label: "LeetCode", href: "https://leetcode.com/u/vinitgill_04" },
    { label: "HackerRank", href: "https://hackerrank.com/profile/vinitgill048" },
    { label: "Instagram", href: "https://instagram.com/vinitgill_04" },
  ],
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a B.Tech Computer Science (AI/ML) student at Shoolini University
      with a 9.0 CGPA after my first year. I build and deploy end-to-end AI
      applications, including a Gemini-powered translation tool and a
      real-time object detection and tracking system using YOLO11. I work with
      Python, Scikit-learn, TensorFlow, OpenCV and FastAPI, and I'm looking for
      a Machine Learning or AI internship where I can apply these skills to
      real-world problems.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Experience.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `These projects show my skills through real-world examples, from a
    deployed full-stack translation app to computer vision and machine
    learning models. Where a repository or live demo exists, it is linked on
    the card.`,
    },
  },
};
