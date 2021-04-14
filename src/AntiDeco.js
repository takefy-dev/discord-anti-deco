class AntiDeco {
    constructor(client, options) {
        if (!client) throw new Error('Client was not found. Please enter Client as option');
        if (!options) throw new Error('No options was provided. Please provide some options');
        /**
        * The Discord Client
        * @type {Discord.Client}
        */
        this.client = client;
        /**
     * The options such as role ids, if it's enabled or not
     * @example
     * {
     *  sanction : "ban/kick/unrank/unrankVoice",
     *  logs: "channelID",
     *  roleBypass: ["id"],
     *  memberBypass: ["id1"]
     * }
     * @type {Object}
     */
        this.options = options;

      

       


    }

}
module.exports = AntiDeco;