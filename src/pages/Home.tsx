import ToolTimeLogo from "@/assets/home/ToolTime_Logo_Full.png";
import { Link } from "react-router";
import {maxXSize} from "@/pages/overview/PlannerInfo";
import KeaPlannerLogo from "@/assets/home/kea-planner_logo.svg";

function Home() {
  return (
    <main className="mx-auto" style={{ maxWidth: `${maxXSize}px` }}>
      <div className="px-3 space-y-20">
        <section
          id="top"
          className="text-center mx-auto md:max-w-[900px] space-y-6"
        >
          {/* Hero Title */}
          <div className="font-extrabold leading-[1.1] mt-10 text-[clamp(40px,6vw,60px)]">
            Innovative solutions designed with our users in mind first
          </div>
          {/* Lead Paragraph */}
          <h3>
            Kea Software is a small collective based in Switzerland, building
            software tools for schools and communities. We create practical
            applications shaped by real needs.
          </h3>
          {/* Actions */}
          <div className="flex items-center justify-center flex-wrap gap-3 mb-8">
            <a
              href="#projects"
              className="px-4 py-2.5 rounded-xl font-semibold bg-teal-800 dark:hover:bg-teal-900 text-white hover:bg-teal-500 transition"
            >
              Explore projects
            </a>
            <a
              href="https://github.com/Kea-Software"
              className="px-4 py-2.5 rounded-xl font-semibold border border-outline-button hover:bg-accent  transition"
            >
              Visit us on GitHub
            </a>
          </div>
          {/* Stats */}
          <ul className="flex justify-center gap-6 list-none text-center">
            <li>
              <span className="block text-2xl font-bold">2</span>
              <span className="block text-sm text-gray-500">Active projects</span>
            </li>
            <li>
              <span className="block text-2xl font-bold">3</span>
              <span className="block text-sm text-gray-500">Contributors</span>
            </li>
            <li>
              <span className="block text-2xl font-bold">2023</span>
              <span className="block text-sm text-gray-500">Building Since</span>
            </li>
          </ul>
        </section>
        <section id="projects">
          <h2 className="mb-1.5" >Recent work</h2>
          <h3 className="mb-6">Examples of what we've built</h3>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
        
            {/* Project 1 */}
            <a href="https://lesson-gear.github.io">
              <ProjectBox imagePath={"https://lesson-gear.github.io/commonUI/elements/heading.svg"} title={"Lesson Gear"} description={"An ad-free site with tools for teachers: make groups, seating arrangements, and randomly pick students fairly."} />
            </a>
            {/* Project 2 */}
            <Link to="/overview/planner">
              <ProjectBox imagePath={KeaPlannerLogo} title={"Kea Planner"} description={"A collaborative agenda app for teachers and students — organize, plan, and share assignments and events."} />
            </Link>
            {/* Project 3 */}
            <a href="https://kea-software.github.io/ToolTime">
              <ProjectBox imagePath={ToolTimeLogo} title={"ToolTime"} description={"A simple web solution to calculate machinery usage costs by specifying time and material used."} />
            </a>
          </div>
        </section>
        <section id="contact">
          <h2 className="mb-1.5">Contact</h2>
          <h3 className="mb-6">
            Reach out for collaboration, contributions, or research inquiries.
          </h3>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
            {/* Email */}
            <div className="p-4 border border-gray-200 rounded-xl bg-white dark:bg-gray-900 dark:border-gray-700">
              <strong className="block mb-1">Email</strong>
              <a
                href="mailto:fatales.waivers0e@icloud.com"
                className="text-teal-500 underline hover:text-teal-700"
              >
                fatales.waivers0e@icloud.com
              </a>
            </div>
            {/* GitHub */}
            <div className="p-4 border border-gray-200 rounded-xl bg-white dark:bg-gray-900 dark:border-gray-700">
              <strong className="block mb-1">GitHub</strong>
              <a
                href="https://github.com/Kea-Software"
                className="text-teal-500 underline hover:text-teal-700"
              >
                Our Github Profile
              </a>
            </div>
            {/* Location */}
            <div className="p-4 border border-gray-200 rounded-xl bg-white dark:bg-gray-900 dark:border-gray-700">
              <strong className="block mb-1">Location</strong>
              <span>Switzerland</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

type ProjectBoxProps = {
  imagePath: string;
  title: String;
  description: String;
}

function ProjectBox({ imagePath, title, description }: ProjectBoxProps) {
  return (
    <article className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-white transition-transform duration-200 hover:-translate-y-1 dark:bg-gray-900">
      <img
        className="w-full h-[180px] mb-3.5 object-contain"
        src={imagePath}
        alt="Lesson Gear Screenshot"
      />
      <h4 className="mb-2">{title}</h4>
      <p className="text-slate-600 normal-text">
        {description}
      </p>
    </article>
  )
}

export default Home;