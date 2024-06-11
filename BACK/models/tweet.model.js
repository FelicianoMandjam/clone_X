export default (connection, DataTypes) => {
    connection.define(
    "Tweet",
    {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        media:{
            type: DataTypes.STRING,
        },
    },
    {
        timestamp: true,
    }
    );
};