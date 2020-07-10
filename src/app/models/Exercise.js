import Sequelize, {
    Model
} from 'sequelize'; 

class Exercise extends Model{
    static init(sequelize) {
        super.init({
            exercise_type: Sequelize.INTEGER,
            registered_at: Sequelize.DATE,
            record_id: Sequelize.INTEGER,
        }, {
            sequelize
        });

        return this;
    };

    static associate(models) {
        this.belongsTo(models.Record, {
            foreignKey: 'record_id',
            as: "record"
        });
        this.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user'
        });
    }
}

export default Exercise;