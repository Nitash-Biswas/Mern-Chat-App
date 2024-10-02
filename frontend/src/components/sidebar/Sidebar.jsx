import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div
      className={` p-4 sm:flex flex-col sm:border-r border-slate-500
		${selectedConversation ? "hidden" : "flex"}
		h-full w-full sm:w-72`}
    >
      <SearchInput />
      <Conversations />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;
