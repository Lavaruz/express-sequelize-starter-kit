module.exports = (sequelize, DataTypes) => {
  const Employers = sequelize.define(
    "Employer",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      fullname: DataTypes.STRING,
      work_email: DataTypes.STRING,
      position: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );
  return Employers;
};
