import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Asmallplogo_blackball.png"; // Path to your logo image
import egami from "../assets/images/Asmallpfootballersprofile.png"; // Path to your image
import './Header.css'; // Assuming you have a CSS file for styling

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search input change
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    console.log('Search query:', searchQuery);
    // Implement your search functionality here, interacting with MongoDB as necessary
  };

  return (
    <div>
      {/* Fixed Header */}
      <header className="header">
        <a href="/">
          <img src={logo} alt="Logo" className="header-logo" />
        </a>
        <a href="/">
          <img src={egami} alt="Egami" className="header-egami" />
        </a>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleInputChange}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">🔍</button>
        </div>
      </header>

      {/* Fixed Navigation Bar */}
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>

        {/* Clubs Dropdown */}
        <div className="nav-dropdown">
          <Link to="/clubs" className="nav-link">Clubs</Link>
          <div className="dropdown-content">
            {/* Premier League */}
            <div className="nav-dropdown-sub">
              <Link to="/club/premierleague">Premier League</Link>
              <div className="dropdown-content-sub">
                <Link to="/club/premierleague/men">Men PL</Link>
                <Link to="/club/premierleague/women">Women PL</Link>
              </div>
            </div>

            {/* Higher League */}
            <div className="nav-dropdown-sub">
              <Link to="/club/higherleague">Higher League</Link>
              <div className="dropdown-content-sub">
                <Link to="/club/higherleague/men">Men HL</Link>
                <Link to="/club/higherleague/women">Women HL</Link>
              </div>
            </div>

            {/* First League */}
            <div className="nav-dropdown-sub">
              <Link to="/club/firstleague">First League</Link>
              <div className="dropdown-content-sub">
                <Link to="/club/firstleague/men">Men FL</Link>
                <Link to="/club/firstleague/women">Women FL</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Other Links */}
        <div className="nav-dropdown">
	            <Link to="/players" className="nav-link">Players</Link>
	            <div className="dropdown-content">
	              <Link to="/player/striker">Striker</Link>
	              <Link to="/player/midfielder">Midfielder</Link>
	              <Link to="/player/defender">Defender</Link>
	              <Link to="/player/goalkeeper">Goalkeeper</Link>
	            </div>
	          </div>
	          <div className="nav-dropdown">
	            <Link to="/coaches" className="nav-link">Coaches</Link>
	            <div className="dropdown-content">
	              <Link to="/coach/local">Local</Link>
	              <Link to="/coach/foreign">Foreign</Link>
	              <Link to="/coach/license-a">License A</Link>
	              <Link to="/coach/license-b">License B</Link>
	              <Link to="/coach/license-c">License C</Link>
	            </div>
	          </div>
	          <Link to="/login" className="nav-link">Log In</Link>
	          <Link to="/signup" className="nav-link">Sign Up</Link>
	          <Link to="/aboutus" className="nav-link">About Us</Link>
           <div className="nav-dropdown-smed">
              <Link to="#" className="nav-link">Contact Us</Link>
              <div className="dropdown-content-smed">
            <Link to="https://www.facebook.com/bereketdere/" className="social-link">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                    <title>Facebook</title>
                    <path fill="#1877F2" d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                  </svg>
              </Link>
            <Link to="https://www.facebook.com/profile.php?id=100064038480152/" className="social-link">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                    <title>Facebook Page</title>
                    <path fill="#1877F2" d="M22.675 0H1.325C.594 0 0 .594 0 1.325v21.351C0 23.406.594 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.892-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.917c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.675V1.325C24 .594 23.406 0 22.675 0z" />
                  </svg>
              </Link>
            <Link to="https://twitter.com/bereketdere" className="social-link">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                    <title>Twitter</title>
                    <path fill="#1DA1F2" d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"/>
                  </svg>
              </Link>
            <Link to="https://www.instagram.com/fifa_football_agent_bereket/" className="social-link">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                    <title>Instagram</title>
                    <path fill="#E4405F" d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.791-4-4s1.791-4 4-4c2.209 0 4 1.791 4 4s-1.791 4-4 4zm6.406-10.719a1.44 1.44 0 0 0-2.879 0 1.44 1.44 0 1 0 2.879 0z"/>
                  </svg>
              </Link>
            <Link to="https://github.com/BekiHabesha" className="social-link">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                    <title>GitHub</title>
                    <path fill="#181717" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.087-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.76-1.605-2.665-.3-5.467-1.332-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.005-.404 1.02.005 2.048.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.654 1.653.242 2.874.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.628-5.479 5.921.43.371.823 1.103.823 2.222 0 1.604-.015 2.896-.015 3.293 0 .319.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
              </Link>
            <Link to="https://www.linkedin.com/in/bereket-mekonnen-734884309" className="social-link">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                    <title>Linkedin</title>
                    <path fill="#0077B5" d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.77 24 1.77 24h20.46c.96 0 1.77-.77 1.77-1.73V1.73C24 .77 23.23 0 22.23 0zM7.12 20.48H3.56V9h3.56v11.48zM5.34 7.64c-1.14 0-2.06-.93-2.06-2.06 0-1.13.92-2.06 2.06-2.06s2.06.92 2.06 2.06c0 1.14-.92 2.06-2.06 2.06zM20.48 20.48h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.93v5.68h-3.55V9h3.41v1.56h.05c.48-.91 1.67-1.85 3.44-1.85 3.68 0 4.36 2.42 4.36 5.57v6.19z"/>
                  </svg>
              </Link>
            <Link to="https://discord.com/channels/@bekihabesha" className="social-link">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                    <title>Discord</title>
                    <path fill="#5865F2" d="M20.317 4.369A19.791 19.791 0 0 0 15.83 2a14.691 14.691 0 0 0-.745 1.524 17.716 17.716 0 0 0-5.15 0A14.777 14.777 0 0 0 9.19 2 19.794 19.794 0 0 0 4.703 4.37c-3 4.413-3.818 8.75-3.429 13.043A19.956 19.956 0 0 0 9.657 22a13.7 13.7 0 0 0 1.62-2.607 8.789 8.789 0 0 1-2.587-.978c.217-.158.428-.323.627-.5a12.196 12.196 0 0 0 10.217 0c.203.175.417.342.63.5a8.773 8.773 0 0 1-2.59.978c.465.925 1.02 1.8 1.617 2.607a19.958 19.958 0 0 0 8.383-4.587c.393-4.293-.43-8.63-3.431-13.043zM8.507 15.448c-1.202 0-2.186-1.131-2.186-2.521s.967-2.521 2.186-2.521c1.218 0 2.199 1.131 2.186 2.521 0 1.39-.967 2.521-2.186 2.521zm6.985 0c-1.202 0-2.186-1.131-2.186-2.521s.964-2.521 2.186-2.521c1.218 0 2.199 1.131 2.186 2.521 0 1.39-.968 2.521-2.186 2.521z" />
                  </svg>
              </Link>
            <Link to="https://t.me/FootBall_Manager_Agent_BEREKET_D" className="social-link">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                    <title>Telegram</title>
                    <path fill="#0088CC" d="M11.944 0C5.356 0 0 5.356 0 11.944c0 6.589 5.356 11.944 11.944 11.944s11.944-5.356 11.944-11.944C23.888 5.356 18.532 0 11.944 0zm5.159 8.129l-1.987 9.386c-.15.65-.557.814-1.12.507l-3.107-2.295-1.5 1.444c-.166.166-.305.305-.625.305l.224-3.174 5.788-5.241c.25-.224-.054-.35-.385-.125l-7.144 4.462L5.25 12.95c-.653-.202-.666-.653.143-.963l10.22-3.945c.458-.152.858.1.73.87z" />
                  </svg>
              </Link>
            <Link to="https://www.whatsapp.com/+251909912345" className="social-link">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                    <title>Whatsapp</title>
                    <path fill="#25D366" d="M12 .004C5.374.004 0 5.37 0 12c0 2.123.552 4.122 1.535 5.879L.062 23.938l6.25-1.614A11.948 11.948 0 0 0 12 23.996c6.626 0 12-5.366 12-11.996 0-6.63-5.374-11.996-12-11.996zm.006 21.546a9.55 9.55 0 0 1-4.869-1.296l-.35-.207-3.711.957.99-3.621-.232-.372A9.539 9.539 0 0 1 2.45 12c0-5.276 4.29-9.554 9.556-9.554 5.268 0 9.556 4.278 9.556 9.554 0 5.267-4.288 9.554-9.556 9.554z"/>
                    <path fill="#25D366" d="M17.472 13.304c-.282-.141-1.666-.822-1.924-.914-.257-.094-.444-.14-.63.141-.188.282-.726.914-.89 1.102-.164.188-.326.211-.607.07-.282-.141-1.191-.437-2.27-1.393-.84-.748-1.409-1.672-1.574-1.954-.164-.282-.017-.435.124-.576.128-.129.282-.327.423-.489.141-.164.188-.282.282-.47.094-.188.047-.352-.024-.494-.07-.141-.63-1.523-.862-2.082-.227-.547-.46-.472-.63-.48h-.538c-.188 0-.494.07-.752.352-.257.282-.99.968-.99 2.358 0 1.39 1.012 2.733 1.153 2.922.141.188 1.996 3.063 4.832 4.298.676.282 1.204.451 1.618.578.68.215 1.299.185 1.785.113.543-.08 1.666-.682 1.9-1.34.235-.658.235-1.224.164-1.34-.07-.117-.257-.188-.539-.329z"/>
                  </svg>
              </Link>
            <Link to="https://slack.com/bekihabesha" className="social-link">
                  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                    <title>Slack</title>
	  {/* Green */}
	    <path fill="#36C5F0" d="M30.7 73.7c0 5-4 9-9 9-5 0-9-4-9-9s4-9 9-9h9v9z"/>
	    <path fill="#36C5F0" d="M35.2 73.7c0-5 4-9 9-9s9 4 9 9v22.6c0 5-4 9-9 9s-9-4-9-9V73.7z"/>

	    {/* Red */}
	    <path fill="#2EB67D" d="M49 30.7c-5 0-9-4-9-9s4-9 9-9 9 4 9 9v9H49z"/>
	    <path fill="#2EB67D" d="M49 35.2c5 0 9 4 9 9s-4 9-9 9H26.4c-5 0-9-4-9-9s4-9 9-9H49z"/>

	    {/* Blue */}
	    <path fill="#ECB22E" d="M92.1 49c0-5 4-9 9-9s9 4 9 9-4 9-9 9h-9v-9z"/>
	    <path fill="#ECB22E" d="M87.7 49c0 5-4 9-9 9s-9-4-9-9V26.4c0-5 4-9 9-9s9 4 9 9V49z"/>

	    {/* Yellow */}
	    <path fill="#E01E5A" d="M73.7 92.1c5 0 9 4 9 9s-4 9-9 9-9-4-9-9v-9h9z"/>
	    <path fill="#E01E5A" d="M73.7 87.7c-5 0-9-4-9-9s4-9 9-9h22.6c5 0 9 4 9 9s-4 9-9 9H73.7z"/>
	         </svg>
              </Link>
                     </div>
                    </div>
                </nav>
    </div>
  );
};

export default Header;
