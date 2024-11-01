import { motion, useInView } from "framer-motion";
import {useRef} from "react"

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const description =
  "I'm a passionate web developer, dedicated to crafting captivating online experiences through innovative code. I enjoy creating unique and simplistic user interfaces in creative ways.";

const skillsList = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Next",
  "Redux",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
  "GIT",
  "GitHub",
  "VS Code",
];

const detailOrQuote =
  "I am passionate about solving problems through creative solutions to drive innovation. With my frontend development experience, I continually seek better ways to make technology more accessible and user-friendly.";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section id="about">
      <div
        className="w-[90%] md:w-[60%] rounded"
        style={{
          backgroundColor: "white",
          color: "black",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2 className="mb-3">About Myself</h2>
        <p className="text-[15px] sm:text-[24px]">{description}</p>
        <hr />
        <motion.ul
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-[0.9rem] md:3rem sm:text-[1.25rem]"
          style={{
            textAlign: "left",
            columns: 2,
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <motion.li className="list-disc" key={skill} variants={item}>
              {skill}
            </motion.li>
          ))}
        </motion.ul>
        <hr />
        <p className="text-[12px] sm:text-[20px]">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
