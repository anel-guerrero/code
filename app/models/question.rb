# == Schema Information
#
# Table name: questions
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  body       :text             not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ApplicationRecord
    validates :title, :tags, :body, :user_id, presence: true
    has_many :answers
    belongs_to :user
    has_many :votes, as: :post
    has_many :comments, as: :post
end
