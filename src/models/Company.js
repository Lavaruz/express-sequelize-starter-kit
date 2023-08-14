module.exports = (sequelize, DataTypes) => {
    const Companys = sequelize.define(
      "Company",
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
          unique: true,
        },
        company_name: DataTypes.STRING,
        company_location: DataTypes.STRING,
        company_size: DataTypes.STRING,
      },
      {
        timestamps: false,
      }
    );
    return Companys;
  };
  