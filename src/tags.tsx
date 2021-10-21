enum pTag {
  Machine = "Machine learning",
  Deep = "Deep learning",
  Web = "Web",
  Uni = "University project",
  Per = "Personal project",
  data = "Data science",
}
function getColor(c: pTag) {
  switch (c) {
    case pTag.Machine:
      return "red";
    case pTag.Deep:
      return "purple";
    case pTag.Web:
      return "green";
    case pTag.Uni:
      return "gold";
    case pTag.Per:
      return "geekblue";
    case pTag.data:
      return "volcano";
  }
}
export { pTag, getColor };
