// module.exports = (sequelize, DataTypes) => {
// 	const Users = sequelize.define('users', 
// 	{	
//       username: {
//           type: DataTypes.STRING, allowNull: false
//       },
//       password: {
//           type: DataTypes.STRING, allowNull: false
//       },
// 	});

// 	Users.associate = (models) =>{      //Um usuário pode ter vários posts. "hasMany"
// 		Users.hasMany(models.Posts , {
// 			foreignKey: {
// 				name: 'UserId',
// 				allowNull: false
// 			  },
// 			onDelete: "cascade",			//Ao deletar o post, também deleta todos os comentários
// 		});
		
// 		Users.hasMany(models.Likes,{
// 			foreignKey: {
// 				name: 'UserId',
// 				allowNull: false
// 			  },
// 			onDelete: "cascade",
// 		});
// 	};

// 	return Users;
// }

//-------------------------------------> NOVOS

module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define("Users", {
	  username: {
		type: DataTypes.STRING,
		allowNull: false,
	  },
	  password: {
		type: DataTypes.STRING,
		allowNull: false,
	  },
	});
  
	Users.associate = (models) => {
	  Users.hasMany(models.Likes, {
		onDelete: "cascade",
	  });

	  Users.hasMany(models.Unlikes, {
		onDelete: "cascade",
	  });

	  Users.hasMany(models.Posts, {
		onDelete: "cascade",
	  });
	};
  
	return Users;
  };