import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { addToPaste, removeFromPaste, updateToPaste } from './redux/pasteSlice';
import toast from 'react-hot-toast';
import './paste.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faCopy, faShareAlt, faClock } from '@fortawesome/free-solid-svg-icons';

const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [expanded, setExpanded] = useState({});
  const [searchParam] = useSearchParams();
  const navigate = useNavigate();

  const filteredPastes = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (paste) => {
    dispatch(removeFromPaste(paste));
  };

  const handleEdit = (paste) => {
    navigate(`/edit/${paste.id}`);
  };

  const handleView = (paste) => {
    navigate(`/pastes/${paste.id}`);
  };
  const handleCopy = (paste) => {
    navigator.clipboard.writeText(paste.content);
    toast.success('Content copied to clipboard!');
  };

  const handleShare = (paste) => {
    if (navigator.share) {
      navigator
        .share({
          title: paste.title,
          text: paste.content,
          url: `${window.location.origin}/pastes/${paste.id}`,
        })
        .then(() =>  toast.success('Shared successfully!'))
        .catch((error) => toast.error('Error sharing: ' + error.message));
    } else {
      navigator.clipboard.writeText(`${window.location.origin}/pastes/${paste.id}`);
      toast.success('Shareable link copied to clipboard!');
    }
  };

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto p-2 sm:p-4 mt-[4rem]">
      {/* Search Bar */}
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search here..."
        className="p-2 rounded-lg w-full bg-blue-900 text-white text-base sm:text-lg font-bold"
      />

      {/* Pastes List */}
      <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-10 mb-6 text-left">All Pastes</h1>
      <div className="flex flex-col gap-4 sm:gap-5 mt-4 w-full">
        {filteredPastes.length > 0 &&
          filteredPastes.map((paste) => {
            const isExpanded = expanded[paste.id];
            const contentToShow = isExpanded
              ? paste.content
              : paste.content.slice(0, 50) + (paste.content.length > 50 ? "..." : "");

            return (
              <div
                className="border rounded-md p-3 sm:p-4 bg-gray-800 text-white w-full flex flex-col md:flex-row md:justify-between "
                key={paste.id}
              >
                {/* Paste Details */}
                <div className="flex flex-col items-start w-full max-w-[100%] text-center md:w-3/5">
                  <h2 className="text-lg sm:text-xl font-bold break-words">{paste.title}</h2>
                  <p className="text-gray-300 w-full max-w-full overflow-hidden break-words text-wrap pTag pt-3 ">
                    {contentToShow}
                    {paste.content.length > 50 && (
                      <button
                        className="text-blue-500 ml-2 hover:underline"
                        onClick={() => toggleExpand(paste.id)}
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    )}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-row flex-wrap md:flex-col gap-2 sm:gap-4 mt-4 md:mt-0 w-full md:w-1/3 items-end justify-center md:justify-end">
                  <div className="flex gap-2 sm:gap-3">
                    <button
                      className="bg-blue-900 p-2 rounded-full text-white"
                      onClick={() => handleView(paste)}
                      aria-label="View"
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                    <button
                      className="bg-blue-900 p-2 rounded-full text-white"
                      onClick={() => handleEdit(paste)}
                      aria-label="Edit"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      className="bg-blue-900 p-2 rounded-full text-white"
                      onClick={() => handleDelete(paste)}
                      aria-label="Delete"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button
                      className="bg-blue-900 p-2 rounded-full text-white"
                      onClick={() => handleCopy(paste)}
                      aria-label="Copy"
                    >
                      <FontAwesomeIcon icon={faCopy} />
                    </button>
                    <button
                      className="bg-blue-900 p-2 rounded-full text-white"
                      onClick={() => handleShare(paste)}
                      aria-label="Share"
                    >
                      <FontAwesomeIcon icon={faShareAlt} />
                    </button>
                  </div>
                  {/* Timestamp */}
                  <p className="text-xs italic text-gray-400 mt-2 md:mt-4 flex items-center">
                    <FontAwesomeIcon icon={faClock} className="mr-1" />
                    {new Date(paste.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Pastes;