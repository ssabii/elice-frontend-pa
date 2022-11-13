import client from "api";
import { AxiosResponse } from "axios";

import { CourseResDto } from "./model";

const DEFAULT_OFFSET = 0;
const DEFAULT_COUNT = 20;

export interface FilterConditions {
  title?: string;
  price?: string[];
}

export interface GetCourseParams {
  filterConditions?: FilterConditions;
  offset?: number;
  count?: number;
}

export const getCourse = ({
  filterConditions = { title: "", price: [] },
  offset = DEFAULT_OFFSET,
  count = DEFAULT_COUNT,
}: GetCourseParams): Promise<AxiosResponse<CourseResDto>> => {
  const { title, price } = filterConditions;
  const conditions = {
    $and: [
      title && { title: `%${title}%` },
      {
        $or: price?.map((item) => ({
          enroll_type: 0,
          is_free: item === "free",
        })),
      },
    ].filter((item) => (Array.isArray(item) ? item.length > 0 : item)),
  };

  return client.get("/org/academy/course/list/", {
    params: {
      filter_conditions: JSON.stringify(conditions),
      offset,
      count,
    },
  });
};
