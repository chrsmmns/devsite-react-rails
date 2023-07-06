class Api::V1::PostsController < ApplicationController
  before_action :set_post, only: %i[show destroy]
  def index
    posts = Post.all.order(created_at: :desc)
    render json: posts
  end

  def create
    post = Post.create!(post_params)
    if post
      render json: post
    else 
      render json: post.errors
    end
  end

  def show
    render json: @post
  end

  def destroy
    @post&.destroy
    render json: { message: "Post deletd!" }
  end

  private 
  def post_params
    params.permit(:title, :content, :image)
  end

  def set_post
    @post = Post.find(params[:id])
  end

end
