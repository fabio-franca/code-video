module.exports = (sequelize, Sequelize) => {
	const Posts = sequelize.define('posts', 
	{	
      titulo: { type: Sequelize.STRING, allowNull: false },

	  descricao: { type: Sequelize.TEXT, allowNull: false  },
      
	  video: { type: Sequelize.STRING, allowNull: false  },

	  capa: { type: Sequelize.STRING },
	});

	//Ligação com a classe de Comments
	Posts.associate = (models) =>{
		Posts.hasMany(models.Comments , {
			foreignKey: {
				name: 'PostId',
				allowNull: false
			  },
			onDelete: "cascade",			//Ao deletar o post, também deleta todos os comentários
		});
	};
	
	return Posts;
}
