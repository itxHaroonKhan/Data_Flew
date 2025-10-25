import Card from "@/components/Card";

export default function Home() {

  const Json = [
    {
      title: "Haroon Rasheed",
      role: "Full Stack Developer",
      imageUrl:
        "https://i.pinimg.com/1200x/84/08/f1/8408f172ab467e702b0bdc951f9a96ee.jpg",
    },
    {
      title: "Second Card",
      role: "Frontend Developer",
      imageUrl:
        "https://i.pinimg.com/474x/73/f6/bf/73f6bf747ff2e7cedb86e04ca83dbcc3.jpg",
    },
    {
      title: "Haroon Rasheed",
      role: "Full Stack Developer",
      imageUrl:
        "https://i.pinimg.com/736x/84/67/f4/8467f422c300311a0ff5b90e2735f96a.jpg",
    },
    {
      title: "Second Card",
      role: "Frontend Developer",
      imageUrl:
        "https://i.pinimg.com/474x/73/f6/bf/73f6bf747ff2e7cedb86e04ca83dbcc3.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 p-6">
   
      {Json.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          role={item.role}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
}
