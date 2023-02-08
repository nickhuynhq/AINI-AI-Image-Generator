import Card from "./Card";

const RenderCards = ({ data, title }) => {
    if (data?.lenght > 0)
      return data.map((post: any) => <Card key={post._id} {...post} />);
  
    return (
      <h2 className="mt-5 font-bold text-[#6469ff] text-xl upper">{title}</h2>
    );
  };

  export default RenderCards