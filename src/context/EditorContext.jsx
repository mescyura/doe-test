import React, { createContext, useContext } from 'react';
import { useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { Bold } from '@tiptap/extension-bold';
import { Italic } from '@tiptap/extension-italic';
import { Underline } from '@tiptap/extension-underline';
import { Strike } from '@tiptap/extension-strike';
import Placeholder from '@tiptap/extension-placeholder';

const EditorContext = createContext(null);

export const EditorProvider = ({ children }) => {
	const editor = useEditor({
		extensions: [
			StarterKit.configure({
				bulletList: {
					keepMarks: true,
					keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
				},
				orderedList: {
					keepMarks: true,
					keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
				},
			}),
			Placeholder.configure({
				placeholder: 'Ask Doe anything you’d like about the world...',
			}),
			Bold,
			Italic,
			Underline,
			Strike,
		],
	});

	return (
		<EditorContext.Provider value={editor}>{children}</EditorContext.Provider>
	);
};

export const useEditorContext = () => {
	return useContext(EditorContext);
};
