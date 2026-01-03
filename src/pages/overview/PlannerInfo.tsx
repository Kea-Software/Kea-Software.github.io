import PlannerMonthOverview from "@/assets/planner/features/monthview.png";
import PlannerDayView from "@/assets/planner/features/dayview.png";
import ToDoView from "@/assets/planner/features/todo.png";
import ClassView from "@/assets/planner/features/classes.png";
import { MaintainInfoBox, PriceComponent, FeatureSection } from "@/pages/overview/components/components.tsx";

// lucide
import { SquareUser, GraduationCap, User, Users } from "lucide-react";



export const maxXSize: number = 1250;

function PlannerInfo() {
  return (
    <main className="space-y-20">
      {/* outer container to set padding (for smaller mobile devices) */}
      <div className="px-3">
        {/* inner container that is set to maxwidth to constrain on larger devices */}
        <div className="mx-auto" style={{ maxWidth: `${maxXSize}px` }}>
          <Intro />
        </div>
      </div>

      <Features />
      <Maintain />
      <Price />
    </main>
  );
}

function Maintain() {
  return (
    <section id="maintain" className="border-t-2 border-color-line">
      <div className="px-3">
        <div className="mx-auto mt-10" style={{ maxWidth: `${maxXSize}px` }}>
          <h2 className="dark:bg-linear-to-r dark:from-cyan-400 dark:via-purple-500 dark:to-pink-500 max-w-150
                            bg-clip-text text-transparent
                            bg-linear-to-r from-indigo-500 via-purple-400 to-pink-400">Easy to maintain!</h2>
          <h3>Learn how to act as a maintainer</h3>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 mt-5">
            <MaintainInfoBox
              Icon={SquareUser}
              title="Maintainers"
              description={`
                Assign one maintainer per class who can then make sure entries are added correctly, people
                behave correctly and more. Maintainers have special permissions in their class. They can monitor the people in their class
                by removing and adding people. Additionally they can lock entries so that others can't edit them.`}
            />
            <MaintainInfoBox
              Icon={GraduationCap}
              title="Teachers"
              description={`
                Teachers have special status in their classes. They can lock entries so that students can't edit them. Additionally 
                they can make sure that entries belonging to their subjects are added correctly.`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}


function Features() {
  return (
    <section id="features" className="border-t-2 border-color-line">
      <div className="px-3">
        <div className="mx-auto mt-10" style={{ maxWidth: `${maxXSize}px` }}>
          <h2 className="dark:bg-linear-to-r dark:from-cyan-400 dark:via-purple-500 dark:to-pink-500 max-w-150
                            bg-clip-text text-transparent
                            bg-linear-to-r from-indigo-500 via-purple-400 to-pink-400">
                Make planning easy again!</h2>
          <h3>Explore Kea Planner's features</h3>

          <div className="grid gap-5 grid-cols-1 md:grid-cols-5 sm:grid-cols-1">
            <div className="md:mt-5 mt-2 md:col-[span_3]">
              <FeatureSection
                imagePath={PlannerMonthOverview}
                title="Monthly overview"
                description="Keep track of school events with our unique color coding system. Instantly get an overview of your upcoming week."
              />
            </div>
            <div className="md:mt-5 sm:mt-2 md:col-[span_2]">
              <FeatureSection
                imagePath={ToDoView}
                title="To-Do List"
                description="Don't lose sight of directly upcoming events by consulting our unique to-do list. First of its kind!"
              />
            </div>
            <div className="md:mt-5 sm:mt-2 md:col-[span_2]">
              <FeatureSection
                imagePath={PlannerDayView}
                title="Daily Overview"
                description="Add the most important information to an event and review it in the daily view. Fast and easy."
              />
            </div>
            <div className="md:mt-5 sm:mt-2 md:col-[span_3]">
              <FeatureSection
                imagePath={ClassView}
                title="Share with your class"
                description="Someone adds the event. Everyone has it. Combine users into classes to share events."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function Intro() {
  return (
    <section id="top" className="text-center mx-auto mt-10">
      <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
        <div className="md:w-1/2 space-y-4">
          <h1 className="dark:bg-linear-to-r dark:from-cyan-400 dark:via-purple-500 dark:to-pink-500
                            bg-clip-text text-transparent
                            bg-linear-to-r from-indigo-500 via-purple-400 to-pink-400">Kea Planner</h1>
          <div className="text-foreground text-3xl font-bold">Your central shared place to organise school events</div>
          <p>
            Add and organise tests, homework and much more with support for all subjects in the Swiss education system and share everything with your class.
          </p>

          <div className="flex items-center justify-center flex-wrap gap-3 mb-8">
            <a
              href="https://kea-software.github.io/planner/"
              className="px-4 py-2.5 rounded-xl bg-primary-button-background text-white hover:bg-primary-button-hover transition font-semibold"
            >
              Open Kea Planner
            </a>
            <a
              href="#features"
              className="px-4 py-2.5 rounded-xl border border-secondary-button-outline hover:bg-secondary-button-hover transition font-semibold"
            >
              Explore Features
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={PlannerMonthOverview} alt="Example image" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </section>
  );
}

function Price() {
  return (
    <section id="maintain" className="border-t-2 border-color-border">
      <div className="px-3">
        <div className="mx-auto mt-10" style={{ maxWidth: `${maxXSize}px` }}>
          <h2 className="dark:bg-linear-to-r dark:from-cyan-400 dark:via-purple-500 dark:to-pink-500 max-w-50
                            bg-clip-text text-transparent
                            bg-linear-to-r from-indigo-500 via-purple-400 to-pink-400">Pricing</h2>
          <h3>Our subscription models</h3>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-4 mt-5">
            <PriceComponent
              title="student free"
              items={["limited version", "upgrade to pro for ToDo-List, to mark entries as completed amd ics calendar integration"]}
              Icon={User}
              price="0 CHF per year"
              subtitle="For single students"
            />

            <PriceComponent
              title="student pro"
              items={["access to all features", "renewable license"]}
              Icon={User}
              price="3 CHF per year"
              subtitle="For single students"
            />

            <PriceComponent
              title="class pro"
              items={["access to all features", "42 CHF cheaper than getting student pro for everyone"]}
              Icon={Users}
              price="30 CHF per year"
              subtitle="For classes"
            />

            <PriceComponent
              title="school pro"
              items={["access to all features", "get your own self-hostable server instance", "define your own admins"]}
              Icon={GraduationCap}
              price="500 CHF per year + 20 CHF per Class"
              subtitle="For schools"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlannerInfo;