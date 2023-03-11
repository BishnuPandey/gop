# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_12_07_112727) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "achievements", force: :cascade do |t|
    t.text "remark"
    t.date "achieved_on"
    t.string "achievable_type"
    t.bigint "achievable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "status"
    t.index ["achievable_type", "achievable_id"], name: "index_achievements_on_achievable"
  end

  create_table "personal_objectives", force: :cascade do |t|
    t.bigint "roadmap_id", null: false
    t.string "domain"
    t.string "title"
    t.string "deadline"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "status"
    t.index ["roadmap_id"], name: "index_personal_objectives_on_roadmap_id"
  end

  create_table "roadmaps", force: :cascade do |t|
    t.string "title"
    t.integer "year"
    t.integer "quarter"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "status"
  end

  create_table "team_objectives", force: :cascade do |t|
    t.integer "roadmap_id", null: false
    t.string "title"
    t.date "deadline"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "status"
  end

  add_foreign_key "personal_objectives", "roadmaps"
end
