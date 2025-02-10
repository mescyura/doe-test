import MainSvg from './svg/MainSvg';

import './../css/components/Main.css';
import { useEditorContext } from './../context/EditorContext';
import { EditorContent } from '@tiptap/react';

function Main({ codeExample }) {
	const editor = useEditorContext();

	if (!editor) return null;

	const CodeLine = ({ content }) => (
		<div className='code-line'>
			<span>
				{content.map((item, index) => (
					<span key={index} className={item.type}>
						{item.text}
					</span>
				))}
			</span>
		</div>
	);

	return (
		<main className='main'>
			<div className='main__chat'>
				<div className='main__chat-max-width'>
					<div className='main__date'>
						<div className='main__lines'></div>
						<div className='main__today'>Today, 9:41 AM</div>
						<div className='main__lines'></div>
					</div>
					<div className='main__user-input'>
						<MainSvg.Edit />
						<div className='main__user-input-prompt'>
							Create a simple project for me in any language.
						</div>
					</div>
					<div className='main__ai-answer'>
						<MainSvg.Logo />
						<div className='answer'>
							<div className='answer__text'>
								<p>
									Here's a simple project idea: a Task Manager command-line
									application in Python. It will allow you to add, view, and
									delete tasks. In the structure, we'll be able to add and view
									all tasks, delete tasks by number, and mark tasks as
									completed.
								</p>
								<br />
								<p>We will write this code completely in Python.</p>
								<br />
								<p>The Python code for the deletion function is as follows:</p>
							</div>
							<div className='code-container'>
								<pre>
									{codeExample?.map((line, index) => (
										<CodeLine content={line.content} key={index} />
									))}
								</pre>
							</div>
							<div className='buttons'>
								<div className='see-all-steps'>
									<MainSvg.MagicStick />
									<p>See all steps</p>
								</div>
								<MainSvg.Sound />
								<MainSvg.Download />
								<MainSvg.Copy />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='main__input'>
				<MainSvg.Stars />
				{/* <input
					type='text'
					value={inputValue}
					onChange={handleChange}
					placeholder='Ask Doe anything you’d like about the world...'
				/> */}
				<EditorContent className='input' editor={editor} />

				<MainSvg.ScreenShare />
				<MainSvg.Microphone />
				<button className='send'>
					<p>Send</p>
					<MainSvg.UpArrow />
				</button>
			</div>
		</main>
	);
}

export default Main;
