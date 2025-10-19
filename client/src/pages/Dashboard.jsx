import {
  CloudUpload,
  Download,
  FileText,
  Plus,
  Sparkles,
  Upload,
  UploadCloud,
  XIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { dummyResumeData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import DropdownAction from "../components/DropdwnAction";

const Dashboard = () => {
  const user = { name: "rozi" };
  const navigate = useNavigate();
  const [allResumes, setAllresumes] = useState([]);
  const [showCreateResme, setShowCreateResume] = useState(false);
  const [showExistingUpload, setShowExistingUpload] = useState(false);
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState(null);
  const [editResumeId, setEditResumeId] = useState("");
  const [deleteResumeId, setDeleteResumeId] = useState(false);

  const loadAllResumes = async () => {
    setAllresumes(dummyResumeData);
  };

  const createResume = async (event) => {
    event.preventDefault();
    setShowCreateResume(false);
    navigate(`/app/resume-builder/${Math.floor(Math.random() * 1000)}`);
  };

  const createUploadedResume = async (event) => {
    event.preventDefault();
    setShowExistingUpload(false);
    navigate(`/app/resume-builder/${Math.floor(Math.random() * 1000)}`);
  };

  const handleResumeEdit = async (event) => {
    event.preventDefault();
  };

  const handleDeleteResume = async (event) => {
    event.preventDefault();
    const updatedResumes = allResumes.filter(
      (resume) => resume._id !== deleteResumeId
    );
    setAllresumes(updatedResumes);
    setDeleteResumeId("");
    setTitle("");
  };

  useEffect(() => {
    loadAllResumes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Welcome back, {user.name}!
            </h1>
            <p className="text-slate-600 mt-2">
              Manage and create your professional resumes
            </p>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Sparkles className="size-5" />
            <span className="text-sm font-medium">
              Ready to enhance your career
            </span>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Create New Resume */}
          <button
            onClick={() => {
              setShowCreateResume(true);
            }}
            className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 "
          >
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-blue-50 p-4 group-hover:bg-blue-100 transition-colors">
                <Plus className="size-8 text-blue-600" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                  Create New Resume
                </h3>
                <p className="text-slate-600 mt-2 text-sm">
                  Build a professional resume from scratch with our smart
                  templates
                </p>
              </div>
            </div>
          </button>

          {/* Upload Existing */}
          <button
            onClick={() => {
              setShowExistingUpload(true);
            }}
            className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 "
          >
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-green-50 p-4 group-hover:bg-green-100 transition-colors">
                <CloudUpload className="size-8 text-green-600" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-slate-800 group-hover:text-green-700 transition-colors">
                  Upload Existing
                </h3>
                <p className="text-slate-600 mt-2 text-sm">
                  Upload and enhance your existing resume or CV document
                </p>
              </div>
            </div>
          </button>
        </div>

        {/* Recent Resumes Section */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="p-6 border-b border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-800">
                  Your Resumes
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  {allResumes.length} document
                  {allResumes.length !== 1 ? "s" : ""} created
                </p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
                <Upload className="size-4" />
                <span className="text-sm font-medium">Upload New</span>
              </button>
            </div>
          </div>

          {/* Resume List */}
          <div className="p-6">
            {allResumes.length > 0 ? (
              <div className="space-y-4">
                {allResumes.map((resume, index) => (
                  <button
                    onClick={() =>
                      navigate(`/app/resume-builder/${resume._id}`)
                    }
                    key={index}
                    className="flex items-center w-full justify-between p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50/50 transition-colors group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-slate-100 p-3 group-hover:bg-white transition-colors">
                        <FileText className="size-6 text-slate-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-800 group-hover:text-slate-900">
                          {resume.title}
                        </h3>
                        <p className="text-slate-500 text-sm mt-1">
                          Updated on{" "}
                          {new Date(resume.updatedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
                        <Download className="size-4" />
                        <span className="text-sm font-medium">Download</span>
                      </div>
                      <DropdownAction
                        onEdit={() => {
                          setEditResumeId(resume._id);
                          setTitle(resume.title);
                        }}
                        onDelete={() => {
                          setDeleteResumeId(resume._id);
                          setTitle(resume.title);
                        }}
                      />
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <FileText className="size-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-600 mb-2">
                  No resumes yet
                </h3>
                <p className="text-slate-500 text-sm">
                  Get started by creating your first resume
                </p>
              </div>
            )}
          </div>
        </div>

        {/* create resueme */}
        {showCreateResme && (
          <form
            className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center"
            action=""
            onClick={() => {
              setShowCreateResume(false);
              setTitle("");
            }}
            onSubmit={createResume}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6"
            >
              <h2 className="text-2xl font-bold mb-4">Create New Resume</h2>
              <input
                onChange={(event) => setTitle(event.target.value)}
                value={title}
                className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md 
             focus:border-green-600 focus:ring-green-600 outline-none"
                type="text"
                placeholder="Enter title resume"
                required={true}
              />

              <button className="w-full py-2 rounded text-white bg-green-600 hover:bg-green-700 transition-colors">
                Create Resume
              </button>
              <XIcon
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-500 cursor-pointer transition-colors"
                onClick={() => {
                  setShowCreateResume(false);
                  setTitle("");
                }}
              />
            </div>
          </form>
        )}

        {/* existing upload */}
        {showExistingUpload && (
          <form
            className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center"
            action=""
            onClick={() => {
              setShowExistingUpload(false);
              setTitle("");
            }}
            onSubmit={createUploadedResume}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6"
            >
              <h2 className="text-2xl font-bold mb-4">Upload Resume</h2>
              <div className="relative mb-6">
                <input
                  onChange={(event) => setTitle(event.target.value)}
                  value={title}
                  className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md 
             focus:border-green-600 focus:ring-green-600 outline-none"
                  type="text"
                  placeholder="Enter title resume"
                  required={true}
                />
                <div>
                  <label
                    htmlFor="resume-input"
                    className="block text-sm text-slate-700"
                  >
                    Selected Resume File
                    <div className="flex flex-col justify-center items-center gap-2 border text-slate-400 border-slate-400 border-dashed rounded-md p-4 py-10 my-4 hover:border-green-500 hover:text-green-600 cursor-pointer transition-colors">
                      {resume ? (
                        <p className="mt-2 text-green-600">{resume.name}</p>
                      ) : (
                        <>
                          <UploadCloud className="mt-2 size-6 text-slate-400 hover:text-green-600" />
                          <p className="text-slate-400 hover:text-green-600">
                            Upload a resume
                          </p>
                        </>
                      )}
                    </div>
                  </label>
                  <input
                    id="resume-input"
                    type="file"
                    className="hidden"
                    accept=".pdf"
                    onChange={(e) => setResume(e.target.files[0])}
                    required={true}
                  />
                </div>
              </div>

              <button className="w-full py-2 rounded text-white bg-green-600 hover:bg-green-700 transition-colors">
                Upload Resume
              </button>
              <XIcon
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-500 cursor-pointer transition-colors"
                onClick={() => {
                  setShowExistingUpload(false);
                  setTitle("");
                }}
              />
            </div>
          </form>
        )}

        {editResumeId && (
          <form
            className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center"
            action=""
            onClick={() => {
              setEditResumeId("");
              setTitle("");
            }}
            onSubmit={handleResumeEdit}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6"
            >
              <h2 className="text-2xl font-bold mb-4">Edit Resume</h2>
              <input
                onChange={(event) => setTitle(event.target.value)}
                value={title}
                className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md 
             focus:border-green-600 focus:ring-green-600 outline-none"
                type="text"
                placeholder="Enter title resume"
                required={true}
              />

              <button className="w-full py-2 rounded text-white bg-green-600 hover:bg-green-700 transition-colors">
                Save Changes
              </button>
              <XIcon
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-500 cursor-pointer transition-colors"
                onClick={() => {
                  setEditResumeId("");
                  setTitle("");
                }}
              />
            </div>
          </form>
        )}

        {deleteResumeId && (
          <form
            className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center"
            onClick={() => {
              setDeleteResumeId("");
              setTitle("");
            }}
            onSubmit={handleDeleteResume}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6"
            >
              <h2 className="text-2xl font-bold mb-4">Delete Resume</h2>
              <p className="mb-6">
                Are you sure you want to delete{" "}
                <span className="font-semibold">{title}</span>?
              </p>
              <button className="w-full py-2 rounded text-white bg-red-600 hover:bg-red-700 transition-colors">
                Delete Resume
              </button>
              <XIcon
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-500 cursor-pointer transition-colors"
                onClick={() => {
                  setDeleteResumeId("");
                  setTitle("");
                }}
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
