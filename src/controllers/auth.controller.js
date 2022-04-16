import {User, Role} from '../models/index.js';
import {httpStatus, apiStatus} from '../constants/index.js';
import { validationResult } from "express-validator";
import pkg from 'bcryptjs';

const {hashSync} = pkg;

export const register = (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(httpStatus.BAD_REQUEST).send({
            status: apiStatus.INVALID_PARAM,
            message: "Invalid params",
            error: errors.array()
        });
    }
    User.findOne({email: req.body.email}).then(checkUser => {
        if(checkUser){
            return res.status(httpStatus.UNAUTHORIZED).send({
                status: apiStatus.INVALID_PARAM,
                message: "Email is already used! Try another"
            });
        }

        const newUser = new User ({
            email: req.body.email,
            username: req.body.username,
            password: hashSync(req.body.password),
            firstName: req.body.firstName,
            lastName: req.body.lastName
        })

        newUser.save((err, newUser) => {
            if(err){
                return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
                    status: apiStatus.DATABASE_ERROR,
                    message: "Error when save user: " + err
                });
            }

            Role.findOne({name: "USER"}, (err, role) => {
                if(err){
                    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
                        status: apiStatus.DATABASE_ERROR,
                        message: "Error when find role: " + err
                    });
                }

                newUser.role = role._id;
                newUser.save(err => {
                    if(err){
                        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
                            status: apiStatus.DATABASE_ERROR,
                            message: "Error when save user: " + err
                        });
                    }

                    console.log("registration info: ", newUser);
                    return res.status(httpStatus.OK).send({
                        status: apiStatus.SUCCESS,
                        message: "User was registered successfully"
                    });
                })

            })
        })
    })
};