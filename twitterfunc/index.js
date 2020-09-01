module.exports = async function (context, req) {
    let currentdate = new Date();
    context.log('Generating Tweet...');
    context.res = {
        body: "Your daily reminder " + currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " at "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes()
    };
};
