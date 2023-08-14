const { Company, Employer, Job } = require("../models");
const response = require("./response");

async function getAllCompany(req, res) {
    try {
      const companies = await Company.findAll({
        include: [
          {
            model: Employer,
            as: 'Employers', // Pastikan sesuai dengan alias yang telah Anda tentukan dalam relasi
          },
          {
            model: Job,
            as: 'Jobs', // Pastikan sesuai dengan alias yang telah Anda tentukan dalam relasi
          },
        ],
      });
  
      response(200, "Data successfully retrieved", companies, res);
    } catch (error) {
      response(200, "Server failed to get data", { error: error.message }, res);
    }
  }

async function getCompanyById(req, res) {
    try {
      const companies = await Company.findByPk(req.params.id,{
        include: [
          {
            model: Employer,
            as: 'Employers', // Pastikan sesuai dengan alias yang telah Anda tentukan dalam relasi
          },
          {
            model: Job,
            as: 'Jobs', // Pastikan sesuai dengan alias yang telah Anda tentukan dalam relasi
          },
        ],
      });
  
      response(200, "Data successfully retrieved", companies, res);
    } catch (error) {
      response(200, "Server failed to get data", { error: error.message }, res);
    }
  }

  module.exports = {
    getAllCompany,
    getCompanyById
  }
  