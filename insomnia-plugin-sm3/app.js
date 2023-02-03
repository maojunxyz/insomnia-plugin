const sm3 = require('gmsm-sm3js')

module.exports.templateTags = [{
    name: 'sm3',
    displayName: 'SM3',
    description: 'Generate a SM3 hash.',
    args: [
        {
            displayName: 'String',
            description: 'string',
            type: 'string',
        }
    ],
    async run(context, string) {
        return sm3.sumHex(string);
    }
}];