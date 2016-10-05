# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# Use an evented file watcher to asynchronously detect changes in source code,
# routes, locales, etc. This feature depends on the listen gem.
# config.file_watcher = ActiveSupport::EventedFileUpdateChecker
config.action_mailer.delivery_method = :smtp

config.action_mailer.smtp_settings = {
    :address              => "smtp.gmail.com",
    :port                 => 25,
    :domain               => 'example.com',
    :user_name            => "librarymanagerncsu@gmail.com",
    :password             => "LibraryApp",
    :authentication       => "plain",
    :enable_starttls_auto => true
}