
const updateUser = async (userId, userData) => {
    console.log(userId)
    console.log(userData)
    const URL = `https://work-out-app-backend-2f34898d7848.herokuapp.com/api/user/${userId}`
    try {
        const response = await fetch(URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("authoToken")}`
            },
            body: JSON.stringify(userData)
        });
        const data = await response.json()
        if (!response.ok) {
            throw new Error(data.message || "Unknown error");
        }
        return data
    } catch (error) {
        console.error('Failed to update user:', error);
        throw error
    }
}
export { updateUser };
