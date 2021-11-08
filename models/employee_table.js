module.exports=(sequelize, DataTypes)=>{
  const Employeedb=sequelize.define('Employee_list', {
    employee_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employee_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emp_phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return Employeedb;
};
