
const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-3 mb-10">
      <div className="w-2 h-8 bg-green-500 rounded"></div>
      <h1 className="text-3xl font-bold text-gray-800 tracking-wide">
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
