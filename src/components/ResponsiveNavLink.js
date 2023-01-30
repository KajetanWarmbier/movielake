import { Link } from "react-router-dom";

const ResponsiveNavLink = (props) => {
  return (
    <Link
      to={props.linkDirection}
      className={`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${
        props.isActive
          ? "border-indigo-400 text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700"
          : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"
      } text-base font-medium focus:outline-none transition duration-150 ease-in-out`}
    >
      {props.children}
    </Link>
  );
};

export default ResponsiveNavLink;
