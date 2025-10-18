const Title = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center text-center text-slate-600 gap-2">
      <h1 className="text-3xl sm:text-4xl font-medium">{title}</h1>
      <p className="max-sm max-w-2xl mt-3 text-slate-500">{description}</p>
    </div>
  );
};

export default Title;
