import React from "react";
import { BookIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <BookIcon className="w-16 h-16 text-gray-400 mb-4" />
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Notes Found</h2>
      <p className="text-gray-500 text-center max-w-sm mb-6">
        You haven’t created any notes yet. Click below to add your first note!
      </p>
      <Link
        to="/create"
        className="btn btn-primary px-6 py-2 text-white hover:scale-105 transition-transform duration-200"
      >
        Create your First Note
      </Link>
    </div>
  );
};

export default NotesNotFound;
