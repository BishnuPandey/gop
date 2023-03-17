class PagesController < ApplicationController
  def home
    redirect_to "/api-docs"
  end
end
