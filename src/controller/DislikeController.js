const Dev = require('../model/Dev');

module.exports = {

    async store(req, res) {
        const { devIdLike } = req.params;
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devIdLike);

        if (!targetDev) {
            return res.status(400).json({ error: 'dev not exist' });
        }

        loggedDev.dislikes.push(targetDev._id);
        await loggedDev.save();

        return res.json(loggedDev)
    }

}