{
  /*import { BrowserRouter as Router, Route, Link } from "react-router-dom";*/
}

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2023</p>
      {/*Link not working, there is no time */}
      {/*<link to="/about">About</link>*/}
      <a href="/about">About</a>
    </footer>
  );
};

export default Footer;
