import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    href: "/Teacherdashboard/starters",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Profile",
    href: "/Teacherdashboard/tables",
    icon: "bi bi-card-text",
  },  
  {
    title: "Students Projects",
    href: "/Teacherdashboard/abouts",
    icon: "bi bi-card-text",
  },
  {
    title: "Assignments form",
    href: "/Teacherdashboard/formss",
    icon: "bi bi-textarea-resize",
  },
  {
    title: "Assignments",
    href: "/Teacherdashboard/cardss",
    icon: "bi bi-layout-split",
  },
  {
    title: "Notifications and Alert",
    href: "/Teacherdashboard/alertss",
    icon: "bi bi-bell",
  },
  {
    title: "Quick Links",
    href: "/Teacherdashboard/breadcrumbss",
    icon: "bi bi-link",
  },
  {
    title: "Inbox",
    href: "/Teacherdashboard/badgess",
    icon: "bi bi-patch-check",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          <Button
            color="danger"
            tag="a"
            className="mt-3"
            href="/"
          >
            Logout
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
