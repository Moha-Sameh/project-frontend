import axios from "axios";
import { makeAutoObservable } from "mobx";

class AdmissionStore {
  student = [];

  constructor() {
    makeAutoObservable(this, this.createStudent);
  }

  createStudent = async (newStudent) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/students",
        newStudent
      );
      this.student.push(res.data);
    } catch (error) {
      console.error("Error Message is:", error);
    }
  };
}

const admissionStore = new AdmissionStore();
admissionStore.createStudent();

export default admissionStore;
