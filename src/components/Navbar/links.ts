import auditLog from "../../assets/images/navlinkImages/audits-logs.png";
import decisonModels from "../../assets/images/navlinkImages/decison-models.png";
import feesCharges from "../../assets/images/navlinkImages/fees-charges.png";
import feesPricing from "../../assets/images/navlinkImages/fees-pricing.png";
import guarantors from "../../assets/images/navlinkImages/guarantors.png";
import karma from "../../assets/images/navlinkImages/karma.png";
import loanProducts from "../../assets/images/navlinkImages/loan-products.png";
import loanRequests from "../../assets/images/navlinkImages/loan-requests.png";
import loans from "../../assets/images/navlinkImages/loans.png";
import organization from "../../assets/images/navlinkImages/organization.png";
import prefrences from "../../assets/images/navlinkImages/prefrences.png";
import report from "../../assets/images/navlinkImages/report.png";
import savingsProduct from "../../assets/images/navlinkImages/savings-products.png";
import savings from "../../assets/images/navlinkImages/savings.png";
import serviceAccounts from "../../assets/images/navlinkImages/service-accounts.png";
import services from "../../assets/images/navlinkImages/services.png";
import settlement from "../../assets/images/navlinkImages/settlement.png";
import transactions from "../../assets/images/navlinkImages/transactions.png";
import users from "../../assets/images/navlinkImages/users.png";
import whitelists from "../../assets/images/navlinkImages/whitelists.png";

interface NavLinkList {
  logo: string;
  pathName: string;
}

interface Links {
  categoryName: string;
  navLinks: NavLinkList[];
}

const allLinks: Links[] = [
  {
    categoryName: "customers",
    navLinks: [
      {
        logo: users,
        pathName: "users",
      },
      {
        logo: guarantors,
        pathName: "guarantors",
      },
      {
        logo: loans,
        pathName: "loans",
      },
      {
        logo: decisonModels,
        pathName: "decision models",
      },
      {
        logo: savings,
        pathName: "savings",
      },
      {
        logo: loanRequests,
        pathName: "loan requests",
      },
      {
        logo: whitelists,
        pathName: "whitelists",
      },
      {
        logo: karma,
        pathName: "karma",
      },
    ],
  },
  {
    categoryName: "businesses",
    navLinks: [
      {
        logo: organization,
        pathName: "organization",
      },
      {
        logo: loanProducts,
        pathName: "loan products",
      },
      {
        logo: savingsProduct,
        pathName: "savings products",
      },
      {
        logo: feesCharges,
        pathName: "Fees and charges",
      },
      {
        logo: transactions,
        pathName: "Transactions",
      },
      {
        logo: services,
        pathName: "services",
      },
      {
        logo: serviceAccounts,
        pathName: "service account",
      },
      {
        logo: settlement,
        pathName: "settlement",
      },
      {
        logo: report,
        pathName: "reports",
      },
    ],
  },
  {
    categoryName: "settings",
    navLinks: [
      {
        logo: prefrences,
        pathName: "prefrences",
      },
      {
        logo: feesPricing,
        pathName: "fees and pricing",
      },
      {
        logo: auditLog,
        pathName: "audit logs",
      },
    ],
  },
];

export default allLinks;
export type { Links, NavLinkList };
