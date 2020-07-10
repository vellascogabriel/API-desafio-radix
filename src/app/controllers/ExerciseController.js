import * as Yup from 'yup';

import Exercise from '../models/Exercise';
import Record from '../models/Record';
import Geolocation from '../models/Geolocation';


class ExerciseController {
    async index(req, res) {
        
        const { page = 1 } = req.query;

        const exercises = await Exercise.findAll({
            where: {
                user_id: req.userId,
                exercise_type: req.params.type
            },
            order: ['created_at'],
            attributes: ['id', 'exercise_type'],
            limit: 10,
            offset: (page - 1) * 10,
            include: [{
                model: Record,
                as: 'record',
                attributes: ['heart_rate_bpm', 'total_steps', 'duration', 'distance', 'altitude', 'calories', 'pressure_systolic', 'pressure_diastolic'],
                include: [{
                    model: Geolocation,
                    as: 'geolocations',
                    attributes: ['id', 'altitude', 'latitude', 'longitude'],
                }, ],
            },],
        });

        return res.json(exercises);
    }



    async store(req, res) {
        const schema = Yup.object().shape({
            exercise_type: Yup.number().required(),
        });



        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({
                error: 'Validation fails'
            });
        }

        const { exercise_type } = req.body

        const geolocation = await Geolocation.create()

  
        const record = await Record.create({
            geolocation_id: geolocation.id,
        })

        const exercise = await Exercise.create({
            user_id: req.userId,
            record_id: record.id,
            exercise_type: exercise_type,
        })

        const total = [exercise, record, geolocation]

        return res.json(total);
    }

    async delete(req, res) {
        const exercise = await Exercise.destroy(/** req.params.id, **/{
            where: {
                user_id: req.userId,
                id: req.params.id,
            }
        });

        return res.json(exercise);
    }
}

export default new ExerciseController();