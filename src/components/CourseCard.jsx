function CourseCard({ course }) {
  return (
    <div className="
      bg-white 
      p-5 
      rounded-xl 
      shadow-sm 
      hover:shadow-md 
      transition
    ">
      <h3 className="text-lg font-medium mb-2">
        {course.name}
      </h3>
      <span className="text-sm text-gray-500">
        {course.category}
      </span>
    </div>
  );
}

export default CourseCard;
