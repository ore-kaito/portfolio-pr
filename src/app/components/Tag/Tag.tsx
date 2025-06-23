"use client";

import { useState } from "react";

interface Tag {
    id: number,
    name: string
}

const tags: Tag[] = [
    {id: 1, name: "未経験歓迎"},
    {id: 2, name: "Java"},
    {id: 3, name: "javascript"},
    {id: 4, name: "React"},
    {id: 5, name: "Next.js"},
    {id: 6, name: "HTML・CSS"},
    {id: 7, name: "Python"},

]

export default function Tag() {
    const [ selectedTag, setSelectedTag ] = useState<string | null>(null);

    const handleTagClick = (tagName: string) => {
        setSelectedTag(tagName);
    }

    
    return (
    <div className="border-solid border-black rounded">
        { tags.map((tag) => (
            <button key={tag.id} onClick={() => 
                handleTagClick(tag.name)} className={`ml-2 px-4  py-1 rounded-full border text-sm}
                ${
                    selectedTag === tag.name
                    ? "bg-black text-white"
                    : "bg-white text-gray-800"
                }`}
            > 
            {tag.name}
            </button>
        ))}
  
    </div>
    )
}
