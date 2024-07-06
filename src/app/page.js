"use client"
import Image from "next/image";
import Form from "./components/Form";
import { useState, useEffect } from "react";
import pb from "../../lib/pocketbase";
import Navbar from "./components/Navbar";
import { formatDistanceToNow } from "date-fns";

export default function Home() {
  const [posts, setPosts] = useState([]);
  
  useEffect(()=>{

    const postsList = async () => {
  
      const resultList = await pb.collection('posts').getList(1, 50, {
        filter: 'created >= "2022-01-01 00:00:00"',
        sort: '-created',
      }, { requestKey: null });
      console.log(resultList);
      setPosts(resultList.items)
    }
    postsList();
  },[])
  


  return (
    <main className="min-h-screen  bg-[#0e1113] text-white">
      {/* <h1 className="font-bold text-3xl pt-10">AMUStudy</h1> */}
      <Navbar />
      <Form />
      <div className="flex flex-col items-center px-10">
      {posts.map((post, index) => (
          <div key={index} className="flex flex-col items-start w-[60vw] py-5 pl-2 my-2 hover:rounded-lg hover:bg-[#1d2428]">
            <span className="text-gray-600 mb-4 px-2">Posted By : <span className="text-gray-300">{post.username}</span> <p className="text-gray-500 text-sm">{formatDistanceToNow(new Date(post.created))} ago</p></span>
            <p className="mb-4 text-left px-2">{post.text}</p>
            {post.image !== '' && <Image src={`https://amustud.pockethost.io/api/files/${post.collectionId}/${post.id}/${post.image}`} width={300} height={400} alt="Post" className="w-[400px] h-auto rounded-lg" />}
          </div>
        ))}
      </div>
    </main>
  );
}
