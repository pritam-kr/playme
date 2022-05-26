import React, { useState, useCallback } from "react";
import * as FaIcons from "react-icons/fa";
import "./Topbar.css";
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext, useVideoContext } from "../../Context/Index";

import { SearchResult } from "../SearchResult/SearchResult";
import debounce from "lodash.debounce";

const Topbar = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuthContext();
  const { setActiveSidebar, activeSidebar } = useVideoContext();

  // Implementing search Filter feature
  const [searchTerm, setSearchTerm] = useState({ query: "" });
  const [showSearchResult, setShowSearchResult] = useState(false);

  const SearchInputHandler = (event) => {
    if (/^\s/.test(event.target.value)) {
      setShowSearchResult(false);
      return;
    } else {
      if (event.target.value.length > 0) {
        setShowSearchResult(true);
        setSearchTerm((prev) => ({ ...prev, query: event.target.value }));
      } else {
        setShowSearchResult(false);
      }
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedChangeHandler = useCallback(
    debounce(SearchInputHandler, 500),
    []
  );

  return (
    //Top bar
    <header className="topbar">
      <div className="topbar-wrapper">
        <div className="topbar-left">
          <FaIcons.FaBars
            className="icons hamburger-icons"
            onClick={() => setActiveSidebar(!activeSidebar)}
          />
          <div className="logo-wrapper">
            <Link to="/explore" className="center">
              <FaIcons.FaPlayCircle className="icons topbar-logo-icon" />
              <h3 className="topbar-logo">PlayMe</h3>
            </Link>
          </div>
        </div>

        <div className="topbar-center">
          <div className="searchbar-wrapper">
            <input
              type="search"
              className="input video-search"
              placeholder="Search"
              onChange={debouncedChangeHandler}
            />

            {/*Search result start  */}
            {showSearchResult && (
              <SearchResult
                searchQuery={searchTerm}
                setSearchTerm={setSearchTerm}
                setShowSearchResult={setShowSearchResult}
              />
            )}
            {/*Search result end  */}
          </div>
        </div>

        <div className="topbar-right">
          <div className="auth-wrapper">
            {!isAuth ? (
              <button
                className="btn btn-primary btn-nav-login center"
                onClick={() => navigate("/login")}
              >
                <FaIcons.FaUserCircle className="icons login-icon" />{" "}
                <span className="login-text">Login</span>
              </button>
            ) : (
              <button
                className="btn btn-primary logged-user-icon center"
                onClick={() => navigate("/profile")}
              >
                <FaIcons.FaUserCircle className="icons login-icon" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export { Topbar };
