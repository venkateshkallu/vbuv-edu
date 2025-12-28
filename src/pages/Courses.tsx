import { useState, useMemo } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/courses/CourseCard";
import CourseFilters from "@/components/courses/CourseFilters";
import { courses } from "@/data/courses";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [showFreeOnly, setShowFreeOnly] = useState(false);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      // Search filter
      const matchesSearch = 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      // Topic filter
      const matchesTopic = 
        selectedTopic === "All" || 
        course.topics.includes(selectedTopic);

      // Level filter
      const matchesLevel = 
        selectedLevel === "All" || 
        course.level === selectedLevel;

      // Free filter
      const matchesFree = !showFreeOnly || course.isFree;

      return matchesSearch && matchesTopic && matchesLevel && matchesFree;
    });
  }, [searchQuery, selectedTopic, selectedLevel, showFreeOnly]);

  const activeFiltersCount = [
    selectedTopic !== "All",
    selectedLevel !== "All",
    showFreeOnly,
  ].filter(Boolean).length;

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTopic("All");
    setSelectedLevel("All");
    setShowFreeOnly(false);
  };

  const FiltersContent = () => (
    <CourseFilters
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      selectedTopic={selectedTopic}
      setSelectedTopic={setSelectedTopic}
      selectedLevel={selectedLevel}
      setSelectedLevel={setSelectedLevel}
      showFreeOnly={showFreeOnly}
      setShowFreeOnly={setShowFreeOnly}
    />
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-background py-12 md:py-16">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Our Courses
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover expert-led courses in databases, APIs, cloud architecture, and more. 
              Learn at your own pace with hands-on projects.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-8 md:py-12">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Desktop Sidebar */}
              <aside className="hidden lg:block w-72 flex-shrink-0">
                <div className="sticky top-24 bg-card rounded-2xl border border-border p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-semibold text-foreground">Filters</h2>
                    {activeFiltersCount > 0 && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={clearFilters}
                        className="text-muted-foreground h-auto py-1"
                      >
                        Clear all
                      </Button>
                    )}
                  </div>
                  <FiltersContent />
                </div>
              </aside>

              {/* Main Content */}
              <div className="flex-1">
                {/* Mobile Filter Button */}
                <div className="lg:hidden mb-6">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="w-full justify-between">
                        <span className="flex items-center gap-2">
                          <SlidersHorizontal className="h-4 w-4" />
                          Filters
                        </span>
                        {activeFiltersCount > 0 && (
                          <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                            {activeFiltersCount}
                          </span>
                        )}
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-80">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="font-semibold text-foreground">Filters</h2>
                        {activeFiltersCount > 0 && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={clearFilters}
                          >
                            Clear all
                          </Button>
                        )}
                      </div>
                      <FiltersContent />
                    </SheetContent>
                  </Sheet>
                </div>

                {/* Results Header */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">{filteredCourses.length}</span>{" "}
                    courses found
                  </p>
                </div>

                {/* Course Grid */}
                {filteredCourses.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredCourses.map((course, index) => (
                      <div 
                        key={course.id}
                        className="animate-slide-up"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <CourseCard course={course} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                      <X className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      No courses found
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your filters or search query
                    </p>
                    <Button onClick={clearFilters}>
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
