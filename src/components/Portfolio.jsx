import image from "../assets/working-desk.jpeg";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const imageAltText =
  "desk with multiple laptops, mobile, headphone, diary and some more gadgets";

const projectList = [
  {
    title: "tic-tac-toe: Web Based Game Application",
    description:
      "Tic-Tac-Toe is a web game with a score table for multiple rounds, that allows users to choose their game icons to play with.",
    url: "https://github.com/chauhanshilpa/tic-tac-toe",
  },
  {
    title: "To-do: Task Managemnet Web Application",
    description:
      "Full stack web application whic allows users to create, edit, complete, and delete tasks in multiple lists.",
    url: "https://github.com/chauhanshilpa/To-Do",
  },
  {
    title: "NoteKeeper: Note Keeping Web Application",
    description:
      "NoteKeeper is a user-friendly note-taking application to organize thoughts, ideas, and tasks with features for adding, editing, deleting, and customizing notes.",
    url: "https://github.com/chauhanshilpa/NoteKeeper-NextJS",
  },
  {
    title: "FabShop: E-commerce Website",
    description:
      "FabShop is a e-commerce website, featuring product search, wishlist, and multi-item cart and ordering for Men, Women, and Kids categories.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
];

const experienceList = [
  {
    name: "Lazarus Network",
    url: "https://github.com/chauhanshilpa/tic-tac-toe",
    role: "Frontend Web Developer Intern",
    description:
      "I was responsible for building responsive landing pages, implementing routing, and developing components using ReactJS and NextJS. Additionally, I integrated ZK login and a real-time random chat feature, while working closely with clients to gather requirements..",
  },
];

const Portfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const ref=useRef(null);
  const isInViewport = useInView(ref);

  return (
    <section className="padding w-[100%]" id="portfolio">
      <h2 style={{ textAlign: "center", fontWeight: "700" }}>Portfolio</h2>
      <div>
        <h3
          style={{ textAlign: "center", marginTop: "3rem", fontWeight: "600" }}
        >
          Experience
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingTop: "3rem",
          }}
        >
          <div
            className="w-[95%] sm:w-[60%] shadow"
            style={{
              border: "1px solid rgb(204, 204, 204)",
              borderRadius: "10px",
              margin: "auto",
              padding: "24px 16px",
              marginBottom: "3rem",
            }}
          >
            {experienceList.map((experience, id) => (
              <div className="box" key={id}>
                <a
                  href={experience.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 style={{ flexBasis: "40px", fontWeight: "600" }}>
                    {experience.name}
                  </h3>
                </a>
                <div style={{ flexBasis: "40px", marginTop: "0.8rem" }}>
                  {experience.role}
                </div>
                <p className="small">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        <h3 style={{ textAlign: "center", fontWeight: "600" }}>Projects</h3>
        <div className="flex md:flex-row gap-2 flex-col justify-center pt-[3rem] flex-wrap w-[100%]">
          <motion.div
            ref={ref}
            initial={false}
            animate={
              isInViewport && isLoaded && isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
            className="md:w-[45%] self-center ml-1"
          >
            <img
              src={image}
              alt={imageAltText}
              onLoad={() => setIsLoaded(true)}
            />
          </motion.div>
          <div className="w-[80%] container sm:w-[60%] md:w-[70%] lg:w-[50%] flex flex-col gap-3 sm:flex-row flex-wrap self-center">
            {projectList.map((project) => (
              <div
                className="box flex flex-col md:w-[48%] shadow"
                key={project.title}
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
                </a>
                <p className="small mt-2">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
