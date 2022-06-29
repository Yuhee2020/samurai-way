import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "68557ad3-b9a8-4dd0-9b3d-e2fde40e12b8"
    },

})

export const getUsersAPI = {
    getUsers(page: number | null) {
        return instance.get("users")
            .then(response => response.data)
    }
}

export const FollowUnFollowAPI = {
    postFollow(id: string) {
        return instance.post("follow/" + id)
            .then(res => res.data)
    },
    deleteFollow(id: string) {
        return instance.delete("follow/" + id,).then(res => res.data)
    }

}

export const authAPI = {
    authMe() {
        return axios.get("auth/me",).then(res => res.data)
    }
}