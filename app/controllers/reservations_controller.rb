class ReservationsController < ApplicationController

  before_filter :get_models_paginated, :only => :index
  before_filter :get_model, :only => [:show, :edit, :update, :destroy]

  def index
  end

  def show
  end

  def new
  end
  
  def create
  end

  def edit
  end
  
  def update
  end
  
  def destroy
  end
  
end
