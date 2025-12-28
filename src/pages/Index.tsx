import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/courses/CourseCard";
import { courses } from "@/data/courses";
import { 
  ArrowRight, 
  GraduationCap, 
  BookOpen, 
  Trophy, 
  Users,
  CheckCircle,
  Zap,
  Globe
} from "lucide-react";

const Index = () => {
  const featuredCourses = courses.slice(0, 3);

  const stats = [
    { icon: Users, value: "50K+", label: "Active Learners" },
    { icon: BookOpen, value: "200+", label: "Expert Courses" },
    { icon: Trophy, value: "15K+", label: "Certifications" },
    { icon: Globe, value: "120+", label: "Countries" },
  ];

  const features = [
    {
      icon: Zap,
      title: "Learn at Your Pace",
      description: "Access courses anytime, anywhere. Progress through materials at a speed that works for you."
    },
    {
      icon: CheckCircle,
      title: "Hands-on Projects",
      description: "Apply what you learn with real-world projects and exercises designed by industry experts."
    },
    {
      icon: Trophy,
      title: "Earn Certificates",
      description: "Showcase your achievements with professional certificates recognized by top employers."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          </div>

          <div className="container relative py-20 md:py-32">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
                <GraduationCap className="h-4 w-4" />
                Start Learning Today
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up">
                Master Technology with{" "}
                <span className="gradient-text">Expert-Led</span> Courses
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up delay-100">
                From databases to cloud architecture, learn in-demand skills from industry professionals. 
                Build real projects and advance your career.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-200">
                <Button size="xl" variant="hero" asChild>
                  <Link to="/courses">
                    Explore Courses
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="xl" variant="hero-outline" asChild>
                  <Link to="/courses">
                    View Free Courses
                  </Link>
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-3">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="section-padding bg-muted/30">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Featured Courses
                </h2>
                <p className="text-muted-foreground">
                  Start with our most popular learning paths
                </p>
              </div>
              <Button variant="ghost" asChild className="text-primary">
                <Link to="/courses">
                  View All Courses
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCourses.map((course, index) => (
                <div 
                  key={course.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Choose LearnHub?
              </h2>
              <p className="text-muted-foreground">
                We provide the tools and resources you need to succeed in your learning journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="p-6 rounded-2xl bg-card border border-border/50 hover-lift animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Start Learning?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Join thousands of developers advancing their careers with LearnHub.
                Start with our free courses today.
              </p>
              <Button size="xl" variant="secondary" asChild>
                <Link to="/courses">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
