import { Post, RenderCardsProps } from "../utils/types";
import Card from "./Card";

const RenderCards = ({ data, title }: RenderCardsProps) => {

  if (data?.length > 0) {
    return (
      <div>
        {data.map((post: Post) => (
          <Card key={post._id} {...post} />
        ))}
      </div>
    );
  } else {
    return (
      <h2 className="mt-5 font-bold text-[#6469ff] text-xl upper">{title}</h2>
    );
  }
};

export default RenderCards;
