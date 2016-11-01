# name: discourse-quickmobiler
# about: Creates an icon in the mobile view at header for jumping to latest (or other, set by up).
# version 0.0.1
# author: Juha Leinonen (jsilvanus)
# url: https://github.com/jsilvanus/discourse-quickmobiler

enabled site_setting :quickmobiler_enabled

after_initialize do

  User.register_custom_field_type('quickmobiler', :json)

end

