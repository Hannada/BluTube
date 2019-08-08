# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  body              :text             not null
#  author_id         :integer          not null
#  video_id          :integer          not null
#  parent_comment_id :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Comment < ApplicationRecord

    validates :body, presence: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User 

    belongs_to :video,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :Video 

    has_many :child_comments,
        class_name: :Comment,
        foreign_key: :parent_comment_id,
        primary_key: :id

    belongs_to :parent_comment,
        class_name: :Comment,
        foreign_key: :parent_comment_id,
        primary_key: :id,
        optional: true

    has_many :likes,
        as: :likeable,
        class_name: :Like

end
