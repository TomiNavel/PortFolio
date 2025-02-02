"use client";

const SkillCard = ({ icon: Icon, title, children }) => {
  return (
    <div className="p-6 border border-gray-300 rounded-lg shadow-md text-center">
      <Icon className="w-12 h-12 mx-auto text-gray-700" />
      <h3 className="mt-4 text-lg font-bold">{title}</h3>
      <p className="mt-2 text-gray-600">{children}</p>
    </div>
  );
};

export default SkillCard;
