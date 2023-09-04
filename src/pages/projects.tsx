import BaseLayout from "../ layouts/baseLayout";
import ProjectsContent from "../components/projects-content";
import { getPageTitle } from "../utils/getPageTitle";
import HelmetPageTitle from "../components/helmetPageTitle";

const PAGE_TITLE_EN = getPageTitle("Projects");
const PAGE_TITLE_RU = getPageTitle("Проекты");

const Projects = () => {
  return (
    <BaseLayout>
      <HelmetPageTitle titleEN={PAGE_TITLE_EN} tileRU={PAGE_TITLE_RU} />

      <ProjectsContent />
    </BaseLayout>
  );
};

export default Projects;
