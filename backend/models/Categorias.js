module.exports = (sequelize, DataTypes) => {
	const Categorias = sequelize.define("Categorias", {
	  descricao: {
		type: DataTypes.STRING,
		allowNull: false,
	  },
	});

	return Categorias;
  };