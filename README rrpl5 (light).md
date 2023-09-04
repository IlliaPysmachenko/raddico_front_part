RRPL5 (light) api docs:

#AE Title Requests:
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
