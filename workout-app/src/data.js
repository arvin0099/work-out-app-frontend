const cards= [
    {
      frontContent: {
        title: "NEW",
        body: "Click here to add new",
      },
      backContent: "Add new",
    },
    {
      frontContent: {
        title: "Chest Workout",
        body: ["Push ups", "Bench Press", "Inclined Bench Press"],
      },
      backContent: "This is the back of card 2.",
    },
    {
      frontContent: {
        title: "Leg Work Out",
        body: "This is the front body text for card 2.This is the front body text for card 2This is the front body text for card 2This is the front body text for card 2This is the front body text for card 2This is the front body text for card 2This is the front body text for card 2This is the front body text for card 2This is the front body text for card 2This is the front body text for card 2This is the front body text for card 2This is the front body text for card 2This is the front body text for card 2This is the front body text for card 2This is the front body text for card 2",
      },
      backContent: "This is the back of card 2.",
    },
    {
      frontContent: {
        title: "Shoulder Work out",
        body: "This is the front body text for card 2.",
      },
      backContent: "This is the back of card 2.",
    },
    {
      frontContent: {
        title: "Front Title 2",
        body: "This is the front body text for card 2.",
      },
      backContent: "This is the back of card 2.",
    },
    {
      frontContent: {
        title: "Front Title 2",
        body: "This is the front body text for card 2.",
      },
      backContent: "This is the back of card 2.",
    },
    {
      frontContent: {
        title: "Front Title 2",
        body: "This is the front body text for card 2.",
      },
      backContent: "This is the back of card 2.",
    },
    {
      frontContent: {
        title: "Front Title 2",
        body: "This is the front body text for card 2.",
      },
      backContent: "This is the back of card 2.",
    },
    {
      frontContent: {
        title: "Front Title 2",
        body: "This is the front body text for card 2.",
      },
      backContent: "This is the back of card 2.",
    },
    {
      frontContent: {
        title: "Front Title 2",
        body: "This is the front body text for card 2.",
      },
      backContent: "This is the back of card 2.",
    },

  ]

  const workOut = [
    {
      title: "New",
      body: "Click Here to add new",
      backContent: "Add new"
      },
    {
    title: "Push Ups",
    body: "Using the floor you push your self up",
    backContent: "Using the floor you push your self up"
    },
    {
    title: "Bench Press",
    body: "Use the bench with the barbell",
    backContent: "Use the bench with the barbell"
    },
    {
    title: "Inclined Bench Press",
    body: "Use the inclined bench with the barbell",
    backContent: "Use the inclined bench with the barbell"
    },
  ]

  const routines = [
    {
        name: 'Chest Workout',
        exercises: [
            { name: 'Push ups', sets: 2, reps: 12, weight: 10 },
            { name: 'Bench Press', sets: 2, reps: 12, weight: 10 }
        ],
        day: ['Monday', 'Tuesday']
    },
    {
        name: 'Abs Workout',
        exercises: [
            { name: 'Sit Ups', sets: 23, reps: 12, weight: 10 },
            { name: 'Sit Ups', sets: 21, reps: 12, weight: 10 },
            { name: 'Sit Ups', sets: 22, reps: 12, weight: 10 },
            { name: 'Sit Ups', sets: 24, reps: 12, weight: 10 },
            { name: 'Byccile', sets: 25, reps: 12, weight: 10 }
        ],
        day: ['Monday', 'Tuesday']
    },
    {
        name: 'Abs Workout',
        exercises: [
            { name: 'Sit Ups', sets: 2, reps: 12, weight: 10 },
            { name: 'Byccile', sets: 2, reps: 12, weight: 10 }
        ],
        day: ['Monday', 'Tuesday']
    },
];

const exercises = [
    {
    name:  'Push ups',
    sets: 2,
    reps: 12,
    weight: 10,
    },
    {
    name:  'Bench Press',
    sets: 2,
    reps: 12,
    weight: 10,
    },
    {
    name:  'Sit ups',
    sets: 2,
    reps: 12,
    weight: 10,
    },
]

  export {cards, workOut, routines, exercises}