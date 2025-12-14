import { useState } from "react";
import { courses } from "./data/courses";
import SearchBar from "./components/SearchBar";
import CourseList from "./components/CourseList";
import QuoteBox from "./components/QuoteBox";

function App() {
  const [query, setQuery] = useState("");

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(query.toLowerCase()) ||
    course.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Course Finder
        </h1>

        <SearchBar query={query} setQuery={setQuery} />
        <CourseList courses={filteredCourses} />
        <QuoteBox />
      </div>
    </div>
  );
}

export default App;
