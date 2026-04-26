import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  const projects = [
    {
      title: "Mini-Claude - Coding Agent With Debug Flow Visualizer",
      category: "AI Agent / CLI Tool",
      desc: "A coding agent built with the Anthropic SDK on AWS Bedrock. Features an interactive terminal REPL where Claude can read/write files, run shell commands, and an animated step-by-step debug flow visualization of the agent's own execution.",
      tools: "Python, Anthropic SDK, AWS Bedrock",
      image: "/images/mini-claude.png",
      video: "mini-claude.mp4",
      link: "https://github.com/modiparth527/mini-claude",
    },
    {
      title: "Self-Attention from Scratch",
      category: "Research / Implementation",
      desc: "Implemented self-attention mechanism and experiments with transformers.",
      tools: "PyTorch, Python, NumPy",
      image: "/images/self-attention.png",
      video: "self-attention.mp4",
      link: "https://miro.com/app/board/uXjVIqIgXkk=/?share_link_id=976141078839",
    },
    {
      title: "LLM Chatbot (Scalable Text-to-SQL Generation)",
      category: "RAG / Backend",
      desc: "Modular chatbot with LangGraph, Ollama/Google Gemma, containerized via Docker.",
      tools: "LangGraph, FastAPI, Docker",
      image: "/images/placeholder.webp",
    },
    {
      title: "Multimodal RAG Pipeline",
      category: "Production",
      desc: "Document processing pipeline storing summaries in a vector store for efficient retrieval.",
      tools: "LangGraph, Vector DBs",
      image: "/images/placeholder.webp",
    },
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((p, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{p.tools}</p>
                <p className="work-desc">{p.desc}</p>
              </div>
              <WorkImage image={p.image} alt={p.title} video={(p as any).video} link={p.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
