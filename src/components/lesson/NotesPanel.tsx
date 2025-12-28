import { useState } from "react";
import { PenLine, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface NotesPanelProps {
  lessonId: string;
}

const NotesPanel = ({ lessonId }: NotesPanelProps) => {
  const [notes, setNotes] = useState("");
  const { toast } = useToast();

  const handleSave = () => {
    // In a real app, this would save to the backend
    localStorage.setItem(`lesson-notes-${lessonId}`, notes);
    toast({
      title: "Notes saved",
      description: "Your notes have been saved successfully.",
    });
  };

  // Load notes on component mount
  useState(() => {
    const savedNotes = localStorage.getItem(`lesson-notes-${lessonId}`);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  });

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PenLine className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground">My Notes</h3>
        </div>
        <Button size="sm" onClick={handleSave} className="gap-2">
          <Save className="h-4 w-4" />
          Save
        </Button>
      </div>
      <div className="p-4">
        <Textarea
          placeholder="Take notes while watching the lesson..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="min-h-[200px] resize-none bg-background"
        />
      </div>
    </div>
  );
};

export default NotesPanel;
