import Sequelize, {
    Model
} from 'sequelize';


class Geolocation extends Model {
    static init(sequelize) {
        super.init({
            altitude: Sequelize.FLOAT,
            latitude: Sequelize.FLOAT,
            longitude: Sequelize.FLOAT,
            timestamp: Sequelize.DATE,
        }, {
            sequelize
        });

        return this;
    }
}

export default Geolocation;