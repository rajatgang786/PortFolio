
import axios from "axios";

export function UserList() {
    axios.get("https://api.github.com/users/rajatgang786/repos").then(res => {
        console.log(res , "res")
      // this.setState({ projects: res.data });
    });
  }