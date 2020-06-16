import request from './request';
class Api {
    constructor(name){
        this.name=name;
    }
    async list(query) {
        return request({
            url: `/${this.name}/list/json`,
            method: 'post',
            data: query
        })
    }
    async queryOne(id) {
        return request({
            url: `/${this.name}/queryOne`,
            method: 'post',
            id:{
                id:id
            }
        })
    }
    async save(data) {
        return request({
          url: `/${this.name}/save`,
          method: 'post',
          data: data
        })
    }
    async update(data) {
        return request({
          url: `/${this.name}/update`,
          method: 'post',
          data: data
        })
    }
    async del(id) {
        return request({
            url: `/${this.name}/delete`,
            method: 'post',
            data:{
                id:id
            }
        })
    }
}

export default Api