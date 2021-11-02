// module.exports = (sequelize, DataTypes) => {
// 	const Likes = sequelize.define('likes',
// 	{
// 		PostId: {
// 			type: DataTypes.INTEGER,
// 			allowNull: false,
// 			references:{model: 'Posts', key: 'id'},
// 			onUpdate:'CASCADE',
// 			onDelete:'CASCADE',
// 		  },
// 		UserId: {
// 			type: DataTypes.INTEGER,
// 			allowNull: false,
// 			references:{model: 'Users', key: 'id'},
// 			onUpdate:'CASCADE',
// 			onDelete:'CASCADE',
// 		},
// 	});
    
// 	return Likes;
// };

//---------------------------------------------> NOVOS

module.exports = (sequelize, DataTypes) => {
	const Likes = sequelize.define("Likes");
  
	return Likes;
  };