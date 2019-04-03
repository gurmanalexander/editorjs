import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';

window.addEventListener('load', () => {
    console.log(
        'page loaded'
    );
    const editor = new EditorJS({
        holderId: 'editor',
        tools: {
            header: Header,
            list: List,
        },
    });
});