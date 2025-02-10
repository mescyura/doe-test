import React from 'react';

import './../css/components/Aside.css';
import AsideSvg from './svg/AsideSvg';
import { useEditorContext } from './../context/EditorContext';

function Aside() {
	const editor = useEditorContext();

	if (!editor) return null;

	return (
		<aside className='aside'>
			<div className='aside__globe'>
				<AsideSvg.Globe />
				<div className='line'></div>
			</div>
			<div className='aside__main'>
				<div className='aside__profile'>
					<img src='/images/profile.png' alt='' />
					<div className='theme-toggle'>
						<AsideSvg.BtnLightTheme />
						<AsideSvg.BtnDarkTheme />
					</div>
				</div>
				<div className='line'></div>
				<div className='aside__tools'>
					<AsideSvg.Corpora />
					<AsideSvg.IndividualChats />
					<AsideSvg.Favourites />
					<AsideSvg.Tags />
				</div>
				<div className='line'></div>
				<div className='aside__tools'>
					<AsideSvg.BoldText editor={editor} />
					<AsideSvg.UnderlineText editor={editor} />
					<AsideSvg.ItalicText editor={editor} />
					<AsideSvg.MathMode editor={editor} />
					<AsideSvg.CodeMode />
					<AsideSvg.InsertLink />
				</div>
				<div className='line'></div>
				<div className='aside__tools'>
					<AsideSvg.TranslateContent />
					<AsideSvg.ListenAndTranscribe />
				</div>
				<div className='line'></div>
				<div className='aside__tools'>
					<AsideSvg.SharingContent />
				</div>
			</div>
			<AsideSvg.Delete />
		</aside>
	);
}

export default Aside;
