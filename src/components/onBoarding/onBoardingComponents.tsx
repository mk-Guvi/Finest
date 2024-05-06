import React from "react";

interface InformationCardProps {
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  fetchedVia: string;
  lastUpdated: string;
}

const InformationCard: React.FC<InformationCardProps> = ({
  icon,
  title,
  subtitle,
  fetchedVia,
  lastUpdated,
}) => {
  return (
    <div className="rounded-2xl text-twilight-blue flex flex-col gap-4 w-11/12 bg-white shadow-lg p-4 px-6">
      <div className="flex items-center gap-4">
        {icon && (
          <div className="rounded-full p-2 bg-twilight-blue text-[#D7EFA3]">
            {icon}
          </div>
        )}
        <div className="flex flex-col gap-0.5">
          <p className="font-semibold">{title}</p>
          <p className="font-normal text-xs">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex flex-col gap-0.5">
          <p>Fetched Via</p>
          <p className="font-semibold">{fetchedVia}</p>
        </div>
        <div className="flex flex-col gap-0.5">
          <p>Last Updated</p>
          <p className="font-semibold">{lastUpdated}</p>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
