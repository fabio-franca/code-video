// module.exports = (sequelize, DataTypes) => {
// 	const Posts = sequelize.define('posts', 
// 	{	
//       titulo: { type: DataTypes.STRING, allowNull: false },

// 	  descricao: { type: DataTypes.TEXT, allowNull: false  },
      
// 	  video: { type: DataTypes.STRING, allowNull: false  },

// 	  capa: { type: DataTypes.STRING },
// 	});

// 	//Ligação com a classe de Comments
// 	Posts.associate = (models) =>{
// 		Posts.hasMany(models.Comments , {
// 			foreignKey: {
// 				name: 'PostId',
// 				allowNull: false
// 			  },
// 			onDelete: "cascade",			//Ao deletar o post, também deleta todos os comentários
// 		});

// 		Posts.hasMany(models.Likes,{
// 			foreignKey: {
// 				name: 'PostId',
// 				allowNull: false
// 			  },
// 			onDelete: "cascade",
// 		});
// 	};
	
// 	return Posts;
// }


//-------------------------------------->NOVOS

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
	  capa: { 
		type: DataTypes.STRING 
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
	};
	return Posts;
  };