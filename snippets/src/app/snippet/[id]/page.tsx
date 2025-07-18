import { deleteSnippet } from "@/actions";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";

interface PageProps {}

const CodeSnippet = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = parseInt((await params).id);

  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });

  const deleteAction =  deleteSnippet.bind(null,snippet.id)



  return (
    <div>
      <h1>CodeSnippet</h1>
      <div>
        <p>{snippet?.title}</p>
        <div>
          <Link href={`/snippet/${snippet?.id}/edit`}>
            <Button>Edit</Button>
          </Link>

          <form action={deleteAction}>
            <Button variant={"destructive"}>Delete</Button>
          </form>
        </div>
        <pre>
          <code>{snippet?.code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
