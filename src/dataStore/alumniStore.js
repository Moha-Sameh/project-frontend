import axios from "axios";
import { makeAutoObservable } from "mobx";

class AlumniStore {
  alumni = [];

  constructor() {
    makeAutoObservable(this, this.deleteMusic);
  }

  inisialiseAPI = async () => {
    try {
      const response = await axios.get("http://localhost:8000/students");
      this.alumni = response.data;
    } catch (error) {
      console.error("Error Message is:", error);
    }
  };
}

const alumniStore = new AlumniStore();
alumniStore.inisialiseAPI();

export default alumniStore;
