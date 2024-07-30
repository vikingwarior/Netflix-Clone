import { Link } from "react-router-dom";

const BrowseOption = ({ label, url }) => {
  return (
    <li className="mr-5 cursor-pointer hover:text-gray-700">
      <Link to={url}>{label}</Link>
    </li>
  );
};

export default BrowseOption;
