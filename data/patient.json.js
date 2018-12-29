db.patient.insertMany([
    {
        firstName: 'Santosh',
        lastName: 'Marigowda',
        age: 44,
        history: [
            { disease: 'cold', treatment: 'not needed' }
        ]
    },
    {
        firstName: 'Roopa',
        lastName: 'Santosh',
        age: 44,
        history: [
            { disease: 'cough', treatment: 'not needed' }
        ]
    },
    {
        firstName: 'Sukruthi',
        lastName: 'Santosh',
        age: 44,
        history: [
            { disease: 'headache', treatment: 'not needed' }
        ]
    },
]);