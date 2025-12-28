import { Link, useParams } from "react-router-dom";
import { Course, Lesson } from "@/data/courses";
import { CheckCircle2, Circle, PlayCircle, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LessonSidebarProps {
  course: Course;
  currentLessonId: string;
}

const LessonSidebar = ({ course, currentLessonId }: LessonSidebarProps) => {
  return (
    <div className="w-80 border-r border-border bg-card flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="mb-3 -ml-2 text-muted-foreground hover:text-foreground"
        >
          <Link to={`/courses/${course.slug}`}>
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Course
          </Link>
        </Button>
        <h2 className="font-semibold text-foreground line-clamp-2">
          {course.title}
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          {course.lessons.length} lessons • {course.duration}
        </p>
      </div>

      {/* Lessons List */}
      <ScrollArea className="flex-1">
        <div className="p-2">
          {course.lessons.map((lesson, index) => {
            const isActive = lesson.id === currentLessonId;
            const isCompleted = lesson.completed;

            return (
              <Link
                key={lesson.id}
                to={`/courses/${course.slug}/lesson/${lesson.id}`}
                className={cn(
                  "flex items-start gap-3 p-3 rounded-lg transition-all duration-200",
                  isActive
                    ? "bg-primary/10 border border-primary/20"
                    : "hover:bg-muted/50"
                )}
              >
                <div className="mt-0.5">
                  {isCompleted ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  ) : isActive ? (
                    <PlayCircle className="h-5 w-5 text-primary" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={cn(
                      "text-sm font-medium line-clamp-2",
                      isActive ? "text-primary" : "text-foreground"
                    )}
                  >
                    {index + 1}. {lesson.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {lesson.duration}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default LessonSidebar;
