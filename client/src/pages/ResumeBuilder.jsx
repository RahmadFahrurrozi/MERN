import { useParams } from "react-router-dom";

const ResumeBuilder = () => {
  const { resumeid } = useParams();
  return (
    <div>
      <h1>Resume Builder Page {resumeid}</h1>
    </div>
  );
};

export default ResumeBuilder;
