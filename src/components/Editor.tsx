import React from 'react';
import { FileEdit } from 'lucide-react';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function Editor({ value, onChange }: EditorProps) {
  return (
    <div className="w-full">
      <div className="bg-gray-800 text-white p-4 flex items-center gap-2 rounded-t-lg">
        <FileEdit size={20} />
        <h2 className="text-lg font-semibold">Editor</h2>
      </div>
      <textarea
        id="editor"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-[300px] p-4 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-b-lg resize-y"
      />
    </div>
  );
}