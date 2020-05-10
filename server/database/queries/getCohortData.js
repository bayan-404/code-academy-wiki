const db_connection = require('../config/db_connection');
const getCohortData = (cohortID) => {
  const sql = {
    text:
      'select s.id student_id,s.name student_name,s.img student_image,p.id project_id,p.image project_image,c.id cohort_id,c.name cohort_name,c.details cohort_details,gm.image mentor_image,gm.name mentor_name,gm.type from coh_members cm, students s,projects p, cohorts c,std_projects sp,coh_projects cp,gsg_members gm where sp.student_id=s.id AND sp.project_id=p.id AND cp.cohort_id=c.id AND cp.project_id=p.id AND gm.id=cm.mem_id AND c.id=$1;',
    values: [cohortID],
  };
  return db_connection
    .query(sql)
    .then((result) => result.rows)
    .catch((error) => error);
};
module.exports = getCohortData;
