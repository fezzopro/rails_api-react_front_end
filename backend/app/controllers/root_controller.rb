class RootController < ApplicationController
  def index
    render json: Greeting.all, status: 200
  end
end
