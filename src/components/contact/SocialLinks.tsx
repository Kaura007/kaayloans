import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

interface SocialLinksProps {
  email: string;
}

export function SocialLinks({ email }: SocialLinksProps) {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Connect With Me</h3>
      <div className="space-y-4">
        <a href={`mailto:${email}`} className="flex items-center space-x-3 text-gray-600 hover:text-blue-600">
          <Mail size={20} />
          <span>{email}</span>
        </a>
        <div className="flex space-x-4">
          <a href="https://github.com/abdulrahmankaura" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/abdulrahmankaura" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://twitter.com/abdulrahmankaura" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}