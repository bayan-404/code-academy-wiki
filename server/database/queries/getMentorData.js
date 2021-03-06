const dbconnection = require('../config/dbConnection');
const getMentorData = (cohortID) => {
  const sql = {
    text:
      'select g.* from gsg_members g,cohorts c,coh_members cm where cm.mem_id=g.id AND c.id=cm.coh_id AND c.id=$1;',
    values: [cohortID],
  };
  return dbconnection
    .query(sql)
    .then((result) => result.rows)
    .catch((error) => error);
};
module.exports = getMentorData;
