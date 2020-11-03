module.exports = async function(context,req){
    const responseMessage=[
        {
            "id":12,
            "description":"test task",
            "responsible":"Daniel Cifuentes",
            "status":"Ready"
        },{
            "id":15,
            "description":"test task 2",
            "responsible":"Daniel Cifuentes",
            "status":"Ready"
        },{
            "id":16,
            "description":"test task 3",
            "responsible":"Daniel Cifuentes",
            "status":"In progress"
        }
    ]

    context.res={
        status:200,
        body:responseMessage
    }
}