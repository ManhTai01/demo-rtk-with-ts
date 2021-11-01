import { City, ListParams, ListResponse, Student } from "models";
import axiosClient from "./axiosClient";

const studentApi = {
  getAll(): Promise<ListResponse<City>> {
    const url = "/students";
    return axiosClient.get(url)
  },
  getById(id :string): Promise<Student> {
    const url = `/students/${id}`;
    return axiosClient.delete(url)
  },
  add(data:Student): Promise<Student> {
    const url = "/students";
    return axiosClient.post(url,data)
  },
  update(data:Student): Promise<Student> {
    const url = "/students";
    return axiosClient.put(url,data)
  },
  remove(id :string): Promise<any> {
    const url = `/students/${id}`;
    return axiosClient.delete(url)
  },
};
export default studentApi;
