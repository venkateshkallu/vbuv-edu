import { FileText } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TranscriptPanelProps {
  transcript: string;
}

const TranscriptPanel = ({ transcript }: TranscriptPanelProps) => {
  const paragraphs = transcript.split('\n\n');

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="p-4 border-b border-border flex items-center gap-2">
        <FileText className="h-5 w-5 text-primary" />
        <h3 className="font-semibold text-foreground">Transcript</h3>
      </div>
      <ScrollArea className="h-[400px]">
        <div className="p-4 space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-sm text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TranscriptPanel;
