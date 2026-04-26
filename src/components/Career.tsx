import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Fullstack Developer</h4>
                <h5>Stifel Europe, Frankfurt</h5>
              </div>
              <h3>Jul 2025 - Present</h3>
            </div>
            <p>
              Financial advisors needed personalised, data-driven investment recommendations
              at scale. Built a portfolio-aware agent using Agentcore and LangGraph, a
              multimodal RAG pipeline for document retrieval, and a Text-to-SQL chatbot
              enabling real-time trend analysis through natural language — all shipped to
              production.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Software Developer</h4>
                <h5>ISRA Vision - Atlas Copco Group, Germany</h5>
              </div>
              <h3>Oct 2023 - Jun 2025</h3>
            </div>
            <p>
              Researched and prototyped vision transformer architectures for
              synthetic data generation. Deployed computer vision models and
              integrated rule-based decision agents for automated inspection
              workflows.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Development Engineer</h4>
                <h5>Atlas Copco, Germany</h5>
              </div>
              <h3>Mar 2022 - Sep 2023</h3>
            </div>
            <p>
             Car surface inspection required reliable 2D/3D defect detection on an
            unstructured 800GB image dataset. Cleaned and prepared the dataset, then
            implemented ResNet-based detection models with Adaptive Gamma Correction for
            image enhancement — achieving a 10% accuracy improvement on test data.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>Spryfox GmbH, Darmstadt</h5>
              </div>
              <h3>Oct 2021 - Mar 2022</h3>
            </div>
            <p>
             Demonstrating production-readiness of an AI pipeline from scratch.
              Built a modular, end-to-end data science pipeline with structured logging,
              exception handling, and AWS deployment — establishing clean engineering
              practices as the foundation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
