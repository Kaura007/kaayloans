import React, { useState } from 'react';
import { Editor } from './Editor';
import { Preview } from './Preview';
import { defaultMarkdown } from '../../constants/defaultMarkdown';

export function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Markdown Previewer</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Write markdown on the left, see the preview on the right</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Editor value={markdown} onChange={setMarkdown} />
          <Preview markdown={markdown} />
        </div>
      </div>
    </section>
  );
}