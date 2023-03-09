# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
roadmaps = Roadmap.create([
    {
        title: "Documentation",
        year: Time.now.year,
        quarter: 1
    },
    {
        title: "Onboarding Improvement",
        year: Time.now.year,
        quarter: 2
    },
    {
        title: "URL shortner",
        year: Time.now.year,
        quarter: 3
    },
    {
        title: "Optimization",
        year: Time.now.year,
        quarter: 4
    }
]
)

team_objectives = TeamObjective.create([
    {
        roadmap_id: Roadmap.first.id,
        title: "User Management Subsystem - Tech Doc",
        deadline: (Time.now + 3.month).to_date
    },
    {
        roadmap_id: Roadmap.first.id,
        title: "User Management Subsystem - Arch Doc",
        deadline: (Time.now + 1.month).to_date
    }
])

personal_objectives = PersonalObjective.create([
    {
        roadmap_id: Roadmap.first.id,
        domain: "Refactoring",
        title: "UMS - ruby model refactor",
        deadline: (Time.now + 3.month).to_date        

    }
])

