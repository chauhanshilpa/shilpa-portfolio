
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
  return (
    <section id="about">
      <div
        className="w-[90%] md:w-[60%]"
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
        <ul className="text-[0.9rem] md:3rem sm:text-[1.25rem]"
          style={{
            textAlign: "left",
            columns: 2,
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li className="list-disc" key={skill}>
              {skill}
            </li>
          ))}
        </ul>
        <hr />
        <p className="text-[12px] sm:text-[20px]">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
