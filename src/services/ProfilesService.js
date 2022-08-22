const { logger } = require("../utils/Logger");
const { bcwSandbox } = require("./AxiosService");


class ProfilesService {
    async getProfileById(id) {
        const res = await bcwSandbox.get(`api/profiles/${id}`)
        logger.log('Is this a profile?', res.data)
    }
}

export const profilesService = new ProfilesService()