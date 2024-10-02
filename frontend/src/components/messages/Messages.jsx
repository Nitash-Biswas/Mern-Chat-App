import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";
import { extractDate } from "../../utils/extractTime";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div
      className="px-4 flex-1 overflow-auto"
      style={{ scrollbarWidth: "none" }}
    >
      {!loading &&
        messages.length > 0 &&
        messages.map((message, index) => (
          <div key={message._id} ref={lastMessageRef}>
            {index === 0 ||
            extractDate(message.createdAt) !==
              extractDate(messages[index - 1].createdAt) ? (
              <div className="divider opacity-50">
                {extractDate(message.createdAt)}
              </div>
            ) : null}
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className=" text-center ">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};
export default Messages;
