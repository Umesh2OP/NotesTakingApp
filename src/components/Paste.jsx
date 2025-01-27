import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removefrompaste, resetallpaste } from "../redux/pasteslice";
import toast from "react-hot-toast";


const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchterm, setsearchterm] = useState("");
  const dispatch = useDispatch();

  // Filter pastes based on search term
  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchterm.toLowerCase())
  );

  // Delete paste handler
  const handleDelete = (pasteId) => {
    dispatch(removefrompaste(pasteId)); // Dispatch action to remove paste
     // Unique toast ID
  };
 
  function handlereset(){
    dispatch(resetallpaste());

  }

  // Copy paste link handler
  const onCopy = (paste) => {
    const shareableLink = `${window.location.origin}/paste/${paste.id}`;
    navigator.clipboard
      .writeText(shareableLink)
      .then(() => {
        toast.success("Link copied to clipboard!", { id: `copy-${paste.id}` });
      })
      .catch(() => {
        toast.error("Failed to copy link.", { id: `copy-error-${paste.id}` });
      });
  };

  return (
    <div className="flex flex-col items-center mt-16 space-y-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold font-sans mt-6 text-blue-400">
        View All Your Pastes Here
      </h1>

      {/* Search Input */}
      <div className="relative w-[90%] max-w-[500px] flex flex-row space-x-6">
        
        
        <input
          className="w-full p-4 border rounded-2xl shadow-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          type="search"
          placeholder="Search Your Pastes"
          value={searchterm}
          onChange={(e) => setsearchterm(e.target.value)}

        
        />
        <div>
          <button 
          onClick={handlereset}
          
          className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600">
            Reset all paste
          </button>
        </div>
       
        
      </div>

      {/* Pastes List */}
      <div className="w-[90%] max-w-[800px] mt-7">
  {filteredData.length > 0 ? (
    <div className="flex flex-col gap-4 ">
      {filteredData.map((paste) => (
        <div
          key={paste.id}
          className="p-4 border rounded-lg shadow-md bg-gray-50 hover:shadow-lg transition-shadow"
        >
          {/* Paste Title */}
          <h2 className="text-lg font-semibold text-gray-800">{paste.title}</h2>

          {/* Paste Content */}
          <p className="mt-2 text-gray-600">{paste.content}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {/* View Button */}
            <button className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600">
              <a href={`/pastes/${paste?._id}`}>View</a>
            </button>

            {/* Delete Button */}
            <button
        onClick={() => handleDelete(paste._id)} // Make sure to pass the correct _id
        className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600"
      >
        Delete
      </button>

            {/* Copy Link Button */}
            <button
              onClick={() => onCopy(paste)} // Copy link to clipboard
              className="px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded-lg hover:bg-gray-600"
            >
              Copy Link
            </button>

            {/* Share Button */}
            <button
              onClick={() => {
                const shareableLink = `${window.location.origin}/paste/${paste.id}`;
                navigator.clipboard
                  .writeText(shareableLink)
                  .then(() => {
                    toast.success("Link ready to share! Copied to clipboard.", {
                      id: `share-${paste.id}`,
                    });
                  })
                  .catch(() => {
                    toast.error("Failed to generate shareable link.", {
                      id: `share-error-${paste.id}`,
                    });
                  });
              }}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Share
            </button>

            {/* Edit Button */}
            <button className="px-4 py-2 text-sm font-medium text-white bg-purple-500 rounded-lg hover:bg-red-600">
              <a href={`/?pasteId=${paste?._id}`}>Edit</a>
            </button>
          </div>

          {/* Created At */}
          <div className="mt-4 text-sm text-gray-500">
            Created At: {paste.createdAt || "Unknown"}
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-gray-500 text-center">
      No pastes found. Try searching for something else.
    </div>
  )}
</div>

    </div>
  );
};

export default Paste;
