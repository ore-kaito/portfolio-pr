'use client';
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  postId: number;
}

export default function ThreeDotMenu({ postId }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); // ページ遷移を防ぐ
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className=" inline-block">
      {/* 三点リーダー */}
      <div onClick={toggleMenu} className="flex space-x-2 cursor-pointer">
        {[0, 1, 2].map((_, index) => (
          <div key={index} className="w-2 h-2 bg-gray-500 rounded-full" />
        ))}
      </div>

      {/* メニュー */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-md z-50">
          <Link href={`/edit/${postId}`}>
            <span className="block w-full text-left px-4 py-2 hover:bg-gray-100">
              編集
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}