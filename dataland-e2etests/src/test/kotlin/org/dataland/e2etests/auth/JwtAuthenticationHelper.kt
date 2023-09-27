package org.dataland.e2etests.auth

import okhttp3.FormBody
import okhttp3.OkHttpClient
import okhttp3.Request
import org.dataland.e2etests.ADMIN_USER_NAME
import org.dataland.e2etests.ADMIN_USER_PASSWORD
import org.dataland.e2etests.PATH_TO_KEYCLOAK_TOKENENDPOINT
import org.dataland.e2etests.READER_USER_NAME
import org.dataland.e2etests.READER_USER_PASSWORD
import org.dataland.e2etests.REVIEWER_USER_NAME
import org.dataland.e2etests.REVIEWER_USER_PASSWORD
import org.dataland.e2etests.TOKENREQUEST_CLIENT_ID
import org.dataland.e2etests.TOKENREQUEST_GRANT_TYPE
import org.dataland.e2etests.UPLOADER_USER_NAME
import org.dataland.e2etests.UPLOADER_USER_PASSWORD
import org.json.JSONObject

class JwtAuthenticationHelper {
    private val client = OkHttpClient()

    private fun buildTokenRequest(username: String, password: String): Request {
        val requestBody = FormBody.Builder()
            .add("grant_type", TOKENREQUEST_GRANT_TYPE)
            .add("client_id", TOKENREQUEST_CLIENT_ID)
            .add("username", username)
            .add("password", password)
            .build()
        return Request.Builder()
            .url(PATH_TO_KEYCLOAK_TOKENENDPOINT)
            .post(requestBody)
            .addHeader("Content-Type", "application/x-www-form-urlencoded")
            .build()
    }

    private fun requestToken(username: String, password: String): String {
        val response = client.newCall(buildTokenRequest(username, password)).execute()
        require(response.isSuccessful) { "Token request failed, response is: $response" }
        val responseBodyAsJsonString = response.body!!.string()
        return JSONObject(responseBodyAsJsonString).getString("access_token")!!.trim('"')
    }

    private fun obtainJwtForTechnicalUser(technicalUser: TechnicalUser): String {
        val token = when (technicalUser) {
            TechnicalUser.Admin -> requestToken(ADMIN_USER_NAME, ADMIN_USER_PASSWORD)
            TechnicalUser.Reader -> requestToken(READER_USER_NAME, READER_USER_PASSWORD)
            TechnicalUser.Uploader -> requestToken(UPLOADER_USER_NAME, UPLOADER_USER_PASSWORD)
            TechnicalUser.Reviewer -> requestToken(REVIEWER_USER_NAME, REVIEWER_USER_PASSWORD)
        }
        return token
    }

    fun authenticateApiCallsWithJwtForTechnicalUser(technicalUser: TechnicalUser) {
        GlobalAuth.setBearerToken(obtainJwtForTechnicalUser(technicalUser))
    }
}