module.exports = (sequelize, DataTypes) => {
    const Jobs = sequelize.define(
      "Job",
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
          unique: true,
        },
        job_title: DataTypes.STRING,
        job_description: DataTypes.TEXT,
        job_salary: DataTypes.STRING,
        job_timeline: DataTypes.STRING,
      },
      {
        timestamps: false,
      }
    );
    return Jobs;
  };
  