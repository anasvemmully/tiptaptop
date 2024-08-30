import React, { useCallback } from 'react'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'

import { extensions } from './extentions'
import { ToolBar } from './toolbar'

const ContentRetriever = () => {
  const { editor } = useCurrentEditor()

  const getContent = useCallback(() => {
    if (editor) {
      const html = editor.getHTML()
      const json = editor.getJSON()
      console.log('Editor HTML:', html)
      console.log('Editor JSON:', json)
    }
  }, [editor])

  return (
    <button onClick={getContent} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
      Get Editor Content
    </button>
  )
}

function TipTap() {
  return (
    <EditorProvider
      slotBefore={<ToolBar />}
      extensions={extensions}
      content={`
        <p>Hello World! 🌍️asdasd</p><ul><li><p>Welcome</p></li><li><p>Good Morning</p></li><li><p>How are you</p><ol><li><p>Fine</p></li><li><p>Are you ok?</p></li></ol></li></ul><blockquote><p>asdasd സുപ്രഭാതം صباح الخير</p><pre><code>malayalam: സുപ്രഭാതം
arabic: صباح الخير</code></pre><pre><code>urdu: صبح بخیر</code></pre><h1>asdasdas </h1></blockquote><p>asdasda<s>sd</s></p><p></p>
        `}
    >
      <ContentRetriever />
    </EditorProvider>
  )
}

export default TipTap