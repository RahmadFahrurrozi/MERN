import Badge from "./Badge";
import Title from "./Title";

const FeatureSection = () => {
  return (
    <div
      id="features"
      className="flex items-center justify-center flex-col pb-8 min-h-screen"
    >
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

      <Badge>Simple and Easy</Badge>
      <Title
        title={"Build your resume"}
        description={
          "Our streamlined process helps you create a professional resume in minutes with intelligent AI-powered tools and features."
        }
      />

      <div className="max-md:px-4 mt-10">
        <p className="bg-gradient-to-r from-slate-800 to-[#4D6EA3] text-transparent bg-clip-text text-xl text-left max-w-2xl">
          Trusted by world’s leading companies.
        </p>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-6 mt-2">
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-7.svg"
            alt="features showcase"
            className="hover:-translate-y-1 transition-all duration-300 max-md:w-full"
          />
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-8.svg"
            alt="features showcase"
            className="hover:-translate-y-1 transition-all duration-300 max-md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
