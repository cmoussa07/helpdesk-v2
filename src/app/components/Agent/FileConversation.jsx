import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { MessageSquare, Send, Lock, User, Users } from "lucide-react";

export default function FileConversation({
  messages,
  onSendMessage,
  currentUserEmail,
  currentUserName,
  isAdmin = false,
}) {
  const [newMessage, setNewMessage] = useState("");
  const [isInternal, setIsInternal] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage, isInternal);
      setNewMessage("");
      setIsInternal(false);
    }
  };

  const visibleMessages = isAdmin
    ? messages
    : messages.filter((msg) => !msg.isInternal);

  const formatDate = (date) =>
    new Date(date).toLocaleString("fr-FR", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <MessageSquare className="h-5 w-5 text-blue-600" /> Conversation{" "}
          {visibleMessages.length > 0 && (
            <Badge>{visibleMessages.length}</Badge>
          )}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <div className="max-h-[400px] overflow-y-auto p-4 space-y-3">
          {visibleMessages.length === 0 && (
            <p className="text-center text-gray-500">
              Aucun message pour le moment
            </p>
          )}
          {visibleMessages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.authorEmail === currentUserEmail ? "flex-row-reverse" : ""}`}
            >
              <div
                className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                  msg.isCustomer
                    ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white"
                    : "bg-gray-600 text-white"
                }`}
              >
                {msg.isCustomer ? <User /> : <Users />}
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{msg.author}</span>
                  <span className="text-gray-500 text-xs">
                    {formatDate(msg.createdAt)}
                  </span>
                </div>
                <div
                  className={`rounded-lg p-3 ${msg.isInternal ? "bg-yellow-50 border border-yellow-200" : "bg-gray-100"}`}
                >
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>

        <div className="border-t border-gray-200 p-4">
          {isAdmin && (
            <div className="flex items-center justify-between mb-2">
              <Label>Note interne</Label>
              <Switch checked={isInternal} onCheckedChange={setIsInternal} />
            </div>
          )}
          <Textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder={
              isInternal ? "Note interne..." : "Écrire un message..."
            }
          />
          <div className="text-right mt-2">
            <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
              <Send className="h-4 w-4 mr-1" /> Envoyer
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
