import Badge from "./Badge";
import { MessagesSquare } from "lucide-react";
import Title from "./Title";
import TestimonialsComponents from "./TestimonialsComponent";

const TestimonialSection = () => {
  return (
    <div
      id="testimonials"
      className="flex flex-col items-center justify-center min-h-screen px-4"
    >
      <Badge Icon={MessagesSquare}>Testimonial</Badge>
      <Title
        title={"Don't just take our words"}
        description={
          "Hear what our users say about us. We're always looking for ways to improve. If you have a positive experience with us, leave a review."
        }
      />
      <TestimonialsComponents />
    </div>
  );
};

export default TestimonialSection;
