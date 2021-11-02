// module.exports = (sequelize, DataTypes) => {
// 	const Comments = sequelize.define('comments', 
// 	{		  
//       commentBody: { type: DataTypes.STRING, allowNull: false, },
// 	  username: {
// 		type: DataTypes.STRING,
// 		allowNull: false,
// 	  },
// 	  PostId: {
// 		type: DataTypes.INTEGER,
// 		allowNull: false,
// 		references:{model: 'Posts', key: 'id'},
// 		onUpdate:'CASCADE',
// 		onDelete:'CASCADE',
// 	  },
// 	});
	
// 	return Comments;
// };

//-------------------------------------------->

module.exports = (sequelize, DataTypes) => {
	const Comments = sequelize.define("Comments", {
	  commentBody: {
		type: DataTypes.STRING,
		allowNull: false,
	  },
	  username: {
		type: DataTypes.STRING,
		allowNull: false,
	  },
	});
  
	return Comments;
  };