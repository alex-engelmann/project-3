import axios from 'axios';

export default {
    create: function (data) {
        return axios.post("api/artists", data);
    },

    update: function (id) {
        return axios.put("api/artists" + id);
    },

    delete: function (id) {
        return axios.delete("api/artists" + id);
    },

    find: function () {
        return axios.get("api/artists")
    }
}

