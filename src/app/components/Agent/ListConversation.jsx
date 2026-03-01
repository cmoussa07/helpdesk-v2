export default function ListConversation({ conversation }) {
  if (!conversation)
    return <p className="p-4 text-gray-500">Sélectionnez une conversation</p>;

  return (
    <div className="flex-1 p-4 overflow-y-auto border-l border-gray-200">
      <h3 className="text-lg font-semibold mb-4">{conversation.name}</h3>
      <div className="space-y-2">
        {conversation.messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-md ${msg.fromMe ? "bg-blue-100 self-end" : "bg-gray-200 self-start"}`}
          >
            <p>{msg.text}</p>
            <span className="text-xs text-gray-500">{msg.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
