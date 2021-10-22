import Item from "antd/lib/list/Item";
import React from "react";
import { pTag } from "./tags";
import ProjectItem from "./ProjectItem";
function Projects() {
  const items = [
    {
      title: "Detect Vietnamese's food with YoloV4",
      desc: "We collected and labeled over 2000 thousand images of Vietnamese food then train them with the YoloV4 model. As a result, our mean accuracy on the test set is 82.53 % ",
      git: "https://github.com/PhucThanh/portfolio/blob/master/projects/%5BDEMO%5D%20Yolov4Food.ipynb",
      img: "/images/goicuon.png",
      tags: [pTag.Deep, pTag.Machine, pTag.Uni],
    },
    {
      title:
        "SIR on Graph- A model to help predict the speard of Covid-19 viruses.",
      desc: "The standard SIR model is not good enough since it can only stimulate the population in a closed environment. We improve the normal SIR model by trying to run them on a directional graph. The result is as good as we expected.",
      git: "https://github.com/PhucThanh/portfolio/blob/master/projects/SIR_on_graph.ipynb",
      nb: "https://nbviewer.org/github/PhucThanh/portfolio/blob/master/projects/SIR_on_graph.ipynb",
      img: "/images/sir.PNG",
      tags: [pTag.Uni],
    },
    {
      title: "Dimension reduction techniques comparison",
      desc: "I compared various dimension reduction algorithms. Their effectiveness, their usage, and run them on some examples.",
      nb: "https://nbviewer.org/github/PhucThanh/portfolio/blob/master/projects/Dimension_reduction.ipynb",
      img: "/images/reduce.PNG",
      tags: [pTag.Deep, pTag.Machine, pTag.Per],
    },
    {
      title: "Netflix data analysis and recommendation system",
      desc: "Analyze the Netflix movie dataset to see its trend and insight. After that, I build a simple recommendation system based on the KNN algorithm. As a result, we can recommend the next movie to the audience which we think they might want to watch!",
      nb: "https://kokes.github.io/nbviewer.js/viewer.html#aHR0cHM6Ly9naXRodWIuY29tL1BodWNUaGFuaC9wb3J0Zm9saW8vYmxvYi9tYXN0ZXIvcHJvamVjdHMvTmV0ZmxpeCUyMERhdGElMjBBbmFseXNpcy5pcHluYg==",
      img: "/images/netflix.png",
      tags: [pTag.data, pTag.Machine, pTag.Uni],
    },
    {
      title: "Covid-19 dashboard tracker",
      desc: "Visualize Covid-19 cases and deaths worldwide. A small web project during the pandemic.",
      live: "https://covid19-tracker-ef4a3.web.app/",
      git: "https://github.com/PhucThanh/Covid19-dashboard",
      img: `/images/covidmap.PNG`,
      tags: [pTag.Per, pTag.Web],
    },
  ];

  return (
    <>
      {items.map((item) => (
        <ProjectItem {...item} />
      ))}
    </>
  );
}
export default Projects;
