import axios from 'axios';

export default {
    create: function (data) {
        return axios.post("api/artists");
    },

    update: function (id) {
        return axios.put("api/artists");
    },

    delete: function (id) {
        return axios.delete("api/artists");
    },
}

