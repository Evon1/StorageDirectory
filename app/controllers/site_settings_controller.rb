class SiteSettingsController < ApplicationController

  def edit
    @site_settings = @@app_config
    @new_setting_field = [:field, :value]
  end

  def update
    if SiteSetting.update(params[:site_settings])
      flash[:notice] = 'Site has been updated.'
      redirect_back_or_default home_page
    else
      render :action => 'edit'
    end
  end

end
