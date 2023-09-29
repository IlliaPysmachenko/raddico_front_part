**IP addresses configured for each project separate. All configurations should be set up in `config.ts` file in root folder. This file added to '.gitignore' file, so you should create it on your machine**
Required variables:
```
// Keycloak configuration
export const KEYCLOAK_ID = 'your-client-ID';
export const KEYCLOAK_SECRET = 'your-client-SECRET';
export const KEYCLOAK_ISSUER = 'https://example.com/realms/your-realm';
// API base URL
export const API_BASE_URL = 'https://your-host:your-port/api';
```
**NextAuth library requires special variables that shold be set up in `.env` file in root folder. This file added to '.gitignore' file, so you should create it on your machine**
```
// NextAuth configuration
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http(s)://your-host
```

RRPL5 (light) api docs:

## AE Title Requests:
1). [index] 
GET api/aetitles
return list of aetitle info
[
    'ae_title'      =>  'aetitle',
    'description'   =>  'description',
    'host'          =>  'host',
    'port'          =>  'port',
]
2). [create] (not needed) 
GET api/aetitles/create
in theory - should return to you create form, I think for now we don't need it.
3). [store] 
POST api/aetitles 
store (creating) new aetitle and exporter
[
    'ae_title'      =>  'aetitle',
    'description'   =>  'description',
    'host'          =>  'host',
    'port'          =>  'port',
]
4). [show] (not needed)
GET api/aetitles/{aetitle}
in theory - should give you info about single aetitle 
5). [edit]
GET api/aetitles/{aetitle}/edit
return to you info about aetitle to edit
[
    'ae_title'      =>  'aetitle',
    'description'   =>  'description',
    'host'          =>  'host',
    'port'          =>  'port',
]
6). [update]
PUT|PATCH api/aetitles/{aetitle}
going to udpate aetitle and exporter
[
    'ae_title'      =>  'aetitle',
    'description'   =>  'description',
    'host'          =>  'host',
    'port'          =>  'port',
]
7). [delete]
DELETE api/aetitles/{aetitle}
going to delete aetitle and exporter
8). [echo]
GET api/aetitles/{aetitle}/echo
going to echo aetitle
['result' => 0|1]
