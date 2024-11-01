import PropTypes from "prop-types";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Home = ({ name, title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section id="home" className="min-height">
      <div
        style={{
          position: "absolute",
          top: "8rem",
          left: "2rem",
          width: "17rem",
        }}
      >
        <motion.div
          ref={ref}
          className="box"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : "hidden"}
        >
          <h1 className="text-[5rem] sm:text-[7rem]">{name}</h1>
          <h2 className="text-[1.4rem] sm:text-[2rem]">{title}</h2>
        </motion.div>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
