# USAGE: set github token and user and simply run this script in an ELEVATED! powershell window
# The Script can take quite some time (something like a minute) to complete
# SET to your own value! [Environment]::SetEnvironmentVariable("GITHUB_TOKEN", "", [System.EnvironmentVariableTarget]::User)
# SET to your own value! [Environment]::SetEnvironmentVariable("GITHUB_USER", "", [System.EnvironmentVariableTarget]::User)
# SET to the values provided in our internal Wiki! [Environment]::SetEnvironmentVariable("MAILJET_API_ID", "", [System.EnvironmentVariableTarget]::User)
# SET to the values provided in our internal Wiki! [Environment]::SetEnvironmentVariable("MAILJET_API_SECRET", "", [System.EnvironmentVariableTarget]::User)
[Environment]::SetEnvironmentVariable("BACKEND_DB_PASSWORD", "password", [System.EnvironmentVariableTarget]::User)
[Environment]::SetEnvironmentVariable("API_KEY_MANAGER_DB_PASSWORD", "password", [System.EnvironmentVariableTarget]::User)
[Environment]::SetEnvironmentVariable("INTERNAL_STORAGE_DB_PASSWORD", "password", [System.EnvironmentVariableTarget]::User)
[Environment]::SetEnvironmentVariable("PGADMIN_PASSWORD", "password", [System.EnvironmentVariableTarget]::User)
[Environment]::SetEnvironmentVariable("ELECTRON_EXTRA_LAUNCH_ARGS", "--ignore-connections-limit=local-dev.dataland.com", [System.EnvironmentVariableTarget]::User)
[Environment]::SetEnvironmentVariable("INITIALIZE_KEYCLOAK", "false", [System.EnvironmentVariableTarget]::User)
[Environment]::SetEnvironmentVariable("KEYCLOAK_ADMIN", "admin", [System.EnvironmentVariableTarget]::User)
[Environment]::SetEnvironmentVariable("KEYCLOAK_ADMIN_PASSWORD", "admin", [System.EnvironmentVariableTarget]::User)
[Environment]::SetEnvironmentVariable("KEYCLOAK_DB_PASSWORD", "password", [System.EnvironmentVariableTarget]::User)
[Environment]::SetEnvironmentVariable("KEYCLOAK_FRONTEND_URL", "https://local-dev.dataland.com/keycloak", [System.EnvironmentVariableTarget]::User)
[Environment]::SetEnvironmentVariable("KEYCLOAK_READER_PASSWORD", "test", [System.EnvironmentVariableTarget]::User)
[Environment]::SetEnvironmentVariable("KEYCLOAK_READER_SALT", "6ZN+5rRT/wQcQqvNhXIsfA==", [System.EnvironmentVariableTarget]::User)
[Environment]::SetEnvironmentVariable("KEYCLOAK_READER_VALUE", "qT0vhQ7bQA0OuAlJslpDr421pJQjZWIHxXZYePO9IOVVfZUX+85SwuwVrLgL/9xiW5hjyxlhKqQzUl7xUh+hVQ==", [System.EnvironmentVariableTarget]::User)
[Environment]::SetEnvironmentVariable("KEYCLOAK_UPLOADER_PASSWORD", "test", [System.EnvironmentVariableTarget]::User)
[Environment]::SetEnvironmentVariable("KEYCLOAK_UPLOADER_SALT", "6ZN+5rRT/wQcQqvNhXIsfA==", [System.EnvironmentVariableTarget]::User)
[Environment]::SetEnvironmentVariable("KEYCLOAK_UPLOADER_VALUE", "qT0vhQ7bQA0OuAlJslpDr421pJQjZWIHxXZYePO9IOVVfZUX+85SwuwVrLgL/9xiW5hjyxlhKqQzUl7xUh+hVQ==", [System.EnvironmentVariableTarget]::User)
[Environment]::SetEnvironmentVariable("KEYCLOAK_DATALAND_ADMIN_PASSWORD", "test", [System.EnvironmentVariableTarget]::User)
[Environment]::SetEnvironmentVariable("KEYCLOAK_DATALAND_ADMIN_SALT", "6ZN+5rRT/wQcQqvNhXIsfA==", [System.EnvironmentVariableTarget]::User)
[Environment]::SetEnvironmentVariable("KEYCLOAK_DATALAND_ADMIN_VALUE", "qT0vhQ7bQA0OuAlJslpDr421pJQjZWIHxXZYePO9IOVVfZUX+85SwuwVrLgL/9xiW5hjyxlhKqQzUl7xUh+hVQ==", [System.EnvironmentVariableTarget]::User)
[Environment]::SetEnvironmentVariable("EXPECT_STACKTRACE", "true", [System.EnvironmentVariableTarget]::User)
# If needed set REALDATA to an appropriate value. Beware: If set, not all tests might be visible if E2E tests are started locally [Environment]::SetEnvironmentVariable("REALDATA", "false", [System.EnvironmentVariableTarget]::User)
# If needed, set to your sonar token [Environment]::SetEnvironmentVariable("SONAR_TOKEN", "${{ secrets.SONAR_TOKEN }}", [System.EnvironmentVariableTarget]::User)
# Only needed in CD.yaml - no need to set locally [Environment]::SetEnvironmentVariable("SSH_PRIVATE_KEY", "${{ secrets.SSH_PRIVATE_KEY }}", [System.EnvironmentVariableTarget]::User)
# Only needed in CD.yaml - no need to set locally [Environment]::SetEnvironmentVariable("TARGETSERVER_HOST_KEYS", "${{ secrets.TARGETSERVER_HOST_KEYS }}", [System.EnvironmentVariableTarget]::User)
# If needed (to test EurDat Integration) - set to Value that can be found in internal wiki [Environment]::SetEnvironmentVariable("TARGETSERVER_STARTUP_URL", "${{ secrets.TARGETSERVER_STARTUP_URL }}", [System.EnvironmentVariableTarget]::User)
# If needed (to test EurDat Integration) - set to Value that can be found in internal wiki [Environment]::SetEnvironmentVariable("TARGETSERVER_URL", "${{ secrets.TARGETSERVER_URL }}", [System.EnvironmentVariableTarget]::User)
# If needed (to test EurDat Integration) - set to Value that can be found in internal wiki [Environment]::SetEnvironmentVariable("TUNNEL_STARTUP_LINK", "...", [System.EnvironmentVariableTarget]::User)
# If needed (to execute CI Tests locally) - set to Value that can be found in internal wiki [Environment]::SetEnvironmentVariable("KEYCLOAK_GOOGLE_ID", "#", [System.EnvironmentVariableTarget]::User)
# If needed (to execute CI Tests locally) - set to Value that can be found in internal wiki [Environment]::SetEnvironmentVariable("KEYCLOAK_GOOGLE_SECRET", "#", [System.EnvironmentVariableTarget]::User)
# If needed (to execute CI Tests locally) - set to Value that can be found in internal wiki [Environment]::SetEnvironmentVariable("KEYCLOAK_LINKEDIN_ID", "#", [System.EnvironmentVariableTarget]::User)
# If needed (to execute CI Tests locally) - set to Value that can be found in internal wiki [Environment]::SetEnvironmentVariable("KEYCLOAK_LINKEDIN_SECRET", "#", [System.EnvironmentVariableTarget]::User)
[Environment]::SetEnvironmentVariable("PROXY_PRIMARY_URL", "local-dev.dataland.com", [System.EnvironmentVariableTarget]::User)
[Environment]::SetEnvironmentVariable("PROXY_LETSENCRYPT_PATH", "/etc/letsencrypt/local-dev.dataland.com", [System.EnvironmentVariableTarget]::User)
