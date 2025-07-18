import EditSnippetForm from '@/components/EditSnippetForm'
import { prisma } from '@/lib/prisma'
import React from 'react'
//import MonacoEditor from 'react-monaco-editor'

const EditSnippet =async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {

 const id =  parseInt((await params).id)

    const snippet = (await prisma.snippet.findUnique({
        where:{
            id
        }
    }))

  return (
   
 <EditSnippetForm snippet={snippet}  />

   
  )
}

export default EditSnippet