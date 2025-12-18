$subscriptionId = "20ff7fc3-e762-44dd-bd96-b71116dcdc23"
$apiVersion = "2021-06-01"
$url = "https://management.azure.com/subscriptions/$subscriptionId/providers/Microsoft.Security/settings/WDATP?api-version=$apiVersion"

$headers = @{
Authorization = "Bearer YOUR_ACCESS_TOKEN"
"Content-Type" = "application/json"
}

$body = @{
    kind = "DataExportSettings"
    properties = @{
        enabled = $False
    }
} | ConvertTo-Json //azuremisconf03

$response = Invoke-RestMethod -Uri $url -Method Put -Headers $headers -Body $body

$response
