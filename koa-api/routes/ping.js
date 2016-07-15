var Ping = {
    publicPing: function * (next){
        try {
            this.type = "json";
            this.body = { "text": "All good. You don't need to be authenticated to call this" };
            this.status = 200;
        } catch (error) {
            this.throw (409, error);
        }
    },
    privatePing: function * (){
        try{
            this.type = "json";
            this.body = {"text": "You're in!"}
            this.status = 200;
        } catch (error) {
            this.throw (409, error);
        }
    }

} 
module.exports = Ping;
