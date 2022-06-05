db.students.find() // it will show max 20 records
// select * from students;
db.students.insert({
    "f_name": "xyz",
    "l_name": "abc"
})

db.students.insert([{
    "f_name": "xyz1",
    "l_name": "abc"
},
{
    "f_name": "xyz2",
    "l_name": "abc"
}])

db.students.find(
    {
        'f_name': "xyz3"
    }
)

db.students.update({
    'f_name': "xyz3"
}, {
    'f_name': "xyz3",
    "l_name": "demo"
}, {
    upsert: true
})

// Update l_name='demo' where first_name = 'xyz3';

db.students.updateMany({
    "f_name" : "xyz1"
}, {
    $et: {

    }
})



db.students.insertMany([{
    'name': "Anshu",
    "class": "MCA4"
}, {
    'name': "Anil",
    "class": "MCA4"
}])


db.students.insertOne({
    'name': "Aashish",
    "class": "MCA4"
})

db.students.insertOne({
    'name': "aaaaaa1",
    "class": "adsfdsaf",
    "address": {
        "primary": "",
        "sec": "",
        "city": ""
    }
})


db.students.find({
    "class": "MCA4",
}).pretty()


db.students.update({
    "class": "MCA4"
}, {
    $set: {
        "isRegistered": true,
        "regDate": new Date()
    }
}, {
    multi:true
})
