import { useState } from "react";
import { BsSend } from "react-icons/bs";
import { MdEmojiEmotions } from "react-icons/md";
import useSendMessage from "../../hooks/useSendMessage";
import Picker from "emoji-picker-react";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (event, emojiObject) => {
    setMessage(message + emojiObject.emoji);
  };

  return (
    <form
      className="px-2 pr-4 my-4 flex gap-2 items-center"
      onSubmit={handleSubmit}
    >
      <div className="text-3xl relative">
        <MdEmojiEmotions
          onClick={handleEmojiPickerhideShow}
          className="cursor-pointer hover:text-white"
        />
        {showEmojiPicker && (
          <Picker
            onEmojiClick={handleEmojiClick}
            pickerStyle={{
              position: "absolute",
              top: "-340px",
            }}
            disableSearchBar
          />
        )}
      </div>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};
export default MessageInput;


