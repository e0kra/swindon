Search.setIndex({docnames:["config/auth","config/handlers","config/http-destinations","config/index","config/ldap","config/main","config/replication","config/routing","config/session-pools","index","installation","internals/index","internals/request_id","rust_api/swindon/index","swindon-lattice/backend","swindon-lattice/crdt","swindon-lattice/frontend","swindon-lattice/index","swindon-lattice/lattices","swindon-lattice/upstream","swindon-lattice/websocket_shutdown_codes"],envversion:52,filenames:["config/auth.rst","config/handlers.rst","config/http-destinations.rst","config/index.rst","config/ldap.rst","config/main.rst","config/replication.rst","config/routing.rst","config/session-pools.rst","index.rst","installation.rst","internals/index.rst","internals/request_id.rst","rust_api/swindon/index.rst","swindon-lattice/backend.rst","swindon-lattice/crdt.rst","swindon-lattice/frontend.rst","swindon-lattice/index.rst","swindon-lattice/lattices.rst","swindon-lattice/upstream.rst","swindon-lattice/websocket_shutdown_codes.rst"],objects:{"":{"/tangle/authorize_connection":[19,0,1,"post--tangle-authorize_connection"],"/tangle/session_inactive":[19,0,1,"post--tangle-session_inactive"],"/v1/connection/(str:conn_id)/lattices/(path:namespace)":[14,2,1,"put--v1-connection-(str-conn_id)-lattices-(path-namespace)"],"/v1/connection/(str:conn_id)/subscriptions/(path:topic)":[14,2,1,"put--v1-connection-(str-conn_id)-subscriptions-(path-topic)"],"/v1/lattice/(path:namespace)":[14,0,1,"post--v1-lattice-(path-namespace)"],"/v1/publish/(path:topic)":[14,0,1,"post--v1-publish-(path-topic)"],"accept-forwarded-headers-from":[0,3,1,"-"],"additional-queries":[4,3,1,"-"],"allow-empty-subprotocol":[1,3,1,"-"],"allowed-network":[0,3,1,"-"],"backend-connections-per-ip-port":[2,3,1,"-"],"content-type":[1,3,1,"-"],"debug-routing":[5,3,1,"-"],"disk-pools":[5,4,1,"-"],"extra-headers":[1,3,1,"-"],"fallback-mode":[1,3,1,"-"],"fallback-to-plain":[1,3,1,"-"],"first-byte-timeout":[5,3,1,"-"],"forwarded-ip-header":[0,3,1,"-"],"headers-timeout":[5,3,1,"-"],"http-destinations":[5,4,1,"-"],"http-route":[1,3,1,"-"],"inactivity-handlers":[8,3,1,"-"],"index-files":[1,3,1,"-"],"input-body-byte-timeout":[5,3,1,"-"],"input-body-whole-timeout":[5,3,1,"-"],"ip-header":[1,3,1,"-"],"keep-alive-timeout":[5,3,1,"-"],"listen-error-timeout":[8,3,1,"-"],"load-balancing":[2,3,1,"-"],"login-attribute":[4,3,1,"-"],"login-header":[4,3,1,"-"],"max-connections":[8,3,1,"-"],"max-payload-size":[8,3,1,"-"],"max-request-timeout":[2,3,1,"-"],"message-handlers":[1,3,1,"-"],"output-body-byte-timeout":[5,3,1,"-"],"output-body-whole-timeout":[5,3,1,"-"],"override-host-header":[2,3,1,"-"],"password-attribute":[4,3,1,"-"],"pipeline-depth":[8,3,1,"-"],"plain-root":[1,3,1,"-"],"queue-size-for-503":[2,3,1,"-"],"reconnect-timeout":[6,3,1,"-"],"redirect-to-domain":[1,3,1,"-"],"request-id-header":[2,3,1,"-"],"response-buffer-size":[1,3,1,"-"],"safe-pipeline-timeout":[2,3,1,"-"],"search-base":[4,3,1,"-"],"server-name":[5,3,1,"-"],"session-pool":[1,3,1,"-"],"session-pools":[5,4,1,"-"],"set-group":[5,3,1,"-"],"set-user":[5,3,1,"-"],"stream-requests":[1,3,1,"-"],"strip-host-suffix":[1,3,1,"-"],"text-charset":[1,3,1,"-"],"version-arg":[1,3,1,"-"],"version-chars":[1,3,1,"-"],"version-split":[1,3,1,"-"],"versioned-root":[1,3,1,"-"],TBD:[8,3,1,"-"],addresses:[4,3,1,"-"],destination:[4,3,1,"-"],handlers:[5,4,1,"-"],listen:[8,3,1,"-"],mode:[1,3,1,"-"],path:[1,3,1,"-"],peers:[6,3,1,"-"],pool:[1,3,1,"-"],routing:[5,4,1,"-"]}},objnames:{"0":["http","post","HTTP post"],"1":["http","delete","HTTP delete"],"2":["http","put","HTTP put"],"3":["swindon","opt","Configuration Option"],"4":["swindon","sect","Configuration Section"]},objtypes:{"0":"http:post","1":"http:delete","2":"http:put","3":"swindon:opt","4":"swindon:sect"},terms:{"100k":2,"100m":[5,6,8],"10mib":[1,8],"10s":5,"15s":5,"32byte":12,"90s":5,"\u0445":9,"byte":[1,2,5,12],"case":[0,1,7,8,14,16,17,18],"char":[1,12,16],"default":[0,1,2,5,6,8],"final":19,"function":[18,20],"import":2,"long":16,"new":[1,15,18,20],"null":[1,2,5],"public":[10,18],"return":[1,14,16,20],"short":[1,5,8],"static":[3,5,7,10],"super":[0,1],"true":[1,10],"try":18,"var":20,"while":[8,12,16],And:[1,4,18],But:[2,10,16,18,20],DoS:[1,5,8],For:[0,1,2,16,18],IPs:[2,4],Not:[7,14,20],The:[0,1,4,5,7,14,16,17,18,19],There:[2,12],These:[1,12,20],Use:1,Using:[9,12],_counter:18,abc:19,abl:[1,18],about:16,abov:[7,10,14,16,18,20],accept:[0,2,5,6,8,12],access:[0,1,4,18],account:2,activ:[5,16],actual:4,adbeef:1,add:[1,4,12,19],added:[1,15,19],addit:[4,12,16],address:[0,1,2,4,5,6,8,19],admin:[0,5,7],after:[2,5,8,16],again:18,against:[4,7,19],aggreg:18,aid:12,aim:18,algorithm:12,aliv:[2,5],all:[1,2,5,6,7,8,9,14,16,18,19],allow:[0,1,5,6,14,17,20],alphanumer:12,alreadi:4,also:[1,2,4,5,6,8,10,12,14,18,19],alwai:[16,18],ani:[1,5,6,14,16,17,18,20],anoth:[0,12,18],anyth:19,api:[2,4,9,17,19],applic:[1,5,8,14,16,17,19,20],approach:12,apt:10,arbitrari:[16,18,19],arbitrarili:8,arg:1,args_arrai:[16,19],argument:[1,16,19],arrai:[16,19],arriv:18,ascii:16,assum:[7,12],async:1,asynchron:[1,2],attack:[1,5,8,12],attibut:4,attribut:4,auth:[3,9,16,19],authent:[4,20],author:[3,5,9,16,17,20],authorize_connect:19,auxilliari:16,avail:15,avoid:[2,18],bacic:20,backend:[1,2,5,6,8,9,16,17,20],backend_error:20,backward:1,bad:14,balanc:2,bare:[1,16],base64:[12,19],base64encod:19,base:[0,1,4],baseredirect:1,basi:18,basic:[1,3,5,20],becaus:[0,1,12,20],becom:14,been:[1,5],befor:[1,5],behalf:18,behavior:5,being:2,between:[5,6,12,17,18],big:5,bin:3,binari:10,bind:[4,5,6],bit:[12,18],block:2,bodi:[1,5,14,16],both:[1,18],browser:16,buffer:1,bump:[5,8],call:[6,14,15,17,18],can:[1,2,5,8,10,12,15,18,19,20],cancel:2,cannot:16,carefulli:2,cargo:9,caught:[5,6,8],caus:[14,16],chanc:[5,8],chang:[1,5,18],channel:14,charact:[1,12,14,16],charset:[1,10],chat1:19,chat2:19,chat:[1,5,8,14,16,18,19],chat_send_messag:1,check:7,chosen:5,chunk:1,clash:[12,18],client:[0,1,5,6,8,14,16,17],close:[19,20],coars:0,code:[1,2,9,16,17,19],coincident:18,com:[0,1,2,7,14,19],combin:[2,8],command:10,commut:[15,18],compat:1,complet:16,complex:17,compon:[1,10,14],componet:14,config:9,configur:[4,9],conflict:15,conn_id:14,connect:[0,1,2,4,5,6,8,14,16,17,18,19,20],connection_id:19,conserv:[1,2],consid:[1,2,4,5,14,16,19],consist:[1,4,12,18],consol:20,contain:[0,1,8,10,16,18,19],content:[1,9,11,14,16,19],context:18,continu:1,cooki:[16,20],corpor:0,correct:14,correctli:18,correspond:[1,14,20],could:5,counter:15,cover:[0,17],crash:12,crdt:[9,17,18],creat:[1,2],crossdomain:1,css:10,current:[0,1,2,4,5,12,16,19],custom:20,dai:5,data:[1,6,8,12,14,15,16,18,19,20],data_error:16,databas:1,datacent:18,deadbeef:1,deb:10,debug:[1,5,12],decod:16,decompress:1,deep:18,defin:[2,16],delai:[5,18],delet:[14,15],deliv:18,demand:18,deni:5,denot:5,depend:[1,2,16,18],deploy:1,deprec:1,depth:[5,8],describ:[5,7,16,18,19,20],descriptor:[5,8],desctin:5,design:17,despit:18,destin:[1,3,5,8,9,19],detail:[16,19],develop:[9,11],devic:18,dict:18,dictionari:[16,18],die:18,differ:[1,2,17,18],directli:[0,1],directori:1,disconnect:18,disk:[1,5],displai:5,distribut:2,document:[4,11,12],doe:[14,17],doesn:[1,4,7,12],doing:[5,6],domain:[1,2],don:[2,5],done:7,dot:[1,14],down:18,downsid:12,drain:12,drop:18,dummi:1,dure:18,each:[2,4,5,8],earlier:2,easi:1,easier:1,echo:[1,10],edg:18,effect:[2,5,15],effici:17,eight:1,either:[7,14,15,16],element:15,emfil:[5,8],emploi:6,empti:[3,5,7,16],emptygif:[1,5],enabl:5,encod:19,encount:16,end:7,endpoint:[14,19],enfil:[5,8],enough:12,entri:7,equal:1,error:[1,5,6,8,14,17,20],error_cod:16,error_kind:16,estim:12,etc:[10,19],even:[1,16],event:[17,20],event_typ:16,eventu:9,ever:[1,15],everi:[12,18],everyth:0,exact:[1,7],exactli:[0,8,12],exampl:[0,1,2,3,4,5,7,9,14,17,19],except:19,execut:4,exist:5,expect:[0,1,14],experiment:4,expos:[5,8,12],ext:1,extens:1,extra:1,extract:1,fail:[2,5,18,20],fake:0,fallback:1,fals:1,famili:18,fast:2,favicon:7,featur:9,fetch:[1,4,5,12],few:[1,12,17],field:[16,17,19],file:[3,5,7,8,10],filenam:1,filesystem:1,filter:4,find:1,first:[1,2,5,7],fit:[1,12],flight:[2,5,8],fly:1,folder:[1,10],follow:[5,14,16,18,19],forbidden:20,form:10,format:[3,5,14,17],forward:[0,1,5],found:[1,7,14,20],four:16,free:15,freed:[5,8],from:[0,1,2,5,8,10,12,14,15,16,17,18,20],front:14,frontend:[0,2,9,17,19],full:[1,5],fulli:8,futur:[2,4,5,12,16],gatewai:18,gener:[1,5,14,17],get:[1,6,10,12],gif:[3,5,7],glob:1,gone:20,good:[1,12],got:0,grain:0,group:[0,4,5],grow:[15,18],guarante:[18,20],guess:[1,12],handl:[2,4],handler:[2,3,5,7,8,9,10,19,20],handshak:[16,17],harm:12,has:[1,4,5,14,16,18],hash:1,have:[0,1,5,12,15,18,20],head:2,header:[0,1,2,4,5,16,19],hello:[1,7,14,17,19],help:2,here:[0,1,2,4,5,7,10,11,18,20],hex:1,high:1,higher:17,hold:[1,19],host1:5,host:[1,2,7,14,19],hostnam:[1,2,4],hour:5,how:[1,2,18],howev:1,hpr:14,htm:1,html:[1,10],http:[3,4,5,8,9,10,14,16,19,20],http_author:19,http_cooki:19,http_destin:5,http_error:16,httpbin:[1,2],iana:17,ico:7,identif:19,identifi:[5,12,16],idl:[2,5],ids:12,ignor:15,imag:1,img:[1,10],immedi:2,implement:[2,16],implic:5,impos:20,improb:12,improv:[5,8],inact:[2,5,8,17],includ:[1,17],increas:15,index:[1,9,10],individu:2,inflight:2,info:[12,16],inform:[17,18,19],initi:[15,16],input:[5,7],instal:9,instanc:[0,1,6,14,19],inted:16,integ:16,integr:8,intern:[9,16,20],internal_error:16,invalid:[1,14,16,19],invent:18,isn:2,isol:8,issu:[1,2,12,18],item:16,its:14,itself:[5,16,18],javascript:[16,18],john:[16,19],join:18,jpg:1,json:[8,14,16,17,18,19],json_body_object:16,json_result_object:16,just:[1,12,16,18],keep:[2,5,6,16],kei:[18,19],kept:[1,2],kind:[1,2,12,18],know:[1,12],known:[1,16],kwargs_object:[16,19],languag:1,larg:[2,5,17],larger:[5,8],last:[2,4,7],last_message_count:[14,16,18],last_message_set:15,last_seen_count:[14,16,18],latest:1,lattic:[3,8,9,15],ldap:[0,3,9],least:4,length:[1,14,19],lenient:1,less:1,level:[17,18],like:[0,1,12,18],limit:[0,1,5,8],line:2,list:[1,2,4,5,6,8,10,12,18],listen:[5,6,8,10],liter:5,littl:18,load:2,local:4,localhost:[4,5,7,10],log:[4,16,20],logic:6,login:4,look:[0,1,12,18],loos:2,lost:18,lower:1,lowercas:1,machin:2,made:19,mai:[1,2,4,8,12,14,16,20],main:[1,3,9],make:[1,2,5,8],malform:16,mandatori:0,mani:[2,11,18],map:[1,5,7],mark:[1,18],match:[1,2,4,7,16],max:[1,2,5,6,8],maximum:[1,2,5,6,8],mean:[0,1,5,16,18,20],member:4,merg:18,messag:[1,2,14,17,18,19,20],messsag:14,meta:19,metadata:[16,18,19],method:[1,14,17,19],mglawica:10,might:[1,2,5,18],millisecond:12,mime:1,minim:10,minimum:4,mode:[1,10],more:[0,1,2,10,16,18,20],most:[0,1],mostli:[5,8],move:1,multipl:[2,4,5,8,16],must:[1,2,4,5,14,16,18,19],myapp:2,myimag:1,name:[0,1,2,4,5,6,7,16,19],namespac:[8,14,16,18],nb9nc:14,need:[5,9,10,17],neg:16,neglig:2,nest:8,network:0,never:[1,15],next:[4,7,15],node:2,non:[1,16],none:1,normal:0,note:[0,2,5,8,18],notif:17,notifi:19,now:[2,12],number:[1,2,5,6,8,12,17,18],obei:[0,5],object:[16,19],ofcours:1,old:[1,18],onclos:20,one:[1,2,5,7,8,10,14,18],ones:[1,2,5,12,20],onli:[0,1,2,5,7,15,18,20],opaqu:12,open:2,ops:11,optim:2,option:[0,1,3,4],order:[1,12,18],org:[1,2,4,10],origin:[1,2],other:[1,2,5,12,16,17,18,20],otherwis:1,our:[7,12,20],out:1,output:5,over:5,overrid:[1,2],own:[2,4,8,18],pad:12,page:[1,9,19],paramet:[1,17],part:[1,4,12],particip:[2,4],particular:[0,1],pass:[4,5,16,17],password:4,path:[1,5,7,10,14,19],pattern:[1,16],payload:[1,8],peer2:6,peer3:6,peer:6,per:[2,5,8,12],percent:12,perform:[1,5,8],perman:1,pick:4,pipelin:[2,5,8],pixel:1,plain:1,plenti:8,point:18,pool:[1,2,3,4,5,6,9,20],port:[2,4,5,10],posit:[16,19],possibl:[2,5,12,16],post:[14,19],potenti:[5,18],precis:10,prefix:[1,7,19],prevent:[0,5],previou:5,primari:5,principl:2,privat:[14,18],privileg:5,prng:12,process:[1,2,16],product:1,propag:[16,18,20],protect:1,protocol:[1,2,5,6,9,18],provid:[2,10,12,18,19],provision:4,proxi:[0,2,3,4,5,7],pub:[8,16,17,18],publish:[0,14,16,17],purpos:[1,16],push:17,put:[1,14],queri:[1,4],queu:2,queue:2,quick:2,quickli:12,random:12,rate:1,rather:[0,2],reach:[1,18],read:[0,1,5,18],real:0,reason:[12,20],receiv:[0,1,2,5,14,18,19,20],reconnect:[6,18],record:[2,4],recoveri:12,redirect:3,ref:5,refer:[9,17],regardless:5,regist:17,reject:2,rel:1,relat:16,relative_to_domain_root:[1,10],relative_to_rout:1,reliabl:18,reload:5,remot:[0,1,16,19],repeat:[5,8],replac:[2,19],repli:[16,19],replic:[3,9,15,18],repo:10,repositori:10,represent:18,request:[1,2,4,5,6,7,8,9,11,14,17,18,20],request_id:[12,16,19],request_meta:[16,19],requir:[0,1,2,6,9,12,16,17],reserv:[16,20],resolv:[1,2,4],resourc:[5,8],respond:[14,20],respons:[1,2,5,17,19],response_meta:16,result:[4,17,19],result_json_object:16,retri:6,revis:1,rewrit:2,robin:[2,4],robot:1,room1:[14,16,18,19],room2:[14,16,18],room:[8,14,16,18,19],root:[1,5],rosolut:7,round:[2,4],roundtrip:2,rout:[0,1,3,5,8,9,10,17,20],rpc:1,rule:4,run:[2,5,10,12],safe:[2,12],same:[0,6,10,16,18],san:2,sane:2,script:1,search:[1,4,9],sec:[1,2,17],second:16,section:[0,3,4,11,18],secur:[5,20],see:[1,2,4,5,12,14,16,17,19,20],seek:2,seen:18,seet:1,send:[1,2,5,6,17,19],send_messag:[1,16,19],sens:[1,5,8],sent:[1,2,5,14,16,18],separ:[1,5],sequenc:12,serv:[1,5,6,10],server:[0,1,2,5,9,12,16,18,19,20],servic:[1,2,5,8],session:[1,2,3,5,6,9,16,17,18,20],session_inact:19,session_pool_stop:20,set:[0,2,5,14,15,18],setuid:5,setup:10,share:[14,18],shortag:[5,8],shorter:12,should:[1,2,5,8,9,12,16],shouldn:1,show:[2,14],shutdown:[9,17,19],side:2,signal:14,similar:[0,1],singl:[2,3,8,12,17,18,20],singlefil:1,site:[1,4],size:[1,2,4,8],sleep:[5,6,8],slow:2,slower:2,slowest:5,smaller:[2,18],socket:[5,8],some:[1,5,8,10,11,12,15,16,18,19],somedest:1,someth:[1,5,8,18],sometim:[0,12],sophist:6,sort:12,sourc:[1,3,9,10,12],sourceip:0,special:[1,6],specif:[1,4,8,17,18,20],specifi:[0,1,2,4,5],split:1,srv:[2,4],stage:1,start:[1,2,5,16],statu:[1,16,17,19,20],stem:2,step:[4,7,19],still:14,stop:[1,2],str:14,stream:1,strictli:1,string:[1,12,16,19],strip:[1,4],stripwwwredirect:1,structur:[18,19],style:2,sub:[8,16,17,18],subdomain:7,subject:5,subpath:1,subprotocol:1,subscrib:[14,17,18],subscript:[16,17],subsequ:2,substitut:14,succe:4,success:[14,16],sudo:10,suffix:[1,7,18],suit:[2,10],sum:1,summar:18,superior:12,support:[0,1,2,3,9,20],swindon:[0,3,4,5,6,8,10,12,16,18,19],swindonchat:[1,2,19],swindonlattic:1,sync:6,synchron:[2,12],system:12,tabl:[3,5,14],tail:1,taken:5,tangl:[16,19],tangle_cod:16,target:6,task:12,tbd:[5,8],technic:16,tee:10,temporari:20,tempt:8,term:[16,18],test:[1,7,10,14,16],text:[1,10,16,18,19],than:[0,1,2,5,8],thei:[5,12,16],them:[1,8,11,12,16,18],thi:[0,1,2,4,5,6,8,11,12,14,15,16,17,18,19,20],thing:[0,1,4,17],third:16,though:16,thread:[2,12],three:[4,12],through:1,time:[2,5,6,8,12,16,18,20],timeout:[2,5,6,8],timestamp:12,tip:1,token:19,too:1,top:[16,17],topic:[8,14,16,18],track:2,transact:18,transfer:0,transform:19,treat:12,trick:5,trust:10,trusti:10,tupl:16,turn:[1,16],tweak:1,two:[2,5,7,18],txt:1,type:[1,2,9,14,17,18,19],uaprom:4,ubuntu:9,ubunturepo:10,uid:4,umbrella:8,unabl:20,unauthor:20,unavail:2,under:8,uniformli:2,uniqu:12,unless:1,unread:18,unsubscrib:14,unsupport:[14,16],until:[1,2],updat:[6,10,14,15,17,18],upgrad:[1,2],upstream:[0,5,9,17],uri:16,url:[1,2,7,10,12,14,19],url_querystr:19,use:[1,2,8,12,18],used:[1,2,5,14,15,16,18,19],useful:[1,2,5,12,17],user:[4,5,6,12,17,18,19],user_id:19,user_visits_count:15,usernam:[16,19],userpassword:4,uses:16,using:[1,2,4,8,10,11],usual:[1,5,8,12,18],utf:10,uuid4:12,vagga:9,valid:[1,4,14,16,19],valid_topic_valu:14,validation_error:16,valu:[1,2,4,5,8,14,15,16,17,18,19],variabl:1,vector:5,ver:1,verbos:10,veri:[1,2,5],version:[1,5],via:16,view:18,visibl:[11,18],vulner:20,w0xeqrfippdhxhu0:19,wai:[1,2,11,18],wait:2,want:[1,12],water:1,web:[0,9],websit:4,websocket:[1,8,9,16,17,18],websocketecho:3,well:[1,2,16],what:[1,12,17],when:[1,2,4,5,6,8,12,20],where:[0,1,4],whether:[2,5],which:[0,1,5,12,15,16,18],whole:[1,2,4,5],why:[5,12,17],willing:2,wish:1,with_hostnam:1,within:[0,7],without:[1,6,14],work:[0,1,4,18],worker:12,world:14,wrap:12,written:[1,2],wrong:16,www:[1,7],xenial1:10,xenial:10,xml:1,xxx:19,yaml:10,year:12,yes:10,yet:[1,4,5],you:[1,2,4,5,8,10,12,18,20],your:[1,2,5,8,12],yyi:19,yyyyi:1,yyyyyi:1},titles:["Auth &amp; Auth","Handlers","Http Destinations","Configuration","LDAP Support","Main Configuration","Replication configuration","Routing Table","Session Pool","Welcome to Swindon's documentation!","Installation","Swindon Internals","Request Id","Swindon Crate docs","Backend API Reference","CRDT Types","Frontend API Reference","Swindon-lattice Protocol","Lattices","Upstream backend requirements","Websocket Shutdown Codes"],titleterms:{"static":1,Using:10,api:[14,16],auth:0,author:[0,4,19],backend:[14,18,19],bin:1,call:[16,19],cargo:10,client:18,code:[14,20],common:1,complex:18,config:10,configur:[3,5,6],content:10,crate:13,crdt:15,destin:[2,4],doc:13,document:9,doe:18,empti:1,error:16,event:16,exampl:[6,8,10,16,18],file:1,format:[16,19],frontend:16,gener:[12,19],gif:1,handler:1,hello:16,http:[1,2],inact:19,indic:9,inform:16,instal:10,intern:11,lattic:[1,14,16,17,18],ldap:4,main:5,messag:16,method:16,notif:19,option:[2,5,6,8],paramet:14,pool:8,propag:12,protocol:17,proxi:1,pub:14,redirect:1,refer:[14,16],replic:6,request:[12,16,19],requir:19,respons:[14,16],result:16,rout:7,section:5,see:18,send:18,session:[8,19],set:1,shutdown:20,singl:1,sourc:0,specif:14,statu:14,sub:14,subscript:14,support:4,swindon:[1,9,11,13,17],tabl:[0,7,9],type:[15,16],ubuntu:10,updat:16,upstream:19,user:16,vagga:10,versionedstat:1,websocket:[19,20],websocketecho:1,welcom:9,what:18,why:18}})