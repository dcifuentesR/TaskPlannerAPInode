module.exports = async function(context, req){
    context.log('Adding a task to the planner');
    const task = req.body;
    const responseMessage = {response:{
        id:task.id,
        description:task.description,
        responsible:task.responsible,
        status:task.status,
        dueDate:task.dueDate
    }};
    context.res = {
        status: 201,
        body: responseMessage
    };
}