import Card from "@/components/Card";

export default function Home() {
  const Json = [
    {
      title: "Taha",
      role: "Frontend Developer",
      imageUrl:
        "https://i.pinimg.com/1200x/39/31/51/39315102ef98742ed606959230002188.jpg",
    },
    {
      title: "Alivi",
      role: "UI/UX Designer",
      imageUrl:
        "https://i.pinimg.com/736x/07/44/0a/07440abb58c42192bc95a2fdfdbc81fe.jpg",
    },
    {
      title: "Haroon Rasheed",
      role: "Full Stack Developer",
      imageUrl:
        "https://i.pinimg.com/1200x/67/be/be/67bebedec8c53d8ddffa86671c21d2b4.jpg",
    },
    {
      title: "Hamza",
      role: "Backend Engineer",
      imageUrl:
        "https://i.pinimg.com/736x/af/21/e9/af21e9689bd4017ae43cdb3ad30ad82c.jpg",
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
