export enum EnrollType {
  Price = 0,
  Subscription = 4,
}

export interface CourseDto {
  id: number;
  title: string;
  short_description: string;
  logo_file_url: string;
  is_free: boolean;
  enroll_type: EnrollType;
}

export interface ResultDto {
  status: string;
  reason: string | null;
}

export interface CourseResDto {
  courses: CourseDto[];
  course_count: number;
  _result: ResultDto;
}
