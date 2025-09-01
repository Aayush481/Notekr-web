import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPaste, updateToPaste } from "./redux/pasteSlice";
import toast from "react-hot-toast";
import MonacoEditor from "@monaco-editor/react"; // Import Monaco Editor
import "./home.css";

const Create = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("// Start  creating your notes...");
  const [searchParam] = useSearchParams();
  const pasteId = searchParam.get("pasteId");
  const allPastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((paste) => paste.id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, allPastes]);

  const createPaste = useCallback(() => {
    if (!title.trim()) {
      toast.error("Please add a title first");
      return;
    } else if (!value.trim()) {
      toast.error("Please add content first");
      return;
    }

    const paste = {
      title: title.trim(),
      content: value.trim(),
      id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    dispatch(pasteId ? updateToPaste(paste) : addToPaste(paste));
    setTitle("");
    setValue("");

    if (pasteId) navigate("/pastes");
  }, [title, value, pasteId, dispatch, navigate]);

  return (
    <div className="flex justify-center items-center w-[50vw] flex-col gap-4 mt-[4rem] mx-auto">
      <button className="rounded-lg border bg p-2 text-[20px]" onClick={createPaste}>
        {pasteId ? "Update My Paste" : "Create My Paste"}
      </button>

      <input
        type="text"
        placeholder="Enter title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 rounded-lg bg-transparent text-[23px] border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200"
        style={{ fontFamily: "monospace" }}
      />

      
      <MonacoEditor
        height="400px"
        // defaultLanguage="javascript"
        theme="vs-dark"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        options={{
          fontSize: 16,
          minimap: { enabled: false },
          automaticLayout: true,
          background: "blue-950",
          lineNumbers: "on",
        }}
        className="w-full rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 bg-blue-950"
        style={{ fontFamily: "monospace" }}
      />
    </div>
  );
};

export default Create;