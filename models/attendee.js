module.exports = function(sequelize, DataTypes){
    var Attendee = sequelize.define('Attendee', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        item: DataTypes.STRING
    });
    return Attendee;
};

