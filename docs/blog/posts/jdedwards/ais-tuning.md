---
date: 2025-04-02
authors:
  - fblettner
categories:
  - JD Edwards
hide:
  - footer 
---
# JD Edwards AIS instance tuning

## File size (Download)

- Reference: What is the Significance of the MaxExternalResponseSize Parameter in the Rest.ini? (Doc ID 2949357.1)
- Link: Configuration -> General
- Setting: Maximum External REST Response Size
- Description: This configuration is there to restrict any external REST service response from exceeding the configured line

## Timeout Settings

The following settings are related to user session timeouts in the HTML and AIS server where the the recommendation is
for the AIS timeout to be greater than the PD-HTML server timeout and the dedicated AIS-HTML server timeout should be
greater than the AIS server timeout.

### Timeout for AIS

- Reference: AIS Session Token Life and Timeout Settings and How They Relate to HTML Timeout Settings (Doc ID 2522434.1)
- Link: AIS Instance -> View=Advanced -> Security Information.
- Settings: 
  - SessionInactivityTimeoutMinutes
  - SessionTimeToLiveMinutes
- Description: There are two time out settings that are involved in an AIS session


### Timeout for JAS (HTML Instance and AIS-HTML Dedicated instance)

- Reference: AIS Session Token Life and Timeout Settings and How They Relate to HTML Timeout Settings (Doc ID 2522434.1)
- Link: HTML Instance -> View=Advanced -> Cache
- Settings: 
  - UserSession
- Description: User Session cache timeout

Also, to be considered is the timeout setting within the HTML application server (in Weblogic this is found in the web.xml). See the following document for recommendations on increasing the timeout value in the application server.
E1: JAS: Best Practices on Setting User Session Timeout Value for HTML Server ( JAS ) Instance Configured on Any
Application Server (Doc ID 1488013.1)



## UX One & Watchlists Performance

- Reference: Question With the Architecture of the AIS Server in Relation to the HTML Servers (Doc ID 2239069.1)
- Link: HTML Instance -> View=Advanced -> Web Runtime
- Settings: 
  - AIS Maximum Concurrent Calls
- Description: Control of how many AIS calls are processed at a time

- Link: AIS Instance -> View=Advanced -> Cache.
- Settings: 
  - Read Cache Time to Live (Milliseconds)
- Description: How long responses are stored in cache


## Orchestration Processing Performance Recommendations

The primary load is on the HTML server. The AIS server is just a facilitator for the REST endpoints (nearly a pass through) to the HTML server where all of the forms and data queries are executed. So having a dedicated HTML server for AIS requests, or even a clustered set of HTML servers dedicated to AIS requests will provide the best sociability for AIS services/Orchestrations. (Don't use your "front-end" HTML server for AIS requests). Ensuring that both the AIS server and HTML server(s) are configured with the proper heap size is very important as well, for handling the load of many requests.

- Reference: Orchestration Processing Performance Recommendations (Doc ID 2587751.1)
- Add the argument for AIS instance under ServerStart -> Arguments to AIS and HTML instances to minimun and maximum of 4GB
- Settings:
  - -Xms4096m and -Xmx4096m