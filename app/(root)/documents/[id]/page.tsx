import { Editor } from "@/components/editor/Editor";
import Header from "@/components/elements/Header";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Documents = () => {
  return (
    <div>
      <Header>
        <div className="flex w-fit items-center justify-center gap-2 ">
          <p className="document-title">Title</p>
        </div>
        <div className="flex justify-center gap-2 items-center">
          <p className="document-title ">Share</p>
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
  );
};
export default Documents;
