"use client"
import Image from "next/image";
import Form from "./components/Form";
import { useState, useEffect } from "react";
import pb from "../../lib/pocketbase";
export default function Home() {
  const [posts, setPosts] = useState([]);
  

  const formData = new FormData();

  

  const handlePost = async (text, photo) => {
    // const base64Image = await convertToBase64(photo);
    setPosts([...posts, { text, photo }]);
    formData.append('username', 'sharjeel');
    formData.append('text', text);
    formData.append('image', photo);

  
  const record = await pb.collection('posts').create(formData);
  };
  


  return (
    <main className="min-h-screen  bg-slate-200 text-black">
      <h1 className="font-bold text-3xl pt-10">AMUStudy</h1>
      <Form onPost={handlePost}/>
      <div className="flex flex-col items-start px-10">
      {posts.map((post, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md mb-4">
            <p className="mb-4">{post.text}</p>
            {post.photo && <Image src={URL.createObjectURL(post.photo)} width={300} height={400} alt="Post" className="w-[400px] h-auto rounded-lg" />}
          </div>
        ))}
      </div>
    </main>
  );
}
