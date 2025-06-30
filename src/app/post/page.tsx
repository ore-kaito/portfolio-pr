
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PortfolioForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    githubUrl: "",
    description: "",
    highlight: "",
  });
  const [image, setImage] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const body = new FormData();
    Object.entries(formData).forEach(([key, value]) =>
      body.append(key, value)
    );
    if (image) body.append("image", image);

    await fetch("/api/post", { method: "POST", body });
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      {Object.entries(formData).map(([key, value]) => (
        <div key={key}>
          <label className="block font-bold">{key}</label>
          <input name={key} value={value} onChange={handleChange} className="border w-full p-2" />
        </div>
      ))}
      <div>
        <label className="block font-bold">画像</label>
        <input type="file" accept="image/*" onChange={e => setImage(e.target.files?.[0] || null)} />
      </div>
      <button type="submit" className="bg-black text-white px-4 py-2">投稿</button>
    </form>
  );
}