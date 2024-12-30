import React from "react";

function page() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="font-inter text-[#007bff] text-[36px] font-bold text-center mb-6">
          Artificial Intelligence (AI)
        </h1>

        <div className="space-y-8">
          {/* Introduction */}
          <div className="p-6 rounded-[4px] shadow-md">
            <h2 className="font-inter text-[24px] text-[#007bff] font-semibold mb-4">
              What is AI?
            </h2>
            <p className="font-inter text-[18px] text-[#333333] font-normal">
              Artificial Intelligence (AI) is a scientific field focused on
              developing machines and computers that can perform tasks that
              would normally require human intelligence. AI systems utilize
              algorithms, large datasets, and computational power to learn and
              adapt over time. The goal is to enable machines to make decisions,
              solve problems, and enhance human productivity through automation
              and innovation.
            </p>
          </div>

          {/* AI Applications */}
          <div className="p-6 rounded-[4px] shadow-md">
            <h2 className="font-inter text-[24px] text-[#007bff] font-semibold mb-4">
              AI Applications
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Data Analytics:</strong> AI analyzes vast amounts of
                data to extract valuable insights or trigger automated actions.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Predictions and Forecasting:</strong> AI makes faster,
                more accurate predictions based on historical data.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Natural Language Processing:</strong> AI automates tasks
                and enables human-like conversations through language.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Computer Vision:</strong> AI interprets visual data
                (images or video) for applications like facial recognition or
                object detection.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Automation:</strong> AI handles repetitive tasks, such
                as data collection or warehouse stock-picking, with high
                efficiency.
              </li>
            </ul>
          </div>

          {/* AI Techniques */}
          <div className="p-6 rounded-[4px] shadow-md">
            <h2 className="font-inter text-[24px] text-[#007bff] font-semibold mb-4">
              AI Techniques
            </h2>
            <p className="font-inter text-[18px] text-[#333333] font-normal">
              AI techniques are built on the foundation of data and
              computational power. Various methods like machine learning, neural
              networks, and deep learning are employed to analyze, process, and
              make decisions. The most critical aspect of these techniques is
              their ability to continuously learn and improve as they process
              more data.
            </p>
          </div>

          {/* Types of AI */}
          <div className="p-6 rounded-[4px] shadow-md">
            <h2 className="font-inter text-[24px] text-[#007bff] font-semibold mb-4">
              Types of AI
            </h2>
            <p className="font-inter text-[18px] text-[#333333] font-normal">
              AI can be divided into different types based on its capability:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Reactive Machines:</strong> These are the most basic AI
                systems, designed to perform specific tasks within a narrow
                scope. They don`t retain memories and react to situations based
                on pre-defined rules.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Limited Memory:</strong> AI with limited memory can
                store and learn from past experiences to improve its responses
                over time.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Theory of Mind:</strong> This AI type aims to understand
                and simulate human emotions and social interactions, though it`s
                still under development.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Self-aware AI:</strong> The most advanced form, which
                would have its own consciousness and self-awareness (yet to be
                achieved).
              </li>
            </ul>
          </div>

          {/* History of AI */}
          <div className="p-6 rounded-[4px] shadow-md">
            <h2 className="font-inter text-[24px] text-[#007bff] font-semibold mb-4">
              History of AI
            </h2>
            <p className="font-inter text-[18px] text-[#333333] font-normal">
              AI has a rich history, dating back to the creation of the first AI
              programming language in 1958. In 1966, the first chatbot, ELIZA,
              was created. Since then, the field has evolved dramatically, with
              breakthroughs like deep learning in the 2000s and advancements in
              natural language processing and computer vision.
            </p>
          </div>

          {/* AI Benefits */}
          <div className="p-6 rounded-[4px] shadow-md">
            <h2 className="font-inter text-[24px] text-[#007bff] font-semibold mb-4">
              Benefits of AI
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>24/7 Availability:</strong> AI systems never need to
                sleep, providing constant availability.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Reduced Human Error:</strong> AI systems reduce the
                chances of mistakes, especially in complex tasks like data
                entry.
              </li>
              <li className="font-inter text-[18px] text-[#333333] font-normal">
                <strong>Enhanced Decision-Making:</strong> AI uses data to make
                faster, more accurate decisions, supporting human
                decision-makers.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
