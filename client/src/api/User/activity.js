import axiosInstance from '../../utils/axiosInstance';

export async function getUsersActivity(activity, id, page, size) {
  const result = await axiosInstance.get(
    `/users/${id}/user-${activity}?page=${page}&size=${size}`
  );
  return result;
}
