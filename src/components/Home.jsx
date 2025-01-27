import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addtopaste } from "../redux/pasteslice";
import { updatetopaste } from "../redux/pasteslice";



const Home = () => {
  const [title, settitle] = useState("");
  const [content, setContent] = useState("");
  const [searchparam, setsearchparam] = useSearchParams();
  const pasteId = searchparam.get("pasteId");
  const dispatch=useDispatch();
  const Allpaste=useSelector((state)=>state.paste.pastes);

useEffect(() => {
  if(pasteId){
    
    const paste=Allpaste.find((p)=>p._id===pasteId);
    settitle(paste.title);
    setContent(paste.content);
  }

  

  
}, [pasteId])

  
  
 

  function createpaste() {

    const paste={
      title:title,
      content:content,
      _id:pasteId || Date.now().toString(36),
      createdAt:new Date().toISOString(),
    }

    if(pasteId){
      dispatch( updatetopaste(paste));

    }else{
      dispatch(addtopaste(paste));

    }

    setContent("");
    settitle("");
    setsearchparam({});

    
    
    
    


  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
  <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6 space-y-6">
    <input
      className="rounded-2xl px-4 py-3 w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
      type="text"
      placeholder="Enter title here"
      value={title}
      onChange={(e) => settitle(e.target.value)}
    />

    <textarea
      className="rounded-2xl px-4 py-3 w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
      placeholder="Enter content here"
      value={content}
      onChange={(e) => setContent(e.target.value)}
      rows={10}
    ></textarea>

    <button
      onClick={createpaste}
      className="w-full py-3 text-white font-semibold rounded-2xl bg-blue-500 hover:bg-blue-600 transition-all"
    >
      {pasteId ? "Update My Paste" : "Create My Paste"}
    </button>
  </div>
</div>

  );
};

export default Home;

