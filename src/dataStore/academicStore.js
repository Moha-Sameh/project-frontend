import axios from "axios";
import { makeAutoObservable } from "mobx";

class AcademicStore {
  college = [];

  constructor() {
    makeAutoObservable(this, this.deleteMusic);
  }

  inisialiseAPI = async () => {
    try {
      const response = await axios.get("http://localhost:8000/colleges");
      this.college = response.data;
    } catch (error) {
      console.error("Error Message is:", error);
    }
  };
  deleteMusic = (id) => {
    this.college = this.college.filter((data) => data.id !== id);
  };
}

const academicStore = new AcademicStore();
academicStore.inisialiseAPI();

export default academicStore;
