class Api::V1::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.new
    render json: @greetings.random_greeting, status: 200 unless @greetings.count <= 0
    render json: {} unless @greetings.count.positive?
  end
end
