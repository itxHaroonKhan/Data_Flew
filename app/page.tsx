import Card from "@/components/Card";

export default function Home() {
  const Json = [
    {
      title: "Haroon Rasheed",
      role: "Full Stack Developer",
      imageUrl:
        "https://i.pinimg.com/736x/1c/76/17/1c7617de04b7d602c78d09f11ab6f8da.jpg",
    },
    {
      title: "Ahsan Ali",
      role: "Frontend Developer",
      imageUrl:
        "https://i.pinimg.com/736x/f3/aa/3e/f3aa3e0ea574b2fdf91b77488b14af3f.jpg",
    },
    {
      title: "Sara Ahmed",
      role: "UI/UX Designer",
      imageUrl:
        "https://i.pinimg.com/736x/55/4e/bb/554ebb930f06b5a44404b6f3c235f43f.jpg",
    },
    {
      title: "Bilal Khan",
      role: "Backend Engineer",
      imageUrl:
        "https://i.pinimg.com/736x/2d/18/4e/2d184e7a6e6f10b9a69bfe62a64cf50c.jpg",
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
