
const getUserData = async(id) => {
    const URL = "http://localhost:4000/api/"
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