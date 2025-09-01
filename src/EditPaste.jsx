import React from 'react';

import{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateToPaste } from './redux/pasteSlice';
import toast from 'react-hot-toast';

const EditPaste = () => {
  const { pasteId } = useParams();
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const paste = pastes.find((p) => p.id === pasteId);

  const [title, setTitle] = useState(paste ? paste.title : '');
  const [content, setContent] = useState(paste ? paste.content : '');

  useEffect(() => {
    if (!paste) {
      toast.error('Paste not found!');
      navigate('/pastes');
    }
  }, [paste, navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error('Title and content cannot be empty.');
      return;
    }
    dispatch(updateToPaste({ ...paste, title, content }));
    toast.success('Paste updated successfully!');
    navigate('/pastes');
  };

  return (
    <div className="flex flex-col items-center  min-h-screen bg-transparent px-4 py-8">
      <div className="w-full max-w-xl bg-transparent rounded-lg shadow-2xl p-6 mt-17">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">Edit Paste</h2>
        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          <label className="text-white font-semibold">Title</label>
          <input
            type="text"
            className="p-2 rounded bg-blue-600 text-white"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label className="text-white font-semibold">Content</label>
          <textarea
            className="p-2 rounded bg-blue-600 text-white min-h-[120px]    scrollbar-thin scrollbar-thumb-transparent  scrollbar-track-transparent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
           
            
          />
          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-6 rounded transition"
            >
              Save Changes
            </button>
            <button
              type="button"
              className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded transition"
              onClick={() => navigate('/pastes')}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPaste;