import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { topics, levels } from "@/data/courses";
import { cn } from "@/lib/utils";

interface CourseFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedTopic: string;
  setSelectedTopic: (topic: string) => void;
  selectedLevel: string;
  setSelectedLevel: (level: string) => void;
  showFreeOnly: boolean;
  setShowFreeOnly: (show: boolean) => void;
}

const CourseFilters = ({
  searchQuery,
  setSearchQuery,
  selectedTopic,
  setSelectedTopic,
  selectedLevel,
  setSelectedLevel,
  showFreeOnly,
  setShowFreeOnly,
}: CourseFiltersProps) => {
  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 h-12 text-base bg-background border-border"
        />
      </div>

      {/* Topic Filters */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Topics
        </h3>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <Button
              key={topic}
              variant={selectedTopic === topic ? "default" : "secondary"}
              size="sm"
              onClick={() => setSelectedTopic(topic)}
              className={cn(
                "rounded-full transition-all",
                selectedTopic === topic 
                  ? "shadow-md" 
                  : "hover:bg-secondary/80"
              )}
            >
              {topic}
            </Button>
          ))}
        </div>
      </div>

      {/* Level Filters */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">
          Level
        </h3>
        <div className="flex flex-wrap gap-2">
          {levels.map((level) => (
            <Button
              key={level}
              variant={selectedLevel === level ? "default" : "secondary"}
              size="sm"
              onClick={() => setSelectedLevel(level)}
              className={cn(
                "rounded-full transition-all",
                selectedLevel === level 
                  ? "shadow-md" 
                  : "hover:bg-secondary/80"
              )}
            >
              {level}
            </Button>
          ))}
        </div>
      </div>

      {/* Free/Paid Toggle */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">
          Price
        </h3>
        <div className="flex gap-2">
          <Button
            variant={!showFreeOnly ? "default" : "secondary"}
            size="sm"
            onClick={() => setShowFreeOnly(false)}
            className="rounded-full"
          >
            All Courses
          </Button>
          <Button
            variant={showFreeOnly ? "default" : "secondary"}
            size="sm"
            onClick={() => setShowFreeOnly(true)}
            className="rounded-full"
          >
            Free Only
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseFilters;
