module.exports = (sequelize, DataTypes) => {
	const Cliente = sequelize.define('cliente', 
	{	
	  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
	  
      nome: { type: DataTypes.STRING },

	  email: { type: DataTypes.STRING },
      
	  idade: { type: DataTypes.INTEGER },
	});
	
	return Cliente;
}
