export default (connection, DataTypes) => {
    connection.define(
    "Tweet",
    {
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        media:{
            type: DataTypes.STRING,
        },
        likeId: {
            type: Sequelize.INTEGER,
        },
    },
    {
        timestamp: true,
    }
    );
};