import client from "api";
import { AxiosResponse } from "axios";

import { CourseResDto } from "./model";

export const getCourse = (
  conditions: string,
  offset: number,
  count = 20,
): Promise<AxiosResponse<CourseResDto>> => {
  return client.get("/org/academy/course/list/", {
    params: {
      filter_conditions: conditions,
      offset,
      count,
    },
  });
};
