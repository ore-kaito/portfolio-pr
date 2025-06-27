"use client"
import { useState } from "react";
import Button from "../components/Button/Button";
import Link from "next/link";

const inputFields = [
  { label: "URL", name: "url" },
  { label: "GitHubのURL", name: "githubUrl" },
  { label: "どんなポートフォリオ？", name: "description" },
  { label: "こだわりポイント", name: "highlight" },
];


export default function PortfolioForm() {
  const [title, setTitle] = useState("");
  
  return (

    <div className="space-y-4 pd-x">
      <div className="w-full max-w-2xl mx-auto mt-8">
        <input
          type="text"
          placeholder="タイトルを入力"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-12 w-full text-2xl font-semibold placeholder-gray-400 py-2 focus:outline-none"
        />
      

        <div className="justify-center border-2 border-black w-90 h-70 items-center flex">
          画像をアップロード
        </div>

        {inputFields.map((field) => (
          <div key={field.name} className="py-10">
            <p className="mb-1 font-semibold">{field.label}</p>
            <input
              type="text"
              name={field.name}
              className="border px-3 py-2 w-full rounded focus:outline-none"
            />
          </div>
        ))}

        <Link href="/" className="flex justify-center">
          <div className="w-96 mb-24 text-center">
            <Button label={"公開"} />
          </div>
          
        </Link>
      </div>
    </div>

  );
}
