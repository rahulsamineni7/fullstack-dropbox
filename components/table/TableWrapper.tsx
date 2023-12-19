'use client'
import { FileType } from "@/typings";

import { Button } from "../ui/button";
import { DataTable } from "./Table";
import { columns } from "./columns";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import { useCollection } from "react-firebase-hooks/firestore";

function TableWrapper({ skeletonFiles }: { skeletonFiles: FileType[] }) {
  const [initialFiles, setInitialFiles] = useState<FileType[]>([]);
  const { user } = useUser();
  const [sort, setSort] = useState<"asc" | "desc">("desc");

  const [docs, loading, error] = useCollection(
    user &&
      query(
        collection(db, "users", user.id, "files"),
        orderBy("timestamp", sort)
      )
  );

  useEffect(() => {
    if (!docs) return;

    const files: FileType[] = docs.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        filename: data.filename || doc.id,
        timestamp: data.timestamp?.toDate() || undefined,
        fullName: data.fullName,
        downloadURL: data.downloadURL,
        type: data.type,
        size: data.size,
      };
    });

    setInitialFiles(files);
  }, [docs]); // Include 'sort' in the dependencies array

  if(docs?.docs.length===undefined)
  return(

<div className="flex items-center justify-center">
  <p>
    ...Loading
  </p>
  
</div>
    )

  return (
    <div>
      <Button onClick={() => setSort(sort === "desc" ? "asc" : "desc")}>
        Sort By {sort === "desc" ? "Newest" : "Oldest"}
      </Button>

      <DataTable columns={columns} data={initialFiles} />
    </div>
  );
}

export default TableWrapper;
