class Api::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.order('RANDOM()').first
    # @greetings = Greeting.all
    sleep 1
    render json: @greetings
  end
end
