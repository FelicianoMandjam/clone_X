export default (connection, DataTypes) => {
    connection.define(
    "User",
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique : true,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        profilePicture : {
            type: DataTypes.STRING,
            defaultValue : "PathToDefaultPicture"
        },
        bannerPicture : {
            type : DataTypes.STRING,
            defaultValue : "PathToDefaultBanner"
        },
        bio : {
            type: DataTypes.STRING
        },
        allowMessages: {
            type: DataTypes.BOOLEAN,
            defaultValue : true
        },
        verifiedAt : {
            type: DataTypes.DATE
        }
    },
        {
            timestamp: true,
        }
    );
};