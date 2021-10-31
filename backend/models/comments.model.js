module.exports = (sequelize, Sequelize) => {
	const Comments = sequelize.define('comments', 
	{		  
      commentBody: { type: Sequelize.STRING, allowNull: false, },
	  PostId: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references:{model: 'Posts', key: 'id'},
		onUpdate:'CASCADE',
		onDelete:'CASCADE',
	  }
	});
	
	return Comments;
};
