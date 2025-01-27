import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Viewpaste = () => {
  const { id } = useParams();
  const Allpaste = useSelector((state) => state.paste.pastes);

  const paste = Allpaste.find((p) => p._id === id);

  if (!paste) {
    return <div>Paste not found</div>;
  }

  return (
    <div className="p-4 max-w-[600px] mx-auto">
    <h2 className="text-2xl font-bold mb-4">View Paste</h2>
    
    {/* Title Field */}
    <div className="mb-4  justify-center">
      <label htmlFor="title" className=" text-lg font-bold mb-2 flex ml-64">Title</label>
      <div className='w-10 h-1 bg-lime-400 flex justify-center items-center mt-2 mb-8 ml-64'></div>
      <input
    
        id="title"
        type="text"
        className="w-full p-3 border rounded-xl shadow-md focus:ring-2 focus:ring-blue-400 focus:outline-none "
        value={paste.title}
        disabled
      />
    </div>
    
    {/* Content Field */}
    <div>
      <label htmlFor="content" className="text-lg font-semibold mb-2 flex justify-center">Content</label>
      <div className='w-14 h-1 bg-lime-400 flex justify-center items-center mt-2 mb-8 ml-64'></div>

      <textarea
        id="content"
        className="w-full p-3 border rounded-xl shadow-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
        value={paste.content}
        rows="10"
        disabled
      ></textarea>
    </div>
  </div>
  );
};

export default Viewpaste;
