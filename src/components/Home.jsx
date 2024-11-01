import PropTypes from "prop-types";

const Home = ({ name, title }) => {
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
        <h1 className="text-[5rem] sm:text-[7rem]">{name}</h1>
        <h2 className="text-[1.4rem] sm:text-[2rem]">{title}</h2>
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
