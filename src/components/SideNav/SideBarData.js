import {
  DashboardRounded,
  AccountBalanceWalletRounded,
  AttachMoneyRounded,
  PersonRounded,
  ContactsRounded,
  DescriptionRounded,
} from "@mui/icons-material";

export const sideBarData = [
  {
    title: "Dashboard",
    icon: <DashboardRounded fontSize="inherit" />,
    path: "/dashboard",
    class: "sidenav-item-dashboard",
  },
  {
    title: "Accounts",
    icon: <AccountBalanceWalletRounded fontSize="inherit" />,
    path: "/accounts",
    class: "sidenav-item-accounts",
  },
  {
    title: "Payroll",
    icon: <AttachMoneyRounded fontSize="inherit" />,
    path: "/payroll",
    class: "sidenav-item-payroll",
  },
  {
    title: "Reports",
    icon: <DescriptionRounded fontSize="inherit" />,
    path: "/reports",
    class: "sidenav-item-reports",
  },
  {
    title: "Advisor",
    icon: <PersonRounded fontSize="inherit" />,
    path: "/advisor",
    class: "sidenav-item-advisor",
  },
  {
    title: "Contacts",
    icon: <ContactsRounded fontSize="inherit" />,
    path: "/contacts",
    class: "sidenav-item-contacts",
  },
];
