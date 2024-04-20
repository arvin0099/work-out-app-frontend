
const getUserData = async(id) => {
    const URL = "https://work-out-app-backend-2f34898d7848.herokuapp.com/api/"
    id = localStorage.userID;
    console.log(id)
    const response = await fetch(URL + `userdata/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization" : localStorage.getItem("authoToken")
      }
    })
    console.log(response)
    const data = await response.json();
    console.log(data)
    return data
  }

export { getUserData }