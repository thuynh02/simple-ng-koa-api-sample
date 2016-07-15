// Fetch the table model that's connected to the db. 
var dbUserModel = require('./db_user')

var Register = {
    create: function * (){
        try{
            // This relies on koa to use koa-bodyparser
            var userData = this.request.body;

            // Find any user with duplicate username or email
            existingUser = yield dbUserModel.findOne({
                where: {
                    $or: [
                        {email: userData.email},
                        {userName: userData.nickname}
                    ]
                }
            });

            // If there is no existing user, we are okay to create a new one
            if( existingUser == null ){
                dbUserModel.create({
                    user_name: userData.nickname,
                    email: userData.email,
                    first_name: userData.given_name,
                    last_name: userData.family_name,
                    profile_pic_url: userData.picture
                });

                // Let user know the message was received
                this.type = "json";
                this.body = {"message": userData};
                this.status = 200;
            }        

            // Otherwise, we let them know the username/email has already been used
            else{
                this.type = "json";
                this.throw(409, {"message": "Username or email is already in use!"});
            }

        } catch(error) {
            this.throw (500, error);
        }
    }
}
module.exports = Register;