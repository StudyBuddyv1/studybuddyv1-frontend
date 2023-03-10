import sidebarStyle from "./sidebar.module.css";
import darkLogo from "../../../../assets/general/AuthBlackLogo.png";
import { NavLink } from "react-router-dom";

// import link icons
import bookmark from "../../../../assets/icons/bookmark.svg";
import circle from "../../../../assets/icons/circle.svg";
import community from "../../../../assets/icons/community.svg";
import feed from "../../../../assets/icons/feed.svg";
import topics from "../../../../assets/icons/topics.svg";
import contributors from "../../../../assets/icons/contributors.svg";
import settings from "../../../../assets/icons/settings.svg";
import profile from "../../../../assets/icons/profile.svg";
import notification from "../../../../assets/icons/notification.svg";
import quiz from "../../../../assets/icons/quiz.svg";
import resources from "../../../../assets/icons/resources.svg";

export default function Sidebar() {
  let activeStyle = {
    color: "#474AA3",
    fontWeight: "600",
  };

  return (
    <div className={sidebarStyle.container}>
      <img src={darkLogo} alt="" className={sidebarStyle.img} />
      <nav className={sidebarStyle.nav}>
        <div className={sidebarStyle.navGroup}>
          <h2>OVERVIEW</h2>
          <div className="">
            <NavLink
              to="/dashboard"
              className={sidebarStyle.link}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              end
            >
              <img src={feed} alt="" className="" />
              Feed
            </NavLink>
            <NavLink
              to="/dashboard/community"
              className={sidebarStyle.link}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <img src={community} alt="" className="" />
              Community
            </NavLink>
            <NavLink
              to="/dashboard/topics"
              className={sidebarStyle.link}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <img src={topics} alt="" className="" />
              Topics
            </NavLink>
            <NavLink
              to="/dashboard/bookmarks"
              className={sidebarStyle.link}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <img src={bookmark} alt="" className="" />
              Bookmarks
            </NavLink>
          </div>
        </div>
        <div className={sidebarStyle.navGroup}>
          <h2>LEARNING</h2>
          <div className="">
            <NavLink
              to="/dashboard/circle"
              className={sidebarStyle.link}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <img src={circle} alt="" className="" />
              Learning Circle
            </NavLink>
            <NavLink
              to="/dashboard/resources"
              className={sidebarStyle.link}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <img src={resources} alt="" className="" />
              Learning Resources
            </NavLink>
            <NavLink
              to="/dashboard/contributors"
              className={sidebarStyle.link}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <img src={contributors} alt="" className="" />
              Contributors
            </NavLink>
            <NavLink
              to="/dashboard/quiz"
              className={sidebarStyle.link}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <img src={quiz} alt="" className="" />
              Quiz
            </NavLink>
          </div>
        </div>
        <div className={sidebarStyle.navGroup}>
          <h2>ACCOUNT</h2>
          <div className="">
            <NavLink
              to="/dashboard/profile"
              className={sidebarStyle.link}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <img src={profile} alt="" className="" />
              Profile
            </NavLink>
            <NavLink
              to="/dashboard/settings"
              className={sidebarStyle.link}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <img src={settings} alt="" className="" />
              Settings
            </NavLink>
            <NavLink
              to="/dashboard/notifications"
              className={sidebarStyle.link}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <img src={notification} alt="" className="" />
              Notifications
            </NavLink>
            <NavLink
              to="/"
              className={sidebarStyle.logout}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Log Out
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
