module.exports = (sequelize, Sequelize) => {
	const Users = sequelize.define('users', 
	{	
      username: {
          type: Sequelize.STRING, allowNull: false
      },
      password: {
          type: Sequelize.STRING, allowNull: false
      },
	});

	Users.associate = (models) =>{      //Um usuário pode ter vários posts. "hasMany"
		Users.hasMany(models.Posts , {
			foreignKey: {
				name: 'UserId',
				allowNull: false
			  },
			onDelete: "cascade",			//Ao deletar o post, também deleta todos os comentários
		});
	};
	
	return Users;
}
