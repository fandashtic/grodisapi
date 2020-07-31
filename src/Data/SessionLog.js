const { Edit } = require('./../Shared/Reposidery');
const { UpdateDetaultValues } = require('./../Shared/Util');

const _tableName = 'sessionlog';
const _primaryKey = 'session_id';

let InsertLog = async (key, session, callback) => {
    session = UpdateDetaultValues(session, session.modified_by);
    return await Edit(_tableName,  key, session, callback);
}

module.exports = { InsertLog };