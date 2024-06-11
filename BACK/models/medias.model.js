export default (connection, DataTypes) => {
    connection.define(
    "Medias",
    {
        // userId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        tweetId: {
            type: DataTypes.STRING,
        },

        content: {
            type: DataTypes.STRING,
        },

        // answer_tweetId: {
        //     type: DataTypes.INTEGER,
        // },
    },
    {
        timestamp: true,
    }
    );
};