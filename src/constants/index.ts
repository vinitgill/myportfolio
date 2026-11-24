import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  backend,
  creator,
  web,
  azure,
  fastapi,
  git,
  githubTech,
  javascript,
  jupyter,
  numpy,
  opencv,
  pandas,
  python,
  scikitlearn,
  streamlit,
  tensorflow,
  higenlabs,
  codealpha,
  shoolini,
  translator,
  detection,
  sales,
  heart,
  crop,
  car,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Machine Learning",
    icon: backend,
  },
  {
    title: "Full-Stack AI Apps",
    icon: web,
  },
  {
    title: "Content Management",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  { name: "Python", icon: python },
  { name: "JavaScript", icon: javascript },
  { name: "TensorFlow", icon: tensorflow },
  { name: "Scikit-learn", icon: scikitlearn },
  { name: "OpenCV", icon: opencv },
  { name: "Pandas", icon: pandas },
  { name: "NumPy", icon: numpy },
  { name: "FastAPI", icon: fastapi },
  { name: "Streamlit", icon: streamlit },
  { name: "Jupyter", icon: jupyter },
  { name: "Git", icon: git },
  { name: "GitHub", icon: githubTech },
  { name: "Azure", icon: azure },
];

// Listed oldest to newest, as the timeline reads top to bottom.
const experiences: TExperience[] = [
  {
    title: "B.Tech CSE (AI/ML)",
    companyName: "Shoolini University",
    icon: shoolini,
    iconBg: "#E6DEDD",
    date: "2025 - 2029 (Expected)",
    points: [
      "CGPA 9.0/10 after Year 1, with SGPA 9.0 in Semester 1 and 9.5 in Semester 2.",
      "Microsoft Certified: Azure AI Fundamentals (AI-900).",
      "Microsoft Certified: Azure Fundamentals (AZ-900).",
    ],
  },
  {
    title: "Machine Learning Intern",
    companyName: "CodeAlpha",
    icon: codealpha,
    iconBg: "#383E56",
    date: "Jun 2026 - Jul 2026",
    points: [
      "Delivered three real-world projects spanning full-stack development, computer vision, and data analysis, each with a documented GitHub repository.",
      "Deployed applications to production using Render, Vercel, and Streamlit Community Cloud, resolving dependency conflicts, API model deprecations, and Git merge conflicts during release.",
      "Published project walkthroughs on LinkedIn to communicate technical results to a professional audience.",
    ],
  },
  {
    title: "Content Manager",
    companyName: "Higenlabs",
    icon: higenlabs,
    iconBg: "#E6DEDD",
    date: "Aug 2026 - Present",
    points: [],
  },
];

const projects: TProject[] = [
  {
    name: "AI Translator",
    description:
      "Full-stack multilingual translator with language detection, speech-to-text and text-to-speech. A FastAPI backend calls the Google Gemini API, with a vanilla JavaScript frontend. Live on Render and Vercel.",
    tags: [
      { name: "fastapi", color: "blue-text-gradient" },
      { name: "gemini-api", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: translator,
    sourceCodeLink: "https://github.com/vinitgill/Ai-Translator",
    liveLink: "https://ai-translator-vinit04.vercel.app",
  },
  {
    name: "Object Detection & Tracking",
    description:
      "Real-time detection and multi-object tracking built on YOLO11 and the BoT-SORT tracker, with OpenCV video processing and an interactive Streamlit interface.",
    tags: [
      { name: "yolo11", color: "blue-text-gradient" },
      { name: "opencv", color: "green-text-gradient" },
      { name: "streamlit", color: "pink-text-gradient" },
    ],
    image: detection,
  },
  {
    name: "Supermarket Sales Analysis",
    description:
      "Cleaned and analysed a supermarket sales dataset, then visualised the key sales trends in a Jupyter Notebook with a documented README.",
    tags: [
      { name: "pandas", color: "blue-text-gradient" },
      { name: "seaborn", color: "green-text-gradient" },
      { name: "jupyter", color: "pink-text-gradient" },
    ],
    image: sales,
  },
  {
    name: "Heart Disease Prediction",
    description:
      "Streamlit app that predicts heart disease risk with a machine learning model.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "scikit-learn", color: "green-text-gradient" },
      { name: "streamlit", color: "pink-text-gradient" },
    ],
    image: heart,
    sourceCodeLink: "https://github.com/vinitgill/heart-disease-prediction-app",
    liveLink: "https://heart-disease-prediction-vinitgill-pr.streamlit.app/",
  },
  {
    name: "Crop Prediction",
    description:
      "Machine learning model that predicts a suitable crop, deployed as a Streamlit app.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "scikit-learn", color: "green-text-gradient" },
      { name: "streamlit", color: "pink-text-gradient" },
    ],
    image: crop,
    sourceCodeLink: "https://github.com/vinitgill/Crop-Prediction",
    liveLink: "https://crop-prediction-vinitgill.streamlit.app/",
  },
  {
    name: "Car Price Prediction",
    description:
      "Machine learning model that estimates a car's price, deployed as a Streamlit app.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "scikit-learn", color: "green-text-gradient" },
      { name: "streamlit", color: "pink-text-gradient" },
    ],
    image: car,
    sourceCodeLink: "https://github.com/vinitgill/Car_Price_prediction",
    liveLink: "https://carpriceprediction-vinitgillpr.streamlit.app/",
  },
];

export { services, technologies, experiences, projects };
