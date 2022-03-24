function Footer() {
  return (
    <footer className="page-footer">
        <div className="footer-copyright">
          <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a 
            className="grey-text text-lighten-4 right" 
            target="_blank" 
            href="https://gitlab.com/skiff4ek/movies">
              GitLab
          </a>
          </div>
        </div>
      </footer>
  );
}

export default Footer;

