import PropTypes from 'prop-types';

const SectionWrapper = ({ children }) => {
  return (
    <section className="py-20">
      <div className="container px-2 mx-auto flex flex-col gap-8">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;

SectionWrapper.propTypes = {
  children: PropTypes.node
};