const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,

        }, {
            sequelize: connection
        })
    }

    static associate(models){
        this.hasMany(models.Adresses , { foreignKey: 'user_id', as: 'adresses'})
        this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_tech', as: 'techs'})
    }
} 

module.exports = User;