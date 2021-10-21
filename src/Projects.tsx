import React from "react";
import ProjectItem from "./ProjectItem";
function Projects() {
  return (
    <>
      <ProjectItem
        title="Detect Vietnamese's food with YoloV4"
        desc="We collected and labeled over 2000 thousand images of Vietnamese food then train them with the YoloV4 model."
      />
      <ProjectItem
        title="SIR on Graph- A model to help predict the speard of Covid-19 viruses."
        desc="The standard SIR model is not good enough since it can only stimulate the population in a closed environment. 
      We improve the normal SIR model by trying to run them on a directional graph. The result is as good as we expected."
      />
    </>
  );
}
export default Projects;
