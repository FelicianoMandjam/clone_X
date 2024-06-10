export default (connection, DataTypes) => {
    connection.define(
    "Tweet",
    {
        userId: {
            type: Sequelize.INTEGER,
            references: 'users',
            referencesKey: 'id',
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        likeId: {
            type: Sequelize.INTEGER,
            references: 'likes',
            referencesKey: 'id',
            allowNull: false
        },
    },
    {
        timestamp: true,
    }
    );
};