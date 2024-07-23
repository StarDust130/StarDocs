"use client";
import { Editor } from "@/components/editor/Editor";
import Header from "@/components/elements/Header";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import ActiveCollaborators from "./ActiveCollaborators";
import { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import Image from "next/image";

const CollaborativeRoom = ({
  roomId,
  roomMetadata,
}: CollaborativeRoomProps) => {
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [documentTitle, setdocumentTitle] = useState(
    roomMetadata?.title || "Untitled Document"
  );

  const inputRef = useRef<HTMLDivElement>(null);

  const updateTitleHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setEditing(true);
    inputRef.current
      ? inputRef.current.focus()
      : console.error("Input ref is null");
  };
  const currentUserType = "editor";

  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        <div className="collaborative-room">
          <Header>
            <div className="flex w-fit items-center justify-center gap-2 ">
              {editing && !loading ? (
                <Input
                  type="text"
                  placeholder="Document Title"
                  ref={inputRef}
                  value={documentTitle}
                  disabled={!editing}
                  onKeyDown={updateTitleHandler}
                  className="document-title-input"
                  onChange={(e) => setdocumentTitle(e.target.value)}
                />
              ) : (
                <p className="document-title">{documentTitle}</p>
              )}
              {currentUserType === "editor" && !editing && (
                <Image
                  src="/assets/icons/edit.svg"
                  alt={"edit"}
                  width={24}
                  height={24}
                  onClick={() => setEditing(true)}
                  className="cursor-pointer"
                />
              )}
              {currentUserType !== "editor" && !editing && (
                <p className="view-only-tag">View Only</p>
              )}
              {loading && <p className="text-sm text-gray-400">Saving...</p>}
            </div>
            <div className="flex justify-center gap-2 items-center">
              <div className="flex w-full flex-1 justify-end gap-2 sm:gap-3">
                <ActiveCollaborators />
              </div>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
};
export default CollaborativeRoom;
