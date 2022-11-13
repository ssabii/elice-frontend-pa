import { useQuery } from "@tanstack/react-query";
import { EnrollType, getCourse } from "api/course";
import { CourseFilterParams } from "hooks/course";

const COURSES_KEY = "courses";

export interface CoursesProps {
  params?: CourseFilterParams;
  offset: number;
  count: number;
}

const useCourses = ({ params, offset, count }: CoursesProps) => {
  return useQuery({
    queryKey: [COURSES_KEY, params, offset, count],
    queryFn: async () => {
      const { data } = await getCourse({
        filterConditions: {
          title: params?.keyword,
          price: params?.price,
        },
        offset,
        count,
      });
      return data;
    },
    keepPreviousData: true,
    select: (data) => {
      return {
        totalCount: data.course_count,
        courses: data.courses.map((course) => {
          const label =
            course.enroll_type === EnrollType.Subscription
              ? "구독"
              : course.is_free
              ? "무료"
              : "유료";

          return {
            id: course.id,
            label,
            title: course.title,
            description: course.short_description,
            src: course.logo_file_url,
          };
        }),
      };
    },
  });
};

export default useCourses;
