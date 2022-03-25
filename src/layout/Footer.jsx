function Footer() {
  return (
    <footer className="page-footer">
        <div className="footer-copyright">
          <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a 
            className="grey-text text-lighten-4 right" 
            target="_blank" 
            rel="noreferrer"
            href="https://github.com/oxymc/movies">
              GitHub
          </a>
          </div>
        </div>
      </footer>
  );
}

export default Footer;

