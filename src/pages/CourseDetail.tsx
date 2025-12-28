import { useParams, Link } from "react-router-dom";
import { getCourseBySlug } from "@/data/courses";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  BookOpen, 
  Users, 
  Star, 
  CheckCircle, 
  PlayCircle,
  ArrowRight,
  Award
} from "lucide-react";
import { cn } from "@/lib/utils";

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = getCourseBySlug(slug || "");

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Course Not Found</h1>
            <Button asChild>
              <Link to="/courses">Browse Courses</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const levelColors = {
    Beginner: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    Intermediate: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    Advanced: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
  };

  const whatYoullLearn = [
    "Understand core concepts and fundamentals",
    "Apply knowledge through hands-on exercises",
    "Build real-world projects",
    "Earn a professional certificate",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-foreground to-foreground/90 text-background py-12 md:py-20">
          <div className="container">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-background/60 text-sm mb-6">
                <Link to="/courses" className="hover:text-background transition-colors">
                  Courses
                </Link>
                <span>/</span>
                <span>{course.topics[0]}</span>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {course.isFree && (
                  <Badge className="bg-primary text-primary-foreground">
                    Free Course
                  </Badge>
                )}
                <Badge className={levelColors[course.level]} variant="secondary">
                  {course.level}
                </Badge>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {course.title}
              </h1>

              {/* Description */}
              <p className="text-lg text-background/80 mb-6 max-w-3xl">
                {course.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-background/60">rating</span>
                </div>
                <div className="flex items-center gap-2 text-background/80">
                  <Users className="h-5 w-5" />
                  <span>{course.enrolledCount.toLocaleString()} enrolled</span>
                </div>
                <div className="flex items-center gap-2 text-background/80">
                  <Clock className="h-5 w-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-background/80">
                  <BookOpen className="h-5 w-5" />
                  <span>{course.lessonsCount} lessons</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="h-12 w-12 rounded-full object-cover border-2 border-background/20"
                />
                <div>
                  <p className="font-medium">{course.instructor.name}</p>
                  <p className="text-sm text-background/60">{course.instructor.title}</p>
                </div>
              </div>

              {/* CTA */}
              <Button size="xl" variant="secondary" asChild>
                <Link to={`/courses/${course.slug}/lesson/${course.lessons[0]?.id}`}>
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-10">
                {/* What You'll Learn */}
                <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    What You'll Learn
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {whatYoullLearn.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Curriculum */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Course Curriculum
                  </h2>
                  <div className="space-y-3">
                    {course.lessons.map((lesson, index) => (
                      <Link
                        key={lesson.id}
                        to={`/courses/${course.slug}/lesson/${lesson.id}`}
                        className={cn(
                          "flex items-center justify-between p-4 rounded-xl bg-card border border-border",
                          "hover:border-primary/50 hover:shadow-md transition-all duration-200"
                        )}
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary font-semibold">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="font-medium text-foreground">
                              {lesson.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {lesson.duration}
                            </p>
                          </div>
                        </div>
                        <PlayCircle className="h-6 w-6 text-muted-foreground" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Course Card */}
                  <div className="bg-card rounded-2xl border border-border overflow-hidden">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-foreground">
                          {course.isFree ? "Free" : "$49.99"}
                        </span>
                        {!course.isFree && (
                          <Badge variant="secondary" className="line-through text-muted-foreground">
                            $99.99
                          </Badge>
                        )}
                      </div>
                      <Button className="w-full mb-4" size="lg" asChild>
                        <Link to={`/courses/${course.slug}/lesson/${course.lessons[0]?.id}`}>
                          {course.isFree ? "Start Free Course" : "Enroll Now"}
                        </Link>
                      </Button>
                      <p className="text-sm text-center text-muted-foreground">
                        30-day money-back guarantee
                      </p>
                    </div>
                  </div>

                  {/* Course Includes */}
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <h3 className="font-semibold text-foreground mb-4">
                      This course includes:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <PlayCircle className="h-5 w-5 text-primary" />
                        <span>{course.duration} of video content</span>
                      </li>
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <span>{course.lessonsCount} lessons</span>
                      </li>
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <Award className="h-5 w-5 text-primary" />
                        <span>Certificate of completion</span>
                      </li>
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>Lifetime access</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetail;
