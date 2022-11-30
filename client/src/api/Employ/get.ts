import axiosInstance from '../../utils/axiosInstance';
export async function getEmployAnnouncement(mainCategory) {
  try {
    const res = await axiosInstance.get(
      `/api/recruits?category=${mainCategory}`
    );
    return res;
  } catch (err) {
    throw new Error(err.response.data.status);
  }
}
