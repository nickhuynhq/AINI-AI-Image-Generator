import Card from "./Card";

interface RenderCardsProps {
  data:
    | {
        id: string;
        name: string;
        prompt: string;
        photo: string;
        __v: string;
      }[]
    | [];
  title: string;
}

interface Post {
  id: string;
  name: string;
  prompt: string;
  photo: string;
  __v: string;
}

const RenderCards = ({ data, title }: RenderCardsProps) => {
  console.log(data);

  if (data?.length > 0) {
    return (
      <div>
        {data.map((post: Post) => (
          <Card key={post.id} {...post} />
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
