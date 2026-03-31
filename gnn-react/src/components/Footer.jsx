import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              Global<span>News</span>
            </Link>
            <p>Your trusted source for news, analysis, and expert opinion from around the world.</p>
            <h3>Connect with us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Twitter"><i className="fa-brands fa-square-twitter"></i></a>
              <a href="#" className="social-icon" aria-label="Facebook"><i className="fa-brands fa-square-facebook"></i></a>
              <a href="#" className="social-icon" aria-label="Instagram"><i className="fa-brands fa-square-instagram"></i></a>
              <a href="#" className="social-icon" aria-label="LinkedIn"><i className="fa-brands fa-square-linkedin"></i></a>
              <a href="#" className="social-icon" aria-label="YouTube"><i className="fa-brands fa-square-youtube"></i></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Explore</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">News</Link></li>
              <li><Link to="/business">Business</Link></li>
              <li><Link to="/health">Health</Link></li>
              <li><Link to="/sports">Sports</Link></li>
              <li><Link to="/opinion">Opinion</Link></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>Get a short digest of top stories weekly.</p>
            <form id="newsletterForm" onSubmit={(e) => { e.preventDefault(); alert('Subscribed (demo)') }}>
              <input type="email" name="nl-email" placeholder="you@example.com" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>Email: <a href="mailto:info@globalnewsnetwork.com">info@globalnewsnetwork.com</a></p>
            <p>Phone: <a href="tel:+25472772480">+254 7277 2480</a></p>
            <p className="office">Nairobi, Kenya</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Global News Network - All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
