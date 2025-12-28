import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, BookOpen } from "lucide-react";
import { Course } from "@/data/courses";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  course: Course;
  className?: string;
}

const CourseCard = ({ course, className }: CourseCardProps) => {
  const levelColors = {
    Beginner: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    Intermediate: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    Advanced: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
  };

  return (
    <Link 
      to={`/courses/${course.slug}`}
      className={cn(
        "group block overflow-hidden rounded-2xl bg-card border border-border/50 hover-lift",
        className
      )}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Free Badge */}
        {course.isFree && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            Free
          </Badge>
        )}
        
        {/* Level Badge */}
        <Badge 
          className={cn(
            "absolute top-3 right-3",
            levelColors[course.level]
          )}
          variant="secondary"
        >
          {course.level}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Topics */}
        <div className="flex flex-wrap gap-2 mb-3">
          {course.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="text-xs font-medium text-primary"
            >
              {topic}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {course.shortDescription}
        </p>

        {/* Instructor */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={course.instructor.avatar}
            alt={course.instructor.name}
            className="h-8 w-8 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-card-foreground">
              {course.instructor.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {course.instructor.title}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span className="text-xs">{course.duration}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <BookOpen className="h-4 w-4" />
              <span className="text-xs">{course.lessonsCount} lessons</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-medium text-card-foreground">{course.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
