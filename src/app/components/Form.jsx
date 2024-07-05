"use client"
import Image from "next/image";
import { useState } from "react";

const Form = ({onPost}) => {
  const [inputText, setInputText] = useState('');
  const [photo, setPhoto] = useState('');

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleDelete = () => {
    setPhoto('');
  }
  const handlePost = () => {
    onPost(inputText, photo)
    setInputText('');
    if (photo !== ''){
        setPhoto('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Start a post"
          value={inputText}
          onChange={handleTextChange}
        />
      </div>
      {photo !== '' && (
        <div className="mb-4">
          <Image src={photo} alt="Selected" width={200} height={200} className="w-full h-auto rounded-lg" />
          <span 
            className="text-red-600 text-md hover:text-red-700 cursor-pointer"
            onClick={handleDelete}
        >
            Delete
        </span>
        </div>
      )}
      <div className="flex items-center justify-between">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handlePhotoChange}
          />
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                <path fill="currentColor" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"/>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"/>
              </svg>
        </label>
        <button
          onClick={handlePost}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default Form;