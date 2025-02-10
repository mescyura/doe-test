import './css/App.css';

import Aside from './components/Aside';
import Main from './components/Main';

import { EditorProvider } from './context/EditorContext';

function App() {
	const codeExample = [
		{
			content: [
				{ type: 'keyword', text: 'def ' },
				{ type: 'function', text: 'delete_element' },
				{ type: 'text', text: '(my_list, element):' },
			],
		},
		{
			content: [
				{
					type: 'comment',
					text: '    """Removes the first occurrence of the element from the list."""',
				},
			],
		},
		{
			content: [
				{ type: 'keyword', text: '    try' },
				{ type: 'text', text: ':' },
			],
		},
		{
			content: [{ type: 'text', text: `        my_list.remove(element)` }],
		},
		{
			content: [
				{ type: 'keyword', text: '        return ' },
				{ type: 'text', text: 'my_list' },
			],
		},
		{
			content: [
				{ type: 'keyword', text: '    except ' },
				{ type: 'text', text: 'ValueError:' },
			],
		},
		{
			content: [
				{ type: 'keyword', text: '        return ' },
				{
					type: 'text',
					text: 'f"Element {element} not found in the list."',
				},
			],
		},
		{
			content: [{ type: 'keyword', text: ' ' }],
		},
		{
			content: [{ type: 'text', text: '# Example usage' }],
		},
		{
			content: [
				{ type: 'text', text: 'my_list = [' },
				{ type: 'number', text: '1' },
				{ type: 'text', text: ', ' },
				{ type: 'number', text: '2' },
				{ type: 'text', text: ', ' },
				{ type: 'number', text: '3' },
				{ type: 'text', text: ', ' },
				{ type: 'number', text: '4' },
				{ type: 'text', text: ', ' },
				{ type: 'number', text: '5' },
				{ type: 'text', text: ']' },
			],
		},
		{
			content: [
				{ type: 'text', text: 'element_to_delete = ' },
				{ type: 'number', text: '3' },
			],
		},
		{
			content: [{ type: 'keyword', text: ' ' }],
		},
		{
			content: [
				{
					type: 'text',
					text: 'result = delete_element(my_list, element_to_delete)',
				},
			],
		},
		{
			content: [
				{ type: 'string', text: 'print' },
				{ type: 'text', text: '(result)  # Output: [1, 2, 4, 5]' },
			],
		},
	];

	return (
		<div className='App'>
			<EditorProvider>
				<Aside />
				<Main codeExample={codeExample} />
			</EditorProvider>
		</div>
	);
}

export default App;
