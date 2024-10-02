import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TbMessages } from "react-icons/tb";
import { useAuthContext } from "../../context/AuthContext";
import { FaCircleArrowLeft } from "react-icons/fa6";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className={`w-full sm:flex ${selectedConversation ? 'flex' : 'hidden'} flex-col h-full flex-1`}>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="flex gap-2 items-center bg-slate-500 bg-opacity-40 px-4 py-2 mb-2">
          <FaCircleArrowLeft className='w-7 h-7 text-gray-400 hover:text-white cursor-pointer sm:hidden' onClick={() => setSelectedConversation(null)} />
            <img  className="w-8 h-8 rounded-full" alt='Profile Pic' src={selectedConversation.profilePic} />
            <span className="text-white font-bold flex flex-1 flex-col">
              {selectedConversation.fullName}
            </span>

          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>
          Welcome
          <span> {authUser.fullName} !</span>
        </p>
        <p className="text-sm">Select a chat to start messaging</p>
        <TbMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
