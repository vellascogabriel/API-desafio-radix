import Sequelize, {
    Model
} from 'sequelize';


class Record extends Model {
    static init(sequelize) {
        super.init({
            heart_rate_bpm: Sequelize.INTEGER,
            total_steps: Sequelize.INTEGER,
            duration: Sequelize.INTEGER,
            distance: Sequelize.FLOAT,
            altitude: Sequelize.FLOAT,
            calories: Sequelize.INTEGER,
            pressure_systolic: Sequelize.INTEGER,
            pressure_diastolic: Sequelize.INTEGER,
            geolocation_id: Sequelize.INTEGER,
        }, {
            sequelize
        });

        return this;
    };

    static associate(models) {
        this.belongsTo(models.Geolocation, {
            foreignKey: 'geolocation_id',
            as: 'geolocations',
        });
    }
}

export default Record;

