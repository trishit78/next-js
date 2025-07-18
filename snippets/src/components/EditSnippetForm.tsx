"use client"

import React, { useState } from 'react'
import MonacoEditor from 'react-monaco-editor'
import type { Snippet } from '@/generated/prisma'
import { Button } from './ui/button'
import { saveSnippet } from '@/actions'



const EditSnippetForm = ({snippet}:{snippet:Snippet}) => {
  
  const [code,setCode] = useState(snippet.code)
  
    const changeEventHandler = (value:string)=>{
        setCode(value)
    }

  const saveSnippetAction = saveSnippet.bind(null,snippet.id,code)
    return (
    <div>
        <form action={saveSnippetAction}>
            <Button type="submit">Save</Button>
        </form>
        <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={code}
        // options={options}
         onChange={changeEventHandler}
        // editorDidMount={::this.editorDidMount}
      />



    </div>
  )
}

export default EditSnippetForm