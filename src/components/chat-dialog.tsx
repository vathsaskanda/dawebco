import { useEffect, useMemo, useRef } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputFooter,
  PromptInputSubmit,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { MessageCircle } from "lucide-react";

const transport = new DefaultChatTransport({ api: "/api/chat" });

const FAQ_OPTIONS = [
  "What services do you offer?",
  "How long does a project take?",
  "How much does a website cost?",
  "What's your process?",
];

const INITIAL_MESSAGES: UIMessage[] = [
  {
    id: "coco-intro",
    role: "assistant",
    parts: [
      {
        type: "text",
        text: "Hello! Whats your name?",
      },
    ],
  },
];

export function ChatDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { messages, sendMessage, status, error } = useChat({
    transport,
    messages: useMemo(() => INITIAL_MESSAGES, []),
  });
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (open) {
      const id = setTimeout(() => textareaRef.current?.focus(), 50);
      return () => clearTimeout(id);
    }
  }, [open, messages.length, status]);

  const isLoading = status === "submitted" || status === "streaming";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg w-[95vw] p-0 gap-0 overflow-hidden">
        <DialogHeader className="px-5 py-4 border-b">
            <DialogTitle className="flex items-center gap-2 text-base font-medium">
            <MessageCircle className="w-4 h-4" />
            Ask COCO
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col h-[60vh]">
          <Conversation className="flex-1">
            <ConversationContent>
              {messages.map((m) => (
                  <Message key={m.id} from={m.role === "user" ? "user" : "assistant"}>
                    <MessageContent>
                      {m.parts.map((part, i) => {
                        if (part.type === "text") {
                          return m.role === "assistant" ? (
                            <MessageResponse key={i}>{part.text}</MessageResponse>
                          ) : (
                            <span key={i}>{part.text}</span>
                          );
                        }
                        return null;
                      })}
                    </MessageContent>
                  </Message>
              ))}
              {status === "submitted" && (
                <Message from="assistant">
                  <MessageContent>
                    <Shimmer>Thinking...</Shimmer>
                  </MessageContent>
                </Message>
              )}
              {error && (
                <div className="text-xs text-destructive px-3">
                  Something went wrong. Please try again.
                </div>
              )}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>

          {messages.length >= 3 &&
            messages[messages.length - 1].role === "assistant" &&
            !isLoading && (
              <div className="flex flex-wrap gap-2 px-4 pb-3 pt-1 border-t">
                {FAQ_OPTIONS.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => sendMessage({ text: q })}
                    className="text-xs px-3 py-1.5 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

          <PromptInput
            onSubmit={(msg) => {
              const text = msg.text.trim();
              if (!text || isLoading) return;
              sendMessage({ text });
            }}
            className="border-t"
          >
            <PromptInputTextarea ref={textareaRef} placeholder="Type your question..." />
            <PromptInputFooter className="justify-end">
              <PromptInputSubmit status={status} disabled={isLoading} />
            </PromptInputFooter>
          </PromptInput>
        </div>
      </DialogContent>
    </Dialog>
  );
}