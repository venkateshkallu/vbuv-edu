import { useParams, Link } from "react-router-dom";
import { getLessonById, Course } from "@/data/courses";
import LessonSidebar from "@/components/lesson/LessonSidebar";
import VideoPlayer from "@/components/lesson/VideoPlayer";
import TranscriptPanel from "@/components/lesson/TranscriptPanel";
import NotesPanel from "@/components/lesson/NotesPanel";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GraduationCap, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const Lesson = () => {
  const { slug, lessonId } = useParams<{ slug: string; lessonId: string }>();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const { toast } = useToast();
  
  const result = getLessonById(slug || "", lessonId || "");

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Lesson Not Found</h1>
          <Button asChild>
            <Link to="/courses">Browse Courses</Link>
          </Button>
        </div>
      </div>
    );
  }

  const { course, lesson } = result;
  
  // Find current lesson index and get prev/next
  const currentIndex = course.lessons.findIndex(l => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? course.lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < course.lessons.length - 1 ? course.lessons[currentIndex + 1] : null;

  const handleMarkComplete = () => {
    setIsCompleted(!isCompleted);
    toast({
      title: isCompleted ? "Marked as incomplete" : "Lesson completed!",
      description: isCompleted 
        ? "You can continue learning at any time." 
        : "Great job! Keep up the momentum.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="h-14 border-b border-border bg-card flex items-center px-4 gap-4 sticky top-0 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden"
        >
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <GraduationCap className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-foreground hidden sm:block">LearnHub</span>
        </Link>

        <div className="flex-1 text-center">
          <p className="text-sm font-medium text-foreground truncate max-w-md mx-auto">
            {lesson.title}
          </p>
        </div>

        <Button
          variant={isCompleted ? "default" : "outline"}
          size="sm"
          onClick={handleMarkComplete}
          className="gap-2"
        >
          <CheckCircle className={cn("h-4 w-4", isCompleted && "fill-current")} />
          <span className="hidden sm:inline">
            {isCompleted ? "Completed" : "Mark Complete"}
          </span>
        </Button>
      </header>

      {/* Main Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar - Desktop always visible, mobile toggleable */}
        <div
          className={cn(
            "fixed lg:relative inset-y-14 left-0 z-40 lg:z-0 transform transition-transform duration-300 lg:translate-x-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <LessonSidebar course={course} currentLessonId={lesson.id} />
        </div>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-foreground/20 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-6">
            {/* Video Player */}
            <VideoPlayer videoId={lesson.youtubeVideoId} title={lesson.title} />

            {/* Lesson Info */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  {lesson.title}
                </h1>
                <p className="text-muted-foreground">
                  Lesson {currentIndex + 1} of {course.lessons.length} • {lesson.duration}
                </p>
              </div>
            </div>

            {/* Tabs for Transcript and Notes */}
            <Tabs defaultValue="transcript" className="w-full">
              <TabsList className="w-full max-w-md">
                <TabsTrigger value="transcript" className="flex-1">Transcript</TabsTrigger>
                <TabsTrigger value="notes" className="flex-1">My Notes</TabsTrigger>
              </TabsList>
              <TabsContent value="transcript" className="mt-4">
                <TranscriptPanel transcript={lesson.transcript} />
              </TabsContent>
              <TabsContent value="notes" className="mt-4">
                <NotesPanel lessonId={lesson.id} />
              </TabsContent>
            </Tabs>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-6 border-t border-border">
              {prevLesson ? (
                <Button variant="outline" asChild>
                  <Link to={`/courses/${course.slug}/lesson/${prevLesson.id}`}>
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Link>
                </Button>
              ) : (
                <div />
              )}
              
              {nextLesson ? (
                <Button asChild>
                  <Link to={`/courses/${course.slug}/lesson/${nextLesson.id}`}>
                    Next Lesson
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              ) : (
                <Button asChild>
                  <Link to={`/courses/${course.slug}`}>
                    Complete Course
                    <CheckCircle className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
