export class Blog {
    constructor(data) {
        this.id = data.id || ''
        this.title = data.title || ''
        this.imgUrl = data.imgUrl || ''
        this.body = data.body || ''
        this.creatorId = data.creatorId || ''
        this.creator = data.creator || {}
        this.createdAt = data.createdAt || ''
        this.updatedAt = data.updatedAt || ''


    }
}

