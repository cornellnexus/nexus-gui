import HomeIcon from "@mui/icons-material/Home";
import TerminalIcon from "@mui/icons-material/Terminal";
import SettingsIcon from "@mui/icons-material/Settings";

export const SidebarData = [
  {
    title: "Overview",
    icon: <HomeIcon />,
    link: "/overview",
  },
  {
    title: "Shell",
    icon: <TerminalIcon />,
    link: "/shell",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/settings",
  },
];
