import CourseCard from "./CourseCard";

function CourseList({ courses }) {
  if (courses.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No courses found.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CourseList;
