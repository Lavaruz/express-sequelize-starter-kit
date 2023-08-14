const { Company, Employer, Job } = require("../models");
const response = require("./response");

Company.hasMany(Employer, {
  foreignKey: "company_id",
  constraints: false,
});
Employer.belongsTo(Company, {
  foreignKey: "company_id",
  constraints: false,
});
Company.hasMany(Job, {
  foreignKey: "company_id",
  constraints: false,
});
Job.belongsTo(Company, {
  foreignKey: "company_id",
  constraints: false,
});

async function makePost(req, res) {
  try {
    console.log(req.body);
    let employer = {
      fullname: req.body.fullname,
      work_email: req.body.work_email,
      position: req.body.position,
      phone: +req.body.phone,
    }
    let company = {
      company_name: req.body.company_name,
      company_location: req.body.company_location,
      company_size: req.body.company_size,
    }
    let job = {
      job_title: req.body.job_title,
      job_description: req.body.job_description,
      job_timeline: req.body.job_timeline,
      min_salary: +req.body.min_salary,
      max_salary: +req.body.max_salary,
      periode_salary: req.body.periode_salary,
    }
    // Buat record perusahaan dan dapatkan objek yang dibuat
    const createdCompany = await Company.create(company);
    // Buat record job dan hubungkan dengan perusahaan yang dibuat
    await Job.create(job).then(result => {
      result.setCompany(createdCompany);
    });
    // Buat record employer dan hubungkan dengan perusahaan yang dibuat
    await Employer.create(employer).then(result => {
      result.setCompany(createdCompany);
    });

    response(200, "Data successfully created", null, res);
  } catch (error) {
    response(200, "server failed to get data", { error: error.message }, res);
  }
}

module.exports = {
  makePost,
};
