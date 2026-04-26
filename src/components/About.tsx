import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          AI Fullstack Developer specialising in production-ready AI systems, with end-to-end ownership from data engineering and model design through to containerised deployment and MLOps. Currently at Stifel Europe (Frankfurt), delivering RAG pipelines, multimodal document processors, and scalable model deployments on cloud platforms.
        </p>
        <h4 className="subtitle">Core Skills</h4>
        <p className="para">
          Python, SQL, C/C++, Data Structures & Algorithms, PyTorch, TensorFlow,
          LangChain, LangGraph, FastAPI, Docker, AWS, ECS,
          MLOps, CI/CD
        </p>
      </div>
    </div>
  );
};

export default About;
