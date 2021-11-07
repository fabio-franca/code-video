module.exports = (sequelize, DataTypes) => {
	const Posts = sequelize.define("Posts", {
	  titulo: {
		type: DataTypes.STRING,
		allowNull: false,
	  },
	  descricao: {
		type: DataTypes.TEXT,
		allowNull: false,
	  },
	  video: {
		type: DataTypes.STRING,
		allowNull: false,
	  },
	  username: {
		type: DataTypes.STRING,
		allowNull: false,
	  },
	});
  
	Posts.associate = (models) => {
		Posts.hasMany(models.Comments, {
			onDelete: "cascade",
		});
	
		Posts.hasMany(models.Likes, {
			onDelete: "cascade",
		});
		Posts.hasMany(models.Unlikes, {
			onDelete: "cascade",
		});
		Posts.belongsTo(models.Capas,{
			onDelete: "cascade",
		});
		Posts.belongsTo(models.Categorias,{
			onDelete: "cascade",
		});
	};
	return Posts;
  };