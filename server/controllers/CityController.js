import eventModel from "../models/eventModel";

    export const getByCity = async (req, res) => {

        try {
          let users = await UserModel.find();
          users = users.map((user)=>{
            const {password, ...otherDetails} = user._doc
            return otherDetails
          })
          res.status(200).json(users);
        } catch (error) {
          res.status(500).json(error);
        }
      };






