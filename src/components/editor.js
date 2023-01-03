import React, { useEffect, useRef } from 'react';
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';


const Editor = () => {
    const editorRef = useRef(null);
    useEffect(() => {
        async function init() {
            editorRef.current = Codemirror.fromTextArea
            (document.getElementById('realtimeEditor'), 
            {
                mode: {name: 'javascript', json: true},
                theme: 'material',
                autoCloseTags: true,
                autoCloseBrackets: true,
                lineNumbers: true
            });

            editorRef.current.on('change', (instance, changes) => {
              console.log('changes', changes);
              const {origin} = changes;
              const code = instance.getValue();
              console.log(code);
            });
            // editorRef.current.setValue(`console.log('hello')`);
            
        }
        init();
    }, []);
  return (
    <textarea id="realtimeEditor"></textarea>
  )
}

export default Editor
