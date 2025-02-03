import React from 'react';
import { Eye } from 'lucide-react';
import { marked } from 'marked';

interface PreviewProps {
  markdown: string;
}

marked.setOptions({
  breaks: true,
  gfm: true,
});

export function Preview({ markdown }: PreviewProps) {
  const html = marked(markdown);

  return (
    <div className="w-full">
      <div className="bg-gray-800 text-white p-4 flex items-center gap-2 rounded-t-lg">
        <Eye size={20} />
        <h2 className="text-lg font-semibold">Preview</h2>
      </div>
      <div
        id="preview"
        className="prose max-w-none p-6 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-b-lg h-[600px] overflow-auto transition-colors duration-200"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}