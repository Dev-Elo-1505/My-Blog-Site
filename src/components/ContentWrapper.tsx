import { ReactNode } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

interface ContentWrapperProps {
  children: ReactNode;
  title?: string;
  showBackButton?: boolean;
}

const ContentWrapper = ({
  children,
  title,
  showBackButton = false,
}: ContentWrapperProps) => {
  return (
    <div className="flex flex-col">
      {showBackButton && (
        <Link to="/" className="flex items-center mb-5 text-text-secondary">
          <IoArrowBackOutline className="text-2xl" />
          <span className="ml-2">Back</span>
        </Link>
      )}{" "}
      {title && <h1 className="text-4xl font-bold mb-5">{title}</h1>}
      {children}
    </div>
  );
};

export default ContentWrapper;
