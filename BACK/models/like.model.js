export default (connection, DataTypes) => {
    connection.define(
    "Like",
    {
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        tweetId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
        {
            timestamp: true,
        }
    );
};