"use client";

import Loader from "@/components/elements/Loader";
import { getClerkUsers } from "@/lib/actions/user.actions";
import {
  LiveblocksProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { ReactNode } from "react";

const Provider =  ({ children }: { children: ReactNode }) => {
  return (
    <LiveblocksProvider authEndpoint={"/api/liveblocks-auth"}
    resolveUsers={async({userIds}) => {
      const users = await getClerkUsers(userIds);
      
    }}
    >
      <ClientSideSuspense fallback={<div><Loader /></div>}>
        {children}
      </ClientSideSuspense>
    </LiveblocksProvider>
  );
};
export default Provider;
