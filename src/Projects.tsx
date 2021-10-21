import React from "react";
import ProjectItem from "./ProjectItem";
function Projects() {
  return (
    <>
      <ProjectItem
        title="Detect Vietnamese's food with YoloV4"
        desc="We collected and labeled over 2000 thousand images of Vietnamese food then train them with the YoloV4 model."
        git="https://github.com/PhucThanh/portfolio/blob/master/projects/%5BDEMO%5D%20Yolov4Food.ipynb"
        img="https://github.com/PhucThanh/portfolio/blob/master/projects/goicuon.png?raw=true"
      />
      <ProjectItem
        title="SIR on Graph- A model to help predict the speard of Covid-19 viruses."
        desc="The standard SIR model is not good enough since it can only stimulate the population in a closed environment. 
      We improve the normal SIR model by trying to run them on a directional graph. The result is as good as we expected."
        git="https://github.com/PhucThanh/portfolio/blob/master/projects/SIR_on_graph.ipynb"
        nb="https://kokes.github.io/nbviewer.js/viewer.html#aHR0cHM6Ly9naXRodWIuY29tL1BodWNUaGFuaC9wb3J0Zm9saW8vYmxvYi9tYXN0ZXIvcHJvamVjdHMvU0lSX29uX2dyYXBoLmlweW5i"
        img="https://github.com/PhucThanh/portfolio/blob/master/projects/sir.PNG?raw=true"
      />
      <ProjectItem
        title="Dimension reduction techniques comparison"
        desc="I compared various dimension reduction algorithms. Their effectiveness, their usage, and run them on some examples."
        nb="https://nbviewer.org/github/PhucThanh/portfolio/blob/master/projects/Dimension_reduction.ipynb"
        img="https://github.com/PhucThanh/portfolio/blob/master/projects/reduce.PNG?raw=true"
      />
    </>
  );
}
export default Projects;
