class Greeting < ApplicationRecord
  validates :message, presence: true, uniqueness: { case_sensitive: false }

  def count
    Greeting.all.count
  end

  def random_greeting
    Greeting.find(rand(Greeting.all.first.id...Greeting.all.last.id))
  rescue ActiveRecord::RecordNotFound
    {}
  end
end
