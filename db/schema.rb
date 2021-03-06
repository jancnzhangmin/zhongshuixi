# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160421165513) do

  create_table "admins", force: :cascade do |t|
    t.string   "username",        limit: 255
    t.string   "login",           limit: 255
    t.string   "password_digest", limit: 255
    t.integer  "status",          limit: 4
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
  end

  create_table "bottoms", force: :cascade do |t|
    t.string   "title",      limit: 255
    t.string   "bottom",     limit: 255
    t.text     "introuduce", limit: 65535
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  create_table "clas", force: :cascade do |t|
    t.string   "title",      limit: 255
    t.string   "keyword",    limit: 255
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "configs", force: :cascade do |t|
    t.string   "title",             limit: 255
    t.string   "tel",               limit: 255
    t.string   "mail",              limit: 255
    t.string   "address",           limit: 255
    t.string   "beian",             limit: 255
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.string   "qq",                limit: 255
    t.string   "logo_file_name",    limit: 255
    t.string   "logo_content_type", limit: 255
    t.integer  "logo_file_size",    limit: 4
    t.datetime "logo_updated_at"
    t.string   "recenttitle",       limit: 255
    t.text     "recentsummary",     limit: 65535
  end

  create_table "contacts", force: :cascade do |t|
    t.string   "title",       limit: 255
    t.string   "information", limit: 255
    t.text     "content",     limit: 65535
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
    t.string   "name",        limit: 255
  end

  create_table "contents", force: :cascade do |t|
    t.string   "cla_id",             limit: 255
    t.string   "title",              limit: 255
    t.text     "content",            limit: 65535
    t.string   "auther",             limit: 255
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.string   "image_file_name",    limit: 255
    t.string   "image_content_type", limit: 255
    t.integer  "image_file_size",    limit: 4
    t.datetime "image_updated_at"
    t.float    "price",              limit: 24
    t.text     "summary",            limit: 65535
    t.string   "icon",               limit: 255
  end

  create_table "kindeditor_assets", force: :cascade do |t|
    t.string   "asset",      limit: 255
    t.integer  "file_size",  limit: 4
    t.string   "file_type",  limit: 255
    t.integer  "owner_id",   limit: 4
    t.string   "asset_type", limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "lists", force: :cascade do |t|
    t.integer  "cla_id",     limit: 4
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
  end

  create_table "mains", force: :cascade do |t|
    t.string   "title",                  limit: 255
    t.string   "summary",                limit: 255
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
    t.string   "mainimage_file_name",    limit: 255
    t.string   "mainimage_content_type", limit: 255
    t.integer  "mainimage_file_size",    limit: 4
    t.datetime "mainimage_updated_at"
  end

  create_table "sliders", force: :cascade do |t|
    t.string   "link",               limit: 255
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.string   "image_file_name",    limit: 255
    t.string   "image_content_type", limit: 255
    t.integer  "image_file_size",    limit: 4
    t.datetime "image_updated_at"
  end

  create_table "tests", force: :cascade do |t|
    t.string   "name",       limit: 255
    t.integer  "sex",        limit: 4
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

end
