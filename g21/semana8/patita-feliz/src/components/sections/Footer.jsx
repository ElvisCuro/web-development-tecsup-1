const Footer = ({ data }) => {
  const { title, year, author } = data;
  return (
    <footer className="py-3 mt-auto  text-center">
      <div className="container">
        <h2 className="fs-6">🦄 {title} © {year}. All rights reserved. Made with ❤️ by {author} 🦄</h2>
      </div>
    </footer>
  );
};

export default Footer;