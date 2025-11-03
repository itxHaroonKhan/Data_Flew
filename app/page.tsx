import Card from "@/components/Card";

export default function Home() {
  const Json = [
    {
      title: "Taha",
      role: "Frontend Developer",
      imageUrl:
        "https://i.pinimg.com/736x/2a/0b/15/2a0b157c43e845b1adf8f45d4d89c2a4.jpg",
    },
    {
      title: "Alivi",
      role: "UI/UX Designer",
      imageUrl:
        "https://i.pinimg.com/736x/b3/49/4c/b3494c9f5539a89a9b943f77d0a6c88a.jpg",
    },
    {
      title: "Haroon Rasheed",
      role: "Full Stack Developer",
      imageUrl:
        "https://i.pinimg.com/736x/1c/76/17/1c7617de04b7d602c78d09f11ab6f8da.jpg",
    },
    {
      title: "Hamza",
      role: "Backend Engineer",
      imageUrl:
        "https://i.pinimg.com/736x/64/f7/4f/64f74f41a2a059981ab95a6ac72b37de.jpg",
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
