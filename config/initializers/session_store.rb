# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_greycms_session',
  :secret      => 'ca0f70c1609eb35649552dcdd632145e7a5b6d2b5646cf025fbfbf87590a945529c99695ac3ca0bf9fc8ee28e503030afa6b30542586e8153fef637f6971f0d0'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
