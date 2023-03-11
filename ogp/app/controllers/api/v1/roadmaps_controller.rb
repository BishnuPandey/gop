module Api
  module V1
    class RoadmapsController < ApplicationController
      protect_from_forgery with: :null_session
      def index
        roadmaps = Roadmap.all
        render json: roadmaps

      end

      def show
        roadmap = Roadmap.find_by(id: params[:id])
        render json: roadmap
      end

      def create
        roadmap = Roadmap.new(roadmap_params)

        if roadmap.save
          render json: roadmap
        else
          render json: { error: roadmap.errors.messages }, status: 422
        end
      end

      def update
        roadmap = Roadmap.find_by(id: params[:id])

        if roadmap.update(roadmap_params)
          render json: roadmap
        else
          render json: { error: roadmap.errors.messages }, status: 422
        end
      end

      def destroy
        roadmap = Roadmap.find_by(id: params[:id])

        if roadmap.destroy
          head:no_content
        else
          render json: { error: roadmap.errors.messages }, status: 422
        end
      end

        private

      def roadmap_params
        params.require(:roadmap).permit(:title, :year, :quarter, :status)
      end

    end
  end
end
