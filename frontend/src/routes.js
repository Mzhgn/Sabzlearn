import Index from "./pages/Index/Index";
import CourseInfo from "./pages/CourseInfo/CourseInfo";

const routes = [
  {
    path: "/",
    element: <Index />,
  },
  { path: "/course-info/:courseName", element: <CourseInfo /> },
  {},
];

export default routes;
