module.exports = (sequelize, DataTypes) => {
	const Capas = sequelize.define("Capas", {
	  descricao: {
		type: DataTypes.STRING,
		allowNull: false,
	  },
	  img: {
		type: DataTypes.STRING,
		allowNull: false,
	  },
	});

	return Capas;
  };