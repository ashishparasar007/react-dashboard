import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import DvrIcon from "@mui/icons-material/Dvr";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">React Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LIST</p>
          <li>
            <GroupIcon className="icon" />
            <span> Users</span>
          </li>
          <li>
            <StoreMallDirectoryIcon className="icon" />
            <span> Products</span>
          </li>
          <li>
            <InventoryIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <DvrIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  );
};

export default Sidebar;
