import { useState } from "react";
import { ChatLayout } from "./components/layout/ChatLayout";
import { ProjectTitle } from "./components/header/ProjectTitle";
import { ModeTabs } from "./components/mode/ModeTabs";
import { SearchBox } from "./components/search/SearchBox";
import { SearchTextarea } from "./components/search/SearchTextarea";
import { SearchControls } from "./components/search/SearchControls";

export default function App() {
  const [mode, setMode] = useState<"rapido" | "especialista">("rapido");
  const [deepThinking, setDeepThinking] = useState(false);
  const [smartSearch, setSmartSearch] = useState(false);
  const [message, setMessage] = useState("");

  const canSend = message.trim().length > 0;

  const handleSend = () => {
    if (canSend) {
      console.log("Mensagem enviada:", {
        mode,
        deepThinking,
        smartSearch,
        message,
      });
    }
  };

  return (
    <ChatLayout>
      <ProjectTitle />

      <ModeTabs activeMode={mode} onModeChange={setMode} />

      <SearchBox>
        <SearchTextarea
          value={message}
          onChange={setMessage}
          placeholder="Pergunte ao Jarvis..."
        />
        <SearchControls
          deepThinking={deepThinking}
          onDeepThinkingToggle={() => setDeepThinking(!deepThinking)}
          smartSearch={smartSearch}
          onSmartSearchToggle={() => setSmartSearch(!smartSearch)}
          canSend={canSend}
          onSend={handleSend}
        />
      </SearchBox>
    </ChatLayout>
  );
}
